import { BiFilterAlt } from "react-icons/bi"
import Cat1 from "../assets/images/FilterSideBar/Cat1.svg"
import Cat2 from "../assets/images/FilterSideBar/Cat2.svg"

import Cat3 from "../assets/images/FilterSideBar/Cat3.svg"
import Cat4 from "../assets/images/FilterSideBar/Cat4.svg"

// import PriceRangeSlider from "./components/PriceRange"
import PriceRangeSlider from "./PriceRange"

import { CiFilter } from "react-icons/ci";
import { useEffect, useState } from "react"
import axios from "axios"
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io"
import { useNavigate } from "react-router-dom"
function FilterSideBar() {

    const [dealsOfTheDay, setDealsOfTheDay] = useState([]);

const navigate= useNavigate()
    const handleProductClick = (id) => {
      
    
        navigate(`/singlePro/${id}`);
      };

    useEffect(() => {
        const fetchData = async () => {
            try {
              
                const dealsOfTheDayResp = await axios.get(
                    "/deals-of-the-day"
                );
               

                setDealsOfTheDay(dealsOfTheDayResp.data.products);
               
            } catch (e) {
                console.log("Error fetching data:", e);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="SideBarWrapper space-y-6">

            <div className="CategoriesFilter shadow-md  rounded-xl p-4">

                <h4 className="text-2xl font-bold">Category</h4>
                <div className="lineH w-full h-[1px] bg-gray-200 my-3 rounded-full "> <div className=" w-[24%]  bg-blue-500 h-[3px] rounded-full"></div></div>
                <div className="AllCatBox mt-4 space-y-4 ">
                    <div className="catBox flex justify-between items-center gap-3 shadow-sm py-2 pl-3 w-[90%] rounded-md pr-1 ">
                        <div className="ImgAndCat flex gap-3 items-center">
                            <img src={Cat1} alt="" className="size-7" />

                            <span className=" text-sm"> Microcontroller </span>
                        </div>

                        <div className="badgeCi rounded-full bg-[#3c52b6] text-white w-5 h-5  flex justify-center items-center text-xs">
                            3
                        </div>

                    </div>

                    <div className="catBox flex justify-between items-center gap-3 shadow-sm py-2 pl-3 w-[90%] rounded-md pr-1 ">
                        <div className="ImgAndCat flex gap-3 items-center">
                            <img src={Cat2} alt="" className="size-7" />

                            <span className=" text-sm"> Sensors & Modules </span>
                        </div>

                        <div className="badgeCi rounded-full bg-[#3c52b6] text-white w-5 h-5  flex justify-center items-center text-xs">
                            3
                        </div>

                    </div>

                    <div className="catBox flex justify-between items-center gap-3 shadow-sm py-2 pl-3 w-[90%] rounded-md pr-1 ">
                        <div className="ImgAndCat flex gap-3 items-center">
                            <img src={Cat3} alt="" className="size-7" />

                            <span className=" text-sm"> Actuators & Motors </span>
                        </div>

                        <div className="badgeCi rounded-full bg-[#3c52b6] text-white w-5 h-5  flex justify-center items-center text-xs">
                            3
                        </div>

                    </div>
                    <div className="catBox flex justify-between items-center gap-3 shadow-sm py-2 pl-3 w-[90%] rounded-md pr-1 ">
                        <div className="ImgAndCat flex gap-3 items-center">
                            <img src={Cat4} alt="" className="size-7" />

                            <span className=" text-sm"> Microcontroller </span>
                        </div>

                        <div className="badgeCi rounded-full bg-[#3c52b6] text-white w-5 h-5  flex justify-center items-center text-xs">
                            3
                        </div>

                    </div>
                </div>

            </div>

            <div className="RangeFilter shadow-md  rounded-xl p-4">

                <h4 className="text-xl font-bold">Fill by price</h4>
                <div className="lineH w-full h-[1px] bg-gray-200 my-3 rounded-full "> <div className=" w-[24%]  bg-blue-500 h-[3px] rounded-full"></div></div>


                <div className="rangeInput mt-10" >
                    <PriceRangeSlider />
                </div>

                <div className="ColorChoose">

                    <h4 className="text-gray-500 text-sm font-bold ">Color</h4>

                    <div className="flex flex-col items-start gap-0 mt-2">
                        <label className="text-sm font-semibold text-gray-500 form-label flex items-center gap-2.5 cursor-pointer">
                            <input className="checkbox border-none outline-none shadow-sm   checked:bg-indigo-600 checked:border-indigo-600" name="check" type="checkbox" value="1" />
                            Red (56)
                        </label>

                        <label className="text-sm font-semibold text-gray-500 form-label flex items-center gap-2.5 cursor-pointer">
                            <input className="checkbox border-none outline-none shadow-sm   checked:bg-indigo-600 checked:border-indigo-600" name="check" type="checkbox" value="1" />
                            Green (78)
                        </label>

                        <label className="text-sm font-semibold text-gray-500 form-label flex items-center gap-2.5 cursor-pointer">
                            <input className="checkbox border-none outline-none shadow-sm   checked:bg-indigo-600 checked:border-indigo-600" name="check" type="checkbox" value="1" />
                            Blue (54)
                        </label>


                    </div>


                </div>

                <div className="ItemConditionrChoose mt-3">

                    <h4 className="text-gray-500 text-sm font-bold ">Item Condition</h4>

                    <div className="flex flex-col items-start gap-1 mt-2">
                        <label className="text-sm font-semibold text-gray-500 form-label flex items-center gap-2.5 cursor-pointer">
                            <input className="checkbox border-none outline-none shadow-sm   checked:bg-indigo-600 checked:border-indigo-600" name="check" type="checkbox" value="1" />
                            New (1506)
                        </label>

                        <label className="text-sm font-semibold text-gray-500 form-label flex items-center gap-2.5 cursor-pointer">
                            <input className="checkbox border-none outline-none shadow-sm   checked:bg-indigo-600 checked:border-indigo-600" name="check" type="checkbox" value="1" />
                            Refurbished (27)
                        </label>

                        <label className="text-sm font-semibold text-gray-500 form-label flex items-center gap-2.5 cursor-pointer">
                            <input className="checkbox border-none outline-none shadow-sm   checked:bg-indigo-600 checked:border-indigo-600" name="check" type="checkbox" value="1" />
                            Used (45)
                        </label>


                    </div>


                </div>
                <button className=" my-4 addCart  bg-[#3f51b5] text-white rounded-md flex items-center gap-2 text-base w-fit pl-6 pr-3 py-[8px]  cursor-pointer hover:bg-blue-500 active:bg-black">
                    <BiFilterAlt className="size-5" /> <span>Filter</span>
                </button>


            </div>



            <div className="NewProducts flex TopSeling flex-col gap-4 shadow-md  rounded-xl p-4">

                <h4 className="text-2xl font-bold">New products</h4>

                <div className="flex flex-col">
                    {dealsOfTheDay.map((item, index) => (

                        <div onClick={() =>handleProductClick(item._id)} key={item._id} className=" cursor-pointer flex ProductInfo  p-2  rounded-lg  overflow-hidden  items-center">
                            <div className="imageDiv p-1">
                                <img
                                    src={item.imageUrl}
                                    alt=""
                                    className="w-[200px]  max-w-full rounded-xl m-auto"
                                />
                            </div>
                            <div className="infoDiv pl-2">
                                <h4 className="my-1 font-bold  text-md text-blue-800 text-wrap">
                                    {item.name}
                                </h4>

                                <div className="flex">
                                    <span className="flex">
                                        {Array.from({ length: 5 }, (_, index) => {
                                            const ratingValue = index + 1;
                                            if (ratingValue <= Math.floor(item.rating)) {
                                                // Filled star
                                                return <IoIosStar key={index} className="text-yellow-400 text-lg" />;
                                            } else if (ratingValue === Math.ceil(item.rating) && item.rating % 1 !== 0) {
                                                // Half star
                                                return (
                                                    <IoIosStarHalf key={index} className="text-yellow-400 text-lg" />
                                                );
                                            } else {
                                                // Empty star
                                                return <IoIosStarOutline key={index} className="text-gray-300 text-lg" />;
                                            }
                                        })}
                                    </span>
                                    <span className="mx-3 opacity-50 text-sm">({item.rating.toFixed(1)})</span>
                                </div>

                                <div className="flex justify-between items-center mt-2">
                                    <div>
                                        <span className="text-green-500 font-bold  text-lg">
                                            Rs.{item.price}
                                        </span>
                                        <span className="text-gray-400 text-sm font-bold line-through ml-2 ">
                                            Rs.{item.originalPrice}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </div>
    );
};








export default FilterSideBar;
