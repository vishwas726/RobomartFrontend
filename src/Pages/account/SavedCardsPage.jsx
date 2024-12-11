import React, { useState } from 'react';

const SavedCardsPage = () => {
    // State to manage the list of saved cards
    const [cards, setCards] = useState([
        { id: 1, type: 'Visa', last4: '1234', expiry: '12/26' },
        { id: 2, type: 'MasterCard', last4: '5678', expiry: '08/25' },
        { id: 3, type: 'Amex', last4: '9012', expiry: '03/24' },
    ]);

    // State to manage the new card input values
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');

    // Function to handle adding a new card
    const handleAddCard = () => {
        if (!cardNumber || !expiryDate || !cvv) {
            alert('Please fill all the fields');
            return;
        }

        // Add new card to the list
        const newCard = {
            id: Date.now(), // Unique ID based on timestamp
            type: 'Unknown', // Card type (you can extend this to detect the card type)
            last4: cardNumber.slice(-4), // Get last 4 digits of the card number
            expiry: expiryDate,
        };
        setCards([...cards, newCard]);

        // Clear input fields
        setCardNumber('');
        setExpiryDate('');
        setCvv('');
    };

    // Function to handle removing a card
    const handleRemoveCard = (id) => {
        setCards(cards.filter((card) => card.id !== id));
    };

    return (
        <div className="SavedCardsPage container mx-auto p-6 rounded-md">
            <h1 className="text-2xl font-bold mb-4">Saved Cards</h1>

            <p className="text-gray-700 mb-6">
                Manage your saved cards for quick and secure checkout. You can remove any card you no longer use, or add a new one below.
            </p>

            {/* Dynamic cards list */}
            <div className="saved-cards-list grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {cards.map((card) => (
                    <div key={card.id} className="card-item border p-4 rounded-md shadow-sm">
                        <h3 className="text-lg font-semibold">
                            {card.type} - Ending in {card.last4}
                        </h3>
                        <p className="text-gray-600 mt-1">Expires: {card.expiry}</p>
                        <button
                            onClick={() => handleRemoveCard(card.id)}
                            className="bg-red-500 text-white px-4 py-2 mt-4 rounded-md shadow-md hover:bg-red-600 w-full"
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>

            <h2 className="text-xl font-semibold mt-8 mb-4">Add New Card</h2>
            <form
                className="flex flex-col gap-4 mb-6"
                onSubmit={(e) => {
                    e.preventDefault();
                    handleAddCard();
                }}
            >
                <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="Card Number"
                    maxLength="16"
                    className="border border-gray-300 p-2 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-[#3f51b5]"
                />
                <div className="flex gap-4">
                    <input
                        type="text"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        placeholder="Expiry Date (MM/YY)"
                        maxLength="5"
                        className="flex-1 border border-gray-300 p-2 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-[#3f51b5]"
                    />
                    <input
                        type="text"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        placeholder="CVV"
                        maxLength="3"
                        className="flex-1 border border-gray-300 p-2 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-[#3f51b5]"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-[#3f51b5] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#2e3b8b]"
                >
                    Save Card
                </button>
            </form>
        </div>
    );
};

export default SavedCardsPage;
