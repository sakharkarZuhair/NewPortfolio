import "../Styles/SocialMedia.css";
import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div className="mediaContainer">
      <div className="medialinks">
        <div className="mediaIcon">
          <AiOutlineInstagram className="mediaSingleIcon" />
          <AiOutlineFacebook className="mediaSingleIcon" />
          <AiOutlineLinkedin className="mediaSingleIcon" />
          <AiOutlineGithub className="mediaSingleIcon" />
        </div>
        <div className="mediaVerticalLine">{/* <hr /> */}</div>
      </div>
    </div>
  );
};

export default SocialMedia;
