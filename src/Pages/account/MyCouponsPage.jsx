import React, { useState } from 'react';
import { toast } from "react-toastify";

const MyCouponsPage = () => {
    // State to manage the list of available coupons
    const [coupons, setCoupons] = useState([
        { id: 1, description: '20% OFF', code: 'SAVE20', expiry: '12/31/2024', applied: false },
        { id: 2, description: '15% OFF', code: 'NEWYEAR15', expiry: '01/15/2025', applied: false },
        { id: 3, description: 'Free Shipping', code: 'FREESHIP', expiry: '12/31/2024', applied: false }
    ]);

    // State for the new coupon input
    const [couponCode, setCouponCode] = useState('');

    // Function to handle applying a coupon
    const handleApplyCoupon = (id) => {
        setCoupons(
            coupons.map((coupon) =>
                coupon.id === id ? { ...coupon, applied: !coupon.applied } : coupon
            )
        );
    };

    // Function to handle applying a new coupon entered by the user
    const handleApplyNewCoupon = (e) => {
        e.preventDefault();
        const existingCoupon = coupons.find((coupon) => coupon.code === couponCode.toUpperCase());

        if (existingCoupon) {
            handleApplyCoupon(existingCoupon.id);
        } else {
            toast.error('Coupon code is invalid');
            
        }

        setCouponCode(''); // Clear input field
    };

    return (
        <div className="MyCouponsPage container mx-auto p-6 rounded-md">
            <h1 className="text-2xl font-bold mb-4">My Coupons</h1>

            <p className="text-gray-700 mb-6">
                Here are your available coupons. Apply a coupon to get discounts on your purchases.
            </p>

            {/* Dynamic coupons list */}
            <div className="saved-coupons-list grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {coupons.map((coupon) => (
                    <div
                        key={coupon.id}
                        className={`coupon-item border p-4 rounded-md shadow-sm ${
                            coupon.applied ? 'bg-green-100' : ''
                        }`}
                    >
                        <h3 className="text-lg font-semibold">
                            Discount: {coupon.description}
                        </h3>
                        <p className="text-gray-600 mt-1">Code: {coupon.code}</p>
                        <p className="text-gray-500 mt-1">Expires: {coupon.expiry}</p>
                        <button
                            onClick={() => handleApplyCoupon(coupon.id)}
                            className={`${
                                coupon.applied ? 'bg-gray-500' : 'bg-green-500'
                            } text-white px-4 py-2 mt-4 rounded-md shadow-md hover:bg-green-600 w-full`}
                            disabled={coupon.applied}
                        >
                            {coupon.applied ? 'Coupon Applied' : 'Apply Coupon'}
                        </button>
                    </div>
                ))}
            </div>

            <h2 className="text-xl font-semibold mt-8 mb-4">Apply New Coupon</h2>
            <form onSubmit={handleApplyNewCoupon} className="flex gap-4 mb-6">
                <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Enter coupon code"
                    className="flex-1 border border-gray-300 p-2 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-[#3f51b5]"
                />
                <button
                    type="submit"
                    className="bg-[#3f51b5] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#2e3b8b]"
                >
                    Apply
                </button>
            </form>
        </div>
    );
};

export default MyCouponsPage;
