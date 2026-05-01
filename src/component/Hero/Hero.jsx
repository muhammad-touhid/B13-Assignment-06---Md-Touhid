import React from "react";
import HeroImg from "../../assets/banner.png";
import BulletImg from "../../assets/bullet.png";
import { IoPlayOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="max-w-300 m-auto py-21 flex flex-col-reverse md:flex-row gap-8 px-7 md:px-5 lg:md:px-0">
      <div className="flex flex-col justify-center space-y-8 w-full  md:w-[60%] pr-5 items-center text-center md:text-left md:items-start">
        <div className="badge badge-soft badge-primary rounded-3xl py-3">
          <img src={BulletImg} alt="" /> New: AI-Powered Tools Available
        </div>
        <h1 className="text-7xl font-bold text-black-cus leading-20">
          Supercharge Your
          <br />
          Digital Workflow
        </h1>
        <p className="text-lg text-gray-500">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today. Explore
          Products
        </p>
        <div className="flex gap-3">
          <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-3xl text-white py-3">
            Explore Products
          </button>
          <button className="btn btn-outline rounded-3xl border-[#4F39F6] bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            <IoPlayOutline className="text-[#4F39F6]" />
            Watch Demo
          </button>
        </div>
      </div>
      <div className="m-auto w-[80%] md:w-[40%]">
        <img src={HeroImg} alt="" srcSet="" />
      </div>
    </div>
  );
};

export default Hero;
