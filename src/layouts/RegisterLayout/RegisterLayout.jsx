import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

export default function RegisterLayout({ children, title }) {
  return (
    <div>
      <Header title={title}></Header>
      {children}
      <Footer />
    </div>
  );
}
