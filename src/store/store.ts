import { configureStore } from "@reduxjs/toolkit";
import employeesSlice from "@/features/employees/employeesSlice";
import authSlice from "@/features/auth/authSlice";
export const store = configureStore({
  reducer: {
    employees: employeesSlice,
    auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
console.log(typeof store.getState);
console.log(store.getState());
