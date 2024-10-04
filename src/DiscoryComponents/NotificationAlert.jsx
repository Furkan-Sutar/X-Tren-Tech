import React, { useEffect, useRef, useState } from "react";
import Line from "../helper/Line";
import bg_video from "../assets/bg-video.mp4";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

const NotificationAlert = () => {
  const [notificationInView, setNotificationInView] = useState(false);
  const [communityInView, setCommunityInView] = useState(false);
  const notificationRef = useRef();
  const communityRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin);

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.target === notificationRef.current) {
          setNotificationInView(entry.isIntersecting);
        }
        if (entry.target === communityRef.current) {
          setCommunityInView(entry.isIntersecting);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    if (notificationRef.current) {
      observer.observe(notificationRef.current);
    }
    if (communityRef.current) {
      observer.observe(communityRef.current);
    }

    return () => {
      if (notificationRef.current) {
        observer.unobserve(notificationRef.current);
      }
      if (communityRef.current) {
        observer.unobserve(communityRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (notificationInView) {
      gsap.fromTo(
        notificationRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 }
      );
    }
  }, [notificationInView]);

  useEffect(() => {
    if (communityInView) {
      gsap.fromTo(
        communityRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 }
      );
    }
  }, [communityInView]);

  return (
    <div className="w-full lg:h-[120vh] h-[75vh] relative overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src={bg_video} type="video/mp4" />
      </video>

      <div className="lg:mt-[4rem] px-5 container lg:mx-auto">
        <Line />
      </div>
      <div className="flex flex-col gap-3">
        <div>
          <div className="lg:pt-0">
            <h3
              ref={notificationRef}
              className="lg:mx-28 sm:mx-8 font-bold mx-4 text-4xl sm:text-4xl py-2 md:text-5xl uppercase tracking-widest"
            >
              Notifications and Alerts:
            </h3>
          </div>
          <div className="lg:my-8 my-2 lg:mx-40">
            <p className="max-w-xl text-xl px-6 lg:py-3 py-0">
              Set up notifications and alerts for specific topics, keywords, or
              companies. This ensures users never miss crucial updates on
              subjects they care about.
            </p>
          </div>
        </div>

        <div>
          <div className="lg:pt-0 pt-3 font-bold">
            <h3
              ref={communityRef}
              className="lg:mx-28 sm:mx-8 mx-4 text-4xl sm:text-4xl lg:py-2 py-0 md:text-5xl uppercase tracking-widest"
            >
              Community Engagement:
            </h3>
          </div>
          <div className="lg:my-8 my-2 lg:mx-40">
            <p className="max-w-2xl text-xl px-6 lg:py-3 md:py-0">
              Engage with other tech enthusiasts through features like comments,
              discussion forums, and user-generated content. Share insights, ask
              questions, and network with like-minded individuals to enrich the
              tech community experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationAlert;
