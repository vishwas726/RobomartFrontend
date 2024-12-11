import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
"bg-[#3f51b5]"
const Btn1 = () => {
  return (
    <Link to="/shop">
    <button className="bg-[#5066dd] text-white p-2 w-fit flex rounded-lg text-sm justify-center items-center transition-all duration-200 group">
      Shop Now <IoIosArrowRoundForward className="size-6 group-hover:ml-2 transition-all duration-200" />{" "}
    </button></Link>
  )
}

export default Btn1