import React from 'react'
import robotImage from '../assets/images/About/Firefly a robot working on electronic project, and robot has a square head and a electronic lab in b.jpg'; // Update with your actual image path
import serviceImage1 from '../assets/images/About/Firefly 3d printer printing 25836.jpg'; // Update with your actual image path
import serviceImage2 from '../assets/images/About/Firefly drone manufacturing lab 25836.jpg'; // Update with your actual image path
import serviceImage3 from '../assets/images/About/Firefly pcb making machine 48101.jpg'; // Update with your actual image path

import shoppingCartImage from '../assets/images/About/droneB.avif'; // Update with your actual image path
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import icon1 from '../assets/images/About/icon-1.svg fill.png'; // Update with your actual image path
import icon2 from '../assets/images/About/icon-2.svg fill.png'; // Update with your actual image path
import icon3 from '../assets/images/About/icon-3.svg fill.png'; // Update with your actual image path

import icon4 from '../assets/images/About/icon-4.svg.png'; // Update with your actual image path
import icon5 from '../assets/images/About/icon-5.svg.png'; // Update with your actual image path
import icon6 from '../assets/images/About/icon-6.svg.png'; // Update with your actual image path




const About = () => {
  // State variables for each counter
  const [years, setYears] = useState(0);
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);
  const [advisors, setAdvisors] = useState(0);
  const [sales, setSales] = useState(0);

  // Intersection observer
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when the component is in view
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  // Function to animate the numbers
  const animateNumber = (target, setFunction, finalValue, duration) => {
    let start = 0;
    const increment = finalValue / (duration / 10);
    const interval = setInterval(() => {
      start += increment;
      if (start >= finalValue) {
        clearInterval(interval);
        setFunction(finalValue);
      } else {
        setFunction(Math.ceil(start));
      }
    }, 10);
  };

  // Use effect to start animation when the component is in view
  useEffect(() => {
    if (inView) {
      animateNumber(0, setYears, 10, 1000); // Animate to 10 years in 1 second
      animateNumber(0, setClients, 200, 1000); // Animate to 200 clients in 1 second
      animateNumber(0, setProjects, 300, 1000); // Animate to 300 projects in 1 second
      animateNumber(0, setAdvisors, 50, 1000); // Animate to 50 advisors in 1 second
      animateNumber(0, setSales, 500, 1000); // Animate to 500 sales in 1 second
    }
  }, [inView]);

  return (




    <div className="AboutWrapper max-w-[1600px] mx-auto">


      <div className="container mx-auto px-4 py-8 w-[86%] ">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center bg-white rounded-lg  md:p-8">
          {/* Image */}
          <div className="md:w-1/2 w-full mb-6 md:mb-0">
            <img src={robotImage} alt="Robot working" className="rounded-lg shadow-lg" />
          </div>

          {/* Text Content */}
          <div className="md:w-1/2 w-full md:pl-8">
            <div className="flex items-center  mb-6 md:flex-row flex-col"> <h1 className="text-4xl font-bold inline-block">Welcome to</h1>
              <div className="text-4xl font-bold bg-clip-text p-2 bg-no-repeat text-transparent bg-gradient-to-r  from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span className=""> MyRobomart</span>
              </div> </div>

            <p className="text-gray-700 mb-4">
              MyRobomart is your ultimate destination for high-quality electronic components, robotics kits, and DIY essentials. Whether you're a hobbyist, engineer, or tech enthusiast, we provide a wide range of products to suit your needs. From beginner-friendly kits to advanced tools, we’re dedicated to helping you bring your projects to life.
            </p>
            <p className="text-gray-700 mb-4">
              Our curated collection includes high-quality products that meet all your project requirements. We prioritize customer satisfaction and offer expert support to help you succeed. Dive into our extensive inventory and find the perfect tools to elevate your next project. Let’s innovate together!


            </p>
            <div className="flex space-x-8">
              {/* <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"></button> */}
              {/* <button className="px-8 py-2 rounded-md  text-white hover:bg-white hover:text-black font-bold bg-[#1565c0] ">
                now
              </button> */}
               <a href="#_" className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none">
                <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <span className="relative z-20 flex items-center text-sm">
                  <svg className="relative w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  Learn More
                </span>
              </a>
              <button className="md:block hidden px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-none shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 font-bold hover:text-white">
                Contact Us
              </button>

            </div>

            {/* Carousel Section */}
            <div className="flex justify-center mt-8">
              <div className="grid grid-cols-3 gap-4">
                <img src={serviceImage1} alt="Service 1" className="rounded-lg shadow-lg hover:scale-105 transform transition duration-300" />
                <img src={serviceImage2} alt="Service 2" className="rounded-lg shadow-lg hover:scale-105 transform transition duration-300" />
                <img src={serviceImage3} alt="Service 3" className="rounded-lg shadow-lg hover:scale-105 transform transition duration-300" />
              </div>
            </div>
          </div>

        </div>



        {/* Services Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold md:mb-6">What We Provide?</h2>
          <div className="flex justify-center space-x-4  flex-wrap  gap-4">
            {/* Service Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 w-[361px] min-w-[265px] mt-20">
              <div className="mb-4">
                {/* Use unique and representative SVG for each service */}
                {/* <svg className="w-12 h-12 mx-auto text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M16 12h.01"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20v.01M12 4v.01"></path>
                </svg> */}
                <img src={icon1} alt="" className="w-12 h-12 mx-auto text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Best Prices & Offers</h3>
              {/* Update with real content */}
              <p className="text-gray-600 mb-4">
                Enjoy unbeatable prices and exclusive deals on a vast range of electronic components and robotics kits.
              </p>
              <a href="/offers" className="text-blue-500 hover:underline">Read more</a>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 w-[361px] min-w-[265px] mt-20">
              <div className="mb-4">
              <img src={icon2} alt="" className="w-12 h-12 mx-auto text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Wide Assortment</h3>
              <p className="text-gray-600 mb-4">
                Discover a diverse selection of products, from beginner kits to professional-grade components for every project.
              </p>
              <a href="/products" className="text-blue-500 hover:underline">Read more</a>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 w-[361px] min-w-[265px] mt-20">
              <div className="mb-4">
              <img src={icon3} alt="" className="w-12 h-12 mx-auto text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Free Delivery</h3>
              <p className="text-gray-600 mb-4">
                We offer free shipping on all orders above a certain amount, ensuring you get the best value for your purchases.
              </p>
              <a href="/delivery" className="text-blue-500 hover:underline">Read more</a>
            </div>

            {/* Add more cards as necessary, maintaining the same structure */}

            {/* Service Card 4 */}
            <div className="bg-white rounded-lg shadow-md p-6 w-[361px] min-w-[265px] mt-20">
              <div className="mb-4">
              <img src={icon4} alt="" className="w-12 h-12 mx-auto text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Easy Returns</h3>
              <p className="text-gray-600 mb-4">
                Hassle-free returns within 30 days of purchase. Shop confidently with our easy return policy.
              </p>
              <a href="/returns" className="text-blue-500 hover:underline">Read more</a>
            </div>

            {/* Service Card 5 */}
            <div className="bg-white rounded-lg shadow-md p-6 w-[361px] min-w-[265px] mt-20">
              <div className="mb-4">
              <img src={icon5} alt="" className="w-12 h-12 mx-auto text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">100% Satisfaction</h3>
              <p className="text-gray-600 mb-4">
                Our top priority is your satisfaction. We go above and beyond to ensure every purchase meets your expectations.
              </p>
              <a href="/satisfaction" className="text-blue-500 hover:underline">Read more</a>
            </div>

            {/* Service Card 6 */}
            <div className="bg-white rounded-lg shadow-md p-6 w-[361px] min-w-[265px] mt-20">
              <div className="mb-4">
              <img src={icon6} alt="" className="w-12 h-12 mx-auto text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Secure Payment</h3>
              <p className="text-gray-600 mb-4">
                Our payment system is secure and trusted, giving you peace of mind when making purchases.
              </p>
              <a href="/payment" className="text-blue-500 hover:underline">Read more</a>
            </div>
          </div>
        </div>




        {/* The performance and team section */}
        <div className="container mx-auto px-4 py-8 my-10">
          {/* Hero Section */}
          <div className="flex flex-col md:flex-row items-center bg-white rounded-lg md:p-8 ">
            {/* Image */}
            <div className="md:w-1/2 w-full mb-6 md:mb-0">
              <img src={shoppingCartImage} alt="Shopping Cart with Money" className="rounded-lg " />
            </div>

            {/* Text Content */}
            <div className="md:w-1/2 w-full md:pl-8">
              <p className="text-gray-500 font-semibold mb-2">Our Performance</p>
              <h1 className="text-4xl font-bold mb-4">Your Go-To Source for Electronics and Tech Solutions</h1>
              <p className="text-gray-700 mb-4">
                We strive to deliver top-notch quality and unbeatable prices on all tech and electronic products, providing solutions that meet the demands of both enthusiasts and professionals.
              </p>
              <p className="text-gray-700 mb-6">
                Whether you're working on a DIY project or developing cutting-edge technology, our comprehensive product range and customer support make us your trusted partner.
              </p>
              <a href="#_" className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none">
                <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <span className="relative z-20 flex items-center text-sm">
                  <svg className="relative w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  Learn More
                </span>
              </a>
            </div>
          </div>

          {/* Three Columns Section */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Column 1 */}
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-xl transition">
                <div className="flex items-center justify-center mb-4">
                  {/* Icon for the card */}
                  <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m0 0v6m0-6H9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Who We Are</h3>
                <p className="text-gray-600">
                  We are a team of passionate innovators and tech enthusiasts dedicated to providing the best in electronics and tech solutions.
                </p>
              </div>

              {/* Column 2 */}
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-xl transition">
                <div className="flex items-center justify-center mb-4">
                  {/* Icon for the card */}
                  <svg className="w-12 h-12 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7H7v6h6v5h5v-5h5V7h-5V2H8v5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Our History</h3>
                <p className="text-gray-600">
                  Established in 2010, we have a rich history of delivering quality products and exceptional service to our customers.
                </p>
              </div>

              {/* Column 3 */}
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-xl transition">
                <div className="flex items-center justify-center mb-4">
                  {/* Icon for the card */}
                  <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h-1v-4h-3V9h3V5h2v4h3v4h-3v4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  Our mission is to empower our customers with innovative tech solutions and comprehensive support, ensuring success in all their projects.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* Statistics Section */}
      <div
        ref={ref}
        className="mt-16 text-white py-12 rounded-lg w-[95%] mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[300px] flex justify-center items-center"
      >
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center w-full">
          <div>
            <h3 className="text-4xl font-bold">{years}+</h3>
            <p className="text-lg">Glorious years</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">{clients}+</h3>
            <p className="text-lg">Happy clients</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">{projects}+</h3>
            <p className="text-lg">Projects complete</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">{advisors}+</h3>
            <p className="text-lg">Team advisor</p>
          </div>
          <div className="hidden md:block">
            <h3 className="text-4xl font-bold">{sales}+</h3>
            <p className="text-lg">Products Sale</p>
          </div>
        </div>
      </div>
    </div>



  )
}

export default About