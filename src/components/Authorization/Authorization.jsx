import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { path } from "../../constants/path";
import { unauthorize } from "../../pages/Auth/auth.slice";
import { useNavigate } from "react-router-dom";

export default function Authorization() {
  const status = useSelector((state) => state.app.status);
  console.log(
    "🚀 ~ file: Authorization.jsx ~ line 9 ~ Authorization ~ status",
    status
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("1212");
    if (status === 401) {
      dispatch(unauthorize());
      navigate(path.login);
    }
  }, [dispatch, status, navigate]);

  return null;
}
