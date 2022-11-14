import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { path } from "../../constants/path";
import { unauthorize } from "../../pages/Auth/auth.slice";
import { useNavigate } from "react-router-dom";
import { useAuthenticated } from "../../hooks/useAuthenticated";
import { getCartPurchases } from "../../pages/Cart/cart.slice";

export default function Authorization() {
  const status = useSelector((state) => state.app.status);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authenticated = useAuthenticated();

  useEffect(() => {
    if (status === 401) {
      dispatch(unauthorize());
      navigate(path.login);
    }
  }, [dispatch, status, navigate]);

  useEffect(() => {
    if (authenticated) {
      dispatch(getCartPurchases());
    }
  }, [dispatch, authenticated]);
  return null;
}
