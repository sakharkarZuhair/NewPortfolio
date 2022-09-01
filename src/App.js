import React from "react";
import Navbar from "./Components/Navbar";
import SocialMedia from "./Components/SocialMedia";
import HomeScreen from "./Screens/HomeScreen";
import AboutScreen from "./Screens/AboutScreen";
// import Mail from "./Components/Mail";

const App = () => {
  return (
    <>
      <Navbar />
      <HomeScreen />
      <AboutScreen />
      <SocialMedia />
      {/* <Mail /> */}
    </>
  );
};

export default App;
