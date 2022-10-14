import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { path } from "./constants/path";
import AuthenticatedGuards from "./guards/AuthenticatedGuards";
import UnauthenticatedGuards from "./guards/UnauthenticatedGuards";
import MainLayout from "./layouts/MainLayout/MainLayout";
import RegisterLayout from "./layouts/RegisterLayout/RegisterLayout";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import Home from "./pages/Home/Home";
import User from "./pages/User/User";

export default function Routess() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={path.register}
          element={
            <UnauthenticatedGuards>
              <RegisterLayout title="Đăng ký">{<Register />}</RegisterLayout>
            </UnauthenticatedGuards>
          }
        />
      </Routes>
      <Routes>
        <Route
          path={path.login}
          element={
            <UnauthenticatedGuards>
              <RegisterLayout title="Đăng nhập">{<Login />}</RegisterLayout>
            </UnauthenticatedGuards>
          }
        />
      </Routes>

      <Routes>
        <Route path={path.home} element={<MainLayout>{<Home />}</MainLayout>} />
      </Routes>
      <Routes>
        <Route
          path={path.user}
          element={
            <AuthenticatedGuards>
              <MainLayout>{<User />}</MainLayout>
            </AuthenticatedGuards>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
