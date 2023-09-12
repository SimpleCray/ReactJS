import { createSlice } from '@reduxjs/toolkit';

export type User = {
  id: string;
  username: string;
  email: string;
  phone: string;
};

type AuthState = {
  isAuthenticated: boolean;
  user: User | null;
  userType: string;
};

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  userType: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserType: (state, action) => {
      state.userType = action.payload;
    },
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.userType = action.payload.role;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout, setUserType } = authSlice.actions;

export default authSlice.reducer;
