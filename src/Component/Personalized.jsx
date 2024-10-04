import React from 'react'
import Robot_Dark_Background from "../assets/Robot_Dark_Background.webp";
import Line from '../helper/Line';

const Personalized = () => {
  return (
    <div>
    <div className="w-full h-[100vh] mt-10 lg:mt-24 pt-10 bg-black relative">
        <div className="container mx-2 md:mx-auto lg:mx-auto w-full relative z-10">
          <Line />
          <h2 className="lg:text-6xl tracking-widest text-center text-4xl sm:px-4 pt-5 font-bold uppercase text-white">
            Personalized News Feed:
          </h2>
          <p className="text-xl tracking-widest leading-snug lg:max-w-2lg lg:mx-40 mx-4 pt-4 text-white">
            TechPulse AI leverages sophisticated machine learning algorithms to
            understand user preferences and reading habits. This allows the app
            to curate a personalized news feed featuring articles, reports, and
            updates that align with the user’s specific interests, such as AI,
            blockchain, cybersecurity, or other tech domains.
          </p>
        </div>
        <img
          src={Robot_Dark_Background}
          className="w-[60rem] aspect-auto absolute bottom-[-1] right-0 object-cover"
        />
      </div>
    </div>
  )
}

export default Personalized