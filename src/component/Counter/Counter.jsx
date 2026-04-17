import React from "react";

const Counter = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
      <div className="max-w-250 m-auto text-white flex flex-col md:flex-row justify-between items-center py-16">
        <div className="space-y-6 text-center">
          <h1 className="text-6xl font-bold">50K+</h1>
          <p className="text-gray-300 text-2xl">Active Users</p>
        </div>
        <div className="divider divider-horizontal bg-gray-400 w-0.5 h-20 mt-6 rotate-90 md:rotate-0 m-auto"></div>
        <div className="space-y-6 text-center">
          <h1 className="text-6xl font-bold">200+</h1>
          <p className="text-gray-300 text-2xl">Premium Tools</p>
        </div>
        <div className="divider divider-horizontal bg-gray-400 w-0.5 h-20 mt-6 rotate-90 md:rotate-0 m-auto"></div>
        <div className="space-y-6 text-center">
          <h1 className="text-6xl font-bold">4.9</h1>
          <p className="text-gray-300 text-2xl">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
