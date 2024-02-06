import React from "react";
import CustomTimeline from "../components/CustomTimeline";
import Progress from "../components/Progress";

const About = () => {
  return (
    <div className="flex flex-col mt-24">
      <div className="self-center">
        <h1 className="text-3xl sm:text-6xl">About</h1>
      </div>
      <div className="flex flex-col sm:flex-row md:flex-row">
        <div className="flex-1 pt-10 sm:pt-fit">
          <div className="text-center">
            <h1 className="text-xl sm:text-3xl item-center text-customColor">
              Education
            </h1>
            <div className=" pt-6">
              <CustomTimeline />
            </div>
          </div>
        </div>
        <div className="flex-1 pt-10 sm:pt-fit">
          <div className=" text-center">
            <h1 className="text-xl sm:text-3xl item-center text-customColor">
              Skills
            </h1>
          </div>
          <div className=" pl-12 pr-12 pt-5 sm:pr-24 sm:pl-24 md:pr-24 md:pl-24">
            <Progress />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
