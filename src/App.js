import React from "react";
import Navbar from "./Components/Navbar";
import SocialMedia from "./Components/SocialMedia";
import HomeScreen from "./Screens/HomeScreen";
import AboutScreen from "./Screens/AboutScreen";
import BuiltThings from "./Screens/BuiltThings";
import Noteworthy from "./Screens/Noteworthy";
// import Mail from "./Components/Mail";

const App = () => {
  return (
    <>
      <Navbar />
      <HomeScreen />
      <AboutScreen />
      <SocialMedia />
      <BuiltThings />
      <Noteworthy />
      {/* <Mail /> */}
    </>
  );
};

export default App;
