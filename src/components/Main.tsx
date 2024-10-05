import React from "react";
import Navbar from "./Navbar";
import Breaking from "./Breaking";
import Home from "./HomeSection";
import About from "./About";
import Tokenomics from "./Tokenomics";
import Roadmap from './Roadmap'

const Main = () => {
  return (
    <>
      <Navbar />
      <Breaking />
      <Home />
      <About />
      <Tokenomics />
      <Roadmap />
    </>
  );
};

export default Main;
