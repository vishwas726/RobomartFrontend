import React from "react";
import { BsSave } from "react-icons/bs";
import { CiHeart, CiSaveDown2 } from "react-icons/ci";
import Banner1 from "../assets/images/Blog/Banner1.svg"
import Banner2 from "../assets/images/Blog/Banner2.svg"

import BlogUser from "../assets/images/Blog/BlogUser.svg"
const Blog = () => {
  return (
    <div className="BlogWrapper mt-4 md:mt-10">
      <div className="max-w-[1200px] mx-auto p-4">
        <p className="text-blue-600 text-base font-medium">Robo</p>
        <h1 className="text-2xl md:text-5xl font-bold  text-gray-700 my-6">Best smartwatch 2024: the top wearable
          you can buy today</h1>
        <div className="flex justify-between items-center ">
          <div className="flex  items-center">
            <img src={BlogUser} alt="" />
            <p className="text-gray-600 text-sm ml-2">By
              <span className="text-blue-600"> Sugar Rosie</span>
            </p>
            <ul className="text-gray-600 flex list-disc text-sm ml-7 gap-8" >
              <li>2 hours ago</li>
              <li>8 mins read</li>
            </ul>
          </div>

          <div className=" gap-2 text-[1.4rem] hidden md:flex"><CiSaveDown2 /> <CiHeart /></div>
        </div>


        <img src={Banner1} alt="" className="rounded-lg my-7 mx-auto w-full"/>

        <h2 className="text-xl md:text-3xl my-6 md:my-12 font-semibold">You can expand the system to cover larger gardens by adding more soil sensors, relays, and irrigation zones. Use multiple pumps or split tubing to water different sections as needed.</h2>
        <p className="my-6">We've reviewed and ranked all of the best smartwatches on the market right now, and we've made a definitive list of
          the top 10 devices you can buy today. One of the 10 picks below may just be your perfect next smartwatch.</p>
        <p className="my-6">For remote monitoring, create a mobile app or dashboard using Blynk or a similar IoT platform. This allows you to monitor soil moisture levels, check weather forecasts, and manually control the irrigation system from your phone.</p>
        <h3 className="text-xl md:text-2xl mt-12 font-semibold">Lorem ipsum dolor sit amet cons</h3>
        <p className="my-6">Cost Savings: Save on water and electricity bills by utilizing solar energy and reducing water waste.</p>
        <img src={Banner2} alt="" className="rounded-lg my-12 mx-auto w-full" />
        <p className="my-6">For more advanced control, integrate real-time weather data to prevent watering on rainy days. Using an ESP32, you can fetch weather data from an API and adjust the irrigation schedule accordingly.</p>
        <p className="my-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet id enim, libero sit. Est donec lobortis cursus amet, cras
          elementum libero convallis feugiat. Nulla faucibus facilisi tincidunt a arcu, sem donec sed sed. Tincidunt morbi
          scelerisque lectus non. At leo mauris, vel augue. Facilisi diam consequat amet, commodo lorem nisl, odio malesuada
          cras. Tempus lectus sed libero viverra ut. Facilisi rhoncus elit sit sit.</p>
         
         <div className="h-[2px] w-full bg-gray-100 rounded-lg my-16"></div>
      </div>
    </div>
  );
};

export default Blog;
