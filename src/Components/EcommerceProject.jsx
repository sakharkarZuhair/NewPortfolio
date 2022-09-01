import React from "react";
import "../Styles/EcommerceProject.css";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";

const EcommerceProject = () => {
  return (
    <div className="ecommerceBigContainer">
      <div className="ecommerceContainer">
        <div className="ecommerceImage">
          <img src="/ecommerceProject.jpg" alt="" />
        </div>
        <div className="ecommerceDesc">
          <p>Featured Project</p>
          <h4>E-Commerce Website</h4>
          <div className="ecommerceCardDesc">
            <p>
              A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
              and more. Available on Visual Studio Marketplace, Package Control,
              Atom Package Manager, and npm.
            </p>
          </div>
          <div className="ecommerceEmptySpace"></div>
          <h5 className="ecommerceLanguage">
            reactJS redux css nodeJS expressJS mongoDB
          </h5>
          <div className="ecommerceIconContainer">
            <AiOutlineGithub className="ecommerceIcon" />
            <AiOutlineLink className="ecommerceIcon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceProject;
