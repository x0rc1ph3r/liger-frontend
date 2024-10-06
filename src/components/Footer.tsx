import React from "react";
import liger from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="relative max-md:bg-primary">
        <div className="flex justify-center">
        <img  
          className="w-full max-w-[380px]"
          src={liger}
          alt=""
        />
        </div>
      <div className="text-black text-center text-xl">
        Copyright © 2024 liger.life. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
