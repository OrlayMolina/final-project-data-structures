import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from "./auth.types";

const initialState: AuthState = {
    isLoggedIn: false,
    userRole: null,
  };
  
  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      login(state, action: PayloadAction<string>) {
        state.isLoggedIn = true;
        state.userRole = action.payload; // Podría ser "admin" o "user" dependiendo del usuario
      },
      logout(state) {
        state.isLoggedIn = false;
        state.userRole = null;
      },
    },
});

export const { login, logout } = authSlice.actions;

export const selectLoggedIn = (state: { auth: AuthState }) => state.auth.isLoggedIn;
export const selectUserRole = (state: { auth: AuthState }) => state.auth.userRole;

export default authSlice.reducer;