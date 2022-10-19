import "../Styles/Navbar.css";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [responsiveNav, setResponsiveNav] = useState(false);
  return (
    <div style={{ backgroundColor: "#000" }} className="navContainer">
      <div className="nav">
        <a style={{ textDecoration: "none" }}>
          <div className="navLogo">
            <h2 className="logoNavbar" style={{ color: "#fff" }}>
              Z
            </h2>
          </div>
        </a>
        <div className="navTabLink">
          <ul style={{ gap: "25px" }}>
            <a style={{ textDecoration: "none" }}>
              <Link style={{ textDecoration: "none" }} to="/">
                <li
                  className="about"
                  style={{ color: "#fff", listStyle: "none" }}
                >
                  01.about
                </li>
              </Link>
            </a>
            <a style={{ textDecoration: "none" }}>
              <li className="work" style={{ color: "#fff", listStyle: "none" }}>
                02.work
              </li>
            </a>
            <a style={{ textDecoration: "none" }}>
              <li className="exp" style={{ color: "#fff", listStyle: "none" }}>
                03.experience
              </li>
            </a>
            <a style={{ textDecoration: "none" }}>
              <li
                className="contact"
                style={{ color: "#fff", listStyle: "none" }}
              >
                04.contact
              </li>
            </a>
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
