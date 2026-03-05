import { configureStore } from "@reduxjs/toolkit";
import employeesSlice from "@/features/employees/employeesSlice";
export const store = configureStore({
  reducer: {
    employees: employeesSlice,
  },
});
