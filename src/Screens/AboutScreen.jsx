import React from "react";
import "../Styles/AboutScreen.css";

const AboutScreen = () => {
  return (
    <div className="aboutBigContainer">
      <div className="aboutContainer">
        <p className="aboutSectionTag">{"<section>"}</p>
        <p className="aboutFirstH2Tag">{"<h2>"}</p>
        <div className="aboutMyself">
          <h1>01. Me, Myself and I</h1>
          <div className="aboutLineDiv"></div>
        </div>
        <p className="aboutSecondH2tag">{"</h2>"}</p>
        <p className="aboutFirstPTag">{"<p>"}</p>
        <h3 className="aboutIntro">
          Hello! My name is Brittany and I enjoy creating things that live on
          the internet. My interest in web development started back in 2012 when
          I decided to try editing custom Tumblr themes — turns out hacking
          together a custom reblog button taught me a lot about HTML & CSS!
        </h3>
        <p className="aboutSecondPTag">{"</p>"}</p>
        <h4 className="aboutMark">ABOUT</h4>
        <p className="aboutSecondSectionTag">{"</section>"}</p>
      </div>
    </div>
  );
};

export default AboutScreen;
