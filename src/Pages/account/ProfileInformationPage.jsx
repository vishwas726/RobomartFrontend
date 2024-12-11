// import React from 'react';
// import { HiOutlineDotsVertical } from "react-icons/hi";
// import { FiEdit } from "react-icons/fi";

// const ProfileInformationPage = ({ userData }) => {
//   console.log(userData)
//   return (
//     <div className="p-6 max-w-6xl mx-auto">
//       <h1 className="text-[24px] font-semibold mb-5 text-gray-800">Profile Information</h1>

    
//       <div className="relative border rounded-lg shadow-sm p-6 mb-6 bg-white">
//         <div className="flex justify-between items-center">
//           <h2 className="text-[20px] font-bold text-gray-700">Personal Information</h2>
      
//         </div>
//         <div className="mt-4 space-y-2 text-[16px] text-gray-600">
//           <p><span className="font-medium text-gray-700">Username:</span> {userData.name || "N/A"}</p>
//           <p><span className="font-medium text-gray-700">Full Name:</span> {userData.name || "N/A"}</p>
//           <p><span className="font-medium text-gray-700">Email:</span> {userData.email || "N/A"}</p>
//           <p><span className="font-medium text-gray-700">Date of Birth:</span> {"January 1, 1990" }</p>
//         </div>
//       </div>

   
//       <div className="relative border rounded-lg shadow-sm p-6 mb-6 bg-white">
//         <div className="flex justify-between items-center">
//           <h2 className="text-[20px] font-bold text-gray-700">Contact Details</h2>
      
//         </div>
//         <div className="mt-4 space-y-2 text-[16px] text-gray-600">
//           <p><span className="font-medium text-gray-700">Phone:</span> {userData.phoneNumber}</p>
//           <p><span className="font-medium text-gray-700">Alternate Phone:</span>  {userData.alternativePhoneNumber || "N/A"}</p>
//         </div>
//       </div>


//       <div className="relative border rounded-lg shadow-sm p-6 mb-6 bg-white">
//         <div className="flex justify-between items-center">
//           <h2 className="text-[20px] font-bold text-gray-700">Shipping Address</h2>
      
//         </div>
//         <div className="mt-4 space-y-2 text-[16px] text-gray-600">
//           <p><span className="font-medium text-gray-700">Address Line:</span>  {userData.address.street || "N/A"}</p>
//           <p><span className="font-medium text-gray-700">City:</span>  {userData.address.city || "N/A"}</p>
//           <p><span className="font-medium text-gray-700">State:</span>  {userData.address.state || "N/A"}</p>

//           <p><span className="font-medium text-gray-700">Postal Code:</span>  {userData.address.postalCode || "N/A"}</p>
//           <p><span className="font-medium text-gray-700">Country:</span>  {userData.address.country || "N/A"}</p>
//         </div>
//       </div>


    
     
//     </div>
//   );
// };

// export default ProfileInformationPage;

import React from 'react';
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FiEdit } from "react-icons/fi";

const ProfileInformationPage = ({ userData }) => {
  return (
    <div className="p- 6 max-w-6xl mx-auto">
      <h1 className="text-[24px] font-semibold mb-5 text-gray-800">Profile Information</h1>

      {/* Personal Information Section */}
      <div className="relative border rounded-lg shadow-sm p-6 mb-6 bg-white">
        <div className="flex justify-between items-center">
          <h2 className="text-[20px] font-bold text-gray-700">Personal Information</h2>
          <HiOutlineDotsVertical className="text-[1.6rem] cursor-pointer text-gray-500" />
        </div>
        <div className="mt-4 space-y-2 text-[16px] text-gray-600">
          <p><span className="font-medium text-gray-700">Username:</span> {userData.name || "N/A"}</p>
          <p><span className="font-medium text-gray-700">Full Name:</span> {userData.name || "N/A"}</p>
          <p><span className="font-medium text-gray-700">Email:</span> {userData.email || "N/A"}</p>
          <p><span className="font-medium text-gray-700">Date of Birth:</span> {"January 1, 1990" /* Replace with actual DOB if available */}</p>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="relative border rounded-lg shadow-sm p-6 mb-6 bg-white">
        <div className="flex justify-between items-center">
          <h2 className="text-[20px] font-bold text-gray-700">Contact Details</h2>
          <HiOutlineDotsVertical className="text-[1.6rem] cursor-pointer text-gray-500" />
        </div>
        <div className="mt-4 space-y-2 text-[16px] text-gray-600">
          <p><span className="font-medium text-gray-700">Phone:</span> +91 9100999900</p>
          <p><span className="font-medium text-gray-700">Alternate Phone:</span> +91 9000112233</p>
        </div>
      </div>

      {/* Shipping Address Section */}
      <div className="relative border rounded-lg shadow-sm p-6 mb-6 bg-white">
        <div className="flex justify-between items-center">
          <h2 className="text-[20px] font-bold text-gray-700">Shipping Address</h2>
          <HiOutlineDotsVertical className="text-[1.6rem] cursor-pointer text-gray-500" />
        </div>
        <div className="mt-4 space-y-2 text-[16px] text-gray-600">
          <p><span className="font-medium text-gray-700">Address Line:</span> PRYM Aerospace, MIDC Jalna</p>
          <p><span className="font-medium text-gray-700">City:</span> Jalna</p>
          <p><span className="font-medium text-gray-700">Postal Code:</span> 431203</p>
          <p><span className="font-medium text-gray-700">Country:</span> India</p>
        </div>
      </div>

      {/* Wishlist Section */}
      <div className="relative border rounded-lg shadow-sm p-6 mb-6 bg-white">
        <div className="flex justify-between items-center">
          <h2 className="text-[20px] font-bold text-gray-700">Wishlist</h2>
        </div>
        <div className="mt-4 space-y-4">
          {userData.wishList && userData.wishList.length > 0 ? (
            userData.wishList.map((item) => (
              <div key={item._id} className="flex gap-4 items-center">
                <img src={item.imageUrl} alt={item.name} className="w-16 h-16 rounded object-cover" />
                <div>
                  <h3 className="font-medium text-gray-700">{item.name}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No items in wishlist.</p>
          )}
        </div>
      </div>

      {/* Edit Profile Button */}
      <div className="flex justify-center">
        <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg font-medium text-[16px] hover:bg-blue-700 transition duration-200">
          <FiEdit className="text-[1.2rem]" /> Edit Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileInformationPage;
