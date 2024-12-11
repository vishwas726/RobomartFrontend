import React, { useState } from 'react';
import { toast } from 'react-toastify';

const GiftCardsPage = () => {
    // State to manage gift card options
    const [giftCards, setGiftCards] = useState([
        { id: 1, amount: '₹500', description: 'Perfect for small treats and accessories.', type: 'fixed' },
        { id: 2, amount: '₹1000', description: 'Ideal for mid-range gifts and gadgets.', type: 'fixed' },
        { id: 3, amount: '₹2000', description: 'Perfect for premium products and larger purchases.', type: 'fixed' },
        { id: 4, amount: 'Custom Amount', description: 'Choose any amount of your preference.', type: 'custom' },
    ]);

    // State to track the gift card code input for redemption
    const [giftCardCode, setGiftCardCode] = useState('');

    // Function to handle buying a gift card
    const handleBuyGiftCard = (id) => {
        const giftCard = giftCards.find((card) => card.id === id);
        toast.success(`You selected a ${giftCard.amount} Gift Card!`);
    };

    // Function to handle redeeming a gift card
    const handleRedeemGiftCard = (e) => {
        e.preventDefault();
        if (giftCardCode.trim() === '') {
            toast.success('Please enter a valid gift card code.');
            return;
        }
        toast.success(`Gift card "${giftCardCode}" redeemed successfully!`);
        setGiftCardCode(''); // Clear input field
    };

    return (
        <div className="GiftCardsPage container mx-auto p-6 rounded-md">
            <h1 className="text-2xl font-bold mb-4">Gift Cards</h1>

            <p className="text-gray-700 mb-6">
                Give the gift of choice! Our gift cards are perfect for any occasion, whether it’s a birthday, anniversary, or just to show appreciation. 
                Choose from our range of gift card options to make your loved ones' shopping experience delightful.
            </p>

            <h2 className="text-xl font-semibold mb-2">How It Works</h2>
            <ul className="list-disc pl-5 text-gray-700 mb-6">
                <li>Choose a gift card amount and personalize your message.</li>
                <li>Gift cards can be redeemed on any product on our website.</li>
                <li>Available in digital format for easy gifting.</li>
            </ul>

            {/* Dynamic Gift Card Options */}
            <div className="gift-card-options grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {giftCards.map((card) => (
                    <div key={card.id} className="gift-card-option border p-4 rounded-md shadow-sm">
                        <h3 className="text-lg font-semibold">{card.amount} Gift Card</h3>
                        <p className="text-gray-600">{card.description}</p>
                        <button
                            onClick={() => handleBuyGiftCard(card.id)}
                            className="bg-[#3f51b5] text-white px-4 py-2 mt-4 rounded-md shadow-md hover:bg-[#2e3b8b] w-full"
                        >
                            {card.type === 'custom' ? 'Customize' : 'Buy Now'}
                        </button>
                    </div>
                ))}
            </div>

            <h2 className="text-xl font-semibold mb-2">Redeem Your Gift Card</h2>
            <p className="text-gray-700 mb-4">
                Enter your gift card code below to redeem it for purchases on our website.
            </p>
            <form onSubmit={handleRedeemGiftCard} className="flex gap-4 mb-6">
                <input
                    type="text"
                    value={giftCardCode}
                    onChange={(e) => setGiftCardCode(e.target.value)}
                    placeholder="Enter Gift Card Code"
                    className="border border-gray-300 p-2 rounded-md shadow-sm flex-1 focus:outline-none focus:ring focus:ring-[#3f51b5]"
                />
                <button
                    type="submit"
                    className="bg-[#3f51b5] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#2e3b8b]"
                >
                    Redeem
                </button>
            </form>

            <p className="text-gray-500 text-sm">
                * Gift cards are valid for 1 year from the date of purchase and can be used on all products available on our platform.
            </p>
        </div>
    );
};

export default GiftCardsPage;
