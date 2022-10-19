import React from "react";
import AnimatedCursor from "react-animated-cursor";

const AnimateCursor = () => {
  return (
    <AnimatedCursor
      innerSize={10}
      outerSize={15}
      color="113, 113, 113"
      outerAlpha={0.2}
      innerScale={0.4}
      outerScale={8}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
      ]}
    />
  );
};

export default AnimateCursor;
