import React, { useState } from 'react';

const SavedUPIPage = () => {
    // State to manage the list of saved UPI accounts
    const [upiAccounts, setUpiAccounts] = useState([
        { id: 1, upiId: 'user@bank', addedOn: '01/10/2024' },
        { id: 2, upiId: 'example@upi', addedOn: '15/08/2024' },
        { id: 3, upiId: 'contact@pay', addedOn: '20/09/2024' },
    ]);

    // State to manage the new UPI ID input
    const [newUpiId, setNewUpiId] = useState('');

    // Function to handle adding a new UPI account
    const handleAddUpi = () => {
        if (newUpiId.trim() === '') {
            alert('Please enter a valid UPI ID');
            return;
        }
        const newAccount = {
            id: Date.now(), // Unique ID based on timestamp
            upiId: newUpiId,
            addedOn: new Date().toLocaleDateString(), // Current date
        };
        setUpiAccounts([...upiAccounts, newAccount]);
        setNewUpiId(''); // Clear the input field
    };

    // Function to handle removing a UPI account
    const handleRemoveUpi = (id) => {
        setUpiAccounts(upiAccounts.filter((account) => account.id !== id));
    };

    return (
        <div className="SavedUPIPage container mx-auto p-6 rounded-md">
            <h1 className="text-2xl font-bold mb-4">Saved UPI Accounts</h1>

            <p className="text-gray-700 mb-6">
                Manage your saved UPI payment accounts for faster and more secure checkout.
                Save or remove UPI IDs as needed for convenience and ease during your next purchase.
            </p>

            {/* Dynamic UPI accounts list */}
            <div className="saved-upi-list grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {upiAccounts.map((account) => (
                    <div
                        key={account.id}
                        className="upi-card border p-4 rounded-md shadow-sm"
                    >
                        <h3 className="text-lg font-semibold">UPI ID: {account.upiId}</h3>
                        <p className="text-gray-600 mt-1">Added on: {account.addedOn}</p>
                        <button
                            onClick={() => handleRemoveUpi(account.id)}
                            className="bg-red-500 text-white px-4 py-2 mt-4 rounded-md shadow-md hover:bg-red-600 w-full"
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>

            <h2 className="text-xl font-semibold mt-8 mb-4">Add New UPI Account</h2>
            <form
                className="flex flex-col sm:flex-row gap-4 mb-6"
                onSubmit={(e) => {
                    e.preventDefault();
                    handleAddUpi();
                }}
            >
                <input
                    type="text"
                    value={newUpiId}
                    onChange={(e) => setNewUpiId(e.target.value)}
                    placeholder="Enter new UPI ID"
                    className="flex-1 border border-gray-300 p-2 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-[#3f51b5]"
                />
                <button
                    type="submit"
                    className="bg-[#3f51b5] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#2e3b8b]"
                >
                    Save UPI ID
                </button>
            </form>
        </div>
    );
};

export default SavedUPIPage;
