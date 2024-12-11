import React, { useState } from "react";
import { IoIosArrowForward, IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { VscVerifiedFilled } from "react-icons/vsc";

const ReviewsPage = () => {

    
  const reviews = [
    {
      id: 1,
      productName: "Raspberry Pi Pico 2 Development board",
      rating: 4,
      reviewText: "The Raspberry Pi Pico is a versatile and affordable microcontroller offering flexibility for a wide range of DIY electronics and embedded projects.",
      userName: "User123",
      reviewDate: "18 Oct, 2024",
      image: "/temp.svg", // Add the image URL here
    },
    {
      id: 1,
      productName: "Raspberry Pi Pico 2 Development board",
      rating: 4,
      reviewText: "The Raspberry Pi Pico is a versatile and affordable microcontroller offering flexibility for a wide range of DIY electronics and embedded projects.",
      userName: "User123",
      reviewDate: "18 Oct, 2024",
      image: "/temp.svg", // Add the image URL here
    },

 
   
    
  ];

  return (

      <div className="cartData">
        <h1 className="text-[23px] font-semibold mb-1 mt-6">My Reviews ({reviews.length})</h1>
        <div className="max-h-screen overflow-y-auto">
        {reviews.map(review => (
          <div key={review.id} className="WhishlistProduct grid grid-cols-1 lg:grid-cols-5 border-b py-5">
            <div className="imgWrapper lg:col-span-1 flex justify-center p-2">
              <img src={review.image} alt={review.productName} className="w-[40%] lg:w-[70%]" />
            </div>

            <div className="infoP col-span-4 space-y-2">
              <h2>{review.productName}</h2>
              <div className="shortReview flex gap-2 items-center">
                <span className="flex">
                  {Array.from({ length: 5 }, (_, index) => {
                    const ratingValue = index + 1;
                    if (ratingValue <= Math.floor(review.rating)) {
                      return <IoIosStar key={index} className="text-yellow-400 text-lg" />;
                    } else if (ratingValue === Math.ceil(review.rating) && review.rating % 1 !== 0) {
                      return <IoIosStarHalf key={index} className="text-yellow-400 text-lg" />;
                    } else {
                      return <IoIosStarOutline key={index} className="text-gray-300 text-lg" />;
                    }
                  })}
                </span>
                Good Product
              </div>
              <p className="text-sm leading-[1.8]">{review.reviewText}</p>
              <div className="flex gap-2  items-center">
                <p className="text-[14px] text-gray-500">{review.userName}</p>
                <p className="flex items-center gap-1 text-sm">
                  <span><VscVerifiedFilled /></span>certified buyer {review.reviewDate}
                </p>
              </div>

              <div className="Operations flex gap-4 mt-3 font-medium">

                <p className="text-blue-600 cursor-pointer hover:text-black">Edit</p>
                <p className="text-blue-600 cursor-pointer hover:text-black">Delete</p>
                <p className="text-blue-600 cursor-pointer hover:text-black">Share</p>
              </div>
            </div>
          </div>
        ))}</div>
      </div>
  
  )
}

export default ReviewsPage