import { RootState } from "../../store/store";

export const selectEmployees = (state: RootState) => state.employees.employees;

export const selectEmployeesCount = (state: RootState) =>
  selectEmployees(state).length;

export const selectAverageSalary = (state: RootState) => {
  const employees = selectEmployees(state);

  const totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);

  return employees.length ? Math.round(totalSalary / employees.length) : 0;
};

export const selectDepartmentsCount = (state: RootState) => {
  const employees = selectEmployees(state);

  const departments = new Set(employees.map((emp) => emp.department));

  return departments.size;
};

export const selectActiveRate = (state: RootState) => {
  const employees = selectEmployees(state);

  const activeEmployees = employees.filter((emp) => emp.status === "active");

  return employees.length
    ? Math.round((activeEmployees.length / employees.length) * 100)
    : 0;
};
