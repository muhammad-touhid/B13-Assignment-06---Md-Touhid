import React from "react";
import { RiCheckFill } from "react-icons/ri";

const Pricing = () => {
  return (
    <div className="max-w-300 m-auto">
      <div className="py-30">
        <div className="cards-heading text-center w-[60%] m-auto space-y-6 mb-10">
          <h1 className="text-5xl text-black-cus font-bold">
            Simple, Transparent Pricing
          </h1>
          <p className="text-gray-500">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-7">
          <div className="bg-gray-50 p-6 border-2 border-gray-100 rounded-2xl">
            <h3 className="text-2xl text-black-cus font-bold">Starter</h3>
            <p className="text-gray-500">Perfect for getting started</p>
            <p className="text-gray-500 my-4">
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
          <div className="bg-gray-50 p-6 border-2 border-gray-100 rounded-2xl">
            <h3 className="text-2xl text-black-cus font-bold">Starter</h3>
            <p className="text-gray-500">Perfect for getting started</p>
            <p className="text-gray-500 my-4">
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
          <div className="bg-gray-50 p-6 border-2 border-gray-100 rounded-2xl">
            <h3 className="text-2xl text-black-cus font-bold">Starter</h3>
            <p className="text-gray-500">Perfect for getting started</p>
            <p className="text-gray-500 my-4">
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
        </div>
      </div>
    </div>
  );
};

export default Pricing;
