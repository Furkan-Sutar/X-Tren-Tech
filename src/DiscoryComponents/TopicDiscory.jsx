import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Line from "../helper/Line";

const TopicDiscovery = () => {
  const headingRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (inView) {
      gsap.from(headingRef.current, {
        x: 40,
        rotate: 20,
        duration: 1,
        opacity: 0,
        stagger: 0.15,
      });
    }
  }, [inView]);

  return (
    <div>
      <div className="w-full lg:h-[100vh] h-[60vh] bg-black mx-auto relative px-5">
        <div className="mt-[7rem] px-5 container lg:mx-auto">
          <Line />
        </div>
        <div ref={headingRef} className="lg:pt-0">
          <h3 className="lg:mx-36 text-4xl sm:text-4xl py-2 md:text-7xl capitalize">
            Topic Discovery:
          </h3>
        </div>
        <div className="absolute lg:right-0 lg:bottom-[4rem] lg:mx-40">
          <p className="max-w-md text-xl px-6 py-3">
            Effortlessly explore a wide range of topics. The app categorizes
            news into various tech domains such as artificial intelligence,
            machine learning, Internet of Things (IoT), fintech, and more. Users
            can browse these categories to discover new and relevant content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopicDiscovery;
