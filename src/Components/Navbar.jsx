import { useState } from "react";
import "../Styles/Navbar.css";
import { TiThMenu } from "react-icons/ti";
const Navbar = () => {
  const [responsiveNav, setResponsiveNav] = useState(false);
  return (
    <div style={{ backgroundColor: "#000" }} className="navContainer">
      <div className="nav">
        <div className="navLogo">
          {/* <img src="/whiteLogoZuhair.png" alt="" /> */}
          <h2 style={{ color: "#fff" }}>Z</h2>
        </div>
        <div className="navTabLink">
          <ul>
            <li style={{ color: "#fff" }}>01.about</li>
            <li style={{ color: "#fff" }}>02.work</li>
            <li style={{ color: "#fff" }}>03.experience</li>
            <li style={{ color: "#fff" }}>04.contact</li>
          </ul>
        </div>
        <div
          onClick={() => setResponsiveNav(!responsiveNav)}
          style={{ color: "#fff" }}
          className="navResponsive"
        >
          <TiThMenu size={20} />
        </div>
      </div>
      {responsiveNav === true ? (
        <div className="resNav">
          <ul className="resNavUn" style={{ listStyle: "none" }}>
            <li className="resList" style={{ color: "#fff" }}>
              01.about
            </li>
            <li style={{ color: "#fff" }}>02.work</li>
            <li style={{ color: "#fff" }}>03.experience</li>
            <li style={{ color: "#fff" }}>04.contact</li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
