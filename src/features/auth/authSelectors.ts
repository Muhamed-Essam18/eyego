import { RootState } from "../../store/store";

export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;
