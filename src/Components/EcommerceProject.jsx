import "../Styles/EcommerceProject.css";
import React from "react";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";
import { useInView } from "react-intersection-observer";

const EcommerceProject = () => {
  const { ref: cardImage, inView: cardImageIsVisible } = useInView();
  const { ref: cardDesc, inView: cardDescIsVisible } = useInView();
  return (
    <div className="ecommerceBigContainer">
      <div className="ecommerceContainer">
        <div
          ref={cardImage}
          className={`ecommerceImage ${
            cardImageIsVisible ? "image-animate" : ""
          }`}
        >
          <img src="/ecommerceProject.jpg" alt="" />
        </div>
        <div
          ref={cardDesc}
          className={`ecommerceDesc ${cardDescIsVisible ? "desc-animate" : ""}`}
        >
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
