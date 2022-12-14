import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/FooterRegister/Footer";

export default function MainLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
