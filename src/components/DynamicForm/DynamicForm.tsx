import { useState } from "react";
import "./DynamicForm.css";

export type Field = {
  name: string;
  type: string;
  label: string;
  placeholder: string;
};

interface DynamicFormProps {
  fields: Field[];
  submitText: string;
  onSubmit: (data: Record<string, string>) => void;
}

export default function DynamicForm({ fields, submitText, onSubmit }: DynamicFormProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      {fields.map(field => (
        <div key={field.name} className="input-block">
          <label htmlFor={field.name}>{field.label}</label>
          <input
            type={field.type}
            id={field.name}
            name={field.name}
            placeholder={field.placeholder}
            value={formData[field.name] || ""}
            onChange={handleChange}
          />
        </div>
      ))}

      <button type="submit">{submitText}</button>
    </form>
  );
}
