import React from "react";
import main from "../assets/main.jpg";
import { CiCircleAlert } from "react-icons/ci";

const Collabration = () => {
  return (
    <div className="bg-[#ffffff]  mt-0 text-black w-full lg:h-[140vh] h-[100vh] overflow-hidden">
      <div className="w-full h-full relative">
        <h3 className="text-2xl pt-10 mx-10">COLLABORATION</h3>

        <h3 className="lg:mx-28 lg:pt-4 pt-4  sm:mx-8 font-thin  mx-4 text-4xl sm:text-4xl py-2 md:text-5xl   ">
          Our Tech Partners
        </h3>

        <div className="w-full lg:mt-3 mt-0 pt-0  lg:h-[50vh] h-[30vh]  max-auto flex justify-center items-center">
          <div className=" lg:w-[620px] w-[350px] h-[180px] lg:h-[220px] rounded-xl">
            <img
              src={main}
              className="w-full h-full rounded-md  object-center "
            />
          </div>
        </div>

        <h2 className="lg:mx-36   sm:mx-8 font-[400] leading-relaxed   mx-4 text-4xl sm:text-4xl lg:py-2 md:text-5xl ">
          Be the First to Receive the Latest News From X-TREN Studio{" "}
        </h2>
        <div className="w-full h-[2rem] lg:container lg:mx-auto px-6  mt-[3rem]">
          <p className="text-2xl  text-[#656c6c] pb-4">
            {" "}
            Email <sup className="text-xl">*</sup>{" "}
          </p>
          <input
            type="text"
            className="w-full h-full text-2xl p-2 border-none outline-none border-x-2 py-3  "
            placeholder="Enter your email"
            onChange={(e) => e.target.value}
          />
          <div className="width-full h-0.5 bg-black "></div>
          <div className="flex justify-start items-center gap-2 py-3">
            <span className=" text-rose-700">
              {" "}
              <CiCircleAlert size={20} />{" "}
            </span>{" "}
            <p className=" text-red-700">
              {" "}
              Enter an email address like example@mysite.com.
            </p>
          </div>
          <div className="lg:hidden flex justify-center w-full h-full lg:mt-0 mt- items-center lg:absolute lg:bottom-0 lg:right-0 lg:mx-10 lg:my-5 ">
            <button className="btn-12 hover:border-black">
              <span>Subscribe</span>
            </button>
          </div>
        </div>

        <div className="hidden lg:block absolute bottom-0 right-0 mx-20 my-5 ">
          <button className="btn-12 hover:border-black">
            <span>Subscribe</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collabration;
