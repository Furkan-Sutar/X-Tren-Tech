import Line from "../helper/Line";
import React from "react";
import Discovery from "../Component/Discovery";
import Bgvideo from "../Component/Bgvideo";
import Personalized from "../Component/Personalized";
import Realtimeupdate from "../Component/Realtimeupdate";
import Aipower from "../Component/Aipower";
import IndepthAnalysis from "../Component/IndepthAnalysis";

const Home = () => {
  return (
    <div className="lg:w-[98.8vw] w-[100vw]  min-h-screen -z-[-10] overflow-hidden overflow-x-hidden">
      <Bgvideo />
      <Personalized />
      <Realtimeupdate />
      <Aipower />
      <IndepthAnalysis />

      <div>
        <Discovery />
      </div>
    </div>
  );
};

export default Home;
