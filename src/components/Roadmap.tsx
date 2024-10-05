import React from "react";
import HeroBg from "../assets/slide-bg.jpg";
import HeroImage from "../assets/roadmap.webp";
import PawPrint from "../assets/paw-print.png";
// import Widget from "./Widget";
import RoadmapText from "../assets/roadmap-text.png";
const Hero = () => {
  return (
    <div className="bg-[#b8d2c0] " id="roadmap">
      <div className="conainter relative w-full min-h-screen">
        <div className="absolute inset-0 w-full h-full">
          <img src={HeroBg} alt="Hero background" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-12 h-screen max-md:py-5">
          {/* Widget Section */}
          {/* <div className="flex-shrink-0 max-md:hidden">
            <Widget />
          </div> */}
          <div className="flex-1 relative">
            <img
              src={RoadmapText}
              alt="Hero background"
              className="max-w-[350px] w-auto"
            />
            <div className="flex flex-wrap gap-1 md:gap-2 mt-5 max-w-[700px]">
              {[
                {
                  title: "Phase 1: The Beginning",
                  items: [
                    "Website Goes Live",
                    "Contract Gets Written",
                    "Social Channels Are Born",
                  ],
                },
                {
                  title: "Phase 2: Development",
                  items: [
                    "Contract Audit",
                    "Presale Begins",
                    "Community Building",
                  ],
                },
                {
                  title: "Phase 3: Awareness",
                  items: [
                    "Marketing Initiation",
                    "CoinMarketCap Application",
                    "CoinGecko Application",
                  ],
                },
                {
                  title: "Phase 4: Expansion",
                  items: [
                    "First DEX Listings",
                    "DEXTools Update",
                    "Birdeye Update",
                  ],
                },
                {
                  title: "Phase 5: Cosmic Travel",
                  items: [
                    "First CEX Listings",
                    "Continued Marketing",
                    "Community Incentives",
                  ],
                },
              ].map((phase, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-2 bg-[#fe7a13] p-4 rounded-lg min-w-[250px]"
                >
                  <h1 className="text-white font-gs-b md:text-lg">
                    {phase.title}
                  </h1>
                  <ul>
                    {phase.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-white font-gs-b flex gap-2 items-center text-[12px] md:text-sm"
                      >
                        <img
                          src={PawPrint}
                          alt="Paw print icon"
                          className="max-w-[15px] mb-2"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {/* <div className="max-md:hidden">
              <Image
                src={HeroImage}
                alt="Hero Image"
                quality={100}
                className="w-auto max-w-[450px]  absolute -right-32 -top-16 max-md:hidden"
              />
            </div> */}
          </div>
            <div className="max-md:hidden">
            <img
              src={HeroImage}
              alt="Hero background"
              className="max-w-[450px] mx-auto"
            />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
