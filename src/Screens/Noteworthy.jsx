import "../Styles/Noteworthy.css";
import React from "react";
import { AiOutlineFile } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { useInView } from "react-intersection-observer";

const Noteworthy = () => {
  const { ref: noteCard, inView: noteCardIsVisible } = useInView();
  return (
    <div className="noteworthyBigContainer">
      <div className="noteworthyContainer">
        <div className="noteworthyHeaderContainer">
          <p className="noteworthyFirstH2">{"<h2>"}</p>
          <h2 className="noteworthyHeading">03. Other Noteworthy Projects</h2>
          <p className="noteworthySecondtH2">{"</h2>"}</p>
        </div>
        <div ref={noteCard} className={`noteworthyCardContainer`}>
          <div className={`noteworthyCard`}>
            <div className="noteworthyIconLink">
              <div>
                <AiOutlineFile className="noteworthyIcon" />
              </div>
              <div>
                <BiLinkExternal className="noteworthyIcon" />
              </div>
            </div>
            <h3 className="noteworthyCardHeading">Time to have fun</h3>
            <h4 style={{ color: "#fff" }} className="noteworthyDesc">
              A single page web for helping me choose where to travel built with
              nextJS
            </h4>
            <h5 className="noteworthyLanguage">nextjs Tailwindcss Firebase</h5>
          </div>
          <div className="noteworthyCard">
            <div className="noteworthyIconLink">
              <div>
                <AiOutlineFile className="noteworthyIcon" />
              </div>
              <div>
                <BiLinkExternal className="noteworthyIcon" />
              </div>
            </div>
            <h3 className="noteworthyCardHeading">Time to have fun</h3>
            <h4 style={{ color: "#fff" }} className="noteworthyDesc">
              A single page web for helping me choose where to travel built with
              nextJS
            </h4>
            <h5 className="noteworthyLanguage">nextjs Tailwindcss Firebase</h5>
          </div>
          <div className="noteworthyCard">
            <div className="noteworthyIconLink">
              <div>
                <AiOutlineFile className="noteworthyIcon" />
              </div>
              <div>
                <BiLinkExternal className="noteworthyIcon" />
              </div>
            </div>
            <h3 className="noteworthyCardHeading">Time to have fun</h3>
            <h4 style={{ color: "#fff" }} className="noteworthyDesc">
              A single page web for helping me choose where to travel built with
              nextJS
            </h4>
            <h5 className="noteworthyLanguage">nextjs Tailwindcss Firebase</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noteworthy;
