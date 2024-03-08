import React from "react";
import Logo from "../assets/output.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 md:p-6 lg:p-8">
      <div className="container mx-auto">
        <div className="flex justify-center mb-4">
          <div>
            <img
              src={Logo}
              alt="Logo"
              className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
            />
          </div>
          <span className="self-center text-lg md:text-xl lg:text-2xl ml-2">
            Zenli
          </span>
        </div>
        <div className="mb-4 text-sm md:text-base">
          <a href="/" className="text-white px-2 md:px-4">
            Home
          </a>
          <a href="/about" className="text-white px-2 md:px-4">
            About Us
          </a>
          <a href="/contact" className="text-white px-2 md:px-4">
            Contact
          </a>
        </div>
        <div className="text-sm md:text-base">
          <a href="https://facebook.com" className="text-white px-2 md:px-4">
            FB
          </a>
          <a href="https://twitter.com" className="text-white px-2 md:px-4">
            TW
          </a>
          <a href="https://instagram.com" className="text-white px-2 md:px-4">
            IG
          </a>
        </div>
        <div className="text-xs md:text-sm mt-4">
          © {new Date().getFullYear()} Your Brand Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
