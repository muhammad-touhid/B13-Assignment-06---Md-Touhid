import React from "react";
import UserImg from "../../assets/user.png";
import PackageImg from "../../assets/package.png";
import RocketImg from "../../assets/rocket.png";

const GetStarted = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-300 m-auto">
        <div className="py-30 ">
          <div className="cards-heading text-center lg:w-[60%] m-auto space-y-6 p-10">
            <h1 className="text-3xl lg:text-5xl text-black-cus font-bold">
              Get Started in 3 Steps
            </h1>
            <p className="text-gray-500">
              Start using premium digital tools in minutes, not hours.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-7 mt-10 p-5">
            <div className="rounded-2xl bg-white border-2 border-gray-100 p-7 relative text-center">
              <span class="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white absolute top-5 right-5">
                01
              </span>
              <div className="m-auto bg-[#eff1f3] rounded-full p-5 mt-20 w-24 h-24">
                <img src={UserImg} alt="user" />
              </div>
              <h3 className="text-2xl font-bold mt-4">Create Account</h3>
              <p className="text-gray-500 mt-4 mb-20">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
            <div className="rounded-2xl bg-white border-2 border-gray-100 p-7 relative text-center">
              <span class=" w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white absolute top-5 right-5">
                02
              </span>

              <div className="m-auto bg-[#eff1f3] rounded-full p-5 mt-20 w-24 h-24">
                <img src={PackageImg} alt="user" />
              </div>
              <h3 className="text-2xl font-bold mt-4">Choose Products</h3>
              <p className="text-gray-500 mt-4 mb-20">
                Browse our catalog and select the tools that fit your needs.
              </p>
            </div>
            <div className="rounded-2xl bg-white border-2 border-gray-100 p-7 relative text-center">
              <span class="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white absolute top-5 right-5">
                03
              </span>
              <div className="m-auto bg-[#eff1f3] rounded-full p-5 mt-20 w-24 h-24">
                <img src={RocketImg} alt="user" />
              </div>
              <h3 className="text-2xl font-bold mt-4">Start Creating</h3>
              <p className="text-gray-500 mt-4 mb-20">
                Download and start using your premium tools immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
