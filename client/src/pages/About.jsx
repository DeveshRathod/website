import React from "react";
import CustomTimeline from "../components/CustomTimeline";
import Progress from "../components/Progress";

const About = () => {
  return (
    <div className="mt-8 sm:mt-24 sm:m-8 font-customFont" id="about">
      <div className="text-center">
        <h1 className="text-3xl sm:text-6xl">About</h1>
      </div>
      <div className="flex flex-col sm:flex-row md:flex-row">
        <div className="flex-1 mt-2 sm:mt-10 pl-12 pr-12 sm:pr-24 sm:pl-24 md:pr-24 md:pl-24">
          <h1 className="text-xl sm:text-3xl text-center text-customColor">
            Education
          </h1>
          <CustomTimeline />
        </div>
        <div className="flex-1 mt-4 sm:mt-10 pl-12 pr-12 sm:pr-24 sm:pl-24 md:pr-24 md:pl-24">
          <h1 className="text-xl sm:text-3xl text-customColor">Skills</h1>
          <Progress />
        </div>
      </div>
    </div>
  );
};

export default About;
