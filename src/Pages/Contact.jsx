import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

import { FaRegPaperPlane } from "react-icons/fa6";
import { FooterBanner } from "../components/FooterBanner";
const Contact = () => {
  return (
    <div className="ContactPageWrapper  py-8 max-w-[1600px] mx-auto mt-5 p-5">
      <h1 className="text-[#3F51B5] text-[24px] font-bold ">
        How can help you ?
      </h1>
      <div className="HeroSec">
        <div className=" text-[#253D4E] flex mt-6 items-end mx-auto gap-4 flex-wrap md:flex-nowrap">
          <div className="box space-y-4">
            <h2 className="md:text-[54px] font-bold text-[30px]">
              Let us know how we can help you
            </h2>

            <p className="text-[#7E7E7E]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            <p className="text-[#7E7E7E]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

          <div className="box2 flex flex-col space-y-5 ">
            <div className="sec">
              <h3 className="secTitle font-semibold mb-3 text-[18px]">
                01. Visit Feedback
              </h3>
              <p className="text-[#7E7E7E]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div className="sec">
              <h3 className="secTitle font-semibold mb-3 text-[18px]">
                03. Billing Inquiries
              </h3>
              <p className="text-[#7E7E7E]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
          <div className="box3 flex flex-col space-y-5">
            <div className="sec">
              <h3 className="secTitle font-semibold mb-3 text-[18px]">
                02. Employer Services
              </h3>
              <p className="text-[#7E7E7E]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div className="sec">
              <h3 className="secTitle font-semibold mb-3 text-[18px]">
                04.General Inquiries
              </h3>
              <p className="text-[#7E7E7E]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
        </div>
        <div className="imageWrapper mt-10">
          <img src="ContactBanner.svg" alt="" />
        </div>
      </div>

      <div className="contactMaps mt-10 flex justify-between flex-wrap md:flex-nowrap">
        <div className="contactBox p-4">
          <h4 className="text-[#3F51B5] text-[24px] font-bold  mb-3">Office</h4>

          <p className="text-[#7E7E7E] text-base">
            205 North Michigan Avenue, Suite 810 <br />
            Chicago, 60601, USA <br />
            Phone: (123) 456-7890 <br />
            Email: contact@Evara.com
          </p>

          <button className="bg-[#3F51B5] px-[19px] py-[12px] text-[12px] text-white mt-3 rounded-md flex gap-x-2 items-center font-bold">
            <IoLocationOutline className="text-[14px] font-bold" />
            <span>View map</span>{" "}
          </button>
        </div>

        <div className="contactBox p-4">
          <h4 className="text-[#3F51B5] text-[24px] font-bold  mb-3">Studio</h4>

          <p className="text-[#7E7E7E] text-base">
            205 North Michigan Avenue, Suite 810 <br />
            Chicago, 60601, USA <br />
            Phone: (123) 456-7890 <br />
            Email: contact@Evara.com
          </p>

          <button className="bg-[#3F51B5] px-[19px] py-[12px] text-[12px] text-white mt-3 rounded-md flex gap-x-2 items-center font-bold">
            <IoLocationOutline className="text-[14px] font-bold" />
            <span>View map</span>{" "}
          </button>
        </div>

        <div className="contactBox p-4">
          <h4 className="text-[#3F51B5] text-[24px] font-bold  mb-3">Shop</h4>

          <p className="text-[#7E7E7E] text-base">
            205 North Michigan Avenue, Suite 810 <br />
            Chicago, 60601, USA <br />
            Phone: (123) 456-7890 <br />
            Email: contact@Evara.com
          </p>

          <button className="bg-[#3F51B5] px-[19px] py-[12px] text-[12px] text-white mt-3 rounded-md flex gap-x-2 items-center font-bold">
            <IoLocationOutline className="text-[14px] font-bold" />
            <span>View map</span>{" "}
          </button>
        </div>
      </div>

      <h4 className="text-[#3F51B5] mt-14 text-[24px] font-bold ">
        Contact form
      </h4>
      <div className="ContactForm  flex justify-between gap-4 flex-col lg:flex-row">
        <div className="left flex-grow ">
          <h5 className="text-[36px] font-bold mt-2">Drop Us a Line</h5>
          <p className="text-[#7E7E7E] mt-2">
            Your email address will not be published. Required fields are marked
            *
          </p>

          <form className="">
            <div className="form">
              <div className="flex flex-col gap-4 mt-10 ">
                <div className="flex gap-4 w-full">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="px-3 py-3 outline-none border rounded-md w-[50%]"
                    placeholder="First Name"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    className="px-3 py-3 outline-none border rounded-md w-[50%]"
                    placeholder="Your Email"
                  />
                </div>

                <div className="flex gap-4 w-full ">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="px-3 py-3 outline-none border rounded-md w-[50%]"
                    placeholder="Your Phone"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    className="px-3 py-3 outline-none border rounded-md w-[50%]"
                    placeholder="Subject"
                  />
                </div>
              </div>

              <textarea
                name=""
                id=""
                className="w-full mt-6 px-3 py-3 outline-none border rounded-md"
                placeholder="Enter Message"
                rows={10}
              ></textarea>


              <button className="bg-[#3F51B5] px-[20px] py-[18px] text-[16px] text-white mt-4 rounded-md flex gap-x-2 items-center font-semibold">Send message</button>
            </div>
          </form>
        </div>
        <div className="right">
          <img src="contactForm.svg" alt="" />
        </div>
      </div>

       {/* Big Banner  */}
         <FooterBanner/>
        {/* Big Banner end */}
    
    </div>
  );
};

export default Contact;
