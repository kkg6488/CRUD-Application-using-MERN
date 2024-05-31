import React from "react";
import "./Footer.css";
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <p>Copyright © {currentYear}</p>
    </div>
  );
};
