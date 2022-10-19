import React from "react";
import Navbar from "./Components/Navbar";
import SocialMedia from "./Components/SocialMedia";
import HomeScreen from "./Screens/HomeScreen";
import AboutScreen from "./Screens/AboutScreen";
import BuiltThings from "./Screens/BuiltThings";
import Noteworthy from "./Screens/Noteworthy";
import ContactMe from "./Screens/ContactMe";
import Footer from "./Components/Footer";
import LoadingScreen from "./Components/LoadingScreen";
import { useState, useEffect } from "react";
import AnimateCursor from "./Components/AnimatedCursor";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <AnimateCursor />
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar />
          <HomeScreen />
          <AboutScreen />
          <BuiltThings />
          <Noteworthy />
          <ContactMe />
          <Footer />
          <SocialMedia />
        </>
      )}
      {/* <LoadingScreen /> */}
      {/* <Mail /> */}
    </>
  );
};

export default App;
