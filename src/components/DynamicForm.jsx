import React, { useState } from "react";
import styled from "styled-components";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import FormField from "./FormField";

const ItemType = "FIELD";

const DraggableField = ({ field, index, moveField, renderField }) => {
  const [, ref] = useDrag({
    type: ItemType,
    item: { index },
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveField(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div ref={(node) => ref(drop(node))} className="cursor-move">
      {renderField(field)}
    </div>
  );
};

const DynamicForm = ({ schema }) => {
  const [formData, setFormData] = useState({});
  const [fields, setFields] = useState(schema.fields);
  const [validationErrors, setValidationErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (name, value, parentName = null) => {
    setFormData((prev) => {
      if (parentName) {
        return {
          ...prev,
          [parentName]: {
            ...(prev[parentName] || {}),
            [name]: value,
          },
        };
      } else {
        if (Array.isArray(prev[name])) {
          return {
            ...prev,
            [name]: prev[name].includes(value)
              ? prev[name].filter((item) => item !== value)
              : [...prev[name], value],
          };
        }
        return { ...prev, [name]: value };
      }
    });
  };

  const moveField = (fromIndex, toIndex) => {
    const updatedFields = [...fields];
    const [movedField] = updatedFields.splice(fromIndex, 1);
    updatedFields.splice(toIndex, 0, movedField);
    setFields(updatedFields);
  };

  const validateForm = () => {
    const errors = {};
    fields.forEach((field) => {
      if (field.type === "section") {
        field.fields.forEach((subField) => {
          if (subField.required && !formData[field.name]?.[subField.name]) {
            errors[`${field.name}.${subField.name}`] = `${subField.label} is required`;
          }
        });
      } else {
        if (field.required && !formData[field.name]) {
          errors[field.name] = `${field.label} is required`;
        }
      }
    });

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const renderField = (field, parentName = null) => {
    if (field.type === "section") {
      return (
        <div key={field.name} className="section">
          <h3>{field.label}</h3>
          {field.fields.map((subField) => renderField(subField, field.name))}
        </div>
      );
    }

    return (
      <DraggableField
        key={field.name}
        field={field}
        index={fields.indexOf(field)}
        moveField={moveField}
        renderField={() => (
          <FormField
            field={field}
            value={parentName ? formData[parentName]?.[field.name] : formData[field.name] || ""}
            onChange={(name, value) => handleChange(name, value, parentName)}
            error={validationErrors[parentName ? `${parentName}.${field.name}` : field.name]}
          />
        )}
      />
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    console.log("Submitted Data:", formData);
    setSubmittedData(formData);
    setValidationErrors({});
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <StyledWrapper>
        <div className="form-container">
          <form onSubmit={handleSubmit} className="form">
            <p className="title">JOB APPLICATION FORM</p>
            <p className="message">Fill in the details to apply.</p>
            {fields.map((field) => renderField(field))}
            <button type="submit" className="submit">Submit</button>
            {submittedData && (
              <div className="submitted-data">
                <h3>Submitted Data:</h3>
                <pre>{JSON.stringify(submittedData, null, 2)}</pre>
              </div>
            )}
          </form>
        </div>
      </StyledWrapper>
    </DndProvider>
  );
  
};

const StyledWrapper = styled.div`
background-color: #3e0a1b;
 
  .form-container {
 width: 1480px;
    display: flex;
    justify-content: center;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 453px;
    background-color: #fff;
    padding: 20px;
    border-radius: 20px;
    position: relative;
    margin-top: 44px;
    margin-bottom: 100px;
      z-index: 20;
  }
.message {
color: black; 
font-size: 18px;
font-family:inherit;
}
.sc-fLDLck.blAywG {
  background-color: #3e0a1b;
width: 1024px;
}

  .title {
    font-size: 28px;
    color: royalblue;
    font-weight: 600;
    letter-spacing: -1px;
    display: flex;
    align-items: center;
    padding-left: 30px;
    position: relative;
   margin-bottom: -30px;
  }
  .title::before, .title::after {
    content: "";
    position: absolute;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 0;
    background-color: #010849;
  }
  .title::before {
    width: 18px;
    height: 18px;
    background-color: #dc87d1
  }
  .title::after {
    width: 18px;
    height: 18px;
    animation: pulse 1s linear infinite;
  }
  .submit {
    border: none;
    outline: none;
    background-color: royalblue;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    transition: 0.3s ease;
  }
  .submit:hover {
    background-color: rgb(56, 90, 194);
  }
  @keyframes pulse {
    from {
      transform: scale(0.9);
      opacity: 1;
    }
    to {
      transform: scale(1.8);
      opacity: 0;
    }
  }
`;

export default DynamicForm;
