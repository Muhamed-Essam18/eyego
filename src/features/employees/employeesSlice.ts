"use client";

import { createSlice } from "@reduxjs/toolkit";
import { Employee } from "@/types/employee";
import { EmployeesMockup } from "@/data/employees";

interface EmployeesState {
  employees: Employee[];
}

const initialState: EmployeesState = {
  employees: EmployeesMockup,
};

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {},
});

export default employeesSlice.reducer;
