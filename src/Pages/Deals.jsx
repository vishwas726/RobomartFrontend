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
import Btn1 from "../components/Buttons/Btn1";

import Bg1 from "../assets/images/Deals/Bg1.svg"
import Bg2 from "../assets/images/Deals/Bg2.svg"
import Bg3 from "../assets/images/Deals/Bg3.svg"

import cat1 from "../assets/images/Deals/cat1.svg"
import cat2 from "../assets/images/Deals/cat2.svg";
import cat3 from "../assets/images/Deals/cat3.svg";
import cat4 from "../assets/images/Deals/cat4.svg";
import cat5 from "../assets/images/Deals/cat5.svg";
import cat6 from "../assets/images/Deals/cat6.svg";
import cat7 from "../assets/images/Deals/cat7.svg";
import cat8 from "../assets/images/Deals/cat8.svg";

import { FooterBanner } from "../components/FooterBanner";
import Sells from "../components/Sells";
const Deals = () => {
    const [loading, setLoading] = useState(true);

    const [products, setProducts] = useState([])

    const navigate = useNavigate()

    const { user } = useAuth()
    const handleProductClick = (id) => {


        navigate(`/singlePro/${id}`);
    };
    const handleCategoryClick = (category) => {
        // Navigate to a new route based on the category clicked
        navigate(`/category/${category.toLowerCase()}`);
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
                console.log(res.data.products)
                setProducts(res.data.products || []);
                setLoading(false); // Turn off loading
            } catch (e) {
                console.log("Error fetching data:", e);
                setLoading(false); // Turn off loading
            }

        }
        getData()
    }, [])


    if (loading) {
        return (
            <div className="w-[100%] flex justify-center items-center  h-[500px]">
                <div className="loader"></div>
            </div>
        ); // Display loading message while data is being fetched
    }

    return (
        <div className="deals mt-10 ">
            <div className="max-w-[1600px] mx-auto">
                <div className="flex  gap-10 px-4">
                    <div className="w-[20%] hidden lg:block">
                        <FilterSideBar />
                    </div>
                    <div className="w-full lg:w-[70%]">
                        <div className={`bg-bottom bg-cover h-[400px] bg-gray-700 w- [90%] mx-auto rounded-lg flex flex-col justify-center`}
                            style={{ backgroundImage: `url(${dealsBanner})` }}  >
                            <div className="max-w-[800px] ml-10">
                                <h1 className="text-white text-[2rem] md:text-[2.5rem] font-bold">Don’t miss out on <br /> incredible deals on <br /> electronic components!</h1>
                                <p className="text-white text-lg mt-4">Subscribe now for the latest updates and exclusive offers on electronic components!</p>
                                <form action="/" method="get">
                                    <div className=" bg-white rounded-full h-16 w-[300px]  items-center md:w-[444px] hidden md:flex justify-between mt-10">
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
                        <div className="popularHeader flex items-center justify-between w-[97%] mb-8">
                            <h1 className="hd  ">Categories</h1>

                            <div className="PopularNavOptions hidden 2xl:flex gap-4">
                                <li className="OptionsP text-blue-700 font-semibold text-base cursor-pointer list-none transition-all duration-200">
                                    All
                                </li>
                                <li className="OptionsP hover:text-blue-700 font-semibold text-base cursor-pointer list-none transition-all duration-200">
                                    Batteries
                                </li>
                                <li className="OptionsP  hover:text-blue-700 font-semibold text-base cursor-pointer list-none transition-all duration-200">
                                    Chargers
                                </li>
                                <li className="OptionsP  hover:text-blue-700 font-semibold text-base cursor-pointer list-none transition-all duration-200">
                                    Jumper wires
                                </li>
                                <li className="OptionsP  hover:text-blue-700 font-semibold text-base cursor-pointer list-none transition-all duration-200">
                                    Diodes
                                </li>
                                <li className="OptionsP  hover:text-blue-700 font-semibold text-base cursor-pointer list-none transition-all duration-200">
                                    Microcontrollers & ICs
                                </li>

                            </div>
                        </div>
                        <div className="flex md:gap-3 md: md:gap-y-8 flex-wrap justify-evenly md:justify-start">
                            {products.map((item, index) => (
                                <div
                                    className="productWrapper flex flex-col w-[170px] md:w-[230px] justify-between m-1 p-2 sm:m-2  md:px-[12px] md:py-[15px]   max-h-[392px] rounded-lg relative overflow-hidden border-[1px] border-[#ececec] cursor-pointer hover:border-blue-300 hover:shadow-green-300 hover:shadow-sm transition-all duration-200"
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
                                            className="p-1 max-w -full rounded-xl  max-w-[170px] m-auto"
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
                            {products.slice(1, 7).map((item) => (
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


                        <div className="flex justify-around flex-wrap gap- 6 flex-row-reverse">
                            <div
                                className=" ProductCard shadow-lg max-w-[100%]  min-w-[300px] md:min-w-[272px] w-[90%] sm:w-[30%] h-64 border bg-center bg-cover flex justify-center items-center rounded-xl"
                                style={{ backgroundImage: `url(${Bg1})` }}
                            >
                                <div className="flex flex-col  p-4 md:p-8 relative z-[20]">
                                    <span className="head text-white text-left text-2xl mb-6 font-medium">
                                        High-Quality Components for Innovative Solutions
                                    </span>
                                    <Btn1 />
                                </div>
                            </div>

                            <div
                                className=" ProductCard shadow-lg max-w-[100%] min-w-[300px] md:min-w-[272px] w-[90%] sm:w-[30%] h-64 border bg-center bg-cover flex justify-center items-center rounded-xl"
                                style={{ backgroundImage: `url(${Bg2})` }}
                            >
                                <div className="flex flex-col p-4 md:p-8 relative z-[20]">
                                    <span className="head text-white text-left text-2xl mb-6 font-medium">
                                        Advanced Electronics for Your Creative Projects
                                    </span>
                                    <Btn1 />
                                </div>
                            </div>

                            <div
                                className=" ProductCard shadow-lg   min-w-[272px] w-[30%] h-64 border bg-center bg-cover  justify-center items-center rounded-xl hidden xl:flex"
                                style={{ backgroundImage: `url(${Bg3})` }}
                            >
                                <div className="flex flex-col p-8 relative z-[20]">
                                    <span className="head text-white text-left text-2xl mb-6 font-medium">
                                        Cutting-Edge Technology to Power Your Ideas
                                    </span>
                                    <Btn1 />
                                </div>
                            </div>
                        </div>

                    </div></div>
                    <div className="px-2">
      <div className="popularHeader flex items-center justify-between w-[97%] mt-12 mb-7">
        <h1 className="hd text-[25px] md:text-[34px]">Shop by Categories</h1>

        <div className="PopularNavOptions hidden gap-4 md:flex">
          <li className="OptionsP hover:text-blue-700 font-semibold text-base cursor-pointer list-none transition-all duration-200 flex items-center gap-1">
            All Categories <MdKeyboardArrowRight fontSize={"1.4rem"} />
          </li>
        </div>
      </div>

      <div className="flex justify-between gap-6 md:gap-3 pb-5 md:pb-0 overflow-x-scroll md:overflow-x-auto">
        {/* Category 1 */}
        <div
          onClick={() => handleCategoryClick("Electronic Components")} // Add onClick to navigate
          className="flex flex-col items-center gap-5 justify-center p-4 w-[158px] bg-[#F4F6FA] md:h-[215px] rounded-lg cursor-pointer hover:scale-105 transition-all duration-200"
        >
          <img src={cat1} alt="Electronic Components" className="max-w-[80px]" />
          <p className="text-sm text-center font-bold">Electronic Components</p>
        </div>

        {/* Category 2 */}
        <div
          onClick={() => handleCategoryClick("Power Supplies")} // Add onClick to navigate
          className="flex flex-col items-center gap-5 justify-center p-4 w-[158px] bg-[#F4F6FA] md:h-[215px] rounded-lg cursor-pointer hover:scale-105 transition-all duration-200"
        >
          <img src={cat2} alt="Power Supplies" className="max-w-[80px]" />
          <p className="text-sm text-center font-bold">Power Supplies</p>
        </div>

        {/* Category 3 */}
        <div
          onClick={() => handleCategoryClick("Tools & Equipment")} // Add onClick to navigate
          className="flex flex-col items-center gap-5 justify-center p-4 w-[158px] bg-[#F4F6FA] md:h-[215px] rounded-lg cursor-pointer hover:scale-105 transition-all duration-200"
        >
          <img src={cat3} alt="Tools & Equipment" className="max-w-[80px]" />
          <p className="text-sm text-center font-bold">Tools & Equipment</p>
        </div>

        {/* Category 4 */}
        <div
          onClick={() => handleCategoryClick("PCB Components")} // Add onClick to navigate
          className="flex flex-col items-center gap-5 justify-center p-4 w-[158px] bg-[#F4F6FA] md:h-[215px] rounded-lg cursor-pointer hover:scale-105 transition-all duration-200"
        >
          <img src={cat4} alt="PCB Components" className="max-w-[80px]" />
          <p className="text-sm text-center font-bold">PCB Components</p>
        </div>

        {/* Category 5 */}
        <div
          onClick={() => handleCategoryClick("Cables & Wires")} // Add onClick to navigate
          className="flex flex-col items-center gap-5 justify-center p-4 w-[158px] bg-[#F4F6FA] md:h-[215px] rounded-lg cursor-pointer hover:scale-105 transition-all duration-200"
        >
          <img src={cat5} alt="Cables & Wires" className="max-w-[80px]" />
          <p className="text-sm text-center font-bold">Cables & Wires</p>
        </div>

        {/* Category 6 */}
        <div
          onClick={() => handleCategoryClick("Motors & Actuators")} // Add onClick to navigate
          className="flex flex-col items-center gap-5 justify-center p-4 w-[158px] bg-[#F4F6FA] md:h-[215px] rounded-lg cursor-pointer hover:scale-105 transition-all duration-200"
        >
          <img src={cat6} alt="Motors & Actuators" className="max-w-[80px]" />
          <p className="text-sm text-center font-bold">Motors & Actuators</p>
        </div>

        {/* Category 7 */}
        <div
          onClick={() => handleCategoryClick("LEDs & Displays")} // Add onClick to navigate
          className="flex flex-col items-center gap-5 justify-center p-4 w-[158px] bg-[#F4F6FA] md:h-[215px] rounded-lg cursor-pointer hover:scale-105 transition-all duration-200"
        >
          <img src={cat7} alt="LEDs & Displays" className="max-w-[80px]" />
          <p className="text-sm text-center font-bold">LEDs & Displays</p>
        </div>

        {/* Category 8 */}
        <div
          onClick={() => handleCategoryClick("Heat Sinks & Cooling Solutions")} // Add onClick to navigate
          className="flex flex-col items-center gap-5 justify-center p-4 w-[158px] bg-[#F4F6FA] md:h-[215px] rounded-lg cursor-pointer hover:scale-105 transition-all duration-200"
        >
          <img src={cat8} alt="Heat Sinks & Cooling Solutions" className="max-w-[80px]" />
          <p className="text-sm text-center font-bold">Heat Sinks & Cooling Solutions</p>
        </div>
      </div>
    </div>

                <Sells />

                <FooterBanner /></div>



        </div>
    );
};

export default Deals;
