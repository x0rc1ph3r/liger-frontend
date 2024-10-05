import React from "react";
import liger from "../assets/logo.png";

const Footer = () => {
  return (
    <>
      <div className="relative mt-5 h-full">
        <div className="flex justify-center">
        <img  
          className="w-full max-w-[380px] max-md:hidden"
          src={liger}
          height={50}
          alt=""
        />
        </div>
      </div>
      <div className="text-black relative text-center text-xl">
        Copyright © 2024 liger.life. All Rights Reserved
      </div>
    </>
  );
};

export default Footer;
