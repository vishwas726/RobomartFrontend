import React, { useEffect, useState } from "react";
import {
  IoIosArrowForward,
  IoIosStar,
  IoIosStarHalf,
  IoIosStarOutline,
} from "react-icons/io";
import { VscVerifiedFilled } from "react-icons/vsc";
import ReviewsPage from "./ReviewsPage";
import { NavLink, Route, Router, Routes } from "react-router-dom";
import WishlistPage from "./WishlistPage";
import AddressPage from "./AddressPage";
import ProfileInformationPage from "./ProfileInformationPage";
import PanCardInfoPage from "./PanCardInfoPage";
import GiftCardsPage from "./GiftCardsPage";
import SavedUPIPage from "./SavedUPIPage";
import SavedCardsPage from "./SavedCardsPage";
import MyCouponsPage from "./MyCouponsPage";
import AllNotificationsPage from "./AllNotificationsPage";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import Orders from "./Orders";
const AccountSidebar = () => {
  const navigate = useNavigate();
  const [dropDown, setdropDown] = useState(true);
  const [userData, setUserData] = useState({});
  const { user } = useAuth();

  const { logout } = useAuth();

 

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const res = await axios.get(
          "/api/user", // Endpoint URL
          {
            headers: { authorization: "Bearer " + user.token }, // Authorization header
          }
        );
        setUserData(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchInfo();
  }, [user]); // Runs whenever the id in the URL changes
//  useEffect(() => {
//     if (!user) {
//       toast.error("Login first");
//       // navigate("/login");
//     }
//   }, [user]);
  return (
    <div className="mt-3 bg-[#EBEBEB] pt-3 px-1 pb-32 ">
      <div className=" gap-2 flex justify-between mx-auto w-[1500px] max-w-[100%] h -[ 1000px] flex-col sm:flex-row ">
        {
          <button
            onClick={() => {
              setdropDown(!dropDown);
            }}
            className="sm:hidden block"
          // className="sm:hidden  bg-blue-200 text-blue-400 font-semibold rounded-md py-1.5 border border-blue-400"
          >
            <div className="bg-white p-2 flex items-center Box1 relative  ">
              <img src="/user.svg" alt="" />
              <div className="ml-2">
                <p className="text-gray-600 text-[14px]">Hello,</p>
                <h3 className="text-[18px] font-bold">{userData.name}</h3>
                <p className="text-gray-600 text-[14px] absolute right-4 top-[40%]">
                  Settings
                </p>
              </div>
            </div>
          </button>
        }
        {dropDown && (
          <div className="UserSet bg- green-300 min-w-[230px] md:min-w-[300px]   bg -blue-300 p-0.5  space-y-5 transition-all duration-200">
            <div className="bg-white p-2 sm:flex items-center Box1 hidden ">
              <img src="/user.svg" alt="" />
              <div className="ml-2">
                <p className="text-gray-600 text-[14px]">Hello,</p>
                <h3 className="text-[18px] font-bold">{userData.name}</h3>
              </div>
            </div>

            <div className="bg-white Box2">
              <NavLink to="/settings/orders" onClick={() => {
                if (window.innerWidth <= 640) { // Example breakpoint for mobile devices
                  setdropDown(!dropDown);
                }
              }}>
                <div className="flex gap-4 py-[14px] ps-3  items-center border-b">
                  <img src="/orders.svg" alt="" className="w-[29px]" />
                  <h3 className="text-[17px] font-semibold">MY ORDERS</h3>
                  <IoIosArrowForward fontSize={"1.5rem"} />
                </div>
              </NavLink>

              <div className=" border-b p-1 py-3 ">
                <div className="flex gap-1  ps-2   bg-white items-center ">
                  <img src="/profile.svg" alt="" className="w-[38px]" />
                  <h3 className="text-[17px] font-semibold">
                    ACCOUNT SETTINGS
                  </h3>
                </div>

                <div className="optionsProfile w-fit  ms-[58px] mt-2   text-[14px] space-y-2 font-medium">
                  <p className="hover:text-blue-500 cursor-pointer">
                    <NavLink to="/settings/profile" onClick={() => {
                      if (window.innerWidth <= 640) { // Example breakpoint for mobile devices
                        setdropDown(!dropDown);
                      }
                    }}>
                      {" "}
                      Profile Information
                    </NavLink>
                  </p>
                  <p className="hover:text-blue-500 cursor-pointer">
                    <NavLink onClick={() => {
                      if (window.innerWidth <= 640) { // Example breakpoint for mobile devices
                        setdropDown(!dropDown);
                      }
                    }} to="/settings/address"> Manage Addresses</NavLink>
                  </p>
                  <p className="hover:text-blue-500 cursor-pointer">
                    <NavLink onClick={() => {
                      if (window.innerWidth <= 640) { // Example breakpoint for mobile devices
                        setdropDown(!dropDown);
                      }
                    }} to="/settings/pancard">
                      {" "}
                      Pan Card Information{" "}
                    </NavLink>
                  </p>
                </div>
              </div>

              <div className="payment border-b p-1 py-3">
                <div className="flex gap-3 py-2 ps-2   bg-white items-center ">
                  <img src="/payment.svg" alt="" className="w-[34px]" />
                  <h3 className="text-[17px] font-semibold">PAYMENTS</h3>
                </div>
                <div className="optionsProfile w-fit  ms-[58px]   text-[14px] space-y-2 font-medium">
                  <p className="hover:text-blue-500 cursor-pointer">
                    {" "}
                    <NavLink onClick={() => {
                      if (window.innerWidth <= 640) { // Example breakpoint for mobile devices
                        setdropDown(!dropDown);
                      }
                    }} to="/settings/giftcards">Gift Cards</NavLink>
                  </p>
                  <p className="hover:text-blue-500 cursor-pointer">
                    <NavLink onClick={() => {
                      if (window.innerWidth <= 640) { // Example breakpoint for mobile devices
                        setdropDown(!dropDown);
                      }
                    }} to="/settings/upi"> Saved UPI </NavLink>{" "}
                  </p>
                  <p className="hover:text-blue-500 cursor-pointer">
                    <NavLink onClick={() => {
                      if (window.innerWidth <= 640) { // Example breakpoint for mobile devices
                        setdropDown(!dropDown);
                      }
                    }} to="/settings/cards"> Saved Cards </NavLink>
                  </p>
                </div>
              </div>

              <div className="payment border-b p-1 py-3">
                <div className="flex gap-3 py-2 ps-2   bg-white items-center ">
                  <img src="/folders.svg" alt="" className="w-[34px]" />
                  <h3 className="text-[17px] font-semibold">MY STUFF</h3>
                </div>
                <div className="optionsProfile w-fit  ms-[58px]   text-[14px] space-y-2 font-medium">
                  <p className="hover:text-blue-500 cursor-pointer">
                    {" "}
                    <NavLink onClick={() => {
                      if (window.innerWidth <= 640) { // Example breakpoint for mobile devices
                        setdropDown(!dropDown);
                      }
                    }} to="/settings/coupons"> My Coupons </NavLink>
                  </p>
                  <p className="hover:text-blue-500 cursor-pointer">
                    {" "}
                    <NavLink onClick={() => {
                      if (window.innerWidth <= 640) { // Example breakpoint for mobile devices
                        setdropDown(!dropDown);
                      }
                    }} to="/settings/reviews">
                      My Reviews & Ratings
                    </NavLink>
                  </p>
                  <p className="hover:text-blue-500 cursor-pointer">
                    <NavLink onClick={() => {
                      if (window.innerWidth <= 640) { // Example breakpoint for mobile devices
                        setdropDown(!dropDown);
                      }
                    }} to="/settings/wishlist"> My Wishlist</NavLink>
                  </p>
                  <p className="hover:text-blue-500 cursor-pointer">
                    <NavLink onClick={() => {
                      if (window.innerWidth <= 640) { // Example breakpoint for mobile devices
                        setdropDown(!dropDown);
                      }
                    }} to="/settings/notifications">
                      {" "}
                      All Notifications
                    </NavLink>
                  </p>
                </div>
              </div>

              <div
                className="flex gap-4 py-3 ps-3  items-center border-b cursor-pointer"
                onClick={() => {
                  logout();
                  navigate("/");
                }}
              >
                <img src="/logout.svg" alt="" className="w-[29px]" />
                <h3 className="text-[17px] font-semibold"> Logout</h3>
              </div>
            </div>

            <div className="bg-white p-2 Box3 font-semibold">
              <h3 className="text-gray-600 text-[14px]">Frequently Visited:</h3>
              <div className=" mt-2 flex items-center gap-2">
                <p className="text-gray-600 text-[12px]">Track Order</p>
                <p className="text-gray-600 text-[12px]">Help Center</p>
              </div>
            </div>
          </div>
        )}

        <div className=" bg-white grow p-4   border-1 border -blue-300 ">
          <Routes>
            <Route
              path="/reviews"
              element={
                <ReviewsPage userData={userData} setUserData={setUserData} />
              }
            />

            <Route
              path="/wishlist"
              element={
                <WishlistPage userData={userData} setUserData={setUserData} />
              }
            />
            <Route
              path="/address"
              element={
                <AddressPage userData={userData} setUserData={setUserData} />
              }
            />
            <Route
              path="/profile"
              element={

                
                <ProfileInformationPage
                  userData={userData}
                  setUserData={setUserData}
                />
              }
            />
            <Route path="/pancard" element={<PanCardInfoPage />} />
            <Route path="/giftcards" element={<GiftCardsPage />} />
            <Route path="/upi" element={<SavedUPIPage />} />
            <Route path="/cards" element={<SavedCardsPage />} />

            <Route path="/coupons" element={<MyCouponsPage />} />
            <Route path="/notifications" element={<AllNotificationsPage />} />
            <Route path="/orders" element={<Orders userData={userData} setUserData={setUserData}/>} />

            {/* <Route path="/trend" element={<TrendsProjects />} /> */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AccountSidebar;
