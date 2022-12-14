import React from "react";
import Footer from "../../components/FooterRegister/Footer";
import Header from "../../components/HeaderRegister/Header";

export default function RegisterLayout({ children, title }) {
  return (
    <div>
      <Header title={title}></Header>
      {children}
      <Footer />
    </div>
  );
}
