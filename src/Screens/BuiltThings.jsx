import React from "react";
import ChannelManager from "../Components/ChannelManager";
import EcommerceProject from "../Components/EcommerceProject";
import "../Styles/BuiltThings.css";

const BuiltThings = () => {
  return (
    <div className="builtBigContainer">
      <div className="builtContainer">
        <div className="builtFirstDiv">{"<div>"}</div>
        <div className="builtProjectsContainer">
          <p className="builtFirstH3Tag">{"<h3>"}</p>
          <div className="builtThings">
            <h2>02. Some Things I've Built</h2>
            <div className="builtLine"></div>
          </div>
          <p className="builtSecondH3Tag">{"<h3>"}</p>
          <EcommerceProject />
          <ChannelManager />
        </div>
        <div className="builtMark">WORK</div>
      </div>
    </div>
  );
};

export default BuiltThings;
