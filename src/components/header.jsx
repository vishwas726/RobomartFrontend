import React, { useState } from "react";
import Logo from "/LOGO MYROBOMART.png";
import SearchIcon from "@mui/icons-material/Search";
import Select from "./selectDrop.jsx";
import { CiLocationOn } from "react-icons/ci";
import { FaAngleDown, FaBars } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { TbUser } from "react-icons/tb";
import { MdOutlineLocalOffer } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { LuRefreshCw } from "react-icons/lu";
import { VscSettings } from "react-icons/vsc";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { PiRecycle } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { useAuth } from "../Context/AuthContext.jsx";
import Nav from "./nav.jsx";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";
import { toast } from "react-toastify";

import { BsCart3 } from "react-icons/bs";
const Header = ({ setSearch, handleSearchKeyDown }) => {
  const { user, logout } = useAuth();

  const [Categories, setCategories] = useState([
    "All Categories",
    "Computers",
    "Mobile Devices",
    "Televisions",
    "Audio Equipment",
    "Wearable Technology",
    "Camera & Photo",
    "Home Appliances",
    "Gaming Consoles",
    "Car Electronics",
    "Home Devices",
  ]);

  const [Locations, setLocations] = useState([
    "United States",
    "Canada",
    "Brazil",
    "United Kingdom",
    "Germany",
    "France",
    "Italy",
    "Spain",
    "Australia",
    "Japan",
    "China",
    "India",
    "Russia",
    "Mexico",
    "South Korea",
  ]);
  const [openHeader, setOpenHeader] = useState(false);
  // console.log(openHeader)
  // toast.success( `${openHeader}`)
  return (
    <>
      <header className="wrapper-Header m-auto max-w-[1600px] py-[20px] md:py-[30px] px-4 md:px-5 sticky md:static top-0 z-[100] border-b md:border-none bg-white ">
        {/* sidebar for mobile devices */}
        <div className={`absolute bg-white h-[100vh] w-[50vh] z-[1000] top-0 -right-20 shadow-lg rounded-l-lg flex flex-col ${openHeader ? "left-0" : "-left-[1000px]"} transition-all duration-200 lg:hidden `}>
          <div className={`flex justify-between items-center p-6   `}>
            <RxCross1 className="text-[1.7rem] cursor-pointer" onClick={() => setOpenHeader(!openHeader)}/>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleSearchKeyDown}
                  className="bg-gray-200 rounded-full px-4 py-2 text-sm outline-none w-[200px] sm:w-[300px]"
                />
                <span className="absolute top-2 right-4 text-gray-500">🔍</span>
              </div>
              <div className="cursor-pointer">
              <Link onClick={() => setOpenHeader(!openHeader)} to="/cart">
                <BsCart3  className="text-[1.7rem]" /> </Link >
              </div>
              <div className="AcoountAndCart relative group  items-center font-bold flex">
                  <TbUser className="headerIcon text-[1.5rem] font-light flex " />
                  {user ? (
                    <>
                      <Link to="/settings/profile" onClick={() => setOpenHeader(!openHeader)}>
                        <span className="flex">Account</span>
                      </Link>
                      <span
                        onClick={() => {
                          logout();
                        }}
                        className="mx-4 hidden lg:flex cursor-pointer"
                      >
                        Logout
                      </span>
                    </>
                  ) : (
                    <Link onClick={() => setOpenHeader(!openHeader)} to="/login">Login</Link>
                  )}
                  {user && (
                    <div className="minList z-10 border rounded-md bg-white absolute left-0 pt-4 pb-6 w-[200px] hidden lg:group-hover:flex transition-all">
                      <ul className="space-y-4">
                        <li className="flex items-center cursor-pointer text-gray-700 hover:text-blue-700">
                          <FiUser className="mr-2" />
                          Profile
                        </li>
                        <li className="flex items-center cursor-pointer text-gray-700 hover:text-blue-700">
                          <CiLocationOn className="mr-2" />
                          Order Tracking
                        </li>
                        <li className="flex items-center cursor-pointer text-gray-700 hover:text-blue-700">
                          <MdOutlineLocalOffer className="mr-2" />
                          My Voucher
                        </li>
                        <li className="flex items-center cursor-pointer text-gray-700 hover:text-blue-700">
                          <CiHeart className="mr-2" />
                          My Wishlist
                        </li>
                        <li className="flex items-center cursor-pointer text-gray-700 hover:text-blue-700">
                          <VscSettings className="mr-2" />
                          Setting
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
            </div>
          </div>

          
<div className="flex flex-col items-start px-6 space-y-4 mt-6">
  <Link onClick={() => setOpenHeader(!openHeader)} to="/deals" className="text-lg text-gray-700 hover:text-blue-600">
    Deals
  </Link>
  <Link onClick={() => setOpenHeader(!openHeader)} to="/" className="text-lg text-gray-700 hover:text-blue-600">
    Home
  </Link>
  <Link onClick={() => setOpenHeader(!openHeader)} to="/about" className="text-lg text-gray-700 hover:text-blue-600">
    About
  </Link>
  <Link onClick={() => setOpenHeader(!openHeader)} to="/shop" className="text-lg text-gray-700 hover:text-blue-600">
    Shop
  </Link>
  <Link onClick={() => setOpenHeader(!openHeader)} to="/trends" className="text-lg text-gray-700 hover:text-blue-600">
    Blog
  </Link>
  <Link onClick={() => setOpenHeader(!openHeader)} to="/contact" className="text-lg text-gray-700 hover:text-blue-600">
    Contact
  </Link>
</div>
        </div>
  {/* sidebar for mobile devices  end */}
        <div className="container-fluid">
          <div className="NavBar flex justify-between lg:justify-around items-center gap-3">
            <div className="Nav-heading flex bg-white lg:justify-end items-center gap-2">
              <HiOutlineBars3
                fontSize={"1.5rem"}
                className=" lg:hidden "
                onClick={() => setOpenHeader(!openHeader)}
              />
              <div className="Slider mx-2 hidden ">
                {" "}
                <FaBars />{" "}
              </div>
              <Link to="/">
                <div className="text-gray-950 font-bold text-xl flex justify-center items-center">
                  <img
                    src={Logo}
                    className="w-[60px] h- [31px] md:w-[70px] md:h-[51px] mx-2"
                    alt="Logo"
                  />
                  <span className="hidden sm:block"> MYROBOMART</span>
                </div>
              </Link>
              <div className="icons-Cards gap-1 mx-2 hidden">
                <li className="flex items-center lg:hidden">
                  <FaRegHeart
                    fontSize={"1.3rem"}
                    className="headerIcon max-w-[27px] font-light"
                  />
                  <span className="badge rounded-full mb-3">3</span>
                </li>
                <li className="flex items-center lg:hidden">
                  <IoCartOutline
                    fontSize={"1.3rem"}
                    className="headerIcon max-w-[27px] font-light"
                  />
                  <span className="badge rounded-full mb-3">3</span>
                </li>
              </div>
            </div>

            <div className="lg:flex ml-2 mr-auto z-[100] lg:flex-1 my-2 lg:max-w-[650px] lg:justify-center items-center hidden   ">
              <div className="headerSearch flex items-center border-2 border-[#97a4f0] w-full h-[50px] p-[10px_20px] max-w-[700px] rounded-md">
                <Select
                  data={Categories}
                  placeholder={"All Categories"}
                  className="text-xs hidden lg:block"
                />
                <div className="search flex items-center w-[82%] relative">
                  <input
                    type="text"
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleSearchKeyDown}
                    placeholder="Search for items..."
                    className="w-full border-none h-[30px] outline-none max-w-[600px] rounded-r-md ml-[20px] bg-[var(--background-color)] text-[14px]"
                  />
                  <CiSearch className="searchIcon absolute top-0 right-0 text-[30px] cursor opacity-70 size-7" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end font-semibold text-gray-600">
              <div className="cursor-pointer LocationWrapper  hidden 2xl:flex items-center border border-[#ececec] w-[170px] p-[7px] h-auto text-[var(--primary-color)] font-semibold  rounded-lg shadow-[5px_5px_15px_rgba(0,_0,_0,_0.05)] mr-[30px]">
                <CiLocationOn className="text-gray-500 text-base" />
                <Select
                  data={Locations}
                  placeholder={"Your Location"}
                  className="LocationSelect"
                />

                {/* <span className="ml-2">Your Location</span> */}
              </div>

              <ul className="LinksHeader flex space-x-4 items-center">
            
                {/*     <Link to="watchlist">
                  {" "}
                  <li className=" items-center hidden cursor-pointer gap-2 relative xl:flex">
                    <LuRefreshCw className="headerIcon text-[1.5rem] font-light" />
                    <span className="b adge hidden bg-blue-500 w-[20px] h-[20px] top-0 right-[10px] flex items-center justify-center  absolute text-white rounded-full">
                      3
                    </span>
                    <span>Compare</span>
                  </li>
                </Link>*/}
                <Link to="/settings/wishlist">
                  {" "}
                  <li className=" items-center  cursor-pointer gap-2 relative flex ">
                    <FaRegHeart className="headerIcon text-[1.4rem] md:text-[1.5rem]  font-light" />
                    <span className="b adge hidden  bg-blue-500 w-[20px] h-[20px] top-0 right-[10px] flex items-center justify-center  absolute text-white rounded-full">
                      2
                    </span>
                    <span className="hidden md:block">Wishlist</span>
                  </li>
                </Link>{" "}
                <Link to="/cart">
                  <li className=" items-center  cursor-pointer gap-2 relative flex  ">
                    <IoCartOutline className="headerIcon text-[1.6rem] md:text-[1.5rem] font-light" />
                    <span className="b adge hidden  bg-blue-500 w-[20px] h-[20px] top-0 right-[10px] flex items-center justify-center  absolute text-white rounded-full">
                      6
                    </span>
                    <span className="hidden md:block">Cart</span>
                  </li>
                </Link>
                <li className="relative group  items-center hidden xl:flex">
                  <TbUser className="headerIcon text-[1.5rem] font-light hidden lg:flex " />
                  {user ? (
                    <>
                      <Link to="/settings/profile">
                        <span className="hidden lg:flex">Account</span>
                      </Link>
                      {/* <span
                        onClick={() => {
                          logout();
                        }}
                        className="mx-4 hidden lg:flex cursor-pointer"
                      >
                        Logout
                      </span> */}
                    </>
                  ) : (
                    <Link to="/login">Login</Link>
                  )}
                  {user && (
                    <div className="minList z-10 border rounded-md bg-white absolute left-0 pt-4 pb-6 w-[200px] hidden lg:group-hover :flex transition-all">
                      <ul className="space-y-4">
                        <li className="flex items-center cursor-pointer text-gray-700 hover:text-blue-700">
                          <FiUser className="mr-2" />
                          Profile
                        </li>
                        <li className="flex items-center cursor-pointer text-gray-700 hover:text-blue-700">
                          <CiLocationOn className="mr-2" />
                          Order Tracking
                        </li>
                        <li className="flex items-center cursor-pointer text-gray-700 hover:text-blue-700">
                          <MdOutlineLocalOffer className="mr-2" />
                          My Voucher
                        </li>
                        <li className="flex items-center cursor-pointer text-gray-700 hover:text-blue-700">
                          <CiHeart className="mr-2" />
                          My Wishlist
                        </li>
                        <li className="flex items-center cursor-pointer text-gray-700 hover:text-blue-700">
                          <VscSettings className="mr-2" />
                          Setting
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
          <div className=" mt-4 mr-auto z-[100]  my-2 items-center lg: hidden   ">
              <div className="headerSearch flex items-center border-2 border-[#97a4f0] w-full h-[50px] p-[10px_20px] max-w-[700px] rounded-md relative mx-auto">
                
                <div className="search flex items-center w-[82%] ">
                  <input
                    type="text"
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleSearchKeyDown}
                    placeholder="Search for items..."
                    className="w-full border-none h-[30px] outline-none max-w-[600px] rounded-r-md ml-[20px] bg-[var(--background-color)] text-[14px]"
                  />
                  <CiSearch className="searchIcon absolute top-[20%] right-5  cursor opacity-70 text-[28px]" />
                </div>
              </div>
            </div>
        </div>
      </header>
      <hr className="bg-[#ececec] w-full h-[1px]" />
      <Nav />
      <hr className="bg-[#ececec] mt-3 w-full h-[1px] hidden md:block" />
    </>
  );
};

export default Header;
