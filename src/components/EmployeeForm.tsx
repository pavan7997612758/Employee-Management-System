import React, { useState } from "react";
import { Employee } from "../types/Employee";

interface Props {
  onSubmit: (employee: Employee) => void;
  initialData?: Employee;
}

const EmployeeForm: React.FC<Props> = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState<Employee>(
    initialData || { id: "", name: "", department: "", position: "" }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ id: "", name: "", department: "", position: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-2 border rounded">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="block w-full p-2 border rounded"
      />
      <select
        name="department"
        value={formData.department}
        onChange={handleChange}
        required
        className="block w-full p-2 border rounded"
      >
        <option value="" disabled>Select Department</option>
        <option value="HR">HR</option>
        <option value="Engineering">Engineering</option>
        <option value="Sales">Sales</option>
      </select>
      <input
        type="text"
        name="position"
        placeholder="Position"
        value={formData.position}
        onChange={handleChange}
        required
        className="block w-full p-2 border rounded"
      />
      <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded">
        {initialData ? "Update" : "Add"} Employee
      </button>
    </form>
  );
};

export default EmployeeForm;
