import React, { useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import axios from "axios";
import { useAuth } from "../../Context/AuthContext";
import { toast } from "react-toastify";
// import "./AddressPage.css"; // Import CSS for animations

const AddressPage = ({ userData, setUserData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newAddress, setNewAddress] = useState({
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });
  const { user } = useAuth();

  const handleChange = (e) => {
    setNewAddress({ ...newAddress, [e.target.name]: e.target.value });
  };

  const handleAddAddress = async () => {
    try {
      const response = await axios.post(
        "/addresses",
        newAddress,
        {
          headers: {
            authorization: `Bearer ${user.token}`,
          },
        }
      );
      if (response.status === 200) {
        setUserData((prevData) => ({
          ...prevData,
          address: [...prevData.address, response.data],
        }));
        setIsModalOpen(false);
        toast.success("New Address Added");
      }
    } catch (error) {
      console.error("Error adding address:", error);
    }
  };

  return (
    <div>
      <h1 className="text-[23px] font-semibold mb-1 mt-6">Manage Addresses</h1>

      <div
        className="border p-3 text-[18px] mt-6 text-blue-500 font-medium cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        + Add New Address
      </div>

      {userData?.address?.length > 0 ? (
        userData.address.map((address, index) => (
          <div key={index} className="relative border mt-6 p-5">
            <div className="flex justify-between items-center font-bold">
              <h3>
                {address.street}, {address.city}, {address.state},{" "}
                {address.postalCode}, {address.country}
              </h3>
            </div>
            <p className="addressLines mt-4">{address.fullAddress}</p>
          </div>
        ))
      ) : (
        <p className="mt-6 text-gray-500">No addresses found. Please add a new address.</p>
      )}

      {isModalOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-[100] transition-all duration-200">
          <div className="bg-white p-6 rounded-lg w-[95%] md:w-[60%] animate-modal">
            <h2 className="text-lg font-semibold mb-4">Add New Address</h2>
            <div>
              <label className="block mb-2">Street</label>
              <input
                type="text"
                name="street"
                value={newAddress.street}
                onChange={handleChange}
                className="w-full p-2 border mb-4"
              />
              <label className="block mb-2">City</label>
              <input
                type="text"
                name="city"
                value={newAddress.city}
                onChange={handleChange}
                className="w-full p-2 border mb-4"
              />
              <label className="block mb-2">State</label>
              <input
                type="text"
                name="state"
                value={newAddress.state}
                onChange={handleChange}
                className="w-full p-2 border mb-4"
              />
              <label className="block mb-2">Postal Code</label>
              <input
                type="text"
                name="postalCode"
                value={newAddress.postalCode}
                onChange={handleChange}
                className="w-full p-2 border mb-4"
              />
              <label className="block mb-2">Country</label>
              <input
                type="text"
                name="country"
                value={newAddress.country}
                onChange={handleChange}
                className="w-full p-2 border mb-4"
              />
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={handleAddAddress}
                className="bg-blue-500 text-white p-2 rounded-lg mr-2"
              >
                Add Address
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-500 text-white p-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddressPage;
