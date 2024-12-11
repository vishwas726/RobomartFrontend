import React from "react";
import { FaRegPaperPlane } from "react-icons/fa";

export const FooterBanner = () => {
  return (
    <div className="banner w-full max-w-[1600px] mt-32 px-3 mx-auto">
      <div className="flex banner-sells w-full">
        <div className="ProductCard shadow-lg w-full h-60 md:h-96 border bg-[url('/Banner2.jpg')] bg-bottom bg-cover  flex justify-start items-center rounded-2xl">
          <div className="flex flex-col p-2 md:p-8  relative z-[20] md:w-[600px]">
            <span className="head text-white text-left  text-2xl md:text-3xl font-bold mb-1 leading-tight">
              Build Your Projects from Home with Premium Electronics Delivered
              to Your Door
            </span>
            <span className="head text-white text-left text-lg font-bold mb-6 leading-tight ">
              Start You re Daily Shopping with{" "}
              <span className="text-white"> MyRobomart</span>
            </span>

            <form action="/" method="get">
              <div className=" bg-white rounded-full h-16 w-[300px]  items-center md:w-[444px] hidden md:flex justify-between">
                <FaRegPaperPlane className=" text-gray-500   text-4xl p-2 ms-4 me-2" />
                <input
                  type="text"
                  className="border-0 outline-none  max-w-full "
                  placeholder="Your emaill address"
                />
                <button
                  className="bg-[#3f51b5] text-white px-10 py-3 w-fit flex rounded-full md:text-lg justify-center items-center text-nowrap h-full"
                  type="submit"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
