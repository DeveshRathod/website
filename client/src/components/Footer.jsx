import React from "react";
import SocialSharing from "../utils/data/socials";

const Footer = () => {
  return (
    <div className="pt-20 sm:pt-30 mx-auto max-w-2xl border-t-2 rounded-t-md bg-white font-customFont mt-10">
      <div className="flex flex-col items-center">
        <p className="text-3xl sm:text-4xl text-customColor">Follow me</p>
        <ul className="flex gap-4 sm:gap-8 mt-4 mb-4">
          {SocialSharing.map((link) => (
            <a
              href={link.url}
              target="__blank"
              rel="noopener noreferrer"
              key={link.id}
              className="text-gray-400 hover:text-customColor
                         cursor-pointer rounded-lg bg-gray-50 p-4 duration-300 "
            >
              <link.icon className="text-xl sm:text-2xl md:text-3xl" />
            </a>
          ))}
        </ul>
        <div className="pt-10 pb-14 text-center">
          <div className="text-lg text-ternary-dark dark:text-ternary-light">
            &copy; {new Date().getFullYear()} Devesh Portfolio.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
