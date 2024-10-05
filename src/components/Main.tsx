import React from "react";
import Navbar from "./Navbar";
import Breaking from "./Breaking";
import Breaking1 from "./Breaking1";
import Breaking2 from "./Breaking2";
import Home from "./HomeSection";
import About from "./About";
import Tokenomics from "./Tokenomics";
import Roadmap from "./Roadmap";
import Footer from "./Footer";

const Main = () => {
  return (
    <>
      <Navbar />
      <Breaking />
      <Home />
      <Breaking1 />
      <About />
      <Breaking2 />
      <Tokenomics />
      <Breaking2 />
      <Roadmap />
      <Breaking1 />
      <Footer />
    </>
  );
};

export default Main;
