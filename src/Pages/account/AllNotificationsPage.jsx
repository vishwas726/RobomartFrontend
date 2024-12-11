import React from 'react';

const AllNotificationsPage = () => {
    return (
        <div className="AllNotificationsPage container mx-auto p-6    rounded-md">
            <h1 className="text-2xl font-bold mb-4">All Notifications</h1>

            <p className="text-gray-700 mb-6">
                Stay updated with the latest information regarding your account, orders, and special offers.
            </p>

            <div className="notifications-list space-y-4">
                <div className="notification-item border p-4 rounded-md shadow-sm">
                    <h3 className="text-lg font-semibold">Order Shipped</h3>
                    <p className="text-gray-600 mt-1">
                        Your order #12345 has been shipped. You can track your order in the Orders section.
                    </p>
                    <p className="text-gray-500 mt-1 text-sm">Date: 11/06/2024</p>
                </div>

                <div className="notification-item border p-4 rounded-md shadow-sm">
                    <h3 className="text-lg font-semibold">New Discount Available</h3>
                    <p className="text-gray-600 mt-1">
                        Get 10% off on your next purchase with the code SAVE10. Valid till 11/15/2024.
                    </p>
                    <p className="text-gray-500 mt-1 text-sm">Date: 11/01/2024</p>
                </div>

                <div className="notification-item border p-4 rounded-md shadow-sm">
                    <h3 className="text-lg font-semibold">Account Security Alert</h3>
                    <p className="text-gray-600 mt-1">
                        We noticed a new login from a different device. Please review your account activity.
                    </p>
                    <p className="text-gray-500 mt-1 text-sm">Date: 10/29/2024</p>
                </div>

                <div className="notification-item border p-4 rounded-md shadow-sm">
                    <h3 className="text-lg font-semibold">Payment Successful</h3>
                    <p className="text-gray-600 mt-1">
                        Payment of ₹2,500 was successfully processed for your recent order.
                    </p>
                    <p className="text-gray-500 mt-1 text-sm">Date: 10/27/2024</p>
                </div>
            </div>
        </div>
    );
};

export default AllNotificationsPage;
