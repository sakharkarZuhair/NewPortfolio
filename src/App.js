import React from "react";
import Navbar from "./Components/Navbar";
import SocialMedia from "./Components/SocialMedia";
import HomeScreen from "./Screens/HomeScreen";
import AboutScreen from "./Screens/AboutScreen";
import BuiltThings from "./Screens/BuiltThings";
import Noteworthy from "./Screens/Noteworthy";
import ContactMe from "./Screens/ContactMe";
import Footer from "./Components/Footer";
// import Mail from "./Components/Mail";

const App = () => {
  return (
    <>
      <Navbar />
      <HomeScreen />
      <AboutScreen />
      <BuiltThings />
      <Noteworthy />
      <ContactMe />
      <Footer />
      <SocialMedia />
      {/* <Mail /> */}
    </>
  );
};

export default App;
