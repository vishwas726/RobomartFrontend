import React, { useEffect, useState } from "react";
import {
  IoIosArrowForward,
  IoIosStar,
  IoIosStarHalf,
  IoIosStarOutline,
} from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { VscVerifiedFilled } from "react-icons/vsc";
import { useAuth } from "../../Context/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const WishlistPage = ({ userData }) => {
  const [wishlist, setWishlist] = useState([]);
  const navigate=useNavigate()
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const handleProductClick = (id) => {
    console.log("Product ID:", id);

    navigate(`/singlePro/${id}`);
  };
  // Set initial wishlist from props
  useEffect(() => {
    if (userData?.wishList) {
      setWishlist(userData.wishList);
    }
  }, [userData]);

  // useEffect(() => {
  //   const GetWishData = async () => {
  //     if (user) {
  //       try {
  //         const res = await axios.get(
  //           "/wishlist", // Endpoint URL
  //           {
  //             headers: { authorization: "Bearer " + user.token }, // Authorization header
  //           }
  //         );
  //         setWishlist(res.data.wishlist);
  //         console.log("this is wish data : by api ; ", res.data.wishlist);
  //         setLoading(false); // Turn off loading
  //       } catch (error) {
  //         console.log(error);
  //         setLoading(false); // Turn off loading

  //       }
  //     }
  //   };

  //   GetWishData();
  // }, []);

  const handleDelete = async (id) => {
    console.log(id);
    const res = await axios.delete("/wishlist", {
      headers: { authorization: "Bearer " + user.token },
      data: { productId: id },
    });
toast.success("Item removed from wishlist")
    setWishlist(res.data.wishlist);

    // setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <div className="WishlistPage">
      <h1 className="text-[23px] font-semibold mb-1 mt-6">
        My Wishlist ({wishlist.length})
      </h1>
      <div className="max- h-screen overflow- y-auto sc roll mb-10">
        {wishlist.map((item) => (
          <div
            key={item._id}
            className="WishlistProduct grid grid-cols-1 lg:grid-cols-5 border-b py-5"
           
          >
            <div className="imgWrapper lg:col-span-1 flex justify-center p-2 cursor-pointer" onClick={()=>handleProductClick(item._id)}>
              <img
                src={item.imageUrls[0]}
                alt={item.productName}
                className="w-[40%] lg:w-[70%]"
              />
            </div>

            <div className="infoP col-span-4 flex justify-between relative">
              <div className="space-y-2">
                <h2 className="flex gap-2 items-center">
                  {item.name}{" "}
                  <span>
                    <VscVerifiedFilled />
                  </span>
                </h2>
                <div className="shortReview flex gap-2 items-center">
                  <span className="flex">
                    {Array.from({ length: 5 }, (_, index) => {
                      const ratingValue = index + 1;
                      if (ratingValue <= Math.floor(item.rating)) {
                        return (
                          <IoIosStar
                            key={index}
                            className="text-yellow-400 text-lg"
                          />
                        );
                      } else if (
                        ratingValue === Math.ceil(item.rating) &&
                        item.rating % 1 !== 0
                      ) {
                        return (
                          <IoIosStarHalf
                            key={index}
                            className="text-yellow-400 text-lg"
                          />
                        );
                      } else {
                        return (
                          <IoIosStarOutline
                            key={index}
                            className="text-gray-300 text-lg"
                          />
                        );
                      }
                    })}
                  </span>
                </div>

                <p className="text-gray-600 text-sm">{item.description}</p>
                <div className="my-4">
                  {/* Format price using Intl.NumberFormat for Indian currency */}
                  <span className="text-green-500 text-[#424242] font-bold text-lg">
                    ₹{new Intl.NumberFormat("en-IN").format(item.price)}
                  </span>
                  <span className="text-gray-400 text-xs font-bold line-through ml-2">
                    ₹{new Intl.NumberFormat("en-IN").format(item.originalPrice)}
                  </span>
                  <span className="text-green-500 font-bold text-sm ml-3">
                    {item.discount}%
                  </span>
                </div>
              </div>
              <RiDeleteBinLine
                className="text-[2rem] cursor-pointer text-gray-600 absolute right-0"
                onClick={() => handleDelete(item._id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
