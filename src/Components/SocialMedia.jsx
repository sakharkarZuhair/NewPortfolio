import "../Styles/SocialMedia.css";
import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import { useInView } from "react-intersection-observer";

const SocialMedia = () => {
  const { ref: iconsRef, inView: iconsIsVisible } = useInView();
  return (
    <div className="mediaContainer">
      <div ref={iconsRef} className={`medialinks`}>
        <div className="mediaIcon">
          <a style={{ textDecoration: "none" }}>
            <AiOutlineInstagram className="mediaSingleIcon" />
          </a>
          <a style={{ textDecoration: "none" }}>
            <AiOutlineFacebook className="mediaSingleIcon" />
          </a>
          <a style={{ textDecoration: "none" }}>
            <AiOutlineLinkedin className="mediaSingleIcon" />
          </a>
          <a style={{ textDecoration: "none" }}>
            <AiOutlineGithub className="mediaSingleIcon" />
          </a>
        </div>
        <div className="mediaVerticalLine">{/* <hr /> */}</div>
      </div>
    </div>
  );
};

export default SocialMedia;
