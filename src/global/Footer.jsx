import React from "react";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="mt-36 border-t-[1.5px] border-[#74798A]">
      <div className="container">
        <div className="flex justify-between p-10 flex-col md:flex-row">
          <div className=" text-[#74798A] cursor-pointer text-sm  font-medium flex flex-col justify-center">
            <img src={Logo} alt="Hypenft" />
            <div className="py-3 ">Privacy Police</div>
            <div>Term of Services</div>
          </div>
          <div className="flex gap-5 md:gap-24 cursor-pointer pt-5">
            <div className="">
              <h1 className="text-lg font-medium">Marketplace</h1>
              <ul className="text-[#74798A] text-sm flex flex-col gap-2 pt-3">
                <li>Explore</li>
                <li>Blog</li>
                <li>How it works</li>
                <li>Jobs</li>
              </ul>
            </div>
            <div className="">
              <h1 className="text-lg font-medium">Links</h1>
              <ul className="text-[#74798A] text-sm flex flex-col gap-2 pt-3">
                <li>Bug Bounty</li>
                <li>Become a Partner</li>
                <li>Branding</li>
                <li>HypeNFT API</li>
              </ul>
            </div>
            <div className="">
              <h1 className="text-lg font-medium">Join Us</h1>
              <ul className="text-[#74798A] text-sm flex flex-col gap-2 pt-3">
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Discord</li>
                <li>GitBook</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
