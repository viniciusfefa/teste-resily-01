import React from "react";
import { Logo } from "../../components/Logo";
import { Navbar } from "../../components/Navbar";
import "./style.css";

export const MacbookAir = () => {
  return (
    <div className="macbook-air">
      <div className="div-2">
        <Logo className="LOGO-instance" />
        <Navbar className="NAVBAR-instance" />
      </div>
    </div>
  );
};
