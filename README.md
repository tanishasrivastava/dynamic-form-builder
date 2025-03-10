# Dynamic Form Builder
<img width="958" alt="Screenshot 2025-03-11 at 1 37 48 AM" src="https://github.com/user-attachments/assets/5193ae30-7f5c-4008-b189-e9695d1b4aa2" />
<img width="486" alt="Screenshot 2025-03-11 at 1 40 49 AM" src="https://github.com/user-attachments/assets/b7e43896-8e8b-46ab-81fc-c36d829e065d" />


# ABOUT THE PROJECT :
A React-based dynamic form builder that allows users to create and modify forms based on a JSON schema. The form supports various field types, nested sections, validation, and drag-and-drop reordering.

## TABLE OF CONTENTS

- [Tech Stack Used](#Tech-Stack-Used)
- [Key Features ](#Key-Features)


**Tech Stack Used**

<div align="center">
   <img src="https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge">
     <img src="https://img.shields.io/badge/-Tailwind.css-61DAFB?logo=react&logoColor=white&style=for-the-badge">
 <img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=white">
 <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
   </div>


# KEY FEATURES
✔️ Dynamic Form Rendering – Generates forms based on a JSON schema
✔️ Drag-and-Drop Reordering – Rearrange fields easily using React DnD
✔️ Supports Multiple Field Types – Text, Number, Dropdown, Checkbox, Radio, Sections
✔️ Nested Sections Support – Create complex multi-section forms
✔️ Real-Time Form Validation – Required field validation
✔️ State Management – Form state updates dynamically
✔️ JSON-Based Schema – Easily configure form fields using JSON

# Approach & Thought Process
The core approach for this project was to dynamically render form fields based on a JSON schema while enabling drag-and-drop functionality for reordering fields.

Steps Taken:
JSON Schema Parsing: Loop through the schema and render components dynamically.
Drag & Drop (React DnD): Wrapped fields in draggable and droppable containers.
State Management: Used useState to manage form data and handle changes.
Validation Handling: Implemented field-level validation and dynamic error messages.
Nested Sections: Managed hierarchical form structures using recursive components.

# Challenges Faced & Solutions
1️⃣ Drag-and-Drop State Issues
Problem: Reordering fields sometimes caused unexpected behavior.
Solution: Used useDrop and useDrag from React DnD to correctly update indices.

2️⃣ Handling Nested Sections
Problem: Managing deeply nested field structures without hardcoding.
Solution: Used recursion to dynamically render sections and their fields.

3️⃣ Dynamic Validation Errors
Problem: Required fields were not updating errors correctly.
Solution: Implemented a validation function that checks the schema dynamically.


# Clone the repository
git clone https://github.com/tanishasrivastava/dynamic-form-builder.git

# Navigate to project folder
cd dynamic-form-builder

# Install dependencies
npm install

# Start the app
npm run dev

