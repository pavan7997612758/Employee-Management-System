import React, { useState } from "react";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeTable from "../components/EmployeeTable";
import { useEmployees } from "../hooks/useEmployee";
import { Employee } from "../types/Employee";

const Home: React.FC = () => {
  const { employees, addEmployee, updateEmployee, deleteEmployee } = useEmployees();
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);

  const handleFormSubmit = (employee: Employee) => {
    if (editingEmployee) {
      updateEmployee(editingEmployee.id, employee);
      setEditingEmployee(null);
    } else {
      addEmployee(employee);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <h1 className="text-xl font-bold">Employee Management System</h1>
      <EmployeeForm
        onSubmit={handleFormSubmit}
        initialData={editingEmployee || undefined}
      />
      <EmployeeTable
        employees={employees}
        onEdit={(employee) => setEditingEmployee(employee)}
        onDelete={deleteEmployee}
      />
    </div>
  );
};

export default Home;
