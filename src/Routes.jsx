import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { path } from "./constants/path";
import RegisterLayout from "./layouts/RegisterLayout/RegisterLayout";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";

export default function Routess() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={path.register}
          exact
          element={
            <RegisterLayout title="Đăng ký">{<Register />}</RegisterLayout>
          }
        />
      </Routes>
      <Routes>
        <Route
          path={path.login}
          exact
          element={
            <RegisterLayout title="Đăng nhập">{<Login />}</RegisterLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
