import React from 'react';

const PanCardInfoPage = () => {
    return (
        <div className="PanCardInfoPage max-w-[900px] mx- auto p -6  rounded-md">
            <h1 className="text-2xl font-bold mb-4">PAN Card Information</h1>

            <p className="text-gray-700 mb-6">
                Your Permanent Account Number (PAN) is a unique 10-character alphanumeric identifier issued by the Income Tax Department of India. 
                It is mandatory to provide your PAN for tax purposes and helps us to ensure a smooth and secure transaction process on our platform.
            </p>

            <h2 className="text-xl font-semibold mb-2">Why We Need Your PAN</h2>
            <ul className="list-disc pl-5 text-gray-700 mb-6">
                <li>To comply with government regulations for high-value transactions.</li>
                <li>For identity verification to ensure safe and secure purchases.</li>
                <li>To help us keep track of transaction records for legal and tax purposes.</li>
            </ul>

            <h2 className="text-xl font-semibold mb-2">How to Submit Your PAN</h2>
            <p className="text-gray-700 mb-6">
                To submit your PAN, please enter the details below. Make sure the information matches your official PAN card to avoid verification issues.
            </p>

            <form className="flex flex-col gap-4">
                <label className="block">
                    <span className="text-gray-600">PAN Card Number</span>
                    <input
                        type="text"
                        maxLength="10"
                        placeholder="Enter your 10-character PAN"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-[#3f51b5]"
                    />
                </label>

                <button
                    type="submit"
                    className="bg-[#3f51b5] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#2e3b8b]"
                >
                    Submit PAN Information
                </button>
            </form>

            <p className="text-gray-500 text-sm mt-4">
                Your information is secure with us. We will not share your PAN details with third parties and will only use it for necessary verification purposes.
            </p>
        </div>
    );
};

export default PanCardInfoPage;
