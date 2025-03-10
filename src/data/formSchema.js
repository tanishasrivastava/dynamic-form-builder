export const formSchema = {
    title: "Job Application",
    fields: [
      { label: "Full Name", type: "text", name: "fullName", required: true },
      { label: "Email", type: "email", name: "email", required: true },
      {
        label: "Work Experience",
        type: "section",
        name: "workExperience",
        fields: [
          { label: "Company Name", type: "text", name: "companyName", required: true },
          { label: "Role", type: "text", name: "role", required: true },
          { label: "Years Worked", type: "number", name: "yearsWorked", required: true },
        ],
      },
      { label: "Skills", type: "checkbox", name: "skills", options: ["React", "Node.js", "MongoDB", "AWS"] },
      { label: "Job Type", type: "select", name: "jobType", options: ["Full-time", "Part-time", "Internship"] },
    ],
  };
  