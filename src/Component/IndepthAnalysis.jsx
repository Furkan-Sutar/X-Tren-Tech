import React from "react";
import indepthAnalysis from "../assets/indepthAnalysis.jpg";

const IndepthAnalysis = () => {
  return (
    <div>
      <div className="w-full h-screen text-black mx-auto flex flex-col items-center justify-center overflow-hidden bg-white">
        <div className="bg-white mt-10 mb-10  bg_color rounded-md shadow-white shadow-xl w-[90%] lg:h-[90vh] h-[100%] flex flex-col items-center justify-center overflow-hidden">
          <div className="lg:pt-24     text-center">
            <h3 className="lg:mx-36 text-3xl sm:text-4xl py-4 md:text-5xl uppercase tracking-wider font-extrabold">
              In-Depth Analyses:
            </h3>
          </div>
          <div className="flex flex-col lg:flex-row lg:mt-8 w-full px-4 lg:px-0 justify-center items-center">
            <div className="hidden lg:block"></div>
            <p className="lg:max-w-md px-6 py-4 lg:py-0 text-lg leading-relaxed  lg:text-left lg:mr-8">
              For those seeking a deeper understanding, TechPulse AI offers
              in-depth analyses and expert commentary on significant tech trends
              and developments. These insights help users comprehend the broader
              implications of new technologies and industry changes.
            </p>
            <div className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] overflow-hidden">
              <img
                src={indepthAnalysis}
                className="object-cover w-full h-full"
                alt="In-Depth Analysis"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndepthAnalysis;
