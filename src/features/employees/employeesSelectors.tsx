import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { DepartmentSalary } from "@/types/dashboard";

export const selectEmployees = (state: RootState) => state.employees.employees;

export const selectEmployeesCount = (state: RootState) =>
  selectEmployees(state).length;

export const selectAverageSalary = (state: RootState) => {
  const employees = selectEmployees(state);

  const totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);

  return employees.length
    ? Math.round(totalSalary / employees.length) + " $"
    : 0;
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
    ? Math.round((activeEmployees.length / employees.length) * 100) + "%"
    : 0;
};

export const selectSalaryByDepartement = createSelector(
  [selectEmployees],
  (employees): DepartmentSalary[] => {
    const departmentMap: Record<string, number> = {};

    employees.forEach((emp) => {
      if (departmentMap[emp.department]) {
        departmentMap[emp.department] += emp.salary;
      } else {
        departmentMap[emp.department] = emp.salary;
      }
    });

    const result: DepartmentSalary[] = Object.entries(departmentMap).map(
      ([department, salary]) => ({
        department,
        salary,
      }),
    );

    return result;
  },
);
export const activeRateChart = createSelector(
  [selectEmployees],
  (employees) => {
    const activeRateChart: Record<string, number> = {};
    employees.forEach((emp) => {
      if (activeRateChart[emp.status]) {
        activeRateChart[emp.status] += 1;
      } else {
        activeRateChart[emp.status] = 1;
      }
    });
    interface result {
      status: string;
      number: number;
    }
    const result: result[] = Object.entries(activeRateChart).map(
      ([status, number]) => ({
        status,
        number,
        fill: `var(--color-${status})`,
      }),
    );
    return result;
  },
);
interface DepartemntCount {
  department: string;
  count: number;
}
export const headCountByDepartement = createSelector(
  [selectEmployees],
  (employees): DepartemntCount[] => {
    const departmentMap: Record<string, number> = {};

    employees.forEach((emp) => {
      if (departmentMap[emp.department]) {
        departmentMap[emp.department] += 1;
      } else {
        departmentMap[emp.department] = 1;
      }
    });

    const result: DepartemntCount[] = Object.entries(departmentMap).map(
      ([department, count]) => ({
        department,
        count,
      }),
    );

    return result;
  },
);

export const hiringTrend = createSelector(
  [selectEmployees],
  (employees): DepartemntCount[] => {
    const trendMap: Record<string, number> = {};

    employees.forEach((emp) => {
      const date = new Date(emp.joinedDate);
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const key = `${month}-${date.getFullYear()}`;

      trendMap[key] = (trendMap[key] || 0) + 1;
    });

    return Object.entries(trendMap)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([date, count]) => ({
        department: date,
        count,
      }));
  },
);
