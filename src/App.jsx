import React, { useEffect } from "react";
import Routess from "./Routes";
import "./assets/styles/global.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Authorization from "./components/Authorization/Authorization";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { unauthorize } from "./pages/Auth/auth.slice";

function App() {
  return (
    <div className="app">
      <Routess />
      <ToastContainer />
      <Authorization />
    </div>
  );
}

export default App;
