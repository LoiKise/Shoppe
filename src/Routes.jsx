import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { path } from "./constants/path";
import RegisterLayout from "./layouts/RegisterLayout/RegisterLayout";

export default function Routess() {
  return (
    <Router>
      <Routes>
        <Route
          path={path.register}
          exact
          element={<RegisterLayout title="Đăng ký" />}
        />
      </Routes>
    </Router>
  );
}
