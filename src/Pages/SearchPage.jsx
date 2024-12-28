import React, { useState } from "react";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import notFound from "../../src/assets/notFound.json";
// import FilterSideBar from '../FilterSideBar';
import FilterSideBar from "../components/FilterSideBar";

import axios from "axios";
import { toast } from "react-toastify";

const SearchPage = ({ singleProd }) => {
  const navigate = useNavigate(); // Make sure to call useNavigate here
  const { user, login, logout } = useAuth();
  // console.log("this is meee", singleProd)
  const handleProductClick = (id) => {
    // console.log("Product ID:", id);

    navigate(`/singlePro/${id}`);
  };

  const [cart, setCart] = useState([]);

  // Function to handle adding to cart
  const addToCart = async (id) => {
    try {
      if (!user || !user.token) {
        toast.error("Login First");
        navigate("/login");
        return;
      }

      const res = await axios.post(
        "/cart", // Endpoint URL
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

  return (
    <div className="containe gap-4 mt-12 flex  w-[100%] h-fit max-w-[1600px] mx-auto">
      <div className="right   w-[24%]     h-[2000px] hidden xl:block">
        <FilterSideBar />
      </div>
      <div className="flex gap-4 flex-col w-full mx-4">
        {singleProd.map((item, index) => (
          <div className="ProductCol flex border-[1px] border-[#ececec] rounded h-fit p-3 md:p-[25px] w-full gap-40 hover:border-blue-300 hover:shadow-green-300 hover:shadow-sm transition-all duration-200">
            <div
              className="productWrapper mx-auto  md:mx-0   flex flex-col  rounded-lg   relative overflow-hidden h-fit  bo rder-[1px] border- [#ececec] cursor-pointer    transition-all duration-200 "
              // onClick={() => }
              onClick={(e) => {
                e.stopPropagation();
                handleProductClick(item._id);
              }}
              key={item._id}
            >
              <div className="text-white text-xs bg-pink-400 h-6  w-fit pl-3 pr-6  absolute z-10 top-0 left-0   rounded-ee-full  flex justify-center items-center  ">
                {" "}
                {item.badge}
              </div>
              <div className="imageWrraper  ">
                <img
                  src={item.imageUrl}
                  alt="size-[168px]"
                  className="  p-1 max-w-full rounded-xl w-[170px] m-auto"
                />
              </div>
              <div className="details">
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
                <span className="my-1 text-sm">
                  {" "}
                  By{" "}
                  <span className="text-green-500 text-xs">
                    {" "}
                    {item.vendor}{" "}
                  </span>
                </span>
                <div className="flex justify-between items-center mt-[14px] w-fit ">
                  <div>
                    <span className="text-green-500 font-bold  text-lg ">
                      Rs.{item.price}
                    </span>
                    <span className="text-gray-400 text-sm font-bold line-through ml-2 ">
                      Rs.{item.originalPrice}
                    </span>
                  </div>
                  <button
                    className=" bg-[#DEF9EC] text-sm md:text-base  rounded-md text-center font-medium text-green-500 ml-3 flex justify-center items-center text-nowrap hover:bg-[#3BB77E] hover:text-white transition-all duration-200 hover:-translate-y-1 py-[6px] px-[20px]"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(item._id);
                    }}
                  >
                    <IoCartOutline className="mr-1" />
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
            <div className="productWrapperRight  gap-5 mt-4 hidden md:flex mx-auto">
              <div className="list mt-3 space-y- text-sm sm:text-base">
                <h4 className="font-bold text-base text-blue-500 mb-2">
                  Specifications :{" "}
                </h4>
                {item.specifications.map((spec, index) => (
                  <li className=" text-gray-500 font-medium  list- decimal">
                    {spec}
                  </li>
                ))}
              </div>

              <div className="list mt-3 space-y- text-sm sm:text-base hidden lg:block">
                <h4 className="font-bold text-base text-blue-500 mb-2">
                  Features :{" "}
                </h4>
                <ul className="list-disc pl-5 font-medium text-[#7E7E7E]">
                  {item.features.map((use, index) => (
                    <li key={index}>{use}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>{" "}
    </div>
  );
};

export default SearchPage;
