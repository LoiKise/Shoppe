import React, { useEffect } from "react";
import Routess from "./Routes";
import "./assets/styles/global.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Authorization from "./components/Authorization/Authorization";

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
