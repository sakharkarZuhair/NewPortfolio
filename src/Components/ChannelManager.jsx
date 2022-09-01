import React from "react";
import "../Styles/ChannelManager.css";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";

const ChannelManager = () => {
  return (
    <div className="channelBigContainer">
      <div className="channelContainer">
        <div className="channelDesc">
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
            <AiOutlineGithub className="channelIcon" />
            <AiOutlineLink className="channelIcon" />
          </div>
        </div>
        <div className="channelImage">
          <img src="/channelManager.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ChannelManager;
