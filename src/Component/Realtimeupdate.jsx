import React from "react";
import updats_img from "../assets/updats_img.jpg";
import Line from "../helper/Line";

const Realtimeupdate = () => {
  return (
    <div>
      {" "}
      <div className="w-full min-h-screen mt-[5rem] lg:mt-[15rem] text-black mx-auto flex flex-col items-center justify-start bg-white">
        <div className="mt-10 lg:mt-16 w-full container px-5">
          <Line />
        </div>
        <div className="bg-white bg_color rounded-md shadow-white shadow-xl w-[90%] lg:w-[80%] xl:w-[70%] h-auto lg:h-[70vh] flex flex-col items-center justify-center my-10 lg:my-16 p-6 overflow-hidden">
          <div className="pt-6 lg:pt-24 text-center">
            <h3 className="text-3xl sm:text-4xl md:text-5xl uppercase tracking-wider font-extrabold">
              Real-time Updates:
            </h3>
          </div>
          <div className="flex flex-col lg:flex-row mt-8 w-full px-4 lg:px-0 items-center">
            <div className="hidden lg:block lg:w-1/12">
        
            </div>
            <p className="lg:max-w-md px-6 text-lg leading-relaxed text-center lg:text-left lg:mr-8">
              Stay on top of the latest developments with real-time news
              updates. TechPulse AI aggregates information from a broad spectrum
              of reputable sources, including tech blogs, industry publications,
              and mainstream news outlets, ensuring users receive timely and
              accurate news.
            </p>
            <div className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px]">
              <img
                src={updats_img}
                className="object-cover w-full h-full"
                alt="Real-time Updates"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Realtimeupdate;
