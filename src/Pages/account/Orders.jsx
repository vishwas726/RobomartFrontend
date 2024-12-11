import React, { useState } from "react";
import NoOrder from "../../assets/images/Account/NoOrder.svg";

const OrdersPage = ({ userData }) => {
  const orders = userData.orders || [];

  return (
    <div className="p-4 bg -[#F8F9FA] min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">My Orders</h1>
      {orders.length === 0 ? (
        <>
          <p className="text-gray-600">You have no orders yet.</p>
          <img src={NoOrder} alt="No Orders" className="max-w-[600px] mx-auto" />
        </>
      ) : (
        <div className="space-y-4 flex  flex-col-reverse">
          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-white shadow-sm p-4 rounded-lg border border-gray-200"
            >
              <div className="flex justify-between items-center">
                <h2 className="font-semibold md:text-lg">Order ID: {order.paymentInfo.orderId}</h2>
                <span
                 className={`px-2 py-1 text-sm rounded ${
                  order.status === "Delivered"
                    ? "bg-green-100 text-green-600"
                    : order.status === "Failed"
                    ? "bg-red-100 text-red-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}
                >
                  {order.status}
                </span>
              </div>
              <div className="mt-2">
                {order.products.map((item) => (
                  <div
                    key={item._id}
                    className="flex justify-between items-center border-b py-2"
                  >
                    <div className="flex items-center">
                      <img
                        src={item.product.imageUrl}
                        alt={item.product.name}
                        className="w-16 h-16 rounded-md mr-4"
                      />
                      <div>
                        <p className="font-medium text-gray-800">{item.product.name}</p>
                        <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="font-semibold text-gray-800">
                      ₹{item.product.price * item.quantity}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <p className="text-gray-600">Total: ₹{order.total}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                  Track Order
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
