import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { PiShuffle } from "react-icons/pi";

import VendorProfile from "../components/VendorProfile";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
// import FilterSideBar from "../FilterSideBar";
import FilterSideBar from "../components/FilterSideBar";

import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import Reviews from "../components/Reviews";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../node_modules/swiper/swiper-bundle.min.css";
import { useAuth } from "../Context/AuthContext";
import { toast } from "react-toastify";
function SingleProduct() {
  const { id } = useParams(); // Get the product ID from the URL
  // const lottieRef = useRef(null); // Animation reference
  const [selectedModel, setSelectedModel] = useState("16gb");
  const { user } = useAuth();
  const [product, setProduct] = useState(null); // Product data
  const [relatedProducts, setRelatedProducts] = useState([]); // Product data
  const navigate = useNavigate(); // Make sure to call useNavigate here
  const [isInCart, setIsInCart] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state
  const [isLiked, setIsLiked] = useState(false); // Like state for animation
  const [Quantity, setQuantity] = useState(1); // Quantity state
  const [selectedImage, setSelectedImage] = useState(null); // Selected image state
  const [addToCartLoading, setAddToCartLoading] = useState(false)
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("Description");
  // Fetch product data
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setAddToCartLoading(true)
        const response = await axios.get(`/api/product/${id}`); // Fetch product by ID related-products
        const responseRelated = await axios.get(`/api/related-products/${id}`); // Fetch product by ID
        setProduct(response.data); // Set the fetched product data
        setRelatedProducts(responseRelated.data); // Set the fetched related product data
        setLoading(false); // Turn off loading
        setAddToCartLoading(false)
      } catch (e) {
        console.error("Error fetching product by ID:", e);
        setLoading(false);
        setAddToCartLoading(false)
      }
    };

    fetchProduct();
  }, [id]); // Runs whenever the id in the URL changes

  useEffect(() => {
   
    if (user && user.token) {
      checkIfLiked();
      checkIfInCart();
    } 
  }, [user, id]);

  const checkIfInCart = async () => {
    try {
      const response = await axios.get("/api/user", {
        headers: { authorization: "Bearer " + user.token },
      });
      console.log("to cart",response.data.cart);

      setIsInCart(response.data.cart.some((item) => item._id === id));
      // setIsInCart(response.data.cart.some((item) => item._id === cartId));
      console.log(isInCart);

    } catch (error) {
      console.error("Error checking cart status:", error);
    }
  };
  // Function to check if the product is in the user's wishlist
  const checkIfLiked = async () => {
    try {
      const response = await axios.get("/api/user", {
        headers: { authorization: "Bearer " + user.token }, // Authorization header
      });
     
      // Check if the productId is in the wishlist
      setIsLiked(response.data.wishList.some((item) => item._id === id));
    } catch (error) {
      console.error("Error checking wishlist:", error);
    }
  };

  // Handle like button click for Lottie animation
  const handleLikeClick = async () => {
    try {

      if (!user || !user.token) {
        toast.error("Login First");
        navigate("/login");
        return;
      }
      
      if (isLiked) {
        // Remove product from wishlist
        await axios.delete("/api/wishlist", {
          headers: { authorization: "Bearer " + user.token },
          data: { productId: id },
        });
        toast.success("Removed from wishlist");
      } else {
        // Add product to wishlist
        await axios.post(
          "/api/wishlist",
          { productId: id },
          {
            headers: { authorization: "Bearer " + user.token },
          }
        );
        toast.success("Added to wishlist");
      }
      // Update the like status after the API call
      setIsLiked(!isLiked);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  // Set default image once the product is loaded
  useEffect(() => {
    if (product && product.imageUrls.length > 0) {
      setSelectedImage(product.imageUrls[0]); // Set the first image as default
    }
  }, [product]); // Only run when the product changes

  const handleProductClick = (id) => {
  
    navigate(`/singlePro/${id}`);
  };

  // Early return while loading
  if (loading) {
    return (
      <div className="w-[100%] flex justify-center items-center h-[500px]">
        <div className="loader"></div>
      </div>
    );
  }

  // Function to handle image selection
  const handleImageSelect = (url) => {
    setSelectedImage(url);
  };

  // Early return if no product found
  if (!product) {
    return <div>No product found</div>;
  }

  // Swiper settings for product images
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true,
    arrows: false, // Set to false since we're using custom arrows
    dots: false,
  };


  const handleAddToCart = async () => {
    try {
      if (!user || !user.token) {
        toast.error("Login First");
        // navigate("/login");
        return;
      }

      const res = await axios.post(
        "/api/cart", // Endpoint URL
        {
          productId: id,
          quantity: Quantity,
        },
        {
          headers: { authorization: "Bearer " + user.token }, // Authorization header
        }
      );

      toast.success("Added to cart Successfully");
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

//for related products
const addToCart = async (id) => {
  try {
    // if (!user || !user.token ) {
    //   toast.error("Login First");
    //   // navigate("/login");
    //   return;
    // }
    const token=user.token ;
    const res = await axios.post(
      "/api/cart", // Endpoint URL
      {
        productId: id,
        quantity: 1,
      },
      {
        headers: { authorization: "Bearer " + token }, // Authorization header
      }
    );
   
    console.log(res.success, "this is status")

    toast.success("Added to cart Successfully");
  } catch (error) {
    console.log(error);
    toast.error(error);
  }
};

  return (
    <div className="SingleProWrapper  min-h-[100vh] relative z-[1] max-w-[1600px] mx-auto">
      {/* container start  */}
      <div className="containe gap-4 mt-12 flex justify-between w-[100%] h-[100%]">
        <div className="left flex w-full 2xl:w-[70%]  flex-1 h-[100%] flex-col">
          <div className="cantent flex justify-around w-[100%] md:flex-row flex-col  items-center">
            <div className="img w-[90%] md:w-[50%]  ">
              <div className="imgD border border-gray-200 flex justify-center items-center max-w-[500px] sm:w-[85%] p-3 mx-auto  rounded-xl relative lg:h-[486px] overflow-hidden">
                <img
                  src={selectedImage}
                  className="object-cover bg-center max-size-[500px] w-full  transition-all duration-500  "
                  alt=""
                />

                <div
                  onClick={handleLikeClick}
                  className="icon h-12 w-12 text-[#333] absolute right-0 top-0 sm:hidden leading-3 z-10  text-md center flex items-center justify-center  border-[#fc4c4c] rounded-md opacity-70   cursor-pointer"
                >
                  {isLiked ? (
                    <FaHeart className="text-[#ff0000]" />
                  ) : (
                    <FaRegHeart className="" />
                  )}
                </div>
              </div>
              <div className="image-slider">
                <div className="prev flex justify-start items-center mt-6 p-1 rounded-md overflow-hidden w-[90%] mx-auto gap-3 snap-start">
                  <Swiper
                    spaceBetween={10} // Space between slides
                    slidesPerView={4} // Number of slides per view
                    pagination={{ clickable: true }} // Enable pagination bullets
                  >
                    {product.imageUrls.map((url, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={url}
                          className={`cursor-pointer object-cover bg-center w-full h-full bg-[#f7f8fa] border-2 border-[#f7f8fa] transition-all ease-linear duration-200 hover:border-[#aab5f1] rounded-[17px] ${
                            selectedImage === url ? "" : "border-[#aab5f1]"
                          }`}
                          // ${selectedImage===url ? "border-[#aab5f1]" : "border-[#f7f8fa]"}
                          alt={`Product Image ${index + 1}`} // Provide a descriptive alt text
                          onClick={() => handleImageSelect(url)} // Handle image selection
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="info  p-2  w-[90%] md:w-[50%]  ">
              <button className="tag bg-[#fde0e9] border-none rounded-md text-sm  text-[#f74b81] p-1.5 px-3 font-bold">
                {product.badge}
              </button>

              <div className="title text-2xl sm:text-4xl mt-2 font-bold  text-[#253d4e] max-w-[410px] ">
                {product.name}
              </div>

              <div className="rating flex justify-start items-center mt-3 ">
                <div className="flex">
                  <span className="flex">
                    {Array.from({ length: 5 }, (_, index) => {
                      const ratingValue = index + 1;
                      if (ratingValue <= Math.floor(product.rating)) {
                        // Filled star
                        return (
                          <IoIosStar
                            key={index}
                            className="text-yellow-400 text-lg"
                          />
                        );
                      } else if (
                        ratingValue === Math.ceil(product.rating) &&
                        product.rating % 1 !== 0
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
                    ({product.rating.toFixed(1)})
                  </span>
                </div>
                <div className="review text-xs text-gray-400 opacity-90">
                  (32 Reviews)
                </div>
              </div>

              <div className="price flex justify-start mt-4 items-center gap-2">
                <div className="orgPrice text-3xl sm:text-5xl font-bold text-[#3f51b5]">
                  ₹
                  {new Intl.NumberFormat("en-IN", {
                    maximumFractionDigits: 2,
                  }).format(product.price)}
                </div>
                <div className="discount flex flex-col justify-start items-start">
                  {product.discount && (
                    <div className="dis text-xs text-yellow-400">
                      {product.discount}% off
                    </div>
                  )}
                  {product.originalPrice && (
                    <div className="oldprice text-lg sm:text-2xl text-gray-400 opacity-90 line-through">
                      ₹
                      {new Intl.NumberFormat("en-IN", {
                        maximumFractionDigits: 2,
                      }).format(product.originalPrice)}
                    </div>
                  )}
                </div>
              </div>

              <div className="list mt-3 space-y- text-sm sm:text-base">
                {product.specifications.map((spec, index) => (
                  <li className=" text-gray-500 font-medium  list-decimal" key={index}>
                    {spec}
                  </li>
                ))}
              </div>

              {/* <div className="model flex gap-2 text-gray-500 font-medium list-decimal items-baseline mt-[10px]">
                <span className="text-nowrap sm:text-base text-sm">Model :</span>

                <ul className="flex gap-2 flex-wrap">
                
                  <li
                    className={`sm:leading-8 leading-6 px-2 transition-all duration-500 ease-out cursor-pointer rounded-lg sm:text-sm text-xs ${selectedModel === '1gb' ? 'bg-[#3f51b5] text-white' : 'hover:bg-[#3f51b5] hover:text-white'
                      }`}
                  >
                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="model"
                        value="1gb"
                        className="hidden"
                        checked={selectedModel === '1gb'}
                        onChange={() => setSelectedModel('1gb')}
                      />
                      1gb
                    </label>
                  </li>

                
                  <li
                    className={`sm:leading-8 leading-6 px-2 transition-all duration-500 ease-out cursor-pointer rounded-lg sm:text-sm text-xs ${selectedModel === '16gb' ? 'bg-[#3f51b5] text-white' : 'hover:bg-[#3f51b5] hover:text-white'
                      }`}
                  >
                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="model"
                        value="16gb"
                        className="hidden"
                        checked={selectedModel === '16gb'}
                        onChange={() => setSelectedModel('16gb')}
                      />
                      16gb
                    </label>
                  </li>

                 
                  <li
                    className={`sm:leading-8 leading-6 px-2 transition-all duration-500 ease-out cursor-pointer rounded-lg sm:text-sm text-xs ${selectedModel === '4gb' ? 'bg-[#3f51b5] text-white' : 'hover:bg-[#3f51b5] hover:text-white'
                      }`}
                  >
                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="model"
                        value="4gb"
                        className="hidden"
                        checked={selectedModel === '4gb'}
                        onChange={() => setSelectedModel('4gb')}
                      />
                      4gb
                    </label>
                  </li>

                  
                  <li
                    className={`sm:leading-8 leading-6 px-2 transition-all duration-500 ease-out cursor-pointer rounded-lg sm:text-sm text-xs ${selectedModel === '8gb' ? 'bg-[#3f51b5] text-white' : 'hover:bg-[#3f51b5] hover:text-white'
                      }`}
                  >
                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="model"
                        value="8gb"
                        className="hidden"
                        checked={selectedModel === '8gb'}
                        onChange={() => setSelectedModel('8gb')}
                      />
                      8gb
                    </label>
                  </li>

                  
                  <li
                    className={`sm:leading-8 leading-6 px-2 transition-all duration-500 ease-out cursor-pointer rounded-lg sm:text-sm text-xs ${selectedModel === '16gb2' ? 'bg-[#3f51b5] text-white' : 'hover:bg-[#3f51b5] hover:text-white'
                      }`}
                  >
                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="model"
                        value="16gb2"
                        className="hidden"
                        checked={selectedModel === '16gb2'}
                        onChange={() => setSelectedModel('16gb2')}
                      />
                      16gb
                    </label>
                  </li>
                </ul>
              </div> */}

              <div className="addCartWrapper mt-4 flex items-center justify-start gap-4">
                <div className="inputQ sm:max-w-24 py-[1px]  sm:py-[4px] flex items-center border-[#3f51b5] border-2  outline-none rounded-md pr-1 sm:pr-3   max-w-[4rem]">
                  <input
                    type="number"
                    onChange={(e) => {
                      setQuantity(e.value);
                    }}
                    name=""
                    id=""
                    min="1"
                    className="w-[70%] border-none font-semibold outline-none flex-1  text-center no-spinner min-w-[30px] sm:min-w-[50px] p-1"
                    placeholder="1"
                    defaultValue={1}
                    value={Quantity}
                  />

                  <div className="arrowQ text-[#3f51b5] text-sm sm:text-lg">
                    <a>
                      <MdOutlineKeyboardArrowUp
                        className="cursor-pointer"
                        onClick={() => {
                          setQuantity(Quantity + 1);
                        }}
                      />
                    </a>
                    <a>
                      <MdOutlineKeyboardArrowDown
                        className="cursor-pointer"
                        onClick={() => {
                          setQuantity(Quantity == 1 ? 1 : Quantity - 1);
                        }}
                      />
                    </a>
                  </div>
                </div>
              

                <div
                  onClick={handleAddToCart}
                  className={`addCart ${addToCartLoading ? "" : "" }   bg-[#3f51b5] text-white rounded-md flex items-center gap-2 px-[15px]  py-[10px] sm:py-[13px]  sm:p-6   cursor-pointer hover:bg-blue-500 active:bg-black`}
                >
                <IoCartOutline className="text-xl" />

                  <span className="font-bold text-nowrap text-sm  sm:text-md">
                    Add to cart
                  </span>   
                  
                </div>

                <div className="iconsOptions hidden gap-3 sm:flex">
                  <div
                    onClick={handleLikeClick}
                    className="icon h-12 w-12 text-[#333] leading-8 border text-xl center flex items-center justify-center  border-[#f1f1f1;] rounded-md opacity-70   cursor-pointer"
                  >
                    {isLiked ? (
                      <FaHeart className="text-[#ff0000]" />
                    ) : (
                      <FaRegHeart className="" />
                    )}
                  </div>
                  <div className=" icon h-12 w-12 text-[#333] leading-8 border text-xl center flex items-center justify-center  border-[#f1f1f1;] rounded-md opacity-70  cursor-pointer">
                    <PiShuffle />
                  </div>
                </div>
              </div>
              <div className="details flex mt-16 gap-4 text-xs sm:text-sm w-full justify-start items-start">
                <ul>
                  <li className="py-1">
                    Type:{" "}
                    <span className="text-blue-800 font-medium">
                      {product.type}
                    </span>
                  </li>
                  <li className="py-1">
                    MFG:{" "}
                    <span className="text-blue-800 font-medium">
                      {new Date(product.mfg).toLocaleDateString()}
                    </span>
                  </li>
                  <li className="py-1">
                    SKU:{" "}
                    <span className="text-blue-800 font-medium">
                      {product.sku}
                    </span>
                  </li>
                </ul>

                <ul>
                  <li className="py-1">
                    Tags:
                    <span className="text-blue-800 font-medium">
                      {product.tags.map((tag, index) => (
                        <span key={index}>
                          {tag}
                          {index < product.tags.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </span>
                  </li>
                  <li className="py-1">
                    Stock:{" "}
                    <span className="text-blue-800 font-medium">
                      {product.stock} Items In Stock
                    </span>
                  </li>

                  <div className="view-count mt-2 text-sm text-gray-500">
                    Views: {product.viewCount} times
                  </div>
                </ul>
              </div>
            </div>
          </div>

          <div className="ExtraInfo  shadow-md border mt-20 rounded-2xl w-[95%] mx-auto px-6 md:px-8 py-5 sm:py-10 sm:px-12 h-auto  ">
            <div className="OptonsInfo flex gap-2 sm:space-x-1 flex-wrap">
              <button
                onClick={() => setActiveTab("Description")}
                className={`font-bold hover:shadow-md rounded-[30px]  px-[13px] sm:px-[24px] sm:py-[13px] py-[8px] border text-[14px] sm:text-base hover:text-blue-600 hover:-translate-y-1 transition-all duration-200 ${
                  activeTab === "Description"
                    ? "text-blue-600 shadow-md"
                    : "text-[#7E7E7E] "
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab("AdditionalInfo")}
                className={`font-bold hover:shadow-md rounded-[30px]  px-[13px] sm:px-[24px] sm:py-[13px] py-[8px] border text-[14px] sm:text-base hover:text-blue-600 hover:-translate-y-1 transition-all duration-200 ${
                  activeTab === "AdditionalInfo"
                    ? "text-blue-600 shadow-md"
                    : "text-[#7E7E7E] "
                }`}
              >
                Additional Info
              </button>
              <button
                onClick={() => setActiveTab("Vendor")}
                className={`font-bold hover:shadow-md rounded-[30px]  px-[13px] sm:px-[24px] sm:py-[13px] py-[8px] border text-[14px] hidden sm:text-base hover:text-blue-600 hover:-translate-y-1 transition-all duration-200 ${
                  activeTab === "Vendor"
                    ? "text-blue-600 shadow-md"
                    : "text-[#7E7E7E] "
                }`}
              >
                Vendor
              </button>
              <button
                onClick={() => setActiveTab("Reviews")}
                className={`font-bold hover:shadow-md rounded-[30px]  px-[13px] sm:px-[24px] sm:py-[13px] py-[8px] border text-[14px] sm:text-base hover:text-blue-600 hover:-translate-y-1 transition-all duration-200 ${
                  activeTab === "Reviews"
                    ? "text-blue-600 shadow-md"
                    : "text-[#7E7E7E] "
                }`}
              >
                Reviews (3)
              </button>
            </div>
            <div className="entry_main_content mt-10">
              {activeTab == "Description" && (
                <div className="Description">
                  {" "}
                  <div>
                    <p className="font-medium mb-2 text-[#7E7E7E]">
                      Our platform offers an extensive range of high-quality
                      electronics, ensuring that you find the right products to
                      meet your needs. With a focus on both quality and customer
                      satisfaction, we strive to deliver the best online
                      shopping experience.
                    </p>
                    <p className="font-medium mb-2 text-[#7E7E7E]">
                      Enjoy seamless navigation and a fast, secure checkout
                      process. Our electronics are sourced from trusted
                      manufacturers, ensuring durability and top performance. We
                      prioritize your convenience with flexible payment options
                      and easy return policies, making your shopping experience
                      hassle-free.
                    </p>

                    <ul className="list-disc pl-5 text-[#7E7E7E] font-medium mt-6">
                      <li>
                        Wide range of top-quality electronics from trusted
                        brands.
                      </li>
                      <li>
                        Fast and secure checkout process with multiple payment
                        options.
                      </li>
                      <li>
                        Free shipping on orders over $50 with easy returns.
                      </li>
                      <li>
                        24/7 customer support to assist with any inquiries.
                      </li>
                      <li>
                        Exclusive deals and discounts on trending tech gadgets.
                      </li>
                    </ul>

                    <hr className="my-6" />

                    <p className="font-medium mb-2 text-[#7E7E7E]">
                      We are committed to providing a seamless shopping
                      experience. Whether you're looking for the latest gadgets
                      or essential electronics, our platform offers competitive
                      prices and reliable shipping. Stay up-to-date with our
                      latest promotions and enjoy exclusive deals on top-tier
                      products.
                    </p>
                  </div>
                  <div>
                    <h4 className="mt-7 font-bold text-2xl text-[#253D4E]">
                      Packaging & Delivery
                    </h4>
                    <hr className="my-6" />

                    <p className="font-medium mb-2 text-[#7E7E7E]">
                      We ensure that all our products are packaged securely and
                      delivered to you with care. Our packaging and delivery
                      process includes the following key details:
                    </p>

                    <ul className="list-disc pl-5 font-medium text-[#7E7E7E]">
                      <li>
                        All products are packed in eco-friendly, durable
                        materials to prevent damage during transit.
                      </li>
                      <li>
                        Orders are processed and shipped within 1-2 business
                        days after confirmation.
                      </li>
                      <li>
                        We offer various delivery options, including standard
                        and expedited shipping.
                      </li>
                      <li>
                        Track your order in real-time with our easy-to-use
                        tracking system.
                      </li>
                      <li>
                        Free delivery on orders over $50, with international
                        shipping available.
                      </li>
                    </ul>

                    <p className="font-medium mb-2 text-[#7E7E7E]">
                      Please ensure that the shipping address provided is
                      correct to avoid any delays or issues during delivery. If
                      you have any questions or special requests, feel free to
                      contact our support team.
                    </p>
                  </div>
                  <div className="features">
                    <h4 className="mt-7 font-bold text-2xl text-[#253D4E]">
                      Features
                    </h4>
                    <hr className="my-6" />
                    <p className="font-medium my-2 text-[#7E7E7E]">
                      Features Are:
                    </p>
                    <ul className="list-disc pl-5 font-medium text-[#7E7E7E]">
                      {product.features.map((use, index) => (
                        <li key={index}>{use}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="PackageIncludes">
                    <h4 className="mt-7 font-bold text-2xl text-[#253D4E]">
                      Package Includes
                    </h4>
                    <hr className="my-6" />
                    <p className="font-medium my-2 text-[#7E7E7E]">
                      The following items are included in the package:
                    </p>
                    <ul className="list-disc pl-5 font-medium text-[#7E7E7E]">
                      {product.packageIncludes.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab == "AdditionalInfo" && (
                <div className="AdditionalInfo">
                  <div className="SuggestedUse">
                    <h4 className="mt-7 font-bold text-2xl text-[#253D4E]">
                      Suggested Use
                    </h4>
                    <hr className="my-6" />
                    <p className="font-medium my-2 text-[#7E7E7E]">
                      For optimal performance and longevity of the product,
                      please follow these guidelines:
                    </p>
                    <ul className="list-disc pl-5 font-medium text-[#7E7E7E]">
                      {product.suggestedUse.map((use, index) => (
                        <li key={index}>{use}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="Warnings">
                    <h4 className="mt-7 font-bold text-2xl text-[#253D4E]">
                      Warnings
                    </h4>
                    <hr className="my-6" />
                    <p className="font-medium my-2 text-[#7E7E7E]">
                      Please take note of the following warnings to ensure safe
                      usage:
                    </p>
                    <ul className="list-disc pl-5 font-medium text-[#7E7E7E]">
                      {product.warnings.map((warning, index) => (
                        <li key={index}>{warning}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab == "Vendor" && (
                <div className="Vendor">
                  {" "}
                  <VendorProfile />
                </div>
              )}
              {activeTab == "Reviews" && (
                <div className="Reviews">
                  <Reviews />
                </div>
              )}
            </div>
          </div>

          <div className={`Related_product w-[95%] mx-auto ${relatedProducts.length<1 ?"hidden" :""} `}>
            <h4 className="mt-14 font-bold text-2xl text-[#253D4E]  ">
              Related products
            </h4>
            <div className="lineH w-full h-[1px] bg-gray-200 my-4 rounded-full ">
              {" "}
              <div className=" w-[10%]  bg-green-200 h-[3px] rounded-full"></div>
            </div>

            <div className="Related_Products_queue flex  ">
              <div className="flex md:gap-10 flex-wrap">
                {/* from this */}

                {relatedProducts.map((item, index) => (
                <div
                  className="productWrapper flex flex-col w-[173px] md:w-[240px] justify-between m-1 p-2 sm:m-2  md:px-[12px] md:py-[15px]   max-h-[392px] rounded-lg relative overflow-hidden border-[1px] border-[#ececec] cursor-pointer hover:border-blue-300 hover:shadow-green-300 hover:shadow-sm transition-all duration-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleProductClick(item._id);
                  }}
                  key={item._id}
                >
                  {item.badge && (
                    <div className="text-white text-xs bg-pink-400 h-6 w-fit pl-3 pr-6 absolute z-10 top-0 left-0 rounded-ee-full flex justify-center items-center">
                      {item.badge}
                    </div>
                  )}
                  <div className="imageWrapper">
                    <img
                      src={item.imageUrls[0]}
                      alt="Product"
                      className="p-1 max-w -full rounded-xl max-w-[100%] md:max-w-[170px] m-auto"
                    />
                  </div>
                  <span className="text-xs font-normal text-zinc-500 opacity-80">
                    {item.category}
                  </span>
                  <h4 className="my-1 font-bold text-gray-700 text-base text-wrap">
                    {item.name}
                  </h4>

                  <div className="flex StarsOfRating">
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

                  <span className="my-1 text-sm">
                    By{" "}
                    <span className="text-green-500 text-xs">
                      {item.vendor}
                    </span>
                  </span>

                  <div className="flex justify-between items-center mt-[14px] w-full">
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
                    <button  
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(item._id);
                    }} className="bg-[#DEF9EC] hidden md:flex rounded-md text-center font-medium text-green-500 ml-3  justify-center items-center text-base hover:bg-[#3BB77E] hover:text-white transition-all duration-200 hover:-translate-y-1 py-[6px] px-[20px]">
                      <IoCartOutline className="mr-1" /> Add
                    </button>
                  </div>
                </div>
              ))}

                {/* to this */}
              </div>
            </div>
          </div>
        </div>

        <div className="right   w-[20%]     h-[2000px] hidden 2xl:block">
          <FilterSideBar />
        </div>
      </div>
      {/* container end  */}
    </div>
  );
}

export default SingleProduct;
