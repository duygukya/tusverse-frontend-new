import React from "react";
import { useNavigate } from "react-router-dom";
import "./smallheader.css"
import siyahlogo from '../assets/siyah_logo.png'
const Smallheader = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div
      className="smallheader position-absolute"
      onClick={() => handleNavigation("/")}
    >
      <img src={siyahlogo}alt="Logo" className="smallheader-logo" />
    </div>
  );
};

export default Smallheader;
