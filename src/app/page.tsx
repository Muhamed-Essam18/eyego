"use client";

import { useSelector } from "react-redux";
import { selectEmployeesCount } from "@/features/employees/employeesSelectors";
import { selectAverageSalary } from "@/features/employees/employeesSelectors";
import { selectDepartmentsCount } from "@/features/employees/employeesSelectors";
import { selectActiveRate } from "@/features/employees/employeesSelectors";

export default function Home() {
  const totalEmployees = useSelector(selectEmployeesCount);
  const avgSalary = useSelector(selectAverageSalary);
  const departmentsCount = useSelector(selectDepartmentsCount);
  const activeRate = useSelector(selectActiveRate);

  return (
    <div>
      <h1>Overview</h1>

      <p>Total Employees: {totalEmployees}</p>
      <p>Average Salary: {avgSalary}</p>
      <p>Departments: {departmentsCount}</p>
      <p>Active Rate: {activeRate}%</p>
    </div>
  );
}
