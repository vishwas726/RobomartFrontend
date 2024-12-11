import React from 'react';
import { Link } from "react-router-dom"
import Logo from "/LOGO MYROBOMART.png"
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa';

import { CiLocationOn } from "react-icons/ci";
<CiLocationOn />
import { TfiHeadphoneAlt } from "react-icons/tfi";
<TfiHeadphoneAlt />
import { PiPaperPlaneTiltLight } from "react-icons/pi";
<PiPaperPlaneTiltLight />

import { PiPhoneCallThin } from "react-icons/pi";


import { SlClock } from "react-icons/sl";
<SlClock />

const Footer = () => {
  return (
    <footer className="bg-white py-8 mt-36 mb-20">
      <div className="lg:max-w-[1600px] max-w-[100%] mx-auto p-2">
        <div className="container px-6 mx-auto  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-8 ">

          {/* Logo and Contact Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={Logo} className="w-[70px] h-[51px]" />
              <span className="font-bold text-xl">MYROBOMART</span>
            </div>
            <p className="text-gray-700 my-3">
              MyRoboMart for High-Quality Electronics Components
            </p>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-center">
                <CiLocationOn className="mr-2 text-green-500 text-3xl" />
                5171 W Campbell Ave, Kent, Utah 53127, United States
              </li>
              <li className="flex items-center">
                <TfiHeadphoneAlt className="mr-2 text-green-500" />
                (+91) - 540-025-124553
              </li>
              <li className="flex items-center">
                <PiPaperPlaneTiltLight className="mr-2 text-green-500" />
                myrobomart@prymaerospace.com
              </li>
              <li className="flex items-center">
                <SlClock className="mr-2 text-green-500" />
                10:00 - 18:00, Mon - Sat
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/orders" className="hover:underline">Delivery Information</Link></li>
              <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="hover:underline">Terms & Conditions</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
              <li><Link to="/support-center" className="hover:underline">Support Center</Link></li>
              <li><Link to="/careers" className="hover:underline">Careers</Link></li>
            </ul>
          </div>

          {/* Account Section */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Account</h4>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/signup" className="hover:underline">Sign In</Link></li>
              <li><Link to="/cart" className="hover:underline">View Cart</Link></li>
              <li><Link to="/settings/wishlist" className="hover:underline">My Wishlist</Link></li>
              <li><Link to="/track-order" className="hover:underline">Track My Order</Link></li>
              <li><Link to="/help-ticket" className="hover:underline">Help Ticket</Link></li>
              <li><Link to="/shipping-details" className="hover:underline">Shipping Details</Link></li>
              <li><Link to="/compare-products" className="hover:underline">Compare Products</Link></li>
            </ul>
          </div>

          {/* Corporate Section */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Corporate</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:underline">Become a Vendor</a></li>
              <li><a href="#" className="hover:underline">Affiliate Program</a></li>
              <li><a href="#" className="hover:underline">Tech Component Hub</a></li>
              <li><a href="#" className="hover:underline">Careers in Tech & Electronics</a></li>
              <li><a href="#" className="hover:underline">Our Suppliers</a></li>
              <li><a href="#" className="hover:underline">Accessibility</a></li>
              <li><a href="#" className="hover:underline">Promotions</a></li>
            </ul>
          </div>

          {/* Popular Section */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Popular</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:underline">Sensors & Modules</a></li>
              <li><a href="#" className="hover:underline">Transistors & Diodes</a></li>
              <li><a href="#" className="hover:underline">Heat Sinks & Cooling Solutions</a></li>
              <li><a href="#" className="hover:underline">PCB Components</a></li>
              <li><a href="#" className="hover:underline">LEDs & Displays</a></li>
              <li><a href="#" className="hover:underline">Cables & Wiring</a></li>
              <li><a href="#" className="hover:underline">Tools & Equipment</a></li>
            </ul>
          </div>
        </div>

        {/* Install App Section */}
        <div className="container mx-auto px-4 mt-12 text-center">





          <p className="mt-4 text-gray-700">Secured Payment Gateways</p>
        </div>


        <div className="h-1 w-full bg-green-300 my-5 rounded-xl"></div>

        <div className="flex flex-wrap items-center">
          <div className="w-full mb-7.5"> {/* mb-30 is converted to mb-7.5 in Tailwind */}
            <div className="border-t border-gray-200"></div> {/* footer-bottom as a border */}
          </div>
          <div className="w-full xl:w-1/3 lg:w-1/2 md:w-1/2 mb-4 md:mb-0">
            <p className="text-sm mb-0">© 2024, <strong className="text-brand text-blue-500">MyRoboMart </strong> - High-Quality Electronics Components </p>
            <p>All rights reserved</p>
          </div>
          <div className="w-full xl:w-1/3 lg:w-1/2 text-center  gap-5 flex items-center justify-center">
            <div className="inline-flex lg:mr-7.5  lg:mb-0">
              <PiPhoneCallThin className='text-4xl text-gray-500' />
              <p className="ml-2 text-lg font-bold text-blue-500 text-left">1900 - 6666<span className="block text-xs text-gray-500 font-medium">Working 8:00 - 22:00</span></p>
            </div>
            <div className="inline-flex">
              <PiPhoneCallThin className='text-4xl text-gray-500' />
              <p className="ml-2 text-lg font-bold text-blue-500 text-left">1900 - 8888<span className="block text-xs text-gray-500 font-medium">24/7 Support Center</span></p>
            </div>
          </div>
          <div className="w-full xl:w-1/3 lg:w-1/2 md:w-1/2 text-right hidden md:block ">
            <div className="mb-4">
              <h6 className="text-sm">Follow Us</h6>
              <div className="flex space-x-2 mt-2 items-center justify-end">
                <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-gray-800 bg-blue-500 rounded-full  hover:-translate-y-1 transition-all duration-200 ease-in-out p-1.5  ">
                  <FaFacebookF className="w-4 h-4 text-white " />
                </a>
                <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-gray-800 bg-blue-500 rounded-full  hover:-translate-y-1 transition-all duration-200 ease-in-out p-1.5 ">
                  <FaTwitter className="w-4 h-4 text-white " />
                </a>
                <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-gray-800 bg-blue-500 rounded-full  hover:-translate-y-1 transition-all duration-200 ease-in-out p-1.5 ">
                  <FaInstagram className="w-4 h-4 text-white " />
                </a>
                <a href="#" aria-label="Pinterest" className="text-gray-500 hover:text-gray-800 bg-blue-500 rounded-full  hover:-translate-y-1 transition-all duration-200 ease-in-out p-1.5 ">
                  <FaPinterest className="w-4 h-4 text-white " />
                </a>
                <a href="#" aria-label="YouTube" className="text-gray-500 hover:text-gray-800 bg-blue-500 rounded-full  hover:-translate-y-1 transition-all duration-200 ease-in-out p-1.5 ">
                  <FaYoutube className="w-4 h-4 text-white " />
                </a>
              </div>

            </div>
            <p className="text-sm">Up to 15% discount on your first subscribe</p>
          </div>
        </div>

      </div>
    </footer >
  );
};

export default Footer;
