import React, { useEffect, useState } from "react";

import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";
import NoOrder from "../assets/images/Account/NoOrder.svg"
const CartPage = () => {

  const navigate = useNavigate(); // Make sure to call useNavigate here
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [subtotal, setSubtotal] = useState(0); // New state for subtotal
  const shippingCost = 50; // Define a fixed shipping cost


  const { user } = useAuth();


  // Function to format currency in Indian Rupees
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };


  // Calculate subtotal whenever products change
  useEffect(() => {
    const calculatedSubtotal = products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
    setSubtotal(calculatedSubtotal);
  }, [products]);

  useEffect(() => {
    const GetCartData = async () => {
      if (user) {
        try {
          const res = await axios.get(
            "/cart", // Endpoint URL
            {
              headers: { authorization: "Bearer " + user.token }, // Authorization header
            }
          );
          setProducts(res.data.cart);
          console.log("this is cart data : by api ; ", res.data.cart);
          setLoading(false); // Turn off loading
        } catch (error) {
          console.log(error);
          setLoading(false); // Turn off loading

        }
      } else {

        toast.error("Login first")
        navigate("/login")

      }
    };

    GetCartData();
  }, []);

  const updateQuantity = async (id, newQuantity) => {
    // Prevent invalid quantities (e.g., less than 1)
    if (newQuantity < 1) {
      return;
    }

    console.log(newQuantity)

    try {
      const res = await axios.put(
        `/cart/${id}`, // PUT endpoint to update product quantity
        { quantity: newQuantity }, // Send the new quantity in the request body
        { headers: { authorization: `Bearer ${user.token}` } }
      );
      setProducts(res.data.cart); // Update the state with the new cart data
      console.log(res.data.cart)
    } catch (error) {
      console.error("Failed to update quantity", error);
    }
  };


  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`/cart/${id}`, {
        headers: { authorization: `Bearer ${user.token}` },
      });
      setProducts(res.data.cart); // Update the state with the new cart data
      toast.success("Item removed successfully")
    } catch (error) {
      console.error("Failed to delete item", error);
    }
  };
  const handleProductClick = (id) => {
    console.log("Product ID:", id);

    navigate(`/singlePro/${id}`);
  };

  // Early return while loading
  if (loading) {
    return (
      <div className="w-[100%] flex justify-center items-center  h-[500px]">
        <div className="loader"></div>
      </div>
    ); // Display loading message while data is being fetched
  }

  if (products.length === 0) {
    return (
      <div className="CartPage mt- 20 mt-3 max-w-[1400px]  mx-auto flex px-4 md:px-10  flex-col  ">
        <div className="mt-1">
          <p className="mt-3 font-semibold text-[17px]">Shopping cart</p>
          <p className="mt-2 font-medium">
            You have {products.length} items in your cart
          </p>

        </div>

        <img src={NoOrder} alt="" className="max-w-[600px] mx-auto" /></div>

    );
  }

  //for payment

  const handlePayment = async () => {
    try {
      const response = await axios.post("/create-order", {
        userId: user.id, // user id from context or state
        products: products.map((product) => ({
          product: product._id, // Ensure the 'product' field is included
          quantity: product.quantity,
          price: product.price,
        })), // Cart items
        totalAmount: subtotal + shippingCost,
        subtotal,
        shippingCost
        // Total amount
      });

      const { orderId, orderReceipt, orderAmount } = response.data;

      // Razorpay payment configuration
      const options = {
        key: "rzp_test_LEKd2zV6V30c7e", // Your Razorpay Key ID
        amount: orderAmount * 100, // Total amount in paise
        currency: "INR",
        name: "MYROBOMART",
        description: "Order Payment",
        order_id: orderId, // The order ID from Razorpay
        handler: async function (response) {
          try {
            console.log("this is from  ", response);
            // After successful payment, capture the payment info
            const paymentDetails = {
              razorpayOrderId: response.razorpay_order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpaySignature: response.razorpay_signature,
            };

            try {
              const { data } = await axios.post("/verify-payment", paymentDetails);
                
              if (data.success === true) {
                toast.success("Payment Successful!");
                setTimeout(() => {
                  navigate("/settings/orders");
                }, 1000);
              }else{
            
                toast.error("Payment Failed!");
                setTimeout(() => {
                  navigate("/settings/orders");
                }, 1000);

              }

              console.log("this is payment verification",data)
            } catch (error) {
              console.log(error)
            }
            // Send payment info to backend to verify and update order


            // Show success message and update UI accordingly
           
            
          } catch (error) {
            console.error("Payment Verification Failed", error);
          }
        },
        theme: {
          color: "#3F51B5",
        },
      };

      // Launch Razorpay checkout
      const razorpayInstance = new window.Razorpay(options);
      razorpayInstance.open();
    } catch (error) {
      console.error("Failed to initiate payment", error);
      toast.error("Payment initiation failed");
    }
  };


  console.log(products)

  return (
    <div className="CartPage mt- 20 mt-3 max-w-[1400px]  mx-auto flex px-4 md:px-10 gap-8 flex-col lg:flex-row ">
      <div className="left grow">
        {/* <div className="font-bold flex gap-2 border-b pb-6 cursor-pointer ">
          <span>
            <MdKeyboardArrowLeft className="text-[1.7rem]" />
          </span>
          <p className="text-[17px]">
            <Link to="/"> Continue Shopping</Link>
          </p>
        </div> */}

        <div className="mt-1">
          <p className="mt-3 font-semibold text-[17px]">Shopping cart</p>
          <p className="mt-2 font-medium">
            You have {products.length} items in your cart
          </p>
        </div>

        {products.map((product) => (
          <div
            key={product._id}
            className="productCart p-4 border flex mt-5 items-center justify-between rounded-md shadow-md flex-col md:flex-row space-y-7 md:space-y-0 space-x-6"

          >
            <div className="box1 flex items-center gap-5 cursor-pointer" onClick={(e) => {
              e.stopPropagation(); // Stops event propagation when clicking the main div
              handleProductClick(product._id);
            }}>
              <img
                src={product.imageUrls[0]}
                alt={product.name}
                className="h-[100px]"
              />
              <div className="info shrink max-w-[342px]">
                <h2 className="text-[17px] font-semibold">{product.name}</h2>
                <p className="mt-2 text-gray-600 ">
                  {product.description}
                </p>
              </div>
            </div>
            <div className="flex flex-grow-1 justify-around items-center w-full md:w-auto mt -5 md:mt-0 space-x-6 ">
              <div className="inputQ sm:max-w-24 py-[1px] h-fit sm:py-[4px] flex items-center border-[#3f51b5] border-2 outline-none rounded-md pr-1 sm:pr-3 max-w-[4rem]">
                <input
                  type="number"
                  onChange={(e) => updateQuantity(product._id, parseInt(e.target.value))}
                  className="w-[70%] border-none font-semibold outline-none flex-1 text-center no-spinner min-w-[30px] sm:min-w-[50px] p-1"
                  min="1"
                  value={product.quantity}
                />
                <div className="arrowQ text-[#3f51b5] text-sm sm:text-lg">
                  {/* Prevent event propagation here for quantity up arrow */}
                  <MdOutlineKeyboardArrowUp
                    className="cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation(); // Stops event propagation when clicking up arrow
                      updateQuantity(product._id, product.quantity + 1);
                    }}
                  />
                  {/* Prevent event propagation here for quantity down arrow */}
                  <MdOutlineKeyboardArrowDown
                    className="cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation(); // Stops event propagation when clicking down arrow
                      updateQuantity(product._id, product.quantity - 1);
                    }}
                  />
                </div>
              </div>

              <span className="font-bold w-[83px]">
                {formatCurrency(product.price * product.quantity)}
              </span>

              {/* Prevent event propagation here as well for delete button */}
              <span
                className="cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation(); // Stops event propagation when clicking delete button
                  handleDelete(product._id);
                }}
              >
                <RiDeleteBinLine fontSize={"2rem"} />
              </span>
            </div>
          </div>

        ))}
      </div>

      <div className="right grow-0 text-white mx-auto w-[100%] md:w-fit mt-20 md:mt-0">
        <div className="bg-[#3F51B5] px-4  pt-5 pb-14 w-[95%] md:w-[450px] rounded-3xl mx-auto md:mx-0 ">
          <div className="flex justify-between items-center">
            {" "}
            <h2 className="text-white font-semibold"> Payment </h2>{" "}
            <div className="imgWrapperImg">
              {" "}
              <img
                src="young man with laptop computer working at home office.svg"
                alt=""
                className="w-[5rem]"
              />
            </div>
          </div>



          <div className="total border-t  border-[#ffffff52] text-[12px] mt-6 py-6 space-y-3">
            <div className="lineBox flex justify-between">
              <p>Subtotal</p>
              <p>{formatCurrency(subtotal)}</p>
            </div>

            <div className="lineBox flex justify-between">
              <p>Shipping</p>
              <p>{formatCurrency(shippingCost)}</p>
            </div>

            <div className="lineBox flex justify-between">
              <p>Total (Tax incl.)</p>
              <p>{formatCurrency(subtotal + shippingCost)}</p>
            </div>
          </div>

          <div className="checkOut bg-[#4DE1C1] px-4 py-4 rounded-lg flex justify-between cursor-pointer" onClick={handlePayment}>
            <p>{formatCurrency(subtotal + shippingCost)}</p>

            <div className="flex gap-2 items-center" >
              <span className="text-base font-medium"> Checkout </span>

              <FaArrowRightLong />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
