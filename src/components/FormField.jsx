const FormField = ({ field, value, onChange, error }) => {
  return (
    <div className="mb-4">
      <label className="block font-medium text-gray-700">{field.label}</label>
      {["text", "email", "number"].includes(field.type) ? (
        <input
          type={field.type}
          name={field.name}
          required={field.required}
          placeholder={field.label}
          value={value || ""}
          onChange={(e) => onChange(field.name, e.target.value)}
          className="border p-3 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ) : field.type === "checkbox" ? (
        <div className="flex gap-3 flex-wrap">
          {field.options.map((option) => (
            <label key={option} className="flex items-center gap-2 text-gray-700">
              <input
                type="checkbox"
                value={option}
                checked={value?.includes(option)}
                onChange={(e) => {
                  const checkedValues = value || [];
                  onChange(
                    field.name,
                    e.target.checked
                      ? [...checkedValues, option]
                      : checkedValues.filter((val) => val !== option)
                  );
                }}
                className="w-4 h-4 accent-blue-500"
              />
              {option}
            </label>
          ))}
        </div>
      ) : field.type === "select" ? (
        <select
          name={field.name}
          value={value || ""}
          onChange={(e) => onChange(field.name, e.target.value)}
          className="border p-3 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="" disabled>
            Select an option
          </option>
          {field.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : null}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default FormField;
