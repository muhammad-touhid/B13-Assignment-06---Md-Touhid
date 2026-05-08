import React from "react";
import { IoPlayOutline } from "react-icons/io5";

const Cta = () => {
  return (
    <div>
      <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
        <div className="max-w-250 m-auto text-center py-20 px-5">
          <h1 className="text-[40px] text-white font-bold mb-3">
            Ready to Transform Your Workflow?
          </h1>
          <p className="text-gray-300 md:w-[60%] m-auto">
            Join thousands of professionals who are already using Digitools to
            work smarter. Start your free trial today.
          </p>
          <div className="flex gap-3 justify-center mt-8">
            <button className="btn bg-white rounded-3xl text-white py-3 shadow-none">
              <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold">
                Explore Products
              </span>
            </button>
            <button className="btn btn-outline rounded-3xl border-2 border-white text-white">
              View Pricing
            </button>
          </div>
          <p className="text-gray-300 mt-5">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cta;
