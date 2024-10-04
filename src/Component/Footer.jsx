import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-gray-900">
    <div className="max-w-2xl mx-auto text-white py-8">
        <div className="text-center">
            <h3 className="text-3xl mb-3"> Download our Api Tech+ app </h3>
            <p> update Youself  every day. </p>
            <div className="flex justify-center my-8">
                <div className="flex items-center border lg:w-auto rounded-lg px-4 py-2 w-52 mx-2">
                    <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" className="w-7 md:w-8"/>
                    <div className="text-left ml-3">
                        <p className='text-xs text-gray-200'>Download on </p>
                        <p className="text-sm md:text-base"> Google Play Store </p>
                    </div>
                </div>
              
            </div>
        </div>
        <div className="mt-14 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
            <Link to={'https://sites.google.com/view/x-tren-studio/team?authuser=0'} className="order-2 md:order-1 mt-8 md:mt-0"> &copy; 2024by Monstar MInd (X-TREN Studio).  </Link>
            <div className="order-1 md:order-2">
                <span className="px-2">About us</span>
                <span className="px-2 border-l">Contact us</span>
                <span className="px-2 border-l">Privacy Policy</span>
            </div>
        </div>
    </div>
</div>
  );
};

export default Footer;