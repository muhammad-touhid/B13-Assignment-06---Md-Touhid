import React from "react";
import { RiCheckFill } from "react-icons/ri";

const Pricing = () => {
  return (
    <div className="max-w-300 m-auto">
      <div className="py-30">
        <div className="cards-heading text-center lg:w-[60%] m-auto space-y-6 mb-10 px-10">
          <h1 className="text-3xl lg:text-5xl text-black-cus font-bold">
            Simple, Transparent Pricing
          </h1>
          <p className="text-gray-500">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-7 p-5">
          <div className="flex flex-col justify-around bg-gray-50 p-6 border-2 border-gray-100 rounded-2xl">
            <div>
              <h3 className="text-2xl text-black-cus font-bold">Starter</h3>
              <p className="text-gray-500">Perfect for getting started</p>
            </div>
            <p className="text-gray-500 my-3">
              <span className="text-[40px] text-black-cus font-bold">$0</span>
              /Month
            </p>
            <ul>
              <li className="text-gray-500 flex items-center gap-2">
                <RiCheckFill className="text-[#30B868]" />{" "}
                <spane>Access to 10 free tools</spane>
              </li>
              <li className="text-gray-500 flex items-center gap-2">
                <RiCheckFill className="text-[#30B868]" />{" "}
                <spane>Basic templates</spane>
              </li>
              <li className="text-gray-500 flex items-center gap-2">
                <RiCheckFill className="text-[#30B868]" />{" "}
                <spane>Community support</spane>
              </li>
              <li className="text-gray-500 flex items-center gap-2">
                <RiCheckFill className="text-[#30B868]" />{" "}
                <spane>1 project per month</spane>
              </li>
            </ul>
            <button className="btn btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-3xl text-white py-3 mt-6">
              Get Started Free
            </button>
          </div>
          <div className="flex flex-col justify-around bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-6  rounded-2xl relative">
            <div className="badge bg-[#FEF3C6] text-[#BB4D00] absolute -top-4 left-1/2 -translate-x-1/2 py-4 rounded-full font-semibold">
              Most Popular
            </div>
            <div>
              <h3 className="text-2xl text-white font-bold">Pro</h3>
              <p className="text-gray-200">Best For Professionals</p>
            </div>
            <p className="text-white my-3">
              <span className="text-[40px] font-bold">$29</span>
              /Month
            </p>
            <ul>
              <li className="text-white flex items-center gap-2">
                <RiCheckFill className="text-white" />{" "}
                <spane>Access to all premium tools</spane>
              </li>
              <li className="text-white flex items-center gap-2">
                <RiCheckFill className="text-white" />{" "}
                <spane>Unlimited templates</spane>
              </li>
              <li className="text-white flex items-center gap-2">
                <RiCheckFill className="text-white" />{" "}
                <spane>Priority support</spane>
              </li>
              <li className="text-white flex items-center gap-2">
                <RiCheckFill className="text-white" />{" "}
                <spane>Unlimited projects</spane>
              </li>
              <li className="text-white flex items-center gap-2">
                <RiCheckFill className="text-white" /> <spane>Cloud sync</spane>
              </li>
              <li className="text-white flex items-center gap-2">
                <RiCheckFill className="text-white" />{" "}
                <spane>Advanced analytics</spane>
              </li>
            </ul>
            <button className="btn btn-block bg-white rounded-3xl text-white py-3 mt-6 shadow-none">
              <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold">
                Start Pro Trail
              </span>
            </button>
          </div>
          <div className="flex flex-col justify-around bg-gray-50 p-6 border-2 border-gray-100 rounded-2xl">
            <div>
              <h3 className="text-2xl text-black-cus font-bold">Enterprise</h3>
              <p className="text-gray-500">For teams and businesses</p>
            </div>
            <p className="text-gray-500 my-3">
              <span className="text-[40px] text-black-cus font-bold">$99</span>
              /Month
            </p>
            <ul>
              <li className="text-gray-500 flex items-center gap-2">
                <RiCheckFill className="text-[#30B868]" />{" "}
                <spane>Everything in Pro</spane>
              </li>
              <li className="text-gray-500 flex items-center gap-2">
                <RiCheckFill className="text-[#30B868]" />{" "}
                <spane>Team collaboration</spane>
              </li>
              <li className="text-gray-500 flex items-center gap-2">
                <RiCheckFill className="text-[#30B868]" />{" "}
                <spane>Custom integrations</spane>
              </li>
              <li className="text-gray-500 flex items-center gap-2">
                <RiCheckFill className="text-[#30B868]" />{" "}
                <spane>Dedicated support</spane>
              </li>
              <li className="text-gray-500 flex items-center gap-2">
                <RiCheckFill className="text-[#30B868]" />{" "}
                <spane>SLA guarantee</spane>
              </li>
              <li className="text-gray-500 flex items-center gap-2">
                <RiCheckFill className="text-[#30B868]" />{" "}
                <spane>Custom branding</spane>
              </li>
            </ul>
            <button className="btn btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-3xl text-white py-3 mt-6">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
