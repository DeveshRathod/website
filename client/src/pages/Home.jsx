import React from "react";
import img from "../utils/images/Hero_section.png";
import { FiArrowDownCircle } from "react-icons/fi";

const Home = () => {
  return (
    <div
      className="flex flex-col m-8 mt-8 sm:mt-24 font-customFont sm:flex-row"
      id="home"
    >
      <div className="w-full sm:w-2/3 text-right mt-8 sm:mt-0">
        <img src={img} alt="Hero_image" className="w-auto m-auto" />
      </div>
      <div className="w-full md:w-1/3 text-left flex flex-col gap-1 sm:gap-3 self-center items-center sm:items-start">
        <h1 className="text-3xl sm:text-5xl md:text-6xl">
          Hello, I am <br />
        </h1>
        <span className="text-customColor font-bold text-3xl sm:text-5xl md:text-6xl">
          Devesh
        </span>
        <p className="text-lg sm:text-2xl md:text-3xl ">
          A <span className="text-customColor font-semibold">Full Stack</span>{" "}
          Web Developer
        </p>
        <a
          download="Resume.pdf"
          href="https://drive.google.com/uc?export=download&id=1kR2kX23O6kL-uEg0PepG8IPBI0Tc_m9j"
          className="font-general-medium flex justify-center items-center p-8 sm:p-6 mt-12 mb-6 sm:mb-0 text-lg border border-custom-200  py-2.5 sm:py-3 shadow-lg rounded-lg bg-custom-50 hover:bg-custom-500 text-gray-500 hover:text-white duration-500"
          aria-label="Download Resume"
        >
          <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
          <span className="text-sm sm:text-lg font-general-medium duration-100 subheading">
            Download CV
          </span>
        </a>
      </div>
    </div>
  );
};

export default Home;
