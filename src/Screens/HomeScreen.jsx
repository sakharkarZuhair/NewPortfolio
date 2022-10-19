import "../Styles/HomeScreen.css";
import { useInView } from "react-intersection-observer";

const HomeScreen = () => {
  const { ref: hiRef, inView: hiIsVisible } = useInView();
  const { ref: zuhairRef, inView: zuhairIsVisible } = useInView();
  const { ref: buildThings, inView: buildThingsIsVisible } = useInView();
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
            <h1 ref={hiRef} className={`${hiIsVisible ? "animate-hi" : ""}`}>
              Hi, my name is
            </h1>
            <p>{"<span>"}</p>
          </div>
          <p className="homeH1Tag">{"<h1>"}</p>
          <div className="homeZuhair">
            {" "}
            {/* Content */}
            <h2
              ref={zuhairRef}
              className={`${zuhairIsVisible ? "animate-zuhair" : ""}`}
              data-text="Zuhair Sakharkar."
            >
              Zuhair Sakharkar.
            </h2>{" "}
            {/* Text */}
            <p>{"<br/>"}</p>
          </div>
          <p className="homeSpanTagTwo">{"<span>"}</p>
          <div className="homeBuildThing">
            <h3
              ref={buildThings}
              className={`${buildThingsIsVisible ? "animate-build" : ""}`}
            >
              I build things for the web.
            </h3>
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
