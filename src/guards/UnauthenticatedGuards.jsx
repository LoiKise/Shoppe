import React, { Fragment } from "react";
import { useAuthenticated } from "../hooks/useAuthenticated";
import { Navigate } from "react-router-dom";
import { path } from "../constants/path";
import PropsTypes from "prop-types";

export default function UnauthenticatedGuards({ children }) {
  const authenticated = useAuthenticated();
  if (authenticated) {
    return <Navigate to={path.home} replace={true} />;
  }
  return <Fragment>{children}</Fragment>;
}
UnauthenticatedGuards.propTypes = {
  children: PropsTypes.oneOfType([
    PropsTypes.element,
    PropsTypes.arrayOf(PropsTypes.element),
  ]),
};
