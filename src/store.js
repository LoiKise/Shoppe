import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./app.slice";
import authReducer from "./pages/Auth/auth.slice";
import cartReducer from "./pages/Cart/cart.slice";

const rootReducer = {
  auth: authReducer,
  app: appReducer,
  cart: cartReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
