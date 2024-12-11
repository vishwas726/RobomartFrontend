import React, { useState } from "react";
import { Button } from "@mui/material";
import { MdGridView } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaTh, FaHeadset } from "react-icons/fa";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
import megaImg from "/megaImg.jpg"

import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Nav = () => {

  const [isAnim, setIsAnim] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);


  // console.log(isAnim);


  return (
    <div className=" h-20  justify-center items-center hidden  md:flex max-w-[1600px] mx-auto">
      <div className="container-fluid w-full ">
        <div className=" flex items-center justify-between  gap-4 relative px-5">
          <div className="flex text-nowrap capitalize mx -auto items-center ">
            <div className="hidden lg:block">
            <Button
              className="nav-button  text-nowrap bg-[var(--primary-color)] text-white p-[0.5rem_1rem] font-bold rounded-[4px]  "
              style={{ backgroundColor: "var(--primary-color)", color: "#fff" }} // Inline style for better control
            >
              <MdGridView className="size-5 " /> &nbsp; Browse all categories &nbsp;{" "}
              <MdKeyboardArrowDown />
            </Button></div>
            <div className="flex">
              {/* Center: Navigation Links */}
              <div className="flex justify-content-center flex-1">
                <ul className="navbar-nav flex flex-row w-full">
                  <li className="nav-item px-[10px]">
                  <Link  className="nav-link flex items-center justify-center font-bold  ml-[1rem] text-[var(--text-color)] hover:text-[var(--primary-color)] text-nowrap text-purple-600" to="/deals">

                      <MdOutlineLocalFireDepartment fontSize={"1.5rem"} className="text-purple-600" />
                      &nbsp; Deals
                      </Link>
                  </li>
                  <li className="nav-item px-[10px] font-bold">
                    <Link  className="nav-link flex items-center justify-center font-bold  ml-[1rem] text-[var(--text-color)] hover:text-[var(--primary-color)] text-nowrap text-blue-800" to="/">
                      Home <MdKeyboardArrowDown />
                    </Link>
                  </li>
                  <li className="nav-item px-[10px]">
                    <Link  className="nav-link flex items-center justify-center font-bold  ml-[1rem] text-[var(--text-color)] hover:text-[var(--primary-color)]" to="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item px-[10px]">
                    <Link  className="nav-link flex items-center justify-center font-bold  ml-[1rem] text-[var(--text-color)] hover:text-[var(--primary-color)] text-nowrap" to="/shop">
                      Shop
                    </Link>
                  </li>
                  {/* <li className="group nav-item px-[10px] relative">
                    <Link  className="nav-link flex items-center justify-center font-bold  ml-[1rem] text-[var(--text-color)] hover:text-[var(--primary-color)] text-nowrap group-hover:text-blue-700" to="/">
                      Vendors <MdKeyboardArrowDown />
                    </Link>

                    <div className="absolute z-10  bg-white rounded-md w-56 h-46 left-0 p-4 hidden group-hover:flex shadow-[5px_5px_15px_#0000000D] border border-[#ececec] transition-all duration-300 ease-in">
                      <ul className="w-full ">
                        <li className="hover:text-blue-500 transition-all ease-out duration-500  text-sm text-wrap  cursor text-[#7E7E7E] px-[14px] font-bold mb-[21px]">Drone Parts Vendors</li>
                        <li className="hover:text-blue-500 transition-all ease-out duration-500  text-sm text-wrap  cursor text-[#7E7E7E] px-[14px] font-bold mb-[21px]">Robot Parts Vendors</li>
                        <li className="hover:text-blue-500 transition-all ease-out duration-500  text-sm text-wrap  cursor text-[#7E7E7E] px-[14px] font-bold mb-[21px]">Electronic Components Vendors</li>
                        <li className="hover:text-blue-500 transition-all ease-out duration-500  text-sm text-wrap  cursor text-[#7E7E7E] px-[14px] font-bold mb-[21px]">OEM Manufacturers</li>
                        <li className="hover:text-blue-500 transition-all ease-out duration-500  text-sm text-wrap  cursor text-[#7E7E7E] px-[14px] font-bold mb-[21px]">Authorized Resellers</li>
                      </ul>
                    </div>
                  </li> */}
                  <li className="group nav-item px-[10px] group "  onMouseEnter={() => { setIsAnim(false) }} onMouseOut={() => { setIsAnim(false) }}>
                    <a className="nav-link flex items-center justify-center font-bold  ml-[1rem] text-[var(--text-color)] hover:text-[var(--primary-color)] text-nowrap group-hover:text-blue-700" href="#">
                      Mega Menu <MdKeyboardArrowDown />
                    </a>

                    <div className={`absolute  z-[55] shadow-[5px_5px_15px_#0000000D] border mt-3 group border-[#ececec] bg-white transition-all ease-in  hidden rounded-bl-[10px] rounded-br-[10px] left-0 top-6  pt-9 pr-6 pb-9 pl-9  group-hover:flex
                    `}>

{/* ${isAnim ? 'top-full opacity-100 visible' : 'top-[130%] invisible opacity-0'} */}
                      <ul className="w-[100%]  gap-4 justify-start items-center  grid grid-cols-2 xl:grid-cols-4">
                        <div className="w- [23%]">
                          <h4 className="text-xl text-blue-500 mb-[28px] font-bold">Drone & Robotics Components</h4>
                          <li className="hover:text-blue-500 transition-all ease-out duration-500 text-sm cursor text-[#7E7E7E] px-[14px] font-bold mb-[14px]">Quadcopters</li>
                          <li className="hover:text-blue-500 transition-all ease-out duration-500 text-sm cursor text-[#7E7E7E] px-[14px] font-bold mb-[14px]">Hexacopters</li>
                          <li className="hover:text-blue-500 transition-all ease-out duration-500 text-sm cursor text-[#7E7E7E] px-[14px] font-bold mb-[14px]">FPV Drones</li>
                          <li className="hover:text-blue-500 transition-all ease-out duration-500 text-sm cursor text-[#7E7E7E] px-[14px] font-bold mb-[14px]">Drone Frames</li>
                          <li className="hover:text-blue-500 transition-all ease-out duration-500 text-sm cursor text-[#7E7E7E] px-[14px] font-bold mb-[14px]">Robot Kits</li>
                          <li className="hover:text-blue-500 transition-all ease-out duration-500 text-sm cursor text-[#7E7E7E] px-[14px] font-bold mb-[14px]">Chassis & Frames</li>
                        </div>

                        <div className="w- [23%]">
                          <h4 className="text-xl text-blue-500 mb-[28px] font-bold">Electronics & Controllers</h4>
                          <li className="hover:text-blue-500 transition-all ease-out duration-500 text-sm cursor text-[#7E7E7E] px-[14px] font-bold mb-[14px]">Microcontrollers</li>
                          <li className="hover:text-blue-500 transition-all ease-out duration-500 text-sm cursor text-[#7E7E7E] px-[14px] font-bold mb-[14px]">Raspberry Pi</li>
                          <li className="hover:text-blue-500 transition-all ease-out duration-500 text-sm cursor text-[#7E7E7E] px-[14px] font-bold mb-[14px]">Flight Controllers</li>
                          <li className="hover:text-blue-500 transition-all ease-out duration-500 text-sm cursor text-[#7E7E7E] px-[14px] font-bold mb-[14px]">Receivers & Transmitters</li>
                          <li className="hover:text-blue-500 transition-all ease-out duration-500 text-sm cursor text-[#7E7E7E] px-[14px] font-bold mb-[14px]">Servo Motors</li>
                          <li className="hover:text-blue-500 transition-all ease-out duration-500 text-sm cursor text-[#7E7E7E] px-[14px] font-bold mb-[14px]">Camera Modules</li>
                        </div>

                        <div className="w- [23%]">
                          <h4 className="text-xl text-blue-500 mb-[28px] font-bold">Sensors & Power Systems</h4>
                          <li className="hover:text-blue-500 transition-all ease-out duration-500 text-sm cursor text-[#7E7E7E] px-[14px] font-bold mb-[14px]">GPS Modules</li>
                          <li className="hover:text-blue-500 transition-all ease-out duration-500 text-sm cursor text-[#7E7E7E] px-[14px] font-bold mb-[14px]">Ultrasonic Sensors</li>
                          <li className="hover:text-blue-500 transition-all ease-out duration-500 text-sm cursor text-[#7E7E7E] px-[14px] font-bold mb-[14px]">IMU Sensors</li>
                          <li className="hover:text-blue-500 transition-all ease-out duration-500 text-sm cursor text-[#7E7E7E] px-[14px] font-bold mb-[14px]">LiPo Batteries</li>
                          <li className="hover:text-blue-500 transition-all ease-out duration-500 text-sm cursor text-[#7E7E7E] px-[14px] font-bold mb-[14px]">Battery Chargers</li>
                          <li className="hover:text-blue-500 transition-all ease-out duration-500 text-sm cursor text-[#7E7E7E] px-[14px] font-bold mb-[14px]">Power Distribution Boards</li>
                        </div>

                        <div className="w- [23%] rounded-2xl overflow-hidden">
                          <img src={megaImg} alt="Electronics and Robotics" className="" />
                        </div>
                      </ul>


                    </div>
                  </li>
                  <li className="group nav-item px-[10px] relative">
                   
                    <Link  className="nav-link flex items-center justify-center font-bold  ml-[1rem] text-[var(--text-color)] hover:text-[var(--primary-color)] text-nowrap" to="/trends">
                      Blog 
                    </Link>
                    {/* <div className="absolute z-10 bg-white rounded-md hidden group-hover:flex flex-col px-[15px] py-[25px] shadow-[5px_5px_15px_#0000000D] border border-[#ececec] transition-all duration-300 ease-in">
                      <ul className="w-full flex gap-2 justify-around">
                        <div>
                          <li className="hover:text-blue-500 transition-all ease-out duration-500 text-sm cursor text-[#7E7E7E] px-[14px] font-bold mb-[21px]">Latest Technology Trends</li>
                          <li className="hover:text-blue-500 transition-all ease-out duration-500 text-sm cursor text-[#7E7E7E] px-[14px] font-bold mb-[21px]">DIY Projects</li>
                          <li className="hover:text-blue-500 transition-all ease-out duration-500 text-sm cursor text-[#7E7E7E] px-[14px] font-bold mb-[21px]">Drone Tips & Tricks</li>
                          <li className="hover:text-blue-500 transition-all ease-out duration-500 text-sm cursor text-[#7E7E7E] px-[14px] font-bold mb-[21px]">Robot Building Guides</li>
                          <li className="hover:text-blue-500 transition-all ease-out duration-500 text-sm cursor text-[#7E7E7E] px-[14px] font-bold mb-[21px]">Product Reviews</li>

                          <li className="group relative text-nowrap flex justify-between items-center cursor-pointer hover:text-blue-500 transition-all ease-out duration-500 text-sm text-[#7E7E7E] px-[14px] font-bold mb-[21px]">
                            Others <MdKeyboardArrowRight />

                           
                            <ul className="absolute z-30 rounded-md left-full top-0 bg-white hidden group-hover:flex flex-col px-[15px] py-[25px] shadow-[5px_5px_15px_#0000000D] border border-[#ececec] transition-all duration-300 ease-in ">
                              <li className="hover:text-blue-500 transition-all ease-out duration-500 text-sm cursor text-[#7E7E7E] px-[14px] font-bold mb-[21px]">Industry News</li>
                              <li className="hover:text-blue-500 transition-all ease-out duration-500 text-sm cursor text-[#7E7E7E] px-[14px] font-bold mb-[21px]">Programming Tutorials</li>
                              <li className="hover:text-blue-500 transition-all ease-out duration-500 text-sm cursor text-[#7E7E7E] px-[14px] font-bold mb-[21px]">Upcoming Events</li>
                            </ul>
                          </li>
                        </div>
                      </ul>
                    </div> */}
                  </li>



                  <li className="group relative nav-item px-[10px]">

                    
                    {/* <a className="nav-link flex items-center justify-center font-bold  ml-[1rem] text-[var(--text-color)] hover:text-[var(--primary-color)] text-nowrap group-hover:text-blue-700" href="#">
                      Pages 
                    </a> */}

                    {/* <div className="absolute z-10  bg-white rounded-md w-56 h-46 left-0 p-4 hidden group-hover:flex shadow-[5px_5px_15px_#0000000D] border border-[#ececec] transition-all duration-300 ease-in">
                      <ul className="w-full ">
                        <li className="hover:text-blue-500 transition-all ease-out duration-500  text-sm text-wrap  cursor text-[#7E7E7E] px-[14px] font-bold mb-[21px]">FAQs</li>
                        <li className="hover:text-blue-500 transition-all ease-out duration-500  text-sm text-wrap  cursor text-[#7E7E7E] px-[14px] font-bold mb-[21px]">Shipping & Returns</li>
                        <li className="hover:text-blue-500 transition-all ease-out duration-500  text-sm text-wrap  cursor text-[#7E7E7E] px-[14px] font-bold mb-[21px]">Privacy Policy</li>
                        <li className="hover:text-blue-500 transition-all ease-out duration-500  text-sm text-wrap  cursor text-[#7E7E7E] px-[14px] font-bold mb-[21px]">Terms & Conditions</li>
                        <li className="hover:text-blue-500 transition-all ease-out duration-500  text-sm text-wrap  cursor text-[#7E7E7E] px-[14px] font-bold mb-[21px]">Affiliate Program</li>
                      </ul>
                    </div> */}
                  </li>
                  <li className="nav-item px-[10px] hidden xl:block">

                  <Link  className="nav-link flex items-center justify-center font-bold  ml-[1rem] text-[var(--text-color)] hover:text-[var(--primary-color)] text-nowrap" to="/contact">
                      Contact
                    </Link>
                    
                      
                   
                  </li>
                </ul>
              </div>

            </div>{" "}
          </div>
          <div className="shrink  hidden lg:flex">
            {/* Right Side: Support Information fontSize={"1.8rem"}*/}
            <div className="flex align-items-center shrink ">
              <FaHeadset className="me-2 opacity-90 size-6" />

              <div className="hidden md:flex flex-col items-center justify-center shrink">
                <span
                  className="support-number text-[1rem] shrink w-fit mr-auto"
                  style={{ color: "#3f51b5", fontWeight: "bold" }}
                >
                  1900 - 888
                </span>
                <span className="support-text text-[0.9rem] text-[var(--light-text-color)] ms-1 shrink w-fit">
                  24/7 Support Center
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
