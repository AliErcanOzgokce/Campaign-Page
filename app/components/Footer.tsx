import React from "react";
import dot from "../assets/dot.png";
import Image from "next/image";
import twitterLogo from "../assets/twitter.svg"; // Assuming you have a Twitter logo SVG

function Footer() {
  return (
    <div className="flex max-sm:text-[14px] max-sm:gap-[30px] flex-col sm:flex-row justify-between items-center w-full text-white/80 font-stolzl font-light pt-10 gap-4">
      <div className="order-2 sm:order-1 flex flex-row gap-2">
        <Image src={dot} alt="dot" />
        <p>Building in progress</p>
      </div>
      <div className="order-3 sm:order-3">
        <p>Copyright © NatiVerse. All rights reserved.</p>
      </div>
      <div className="order-1 sm:order-2 hidden max-sm:block">
        <Image src={twitterLogo} alt="Twitter" />
      </div>
    </div>
  );
}

export default Footer;