import React from "react";
import { Employee } from "../types/Employee";

interface Props {
  employees: Employee[];
  onEdit: (employee: Employee) => void;
  onDelete: (id: string) => void;
}

const EmployeeTable: React.FC<Props> = ({ employees, onEdit, onDelete }) => {
  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border p-2">Name</th>
          <th className="border p-2">Department</th>
          <th className="border p-2">Position</th>
          <th className="border p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id} className="hover:bg-gray-50">
            <td className="border p-2">{employee.name}</td>
            <td className="border p-2">{employee.department}</td>
            <td className="border p-2">{employee.position}</td>
            <td className="border p-2">
              <button
                onClick={() => onEdit(employee)}
                className="px-2 py-1 text-white bg-green-500 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(employee.id)}
                className="ml-2 px-2 py-1 text-white bg-red-500 rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
