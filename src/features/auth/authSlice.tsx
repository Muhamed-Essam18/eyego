import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  user: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ username: string; password: string }>,
    ) => {
      const { username, password } = action.payload;

      if (username === "admin@demo.com" && password === "password123") {
        state.isAuthenticated = true;
        state.user = username;
        alert("Login successful!");
      } else {
        alert("Invalid credentials! Try admin@demo.com/password123");
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
