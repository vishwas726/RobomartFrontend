import React, { useState, useEffect } from 'react';

const PriceRangeSlider = () => {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(10000);
    const [minThumb, setMinThumb] = useState(0);
    const [maxThumb, setMaxThumb] = useState(100);

    const min = 0;
    const max = 10000;

    useEffect(() => {
        setMinThumb((minPrice / max) * 100);
        setMaxThumb((maxPrice / max) * 100);
    }, [minPrice, maxPrice]);

    const handleMinChange = (e) => {
        const value = Math.min(Number(e.target.value), maxPrice);
        setMinPrice(value);
    };

    const handleMaxChange = (e) => {
        const value = Math.max(Number(e.target.value), minPrice);
        setMaxPrice(value);
    };

    return (
        <div className=" flex justify-center transition-all duration-200 ">
            <div className="relative max-w-xl w-full transition-all duration-200">
                <div>
                    <input
                        type="range"
                        step="100"
                        min={min}
                        max={max}
                        value={minPrice}
                        onChange={handleMinChange}
                        className="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer  "
                    />

                    <input
                        type="range"
                        step="100"
                        min={min}
                        max={max}
                        value={maxPrice}
                        onChange={handleMaxChange}
                        className="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer "
                    />

                    <div className="relative z-10 h-1 rounded-lg ">
                        <div className="absolute z-10 left-0 right-0 bottom-0 top-0 rounded-md bg-gray-200"></div>
                        <div
                            className="absolute z-20 top-0 bottom-0 rounded-md bg-blue-700"
                            style={{ left: `${minThumb}%`, right: `${100 - maxThumb}%` }}
                        ></div>
                        <div
                            className="absolute z-30 w-3 h-3 top-1 left-0 bg-blue-700 rounded-full -mt-2 -ml-1  "
                            style={{ left: `${minThumb}%` }}
                        ></div>
                        <div
                            className="absolute z-30 w-3 h-3 top-1 right-0 bg-blue-700 rounded-full -mt-2 -mr-3 "
                            style={{ right: `${100 - maxThumb}% ` }}
                        ></div>
                    </div>
                </div>

                <div className="flex justify-between items-center py-4 ">
                <div className='flex items-center justify-between gap-2 '>
                        <span className='text-sm'>From : </span>  <input
                            type="text"
                            maxLength="5"
                            value={minPrice}
                            onChange={handleMinChange}
                             className="rounded w-12 text-left border-none outline-none text-sm flex-1 text-blue-600 font-semibold "
                        />
                    </div>
                    <div className='flex justify-start items-center gap-2'>
                        <span className='text-sm'>To :</span>  <input
                            type="text"
                            maxLength="5"
                            value={maxPrice}
                            onChange={handleMaxChange}
                            className="rounded w-12 text-left border-none outline-none text-sm flex-1 text-blue-600 font-semibold "
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PriceRangeSlider;
