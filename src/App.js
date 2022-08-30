import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SocialMedia from "./Components/SocialMedia";
import HomeScreen from "./Screens/HomeScreen";

const App = () => {
  return (
    <>
      <Navbar />
      <HomeScreen />
      <SocialMedia />
    </>
  );
};

export default App;
