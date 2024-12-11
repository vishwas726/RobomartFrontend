import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importing images dynamically
import p1 from "/cat/p1.jpg";
import cat4 from "/cat/cat4.png";
import cat5 from "/cat/cat5.png";
import cat6 from "/cat/cat6.png";
import cat7 from "/cat/cat7.png";
import cat8 from "/cat/cat8.png";
import cat9 from "/cat/cat9.png";
import cat10 from "/cat/cat10.png";
import cat11 from "/cat/cat11.png";
import cat12 from "/cat/cat12.png";
import { useNavigate } from "react-router-dom";


// Define categories as an array of objects
const categories = [
  { img: p1, title: "Development Boards", items: 26 },
  { img: cat4, title: "Sensors", items: 26 },
  { img: cat5, title: "Power Modules", items: 26 },
  { img: cat6, title: "Connectors", items: 26 },
  { img: cat7, title: "Displays", items: 26 },
  { img: cat8, title: "Switches", items: 26 },
  { img: cat9, title: "Relays", items: 26 },
  { img: cat10, title: "Transistors", items: 26 },
  { img: cat11, title: "Capacitors", items: 26 },
  { img: cat12, title: "Resistors", items: 26 },
];

const CatSlider = () => {
  const navigate=useNavigate()
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true,
    arrows: false,
    dots: false,
  };
  const handleCategoryClick = (categoryTitle) => {
    // Handle the category click (e.g., navigate to a category page or filter products)
    console.log(`Category clicked: ${categoryTitle}`);
    // Example: Navigate to a specific category page
    navigate(`/category/${categoryTitle.toLowerCase()}`);
  };
  return (
    <>
      <div className="catSliderSection w-full p-[30px_0px] h-auto ">
        <div className="container-fluid">
          <h2 className="hd mb-5 mx-4">Featured Categories</h2>
          <div className="scroll flex w-full gap-6 flex-wrap justify-evenly md:justify-start">
            {categories.map((category, index) => (
              <div
                key={index}
                onClick={() => handleCategoryClick(category.title)} // Add the onClick handler
              
                className="itemx flex w-[134px] group flex-col justify-around items-center p-3 rounded-md shadow-sm hover:shadow-lg cursor-pointer hover:scale-105 hover:border-blue-500 transition-all duration-200"
              >
                <img
                  src={category.img}
                  className="max-w-[80px] m-auto bg-transparent"
                  alt={category.title}
                />
                <h3 className="font-semibold text-center text-sm group-hover:text-blue-700">
                  {category.title}
                </h3>
                <p className="text-center text-sm text-gray-800 opacity-70">
                  {category.items} items
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CatSlider;
