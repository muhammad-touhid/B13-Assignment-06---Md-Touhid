import React from "react";
import UserImg from "../../assets/user.png";
import PackageImg from "../../assets/package.png";
import RocketImg from "../../assets/rocket.png";

const GetStarted = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-300 m-auto">
        <div>
          <div className="cards-heading text-center pt-30 w-[60%] m-auto space-y-6">
            <h1 className="text-5xl text-black-cus font-bold">
              Get Started in 3 Steps
            </h1>
            <p className="text-gray-500">
              Start using premium digital tools in minutes, not hours.
            </p>
          </div>
          <div className="grid grid-cols-3">
            <div className="rounded-2xl broder-2 bg-white border-gray-300 p-5">
              <div class="badge badge-primary badge-xs">01</div>
              <img src={UserImg} alt="user" />
              <h3>Create Account</h3>
              <p>
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
