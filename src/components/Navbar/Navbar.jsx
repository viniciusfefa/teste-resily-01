/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Navbar = ({ className }) => {
  return (
    <div className={`NAVBAR ${className}`}>
      <div className="overlap">
        <div className="RESILY-LOG-BTN-NAV">
          <div className="element">
            <div className="overlap-group">
              <img className="group" alt="Group" src="https://c.animaapp.com/IRiC4kkm/img/group-1@2x.png" />
              <div className="text-wrapper">RESILY</div>
            </div>
          </div>
        </div>
        <div className="div">HOME</div>
        <div className="text-wrapper-2">SOBRE NÓS</div>
        <div className="text-wrapper-3">FALE CONOSCO</div>
        <div className="group-2">
          <div className="text-wrapper-4">LOGIN</div>
          <div className="arrow-wrapper">
            <img className="arrow" alt="Arrow" src="https://c.animaapp.com/IRiC4kkm/img/arrow-1-1.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};
