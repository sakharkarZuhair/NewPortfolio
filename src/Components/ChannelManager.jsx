import "../Styles/ChannelManager.css";
import React from "react";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";
import { useInView } from "react-intersection-observer";

const ChannelManager = () => {
  const { ref: cardImage, inView: cardImageIsVisible } = useInView();
  const { ref: cardDesc, inView: cardDescIsVisible } = useInView();
  return (
    <div className="channelBigContainer">
      <div className="channelContainer">
        <div
          ref={cardDesc}
          className={`channelDesc ${cardDescIsVisible ? "Cdesc-animate" : ""}`}
        >
          <p>Featured Project</p>
          <h4>Channel Manager</h4>
          <div className="channelCardDesc">
            <p>
              A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
              and more. Available on Visual Studio Marketplace, Package Control,
              Atom Package Manager, and npm.
            </p>
          </div>
          <div className="channelEmptySpace"></div>
          <h5 className="channelLanguage">nextJS css nodeJS expressJS xml</h5>
          <div className="channelIconContainer">
            <a style={{ textDecoration: "none" }}>
              <AiOutlineGithub className="channelIcon" />
            </a>
            <a style={{ textDecoration: "none" }}>
              <AiOutlineLink className="channelIcon" />
            </a>
          </div>
        </div>
        <div
          ref={cardImage}
          className={`channelImage ${
            cardImageIsVisible ? "Cimage-animate" : ""
          }`}
        >
          <img src="/channelManager.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ChannelManager;
