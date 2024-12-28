import React, { useEffect, useState } from "react";
import HomeSlider from "./Slider.jsx";
import CatSlider from "./CatSlider.jsx";
import {
  IoIosArrowRoundForward,
  IoIosStar,
  IoIosStarHalf,
  IoIosStarOutline,
} from "react-icons/io";
import { FaRegPaperPlane } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import Btn1 from "../../components/Buttons/Btn1.jsx";
// import "./starability-slot.css";

import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { toast } from "react-toastify";
import { useAuth } from "../../Context/AuthContext.jsx";
import Bg1 from "../../assets/HomeBanner/Bg1.jpg"
import Bg2 from "../../assets/HomeBanner/Bg2.jpg"
import Bg3 from "../../assets/HomeBanner/Bg3.jpg"
import BannerLast from  "/banner.jpg"
import { FooterBanner } from "../../components/FooterBanner.jsx";
import Sells from "../../components/Sells.jsx";

const Home = () => {

  const [popular, setPopular] = useState([]);
  const [dailySells, setDailySells] = useState([]);
  const [dealsOfTheDay, setDealsOfTheDay] = useState([]);
 
  const navigate = useNavigate(); // Make sure to call useNavigate here
  const [loading, setLoading] = useState(true);
  
const {user }=useAuth()
  const handleProductClick = (id) => {
    console.log("Product ID:", id);

    navigate(`/singlePro/${id}`);
  };

  const addToCart = async (id) => {
    try {
      // if (!user || !user.token ) {
      //   toast.error("Login First");
      //   // navigate("/login");
      //   return;
      // }
      const token=user.token ;
      const res = await axios.post(
        "/cart", // Endpoint URL
        {
          productId: id,
          quantity: 1,
        },
        {
          headers: { authorization: "Bearer " + token }, // Authorization header
        }
      );
     
      console.log(res.success, "this is status")

      toast.success("Added to cart Successfully");
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const popularResp = await axios.get("/popular");
        console.log(popularResp);  
        const dailySellsResp = await axios.get("/daily-sells");
        const dealsOfTheDayResp = await axios.get("/deals-of-the-day");
        
        setPopular(popularResp.data.products || []);
        setDailySells(dailySellsResp.data.products || []);
        setDealsOfTheDay(dealsOfTheDayResp.data.products || []);
        
        setLoading(false); // Turn off loading
      } catch (e) {
        console.log("Error fetching data:", e);
        setLoading(false); // Turn off loading to exit the loading state
      }
    };

    fetchData();
  }, []);

  // Early return while loading
  if (loading) {
    return (
      <div className="w-[100%] flex justify-center items-center  h-[500px]">
        <div className="loader"></div>
      </div>
    ); // Display loading message while data is being fetched
  }

  return (
    <>
      <div className="HomePageStart max-w-[1600px] mx-auto ">
        <HomeSlider />
        <CatSlider />

        <div className="CartCard mt-10">
          <div className="flex justify-around flex-wrap gap-6">
            <div
              className="ProductCard shadow-lg max-w-[100%]  min-w-[300px] md:min-w-[372px] w-[90%] sm:w-[30%] h-64 border bg-center bg-cover flex justify-center items-center rounded-xl"
              style={{ backgroundImage: `url(${Bg1})` }}
            >
              <div className="flex flex-col  p-4 md:p-8 relative z-[20]">
                <span className="head text-white text-left text-2xl mb-6">
                  High-Quality Components for Innovative Solutions
                </span>
                <Btn1 />
              </div>
            </div>

            <div
              className="ProductCard shadow-lg max-w-[100%] min-w-[300px] md:min-w-[372px] w-[90%] sm:w-[30%] h-64 border bg-center bg-cover flex justify-center items-center rounded-xl"
              style={{ backgroundImage: `url(${Bg2})` }}
            >
              <div className="flex flex-col p-4 md:p-8 relative z-[20]">
                <span className="head text-white text-left text-2xl mb-6">
                  Advanced Electronics for Your Creative Projects
                </span>
                <Btn1 />
              </div>
            </div>

            <div
              className="ProductCard shadow-lg   min-w-[372px] w-[30%] h-64 border bg-center bg-cover  justify-center items-center rounded-xl hidden xl:flex"
              style={{ backgroundImage: `url(${Bg3})` }}
            >
              <div className="flex flex-col p-8 relative z-[20]">
                <span className="head text-white text-left text-2xl mb-6">
                  Cutting-Edge Technology to Power Your Ideas
                </span>
                <Btn1 />
              </div>
            </div>
          </div>

          <div className="PopularProductsWrapper mt-16 px-2 ">
            <div className="popularHeader flex items-center justify-between w-[97%] mb-8">
              <h1 className="hd  ">Popular Products</h1>

              <div className="PopularNavOptions hidden 2xl:flex gap-4">
                <li className="OptionsP text-blue-700 font-semibold text-base cursor-pointer list-none transition-all duration-200">
                  All
                </li>
                <li className="OptionsP hover:text-blue-700 font-semibold text-base cursor-pointer list-none transition-all duration-200">
                  Microcontrollers & Development Boards
                </li>
                <li className="OptionsP  hover:text-blue-700 font-semibold text-base cursor-pointer list-none transition-all duration-200">
                  Sensors
                </li>
                <li className="OptionsP  hover:text-blue-700 font-semibold text-base cursor-pointer list-none transition-all duration-200">
                  Displays
                </li>
                <li className="OptionsP  hover:text-blue-700 font-semibold text-base cursor-pointer list-none transition-all duration-200">
                  Power Management
                </li>
                <li className="OptionsP  hover:text-blue-700 font-semibold text-base cursor-pointer list-none transition-all duration-200">
                  Wireless Modules & IoT
                </li>
                <li className="OptionsP  hover:text-blue-700 font-semibold text-base cursor-pointer list-none transition-all duration-200">
                  Batteries & Chargers
                </li>
              </div>
            </div>

            <div className="flex gap-3 md: md:gap-8 flex-wrap justify-evenly md:justify-normal">
              {/* from this  max-w-[230px]*/}

              {popular.map((item, index) => (
                <div
                  className="productWrapper flex flex-col w-[173px] md:w-[270px] justify-between m-1 p-2 sm:m-2  md:px-[12px] md:py-[15px]   max-h-[392px] rounded-lg relative overflow-hidden border-[1px] border-[#ececec] cursor-pointer hover:border-blue-300 hover:shadow-green-300 hover:shadow-sm transition-all duration-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleProductClick(item._id);
                  }}
                  key={item._id}
                >
                  {item.badge && (
                    <div className="text-white text-xs bg-pink-400 h-6 w-fit pl-3 pr-6 absolute z-10 top-0 left-0 rounded-ee-full flex justify-center items-center">
                      {item.badge}
                    </div>
                  )}
                  <div className="imageWrapper">
                    <img
                      src={item.imageUrls[0]}
                      alt="Product"
                      className="p-1 max-w -full rounded-xl max-w-[100%] md:max-w-[170px] m-auto"
                    />
                  </div>
                  <span className="text-xs font-normal text-zinc-500 opacity-80">
                    {item.category}
                  </span>
                  <h4 className="my-1 font-bold text-gray-700 text-base text-wrap">
                    {item.name}
                  </h4>

                  <div className="flex StarsOfRating">
                    <span className="flex">
                      {Array.from({ length: 5 }, (_, index) => {
                        const ratingValue = index + 1;
                        if (ratingValue <= Math.floor(item.rating)) {
                          return (
                            <IoIosStar
                              key={index}
                              className="text-yellow-400 text-lg"
                            />
                          );
                        } else if (
                          ratingValue === Math.ceil(item.rating) &&
                          item.rating % 1 !== 0
                        ) {
                          return (
                            <IoIosStarHalf
                              key={index}
                              className="text-yellow-400 text-lg"
                            />
                          );
                        } else {
                          return (
                            <IoIosStarOutline
                              key={index}
                              className="text-gray-300 text-lg"
                            />
                          );
                        }
                      })}
                    </span>
                    <span className="mx-3 opacity-50 text-sm">
                      ({item.rating.toFixed(1)})
                    </span>
                  </div>

                  <span className="my-1 text-sm">
                    By{" "}
                    <span className="text-green-500 text-xs">
                      {item.vendor}
                    </span>
                  </span>

                  <div className="flex justify-between items-center mt-[14px] w-full">
                    <div>
                      <span className="text-green-500 font-bold text-lg">
                        ₹{new Intl.NumberFormat("en-IN").format(item.price)}
                      </span>
                      {item.originalPrice && (
                        <span className="text-gray-400 text-sm font-bold line-through ml-2">
                          ₹
                          {new Intl.NumberFormat("en-IN").format(
                            item.originalPrice
                          )}
                        </span>
                      )}
                    </div>
                    <button  
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(item._id);
                    }} className="bg-[#DEF9EC] hidden md:flex rounded-md text-center font-medium text-green-500 ml-3  justify-center items-center text-base hover:bg-[#3BB77E] hover:text-white transition-all duration-200 hover:-translate-y-1 py-[6px] px-[20px]">
                      <IoCartOutline className="mr-1" /> Add
                    </button>
                  </div>
                </div>
              ))}

              {/* to this */}
            </div>
          </div>

          {/* Poduct sails starts here */}
          <div className="ProductSails px-3">
            <h1 className="hd mt-4 mb-4"></h1>

            <div className="popularHeader flex items-center justify-between w-[97%] mt-10 mb-7">
              <h1 className="hd  ">Daily Sells</h1>

              <div className="PopularNavOptions md:flex gap-4 hidden ">
                <li className="OptionsP text-blue-700 font-semibold text-base cursor-pointer list-none transition-all duration-200">
                  Featured
                </li>
                <li className="OptionsP hover:text-blue-700 font-semibold text-base cursor-pointer list-none transition-all duration-200">
                  Popular
                </li>
                <li className="OptionsP  hover:text-blue-700 font-semibold text-base cursor-pointer list-none transition-all duration-200">
                  New added
                </li>
              </div>
            </div>

            <div className="flex gap-4 md:gap-6 flex-wrap mx-auto">
              <div className="flex banner-sells w-96 max-w-[100%]">
                <div className="ProductCard shadow-lg w-[500px] h-96 border bg-center bg-cover  flex justify-center items-center rounded-xl"
                style={{backgroundImage: `url(${BannerLast})`}}>
                  <div className="flex flex-col p-3 md:p-8  relative z-[20]">
                    <span className="head text-white text-left text-2xl mb-6">
                      Reliable & High- Performance Electronics for Your Projects
                    </span>

                    <Btn1 />
                  </div>
                </div>
              </div>

              {/* Add to Cart  starts here*/}
              {dailySells.map((item, index) => (
                <div
                  key={item._id}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleProductClick(item._id);
                  }}
                  className="productWrapper flex flex-col p-2 md:p-3 max-w-[170px] md:w-fit rounded-lg relative overflow-hidden border-[1px] border-[#ececec] cursor-pointer hover:border-blue-400 hover:scale-105 transition-all duration-200"
                >
                  {item.badge && (
                    <div className="text-white text-xs bg-pink-400 h-6 w-fit pl-3 pr-6 absolute z-10 top-0 left-0 rounded-ee-full flex justify-center items-center">
                      {item.badge}
                    </div>
                  )}
                  <img
                    src={item.imageUrls[0]}
                    alt=""
                    className="max-w-[100%] md:max-w-[200px] w-[150px] p-1 rounded-xl m-auto"
                  />
                  <span className="text-xs font-normal text-zinc-500 opacity-80 my-1">
                    {item.category}
                  </span>

                  <h4 className="my-1 font-bold text-gray-700 text-sm">
                    {item.name}
                  </h4>

                  <div className="flex">
                    <span className="flex">
                      {Array.from({ length: 5 }, (_, index) => {
                        const ratingValue = index + 1;
                        if (ratingValue <= Math.floor(item.rating)) {
                          // Filled star
                          return (
                            <IoIosStar
                              key={index}
                              className="text-yellow-400 text-lg"
                            />
                          );
                        } else if (
                          ratingValue === Math.ceil(item.rating) &&
                          item.rating % 1 !== 0
                        ) {
                          // Half star
                          return (
                            <IoIosStarHalf
                              key={index}
                              className="text-yellow-400 text-lg"
                            />
                          );
                        } else {
                          // Empty star
                          return (
                            <IoIosStarOutline
                              key={index}
                              className="text-gray-300 text-lg"
                            />
                          );
                        }
                      })}
                    </span>
                    <span className="mx-3 opacity-50 text-sm">
                      ({item.rating.toFixed(1)})
                    </span>
                  </div>

                  <div className="my-1">
                    <span className="text-green-500 font-bold text-md my-5">
                      ₹{new Intl.NumberFormat("en-IN").format(item.price)}
                    </span>
                    {item.originalPrice && (
                      <span className="text-gray-400 text-xs font-bold line-through ml-2">
                        ₹
                        {new Intl.NumberFormat("en-IN").format(
                          item.originalPrice
                        )}
                      </span>
                    )}
                  </div>

                  <div className="bg-gray-400 h-[3px] w-[100%] rounded-lg">
                    <div className="bg-green-500 h-[100%] w-[40%] rounded-lg"></div>
                  </div>
                  <span className="text-[10px] text-gray-600 my-1">
                    Sold 19/24
                  </span>

                  <div className="flex justify-center items-center">
                    <button onClick={(e)=>{
                      e.stopPropagation();
                      addToCart(item._id)}} className="p-1 py-2 my-2 bg-blue-600 rounded-md px-3 text-center font-medium text-white w-full flex justify-center items-center text-sm hover:bg-[#FDC040] hover:-translate-y-2 transition-all duration-200">
                      <IoCartOutline className="mr-1" /> Add to Cart
                    </button>
                  </div>
                </div>
              ))}
              {/* Add to Cart end here*/}
            </div>

            {/* Poduct sails ends here */}
          </div>
          {/* Deals Of the Day Starts Here */}
          <div className="DealsOfTheDayWrapper px-3">
            <div className="popularHeader flex items-center justify-between w-[97%] mt-16 mb-7">
              <h1 className="hd ">Deals of The Day</h1>

              <div className="PopularNavOptions hidden gap-4 md:flex">
                <li className="OptionsP  hover:text-blue-700 font-semibold text-base cursor-pointer list-none transition-all duration-200 flex items-center gap-1">
                  All Deals <MdKeyboardArrowRight fontSize={"1.4rem"} />
                </li>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4  ">
              {dealsOfTheDay.map((item) => (
                <div
                  key={item._id}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleProductClick(item._id);
                  }}
                  className="shadow-lg w-[372px] h-72 border bg-blue-500 bg-center bg-cover flex justify-center items-center rounded-xl relative mb-32 mx-auto"
                  style={{ backgroundImage: `url('${item.imageUrls[0]}')` }}
                >
                  <div className="productWrapper flex flex-col p-3 w-[320px] rounded-lg overflow-hidden shadow-sm bg-white absolute -bottom-20 px-4 transition-all duration-200">
                    {item.badge && (
                      <div className="text-white text-xs bg-pink-400 h-6 w-fit pl-3 pr-6 absolute top-[-30px] left-2 rounded-ee-full flex items-center">
                        {item.badge}
                      </div>
                    )}
                    <h4 className="my-1 font-bold text-gray-700 text-md">
                      {item.name}
                    </h4>
                    <div className="flex">
                      <span className="flex">
                        {Array.from({ length: 5 }, (_, index) => {
                          const ratingValue = index + 1;
                          if (ratingValue <= Math.floor(item.rating)) {
                            // Filled star
                            return (
                              <IoIosStar
                                key={index}
                                className="text-yellow-400 text-lg"
                              />
                            );
                          } else if (
                            ratingValue === Math.ceil(item.rating) &&
                            item.rating % 1 !== 0
                          ) {
                            // Half star
                            return (
                              <IoIosStarHalf
                                key={index}
                                className="text-yellow-400 text-lg"
                              />
                            );
                          } else {
                            // Empty star
                            return (
                              <IoIosStarOutline
                                key={index}
                                className="text-gray-300 text-lg"
                              />
                            );
                          }
                        })}
                      </span>
                      <span className="mx-3 opacity-50 text-sm">
                        ({item.rating.toFixed(1)})
                      </span>
                    </div>

                    <span className="my-1 text-md">
                      By{" "}
                      <span className="text-green-500 text-sm">
                        {item.vendor}
                      </span>
                    </span>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-green-500 font-bold text-lg">
                          ₹{new Intl.NumberFormat("en-IN").format(item.price)}
                        </span>
                        {item.originalPrice && (
                          <span className="text-gray-400 text-sm font-bold line-through ml-2">
                            ₹
                            {new Intl.NumberFormat("en-IN").format(
                              item.originalPrice
                            )}
                          </span>
                        )}
                      </div>
                      <button onClick={(e)=>{
                      e.stopPropagation();
                      addToCart(item._id)}} className="p-2 bg-green-100 rounded-md px-3 text-center font-medium text-green-500 ml-2 flex justify-center items-center text-md hover:bg-[#3BB77E] hover:text-white transition-all duration-200 hover:-translate-y-1">
                        <IoCartOutline className="mr-1" /> Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Deals Of the Day Ends Here */}

          {/* Top Seling Starts Here */}

           <Sells/>

          {/* Big Banner  */}

          <FooterBanner/>
          {/* Big Banner end */}
        </div>
      </div>
    </>
  );
};

export default Home;
