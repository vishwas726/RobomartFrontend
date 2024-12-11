import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function HomeSlider() {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false, // Set to false since we're using custom arrows
    dots: false,
  };

  return (
    <>
      <section className="homeSlider py-[25px] mt-4 mx-3">
        <div className="container-fluid relative">

          <div
            className="ArrowLeft absolute left-5 top-[40%] bg-[#f2f3f4] w-[40px] cursor-pointer h-[40px] text-[#7E7E7E] z-50 rounded-full flex justify-center items-center hover: hover:text- transition-none duration-200 ease-in-out"
            onClick={() => sliderRef.current.slickPrev()} // Move to previous slide
          >
            <IoIosArrowBack className="size-[20px]" />
          </div>
          <div
            className="ArrowRight absolute right-5 top-[40%] bg-[#f2f3f4] w-[40px] cursor-pointer h-[40px] text-[#7E7E7E] z-50 rounded-full flex justify-center items-center hover: hover:text- transition-none duration-200 ease-in-out "
            onClick={() => sliderRef.current.slickNext()} // Move to next slide
          >
            <IoIosArrowForward className="size-[20px]" />
          </div>


          <Slider ref={sliderRef} {...settings} className="home_slider_main relative overflow-hidden rounded-[10px]">

            <div className="ProductCard rounded-lg overflow-hidden item w-[80%] h-[40vh] md:h-[50vh] relative z-30 ">
              <p className="head drop-shadow-lg absolute md:w-[40%] top-16 left-12 md:left-24 z-50 bg-transparent text-white text-left text-3xl font-bold mb-1 leading-tight ">
                Build Amazing Projects with Top-Quality Electronics
                <br />
                <span className="head text-white text-left text-lg font-bold mb-6 leading-tight">
                  Discover the Best Components at <span className="text-white">MyRobomart</span>
                </span>
                <br />
                <a href="#_" className="relative hidden md:inline-block text-lg group mt-4">
                  <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                    <span className="relative ">Explore More</span>
                  </span>
                  <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"></span>
                </a>
              </p>
              <img
                src="https://images.unsplash.com/photo-1477160739634-171ff0343882?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Electronics Banner 1"
                className="w-[100%] h-[100%] bg-center object-cover"
              />
            </div>

            <div className="ProductCard rounded-lg overflow-hidden item w-[80%] h-[40vh] md:h-[50vh] relative z-30 ">
              <p className="head drop-shadow-lg absolute md:w-[40%] top-16 left-12 md:left-24 z-50 bg-transparent text-white text-left text-3xl font-bold mb-1 leading-tight ">
                Unleash Your Creativity with High-Performance Modules
                <br />
                <span className="head text-white text-left text-lg font-bold mb-6 leading-tight">
                  Get Inspired and Innovate with <span className="text-white">MyRobomart</span>
                </span>
                <br />
                <a href="#_" className="relative hidden md:inline-block text-lg group mt-4">
                  <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                    <span className="relative hidden md:block">Let's connect</span>
                  </span>
                  <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"></span>
                </a>
              </p>
              <img
                src="https://images.unsplash.com/photo-1603732551658-5fabbafa84eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Electronics Banner 2"
                className="w-[100%] h-[100%] bg-center object-cover"
              />
            </div>

            <div className="ProductCard rounded-lg overflow-hidden item w-[80%] h-[40vh] md:h-[50vh] relative z-30 ">
              <p className="head drop-shadow-lg absolute md:w-[40%] top-16 left-12 md:left-24 z-50 bg-transparent text-white text-left text-3xl font-bold mb-1 leading-tight ">
                Upgrade Your Skills with Cutting-Edge Robotics Kits
                <br />
                <span className="head text-white text-left text-lg font-bold mb-6 leading-tight">
                  Elevate Your Knowledge at <span className="text-white">MyRobomart</span>
                </span>
                <br />

              </p>
              <img
                src="https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Electronics Banner 3"
                className="w-[100%] h-[100%] bg-center object-cover"
              />
            </div>

            {/* <div className="ProductCard rounded-lg overflow-hidden item w-[80%] h-[50vh] relative z-30">
              <p className="head drop-shadow-lg absolute md:w-[40%] top-16 left-12 md:left-24 z-50 bg-transparent text-white text-left text-3xl font-bold mb-1 leading-tight ">
                Discover the Latest in DIY Technology and Innovation
                <br />
                <span className="head text-white text-left text-lg font-bold mb-6 leading-tight">
                  Stay Ahead with <span className="text-white">MyRobomart</span>
                </span>
                <br />

              </p>
              <img
                src="https://images.unsplash.com/photo-1666597107756-ef489e9f1f09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzYxfHxyb2JvdHN8ZW58MHx8MHx8fDA%3D"
                alt="Electronics Banner 4"
                className="w-[100%] h-[100%] bg-center object-cover"
              />
            </div> */}
          </Slider>
        </div>
      </section>
    </>
  );
}
