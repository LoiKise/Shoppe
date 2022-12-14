import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authApi from "../../api/auth.api";
import LocalStorage from "../../constants/localStorage";
import { payloadCreator } from "../../utils/helper";

export const register = createAsyncThunk(
  "auth/register",
  payloadCreator(authApi.register)
);

export const login = createAsyncThunk(
  "auth/login",
  payloadCreator(authApi.login)
);

export const logout = createAsyncThunk(
  "auth/logout",
  payloadCreator(authApi.logout)
);

const handleAuthFulfilled = (state, action) => {
  const { user, access_token } = action.payload.data;

  state.profile = user;
  localStorage.setItem(LocalStorage.user, JSON.stringify(state.profile));
  localStorage.setItem(LocalStorage.accessToken, access_token);
};

const handleUnauth = (state, action) => {
  state.profile = {};
  localStorage.removeItem(LocalStorage.user);
  localStorage.removeItem(LocalStorage.accessToken);
};

const auth = createSlice({
  name: "auth",
  initialState: {
    profile: JSON.parse(localStorage.getItem(LocalStorage.user)) || {},
  },
  reducers: {
    unthorize: handleUnauth,
  },
  extraReducers: {
    [register.fulfilled]: handleAuthFulfilled,
    [login.fulfilled]: handleAuthFulfilled,
    [logout.fulfilled]: handleUnauth,
  },
});

const authReducer = auth.reducer;
export const unauthorize = auth.actions.unthorize;

export default authReducer;
