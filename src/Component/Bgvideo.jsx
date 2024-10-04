import React from "react";
import main_bg_video from "../assets/main-bg-video.mp4";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Bgvideo = () => {
  const timeline = gsap.timeline();

  useGSAP(() => {
    timeline.from(".heading", {
      x: -40,
      duration: 1,
      delay: 1,
      opacity: 0,
      stagger: 0.15,
    });
  }, []);

  useGSAP(() => {
    timeline.from(".mainPara", {
      x: 40,
      duration: 1,
      delay: 0.2,
      opacity: 0,
      stagger: 0.15,
    });
  }, []);


  
  return (
    <div className="relative z-[-1] w-full h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src={main_bg_video} type="video/mp4" />
      </video>
      <div className="container mx-auto lg:mx-40 pt-20   relative">
        <h1 className="lg:text-7xl heading font-bold text-6xl mx-6 sm:text-6xl tracking-widest text-white">
          THE FUTURE OF{" "}
        </h1>
        <h1 className="lg:text-7xl heading font-bold text-6xl mx-6 sm:text-6xl tracking-widest text-white">
          DELIVERY IS HERE
        </h1>

        <div className="pt-14">
          <p className="text-xl mainPara lg:mx-32 mx-5 leading-relaxed lg:tracking-wider text-white">
            Purpose:* TechPulse AI is designed to keep users updated with the
            latest news and trends in the technology sector. Utilizing advanced
            AI and machine learning, the app curates personalized news feeds,
            offers in-depth analyses, and provides insights into emerging
            technologies, startups, and market dynamics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bgvideo;
