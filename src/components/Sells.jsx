import React, { useEffect, useState } from 'react'
import { useAuth } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from 'react-icons/io';
import axios from 'axios';

const Sells = () => {
   
    const [topSelling, setTopSelling] = useState([]);
    const [trendingProducts, setTrendingProducts] = useState([]);
    const [recentlyAdded, setRecentlyAdded] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const navigate = useNavigate(); // Make sure to call useNavigate here
    const [loading, setLoading] = useState(true);
    
 
    const handleProductClick = (id) => {

  
      navigate(`/singlePro/${id}`);
    };
    
    useEffect(() => {
      const fetchData = async () => {
        try {
                
          const topSellingResp = await axios.get("/top-selling");
          const trendingProductsResp = await axios.get("/trending-products");
          const recentlyAddedResp = await axios.get("/recently-added");
          const topRatedResp = await axios.get("/top-rated");
  
        
          setTopSelling(topSellingResp.data.products || []);
          setTrendingProducts(trendingProductsResp.data.products || []);
          setRecentlyAdded(recentlyAddedResp.data.products || []);
          setTopRated(topRatedResp.data.products || []);
          setLoading(false); // Turn off loading
        } catch (e) {
          console.log("Error fetching data:", e);
          setLoading(false); // Turn off loading to exit the loading state
        }
      };
  
      fetchData();
    }, []);
  
    // Early return while loading
    if (loading) {
      return (
        <div className="w-[100%] flex justify-center items-center  h-[500px]">
          <div className="loader"></div>
        </div>
      ); // Display loading message while data is being fetched
    }

    
  return (
    <div className="grid allSell grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 px-3 md:px-20 2xl:px-0 mt-16 space-y-20 md:space-y-0">

            <div className="flex TopSeling  flex-col gap-4">
              <div className="md:mt-10 headerOfSailings">
                <h3 className="font-semibold  text-3xl">Top Seling</h3>
                <div className="lineH  h-[1px] bg-gray-200 my-4 rounded-full w-[80%] ">
                  {" "}
                  <div className=" w-[30%]  bg-green-200 h-[3px] rounded-full"></div>
                </div>
              </div>

              <div className="flex flex-col">
                {topSelling.map((item) => (
                  <div
                    key={item._id}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProductClick(item._id);
                    }}
                    className="flex max-w-[100%] ProductInfo transition-all duration-200 hover:-translate-y-1 cursor-pointer p-2 w-96 rounded-lg overflow-hidden items-center"
                  >
                    <div className="imageDiv p-1">
                      <img
                        src={item.imageUrls[0]}
                        alt=""
                        className="size-28 w-36 max-w-full rounded-xl m-auto bg -gray-100 object-contain"
                      />
                    </div>
                    <div className="infoDiv pl-4">
                      <h4 className="my-1 font-bold text-gray-700 text-md">
                        {item.name}
                      </h4>

                      <div className="flex">
                        <span className="flex">
                          {Array.from({ length: 5 }, (_, index) => {
                            const ratingValue = index + 1;
                            if (ratingValue <= Math.floor(item.rating)) {
                              // Filled star
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
                              // Half star
                              return (
                                <IoIosStarHalf
                                  key={index}
                                  className="text-yellow-400 text-lg"
                                />
                              );
                            } else {
                              // Empty star
                              return (
                                <IoIosStarOutline
                                  key={index}
                                  className="text-gray-300 text-lg"
                                />
                              );
                            }
                          })}
                        </span>
                        <span className="mx-3 opacity-50 text-sm">
                          ({item.rating.toFixed(1)})
                        </span>
                      </div>

                      <div className="flex justify-between items-center mt-2">
                        <div>
                          <span className="text-green-500 font-bold text-lg">
                            ₹{new Intl.NumberFormat("en-IN").format(item.price)}
                          </span>
                          {item.originalPrice && (
                            <span className="text-gray-400 text-sm font-bold line-through ml-2">
                              ₹
                              {new Intl.NumberFormat("en-IN").format(
                                item.originalPrice
                              )}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Seling End Here */}

            {/* trendingSells start*/}
            <div className="flex TopSeling  flex-col gap-4">
              <div className="md:mt-10 headerOfSailings">
                <h3 className="font-semibold  text-3xl">Trending Products</h3>
                <div className="lineH  h-[1px] bg-gray-200 my-4 rounded-full w-[80%] ">
                  {" "}
                  <div className=" w-[30%]  bg-green-200 h-[3px] rounded-full"></div>
                </div>
              </div>
              <div className="flex flex-col">
                {trendingProducts.map((item) => (
                  <div
                    key={item._id}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProductClick(item._id);
                    }}
                    className="flex ProductInfo transition-all duration-200 hover:-translate-y-1 cursor-pointer p-2 w-96 rounded-lg overflow-hidden items-center"
                  >
                    <div className="imageDiv p-1">
                      <img
                        src={item.imageUrls[0]}
                        alt=""
                        className="size-28 w-36 max-w-full rounded-xl m-auto bg -gray-100 object-contain"
                      />
                    </div>
                    <div className="infoDiv pl-4">
                      <h4 className="my-1 font-bold text-gray-700 text-md">
                        {item.name}
                      </h4>

                      <div className="flex">
                        <span className="flex">
                          {Array.from({ length: 5 }, (_, index) => {
                            const ratingValue = index + 1;
                            if (ratingValue <= Math.floor(item.rating)) {
                              // Filled star
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
                              // Half star
                              return (
                                <IoIosStarHalf
                                  key={index}
                                  className="text-yellow-400 text-lg"
                                />
                              );
                            } else {
                              // Empty star
                              return (
                                <IoIosStarOutline
                                  key={index}
                                  className="text-gray-300 text-lg"
                                />
                              );
                            }
                          })}
                        </span>
                        <span className="mx-3 opacity-50 text-sm">
                          ({item.rating.toFixed(1)})
                        </span>
                      </div>

                      <div className="flex justify-between items-center mt-2">
                        <div>
                          <span className="text-green-500 font-bold text-lg">
                            ₹{new Intl.NumberFormat("en-IN").format(item.price)}
                          </span>
                          {item.originalPrice && (
                            <span className="text-gray-400 text-sm font-bold line-through ml-2">
                              ₹
                              {new Intl.NumberFormat("en-IN").format(
                                item.originalPrice
                              )}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* trendingSells end*/}

            {/* Recently Added */}

            <div className="flex TopSeling  flex-col gap-4">
              <div className="md:mt-10 headerOfSailings">
                <h3 className="font-semibold  text-3xl">Recently added</h3>
                <div className="lineH  h-[1px] bg- gray-200 my-4 rounded-full w-[80%] ">
                  {" "}
                  <div className=" w-[30%]  bg-green-200 h-[3px] rounded-full"></div>
                </div>
              </div>

              <div className="flex flex-col ">
                {recentlyAdded.map((item) => (
                  <div
                    key={item._id}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProductClick(item._id);
                    }}
                    className="flex ProductInfo transition-all duration-200 hover:-translate-y-1 cursor-pointer p-2 w-96 rounded-lg overflow-hidden items-center"
                  >
                    <div className="imageDiv p-1">
                      <img
                        src={item.imageUrls[0]}
                        alt={item.name}
                        className="size-28 w-36 max-w-full rounded-xl m-auto bg -gray-100 object-contain"
                      />
                    </div>
                    <div className="infoDiv pl-4">
                      <h4 className="my-1 font-bold text-gray-700 text-md">
                        {item.name}
                      </h4>

                      <div className="flex">
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
                        <span className="mx-3 opacity-50 text-sm">
                          ({item.rating.toFixed(1)})
                        </span>
                      </div>

                      <div className="flex justify-between items-center mt-2">
                        <div>
                          <span className="text-green-500 font-bold text-lg">
                            ₹{new Intl.NumberFormat("en-IN").format(item.price)}
                          </span>
                          {item.originalPrice && (
                            <span className="text-gray-400 text-sm font-bold line-through ml-2">
                              ₹
                              {new Intl.NumberFormat("en-IN").format(
                                item.originalPrice
                              )}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recently Added end  */}

            {/* Top Rated Start  */}

            <div className="flex TopSeling  flex-col gap-4">
              <div className="md:mt-10 headerOfSailings">
                <h3 className="font-semibold  text-3xl">Top Rated</h3>
                <div className="lineH  h-[1px] bg-gray- 200 my-4 rounded-full w-[80%] ">
                  {" "}
                  <div className=" w-[30%]  bg-green-200 h-[3px] rounded-full"></div>
                </div>
              </div>

              <div className="flex flex-col ">
                {topRated.map((item) => (
                  <div
                    key={item._id}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProductClick(item._id);
                    }}
                    className="flex ProductInfo transition-all duration-200 hover:-translate-y-1 cursor-pointer p-2 max-w-96 rounded-lg overflow-hidden items-center"
                  >
                    <div className="imageDiv p-1">
                      <img
                        src={item.imageUrls[0]}
                        alt={item.name}
                        className="size-28 w-36 max-w-full rounded-xl m-auto bg -gray-100 object-contain"
                      />
                    </div>
                    <div className="infoDiv pl-4">
                      <h4 className="my-1 font-bold text-gray-700 text-md">
                        {item.name}
                      </h4>

                      <div className="flex">
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
                        <span className="mx-3 opacity-50 text-sm">
                          ({item.rating.toFixed(1)})
                        </span>
                      </div>

                      <div className="flex justify-between items-center mt-2">
                        <div>
                          <span className="text-green-500 font-bold text-lg">
                            ₹{new Intl.NumberFormat("en-IN").format(item.price)}
                          </span>
                          {item.originalPrice && (
                            <span className="text-gray-400 text-sm font-bold line-through ml-2">
                              ₹
                              {new Intl.NumberFormat("en-IN").format(
                                item.originalPrice
                              )}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Rated End  */}
          </div>
  )
}

export default Sells