import { createSlice } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

export interface IAuthState {
  isLogin: boolean;
  user?: User;
}

const initialState: IAuthState = {
  isLogin: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handleLogin: (
      state,
      action: {
        payload: { user: User };
      }
    ) => {
      state.isLogin = true;
      state.user = action.payload.user;
    },
    handleLogout: (state) => {
      state.isLogin = false;
      state.user = undefined;
    },
  },
});

export const { handleLogin, handleLogout } = authSlice.actions;
export default authSlice.reducer;
