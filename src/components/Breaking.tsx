import React from "react";
import Marquee from "react-fast-marquee";

const Breaking = () => {
  return (
    <div className="bg-[#ed323d] border-b-[3px] border-black border-t-[3px] p-1.5 px-6 flex items-center">
      <p className="inline text-white font-gs-b text-xl uppercase">Breaking:</p>
      <Marquee>
        <p className="inline text-white font-gs-b text-lg">
        Buy early presale NOW to earn MASSIVE rewards! | Participate in Raffle contest by buying $LIGER worth Min. 0.3 SOL - WIN $15,000 and many more 
        </p>
      </Marquee>
    </div>
  );
};

export default Breaking;
