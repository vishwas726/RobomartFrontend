import React from "react";
import { useState } from "react";


import { ClickAwayListener } from '@mui/base/ClickAwayListener';

import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Select = ({ data, placeholder }) => {
  const [isSelectOption, setIsSelectOption] = useState(false);
  const [isSelectedIndex, setSelectedIndex] = useState(0);
  const [isSelectedItem, setSelectedItem] = useState(placeholder);

  let openSelect = () => {
    console.log("Working")
    setIsSelectOption(!isSelectOption);
  };

  const closeSelect = (index, item) => {
    setSelectedIndex(index);
    setSelectedItem(item)
  };

  return (

    <ClickAwayListener onClickAway={() => setIsSelectOption(false)}>
      <div onClick={openSelect} className="selecrDrop cursor relative bg-blue hidden md:block">
        <span className="openSelect ">

          <span className="text-nowrap"> {isSelectedItem} <MdOutlineKeyboardArrowDown className="arrow" />  </span>

        </span>

        {isSelectOption === true && (
          <div className="selectDrop absolute w-[200px] h-auto bg-white top-[160%] left-[-20px] shadow-[0_3px_6px_rgba(0,_0,_0,_0.2)] z-[100] p-[15px] rounded-[6px] min-w-[8rem]">
            <div className="searchField ">
              <input type="text" className="searchFieldInput w-full h-[40px] border border-[#9c9bdb] mb-[15px] rounded-[5px] pl-[20px]" placeholder="Search here..." />
            </div>

            <ul className="searchResult py-[10px] m-0 max-h-[200px] overflow-y-scroll">

              {

                data.map((item, index) => {

                  return (<li onClick={() => closeSelect(index, item)} className={`${isSelectedIndex === index ? "bg-[#ececec]" : ""} w-full p-[10px] list-none text-[14px] text-[#7E7E7E] hover:text-white hover:bg-[#4f51f3]`}>{item}</li>)

                }

                )
              }

            </ul>
          </div>
        )}
      </div>
    </ClickAwayListener>

  );
};
export default Select;
