import React, { useEffect, useState } from "react";
import FilterSideBar from "../components/FilterSideBar";
import dealsBanner from "../assets/images/Deals/dealsBanner.svg";
import { FaRegPaperPlane } from "react-icons/fa";
import axios from "axios";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { MdKeyboardArrowRight } from "react-icons/md";

import { FooterBanner } from "../components/FooterBanner";
import ShopBanner from "../assets/images/ShopBanner.svg"

const Shop = () => {
  const [loading, setLoading] = useState(true);

  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  const { user } = useAuth();
  const handleProductClick = (id) => {
    navigate(`/singlePro/${id}`);
  };

  const addToCart = async (id) => {
    try {
      if (!user || !user.token) {
        toast.error("Login First");
        // navigate("/login");
        return;
      }

      const res = await axios.post(
        "/api/cart", // Endpoint URL
        {
          productId: id,
          quantity: 1,
        },
        {
          headers: { authorization: "Bearer " + user.token }, // Authorization header
        }
      );

      toast.success("Added to cart Successfully");
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("/api/popular");
        console.log(res.data.products);
        setProducts(res.data.products || []);
        setLoading(false); // Turn off loading
      } catch (e) {
        console.log("Error fetching data:", e);
        setLoading(false); // Turn off loading
      }
    };
    
    getData();

  }, []);

  if (loading) {
    return (
      <div className="w-[100%] flex justify-center items-center  h-[500px]">
        <div className="loader"></div>
      </div>
    ); // Display loading message while data is being fetched
  }

  return (
    <div className="deals mt-6 ">
      <div className="max-w-[1600px] mx-auto">

        <div className="h-[240px] p-2 w-[95%] mx-auto border rounded-[20px] shadow-md sm:px-5 flex md:justify-between items-center flex-col md:flex-row gap-5 bg-center bg-cover"
          style={{ backgroundImage: `url(${ShopBanner})` }}
        >
          <div className="">
            <h1 className="text-white text-3xl md:text-[2.5rem] font-bold">Flight Controller & Accessories</h1>
            <p className="text-white opacity-80">Drone parts</p>
          </div>
          <div className="flex gap-1 md:gap-10">

            <div className="rounded-full  w-[80px] text-sm sm:text-base sm:w-[100px] -[115px] h-[38px] sm:h-[42px] cursor-pointer  bg-white text-blue-600 font-semibold flex justify-center items-center">
              Project
            </div>
            <div className="rounded-full  w-[80px] text-sm sm:text-base sm:w-[100px] [115px] h-[38px] sm:h-[42px] cursor-pointer  bg-white text-blue-600 font-semibold flex justify-center items-center">
            Events
            </div>
            <div className="rounded-full  w-[80px] text-sm sm:text-base sm:w-[100px] [115px] h-[38px] sm:h-[42px] cursor-pointer  bg-white text-blue-600 font-semibold flex justify-center items-center">
            News
            </div>
            <div className="rounded-full  w-[80px] text-sm sm:text-base sm:w-[100px] [115px] h-[38px] sm:h-[42px] cursor-pointer  bg-white text-blue-600 font-semibold flex justify-center items-center">
            Tutorials
            </div>

          </div>

        </div>
        <div className="flex  gap-10 px-2 md:px-4 mt-10 mx-1">
          <div className="w-[20%] hidden lg:block">
            <FilterSideBar />
          </div>
          <div className="w-full lg:w-[70%]">

            <div className="popularHeader flex items-center justify-between w-[97%] mb-8">
              {/* <h1 className="  ">We found  <span className="text-blue-700 font-bold " >29 </span> items for you!</h1> */}

              <div className=""></div>
            </div>
            <div className="flex gap-3 md: md:gap-y-8 flex-wrap justify-evenly md:justify-start">
              {products.map((item, index) => (
                <div
                  className="productWrapper flex flex-col w-[172px] md:w-[230px] justify-between m- 1 p-2 sm:m-2  md:px-[12px] md:py-[15px]   max-h-[392px] rounded-lg relative overflow-hidden border-[1px] border-[#ececec] cursor-pointer hover:border-blue-300 hover:shadow-green-300 hover:shadow-sm transition-all duration-200"
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
                      className=" max-w -full rounded-xl  md:max-w-[170px] m-auto"
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
                      }}
                      className="bg-[#DEF9EC] hidden md:flex rounded-md text-center font-medium text-green-500 ml-3  justify-center items-center text-base hover:bg-[#3BB77E] hover:text-white transition-all duration-200 hover:-translate-y-1 py-[6px] px-[20px]"
                    >
                      <IoCartOutline className="mr-1" /> Add
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="popularHeader flex items-center justify-between w-[97%] mt-12 mb-7">
              <h1 className="hd ">Deals of The Day</h1>

              <div className="PopularNavOptions hidden gap-4 md:flex">
                <li className="OptionsP  hover:text-blue-700 font-semibold text-base cursor-pointer list-none transition-all duration-200 flex items-center gap-1">
                  All Deals <MdKeyboardArrowRight fontSize={"1.4rem"} />
                </li>
              </div>
            </div>

            <div className="flex gap-4 flex-wrap ">
              {products.slice(1, 4).map((item) => (
                <div
                  key={item._id}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleProductClick(item._id);
                  }}
                  className="shadow-lg w-[292px] h-72 border bg-blue-500 bg-center bg-cover flex justify-center items-center rounded-xl relative mb-32 mx-auto"
                  style={{ backgroundImage: `url('${item.imageUrls[0]}')` }}
                >
                  <div className="flex gap-4">
                    <div className=" bg-white h -[65px] w- [48px] rounded-lg py-4 px-2 flex flex-col justify-center text-center shadow-sm">
                      <p className="text-green-400">4</p>
                      <p className="text-gray-500 text-sm">Days</p>
                    </div>
                    <div className=" bg-white h -[65px] w- [48px] rounded-lg py-4 px-2 flex flex-col justify-center text-center shadow-sm">
                      <p className="text-green-400">46</p>
                      <p className="text-gray-500 text-sm">hours</p>
                    </div>
                    <div className=" bg-white h -[65px] w- [48px] rounded-lg py-4 px-2 flex flex-col justify-center text-center shadow-sm">
                      <p className="text-green-400">26</p>
                      <p className="text-gray-500 text-sm">mins</p>
                    </div>
                    <div className=" bg-white h -[65px] w- [48px] rounded-lg py-4 px-2 flex flex-col justify-center text-center shadow-sm">
                      <p className="text-green-400">16</p>
                      <p className="text-gray-500 text-sm">sec</p>
                    </div>
                  </div>

                  <div className="productWrapper flex flex-col p-3 w-[256px] rounded-lg overflow-hidden shadow-sm bg-white absolute -bottom-20 px-4 transition-all duration-200">
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
                      <button className="p-2 bg-green-100 rounded-md px-3 text-center font-medium text-green-500 ml-2 flex justify-center items-center text-md hover:bg-[#3BB77E] hover:text-white transition-all duration-200 hover:-translate-y-1">
                        <IoCartOutline className="mr-1" /> Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>


          </div>
        </div>


        <FooterBanner />
      </div>
    </div>
  );
};

export default Shop;
