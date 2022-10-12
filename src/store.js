import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import authReducer from "./pages/Auth/auth.slice";

const rootReducer = {
  auth: authReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
