import React from "react";
import Navbar from "./Components/Navbar";
import SocialMedia from "./Components/SocialMedia";
import HomeScreen from "./Screens/HomeScreen";
// import Mail from "./Components/Mail";

const App = () => {
  return (
    <>
      <Navbar />
      <HomeScreen />
      <SocialMedia />
      {/* <Mail /> */}
    </>
  );
};

export default App;
