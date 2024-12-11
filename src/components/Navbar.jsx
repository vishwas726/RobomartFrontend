import React, { useRef } from 'react'
import Logo from "../assets/images/logo.svg"
import { IoSearch } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { FaRecycle } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
    const location = useRef();


    return (

        <div className="Navwrapper h-28  border-b-[1px] border-gray-200 flex items-center">
            <div className='Navbar w-[1600px] mx-auto flex justify-evenly items-center gap-7'>

                <div className="Logo w-[180px]">
                    <img className='w-[100%] h-[100%] object-cover bg-center' src={Logo} alt="" />
                </div>
                <div className="SEARCH border-2 border-[#cdead7] p-1 flex justify-between items-center gap-1 w-[40%] rounded-md">

                    <div className="dropdown border-r-[1px] border-gray-300 px-3">
                        <select name="All Categories" id="">
                            <option value="All Categories" selected disabled className="opt">All Categories</option>
                            <option value="Phone" className="opt">Phone</option>
                            <option value="X-Box" className="opt">X-Box</option>
                            <option value="Laptop" className="opt">Laptop</option>
                            <option value="TV" className="opt">TV</option>
                            <option value="Controllers" className="opt">Controllers</option>
                        </select>
                    </div>
                    <div className="searchItem min-w-[50%] flex-1">
                        <input type="text" className='p-2  w-[100%] outline-none' placeholder='search for items.....' />
                    </div>
                    <div className="searchItem p-1.5">
                        <IoSearch fontSize={"1.5rem"} className='text-gray-400' />
                    </div>

                </div>
                <div className="icons flex justify-center items-center gap-7">
                    <div className="location shadow-xl border border-gray-400 flex justify-start items-center p-1.5 rounded-md">
                        <CiLocationOn className='text-gray-400' />
                        <h1 selected disabled className="text-[#3bb77e] text-sm px-1.5 flex justify-center items-center">Your Location <FaAngleDown className='mx-2 text-gray-400 text-xs' /> </h1>
                        <select name="All Categories" id="" className='hidden' >
                            <option value="Phone" className="opt">Jalna</option>
                            <option value="X-Box" className="opt">USA</option>
                            <option value="Laptop" className="opt">Landon</option>
                            <option value="TV" className="opt">Thailand</option>
                            <option value="Controllers" className="opt">Kashmir</option>
                        </select>
                    </div>
                    <div className="icons flex justify-center items-center">
                        <div className="iconsHead relative">
                            <span className='bg-[#3bb77e] rounded-full w-[18px] text-sm h-[18px] flex justify-center items-center absolute -top-3 text-white -right-3 '>2</span>
                            <FaRecycle fontSize={"1.4rem"} className='font-normal' />
                        </div>   <sub className='text-[1rem] text-gray-600 mx-1' >Compare</sub>  </div>
                    <div className="icons flex justify-center items-center">
                        <div className="iconsHead relative">
                            <span className='bg-[#3bb77e] rounded-full w-[18px] text-sm h-[18px] flex justify-center items-center absolute -top-3 text-white -right-3 '>2</span>
                            <FaRegHeart fontSize={"1.4rem"} className='font-normal' />
                        </div>   <sub className='text-[1rem] text-gray-600 mx-1' >Wishlist</sub>  </div>
                    <div className="icons flex justify-center items-center">
                        <div className="iconsHead relative">
                            <span className='bg-[#3bb77e] rounded-full w-[18px] text-sm h-[18px] flex justify-center items-center absolute -top-3 text-white -right-3 '>2</span>
                            <IoCartOutline fontSize={"1.4rem"} className='font-normal' />
                        </div>   <sub className='text-[1rem] text-gray-600 mx-1' >Cart</sub>  </div>
                    <div className="icons flex justify-center items-center">
                        <div className="iconsHead relative">
                            {/* <span className='bg-[#3bb77e] rounded-full w-[18px] text-sm h-[18px] flex justify-center items-center absolute -top-3 text-white -right-3 '>2</span> */}
                            <FaRegUser fontSize={"1.4rem"} className='font-normal' />
                        </div>   <sub className='text-[1rem] text-gray-600 mx-1' >Account</sub>  </div>
                </div>
            </div>
        </div>

    )
}

export default Navbar