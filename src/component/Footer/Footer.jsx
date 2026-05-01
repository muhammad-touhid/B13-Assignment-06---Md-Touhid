import React from "react";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#101727]">
      <div className="max-w-300 m-auto pt-30 pb-10  text-gray-400 space-y-10">
        <div className="flex flex-col md:flex-row gap-5 justify-between items-start pb-10 px-8 lg:px-0">
          <div className="space-y-8">
            <h1>
              <a className="text-4xl font-semibold leading-12 text-white ">
                DigiTools
              </a>
            </h1>
            <p>
              Premium digital tools for creators,smarter
              <br /> professionals, and businesses. Work smarter
              <br /> with our suite of powerful tools.
            </p>
          </div>
          <div className="space-y-5">
            <h4 className="text-xl text-white font-semibold">Product</h4>
            <ul className="space-y-4">
              <li>Features</li>
              <li>pricing</li>
              <li>Templates</li>
              <li>Integrations</li>
            </ul>
          </div>
          <div className="space-y-5">
            <h4 className="text-xl text-white font-semibold">Company</h4>
            <ul className="space-y-4">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>

          <div className="space-y-5">
            <h4 className="text-xl text-white font-semibold">Resources</h4>
            <ul className="space-y-4">
              <li>Documentation</li>
              <li>Help Center</li>
              <li>Community</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="space-y-5">
            <h4 className="text-xl text-white font-semibold">Socials Link</h4>
            <div className="flex gap-5">
              <a href="#" className="bg-white p-3 rounded-full">
                <FaInstagramSquare className="text-black" />
              </a>
              <a href="#" className="bg-white p-3 rounded-full">
                <FaFacebookSquare className="text-black" />
              </a>
              <a href="#" className="bg-white p-3 rounded-full">
                <FaSquareXTwitter className="text-black" />
              </a>
            </div>
          </div>
        </div>
        <div className="divider bg-gray-500 h-px"></div>
        <div className="flex justify-between px-8 lg:px-0">
          <p>© 2026 Digitools. All rights reserved.</p>
          <ul className="flex flex-row gap-5">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookies</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
