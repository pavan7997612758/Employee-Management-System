import { useState } from "react";
import { Employee } from "../types/Employee";

export const useEmployees = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  const addEmployee = (employee: Employee) => {
    setEmployees([...employees, { ...employee, id: crypto.randomUUID() }]);
  };

  const updateEmployee = (id: string, updatedEmployee: Employee) => {
    setEmployees(employees.map(emp => (emp.id === id ? updatedEmployee : emp)));
  };

  const deleteEmployee = (id: string) => {
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  return { employees, addEmployee, updateEmployee, deleteEmployee };
};
