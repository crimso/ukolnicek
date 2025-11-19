import { useState } from "react";

type FormData = {
  title: string;
  description: string;
};

export const Form = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("odoslano");
  };

  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task-input">Input title:</label>
        <input
          type="text"
          name="title"
          id="task-input"
          value={formData.title}
          onChange={handleChange}
        ></input>
        <label htmlFor="task-text">Input text:</label>
        <textarea
          name="description"
          id="task-text"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Přidat</button>
      </form>
    </div>
  );
};
