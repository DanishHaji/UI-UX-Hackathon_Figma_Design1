import React from "react";

// Functional component for the Footer
const Footer = () => {
  return (
    // Main container for the footer with background color and padding
    <footer className="bg-[#FFFFFF] text-black py-10">
      {/* Container for the footer content, centered on small screens and with flex layout for larger screens */}
      <div className="container mx-auto flex flex-col items-center text-center sm:text-left sm:flex-row sm:justify-between">
        {/* Section for the company name and description */}
        <div className="mb-8 sm:mb-0">
          {/* Company name with bold, colored text */}
          <h2 className="text-[28px] font-bold text-[#3563E9] font-sans mb-4">
            MORENT
          </h2>
          {/* Description text */}
          <p className="text-gray-500">
            Our vision is to provide convenience <br /> and help increase your
            sales business.
          </p>
        </div>
        {/* Section for navigation links organized in a grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 w-full sm:w-auto">
          {/* About section with related links */}
          <div>
            <h3 className="text-[20px] font-semibold font-sans mb-4 text-[#1B1B1B]">
              About
            </h3>
            <ul className="font-sans">
              {/* List of links under "About" */}
              <li className="py-2">
                <a href="#" className="text-[#596780] hover:underline">
                  How it works
                </a>
              </li>
              <li className="py-2">
                <a href="#" className="text-[#596780] hover:underline">
                  Featured
                </a>
              </li>
              <li className="py-2">
                <a href="#" className="text-[#596780] hover:underline">
                  Partnership
                </a>
              </li>
              <li className="py-2">
                <a href="#" className="text-[#596780] hover:underline">
                  Business Relation
                </a>
              </li>
            </ul>
          </div>
          {/* Community section with related links */}
          <div>
            <h3 className="text-[20px] font-semibold font-sans mb-4 text-[#1B1B1B]">
              Community
            </h3>
            <ul className="font-sans">
              {/* List of links under "Community" */}
              <li className="py-2">
                <a href="#" className="text-[#596780] hover:underline">
                  Events
                </a>
              </li>
              <li className="py-2">
                <a href="#" className="text-[#596780] hover:underline">
                  Blog
                </a>
              </li>
              <li className="py-2">
                <a href="#" className="text-[#596780] hover:underline">
                  Podcast
                </a>
              </li>
              <li className="py-2">
                <a href="#" className="text-[#596780] hover:underline">
                  Invite a friend
                </a>
              </li>
            </ul>
          </div>
          {/* Social media section with links */}
          <div>
            <h3 className="text-[20px] font-semibold font-sans mb-4 text-[#1B1B1B]">
              Socials
            </h3>
            <ul className="font-sans">
              {/* List of social media links */}
              <li className="py-2">
                <a href="#" className="text-[#596780] hover:underline">
                  Discord
                </a>
              </li>
              <li className="py-2">
                <a href="#" className="text-[#596780] hover:underline">
                  Instagram
                </a>
              </li>
              <li className="py-2">
                <a href="#" className="text-[#596780] hover:underline">
                  Twitter
                </a>
              </li>
              <li className="py-2">
                <a href="#" className="text-[#596780] hover:underline">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Container for the footer bottom section */}
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center mt-10 border-t border-[#E8E8E8] pt-6">
        {/* Copyright text */}
        <p className="text-[#1A202C] font-sans text-[16px] font-semibold mb-4 sm:mb-0">
          ©2022 MORENT. All rights reserved.
        </p>
        {/* Links for privacy policy and terms of service */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 text-center font-sans">
          <a
            href="#"
            className="text-[#1A202C] text-[16px] font-semibold hover:underline"
          >
            Privacy & Policy
          </a>
          <a
            href="#"
            className="text-[#1A202C] text-[16px] font-semibold hover:underline"
          >
            Terms & Condition
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
