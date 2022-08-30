import React from "react";
import "../Styles/HomeScreen.css";

const HomeScreen = () => {
  return (
    <div className="homeBigContainer">
      <div className="homeContainer">
        <p className="homeHtmlTag">{"<html>"}</p>
        <p className="homeBodyTag" style={{ marginLeft: "3vh" }}>
          {"<body>"}
        </p>

        <div className="homeIntroduction">
          <p className="homeSpanTagOne">{"<span>"}</p>
          <div className="homeMyName">
            <h1>Hi, my name is</h1>
            <p>{"<span>"}</p>
          </div>
          <p className="homeH1Tag">{"<h1>"}</p>
          <div className="homeZuhair">
            <h2>Zuhair Sakharkar.</h2>
            <p>{"<br/>"}</p>
          </div>
          <p className="homeSpanTagTwo">{"<span>"}</p>
          <div className="homeBuildThing">
            <h3>I build things for the web.</h3>
            <p>{"<span/>"}</p>
          </div>
          <p className="homeH1TagTwo">{"<h1/>"}</p>

          <span className="homeMark">WEB</span>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
