import "../Styles/AboutScreen.css";
import { useInView } from "react-intersection-observer";

const AboutScreen = () => {
  const { ref: headingRef, inView: headingIsVisible } = useInView();
  const { ref: headingDesc, inView: headingDescIsVisible } = useInView();
  const { ref: about, inView: aboutIsVisible } = useInView();
  // const myRef = useRef();
  // const [myElementIsVisible, setMyElementIsVisible] = useState();
  // useEffect(() => {
  //   // console.log("myRef", myRef.current);
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     setMyElementIsVisible(entry.isIntersecting);
  //     console.log("entry", entry);
  //   });
  //   observer.observe(myRef.current);
  // }, []);
  // console.log("MyElementIsVisible", myElementIsVisible);
  // console.log(headingRef);
  return (
    <div className="aboutBigContainer">
      <div className="aboutContainer">
        <p className="aboutSectionTag">{"<section>"}</p>
        <p className="aboutFirstH2Tag">{"<h2>"}</p>
        <div
          ref={headingRef}
          className={`aboutMyself ${headingIsVisible ? "animate" : ""}`}
        >
          <h1>01. Me, Myself and I</h1>
          <div className="aboutLineDiv"></div>
        </div>
        <p className="aboutSecondH2tag">{"</h2>"}</p>
        <p className="aboutFirstPTag">{"<p>"}</p>
        <h3
          ref={headingDesc}
          className={`aboutIntro ${headingDescIsVisible ? "animate" : ""}`}
        >
          Hello! My name is Brittany and I enjoy creating things that live on
          the internet. My interest in web development started back in 2012 when
          I decided to try editing custom Tumblr themes — turns out hacking
          together a custom reblog button taught me a lot about HTML & CSS!
        </h3>
        <p className="aboutSecondPTag">{"</p>"}</p>
        <h4
          ref={about}
          className={`aboutMark ${aboutIsVisible ? "animate-about" : ""} `}
        >
          ABOUT
        </h4>
        <p className="aboutSecondSectionTag">{"</section>"}</p>
      </div>
    </div>
  );
};

export default AboutScreen;
