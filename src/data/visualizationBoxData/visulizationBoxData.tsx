"use client";
import type { visulizationBoxProps } from "@/types/dashboard";
import { FaPerson } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import {
  selectEmployeesCount,
  selectAverageSalary,
  selectDepartmentsCount,
  selectActiveRate,
} from "@/features/employees/employeesSelectors";
const boxesData: visulizationBoxProps[] = [
  {
    title: "Total Employees",
    selector: selectEmployeesCount,
    icon: <FaPerson />,
    iconColor: "primary",
  },
  {
    title: "Average Salary",
    selector: selectAverageSalary,
    icon: <FaDollarSign />,
    iconColor: "green",
  },
  {
    title: "Departments",
    selector: selectDepartmentsCount,
    icon: <FaRegBuilding />,
    iconColor: "pink",
  },
  {
    title: "Active Rate",
    selector: selectActiveRate,
    icon: <FaArrowTrendUp />,
    iconColor: "mentGreen",
  },
];
export default boxesData;
