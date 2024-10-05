import React from "react";
import HeroBg from "../assets/slide-bg.jpg";
import HeroImage from "../assets/gif-4.gif";
import Liger from "../assets/liger.png";
import Widget from "./Widget";
import LigerText from "../assets/liger-text.png";
import SolidProf from "../assets/solid-proof.png";
const Hero = () => {
  return (
    <div className="bg-[#b8d2c0]" id="home">
      <div className="relative w-full ">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img src={HeroBg} alt="Hero background" />
        </div>

        <div className="relative z-10 container flex flex-col md:flex-row items-center gap-6 md:gap-12 h-screen max-md:py-5">
          {/* Widget Section */}
          <div className="flex-shrink-0 max-md:hidden">
            <Widget />
          </div>

          {/* Text and Phases Section */}
          <div className="flex-1 relative text-center md:text-left -mt-24">
            <div className="flex items-center justify-between max-w-[700px]">
              <img
                src={LigerText}
                alt="Liger Text"
                className="max-w-[200px] md:max-w-[340px] mx-auto md:mx-0"
              />
              <div className="bg-red-500 rounded-xl min-w-[200px]">
                <a
                  href="/liger-pdf.pdf"
                  target="_blank"
                  className="bg-[#fe7a13] border-2 border-black hover:bg-opacity-65 block text-center cursor-pointer w-full p-2 rounded-xl font-gs-eb text-white"
                >
                  Token Audit
                </a>
                <div className="p-1 flex justify-center">
                  <img
                    src={SolidProf}
                    alt="Liger Text"
                    className="max-w-[120px] mx-auto md:mx-0"
                  />
                </div>
              </div>
            </div>
            <p className="max-w-[90%] md:max-w-[550px] font-gs text-lg md:text-xl mt-4 mx-auto md:mx-0">
              Introducing Liger, the cryptocurrency that’s as powerful and
              elusive as its namesake.
            </p>

            {/* Phases */}
            <div className="flex flex-wrap justify-center md:justify-start gap-5 mt-5 max-w-[600px]">
              {[
                { phase: "Phase 1", price: "0.035$" },
                { phase: "Phase 2", price: "0.05$" },
                { phase: "Phase 3", price: "0.08$" },
                { phase: "Launch Price", price: "0.12$" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-[#fe7a13] p-4 md:p-6 rounded-lg min-w-[250px] md:min-w-[280px]"
                >
                  <div>
                    <img
                      src={Liger}
                      alt={`${item.phase} icon`}
                      className="max-w-[50px] md:max-w-[70px] transform scale-x-[-1]"
                    />
                  </div>
                  <div>
                    <p className="text-white font-gs-b text-lg md:text-2xl">
                      {item.phase}
                    </p>
                    <p className="text-primary font-gs-eb text-xl md:text-3xl">
                      {item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Hero Image */}
            <div className="max-md:hidden">
              <img
                src={HeroImage}
                alt="Hero Image"
                className="w-full max-w-[400px]  absolute -right-10 -top-40 max-md:hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
