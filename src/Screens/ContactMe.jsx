import React from "react";
import "../Styles/Contact.css";

const ContactMe = () => {
  return (
    <div className="contactBigContainer">
      <div className="contactContainer">
        <h2 className="contactHeading">04. What's next</h2>
        <h3 className="contactSecondHeading">Get in Touch</h3>
        <p className="contactDesc">
          Although I'm not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I'll try my best to get back to you!
        </p>
        <button className="contactButton">Say Hello</button>
      </div>
    </div>
  );
};

export default ContactMe;
