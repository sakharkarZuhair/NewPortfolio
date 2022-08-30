import React from "react";
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navContainer">
      <div className="nav">
        <div className="navLogo">
          {/* <img src="/whiteLogoZuhair.png" alt="" /> */}
          <h2>Z</h2>
        </div>
        <div className="navTabLink">
          <ul>
            <li>01.about</li>
            <li>02.work</li>
            <li>03.experience</li>
            <li>04.contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
