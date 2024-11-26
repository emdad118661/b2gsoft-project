"use client";
import React from 'react';


const QuantityInput = () => {
    const handleDecrease = () => {
        const quantityElement = document.getElementById("quantity"); // Get the div element
        let quantity = parseInt(quantityElement.innerText, 10); // Parse the value as an integer

        if (quantity > 1) {
            quantity--; // Decrease the value
            quantityElement.innerText = quantity; // Update the div's content
        }
    };

    const handleIncrease = () => {
        const quantityElement = document.getElementById("quantity"); // Get the div element
        let quantity = parseInt(quantityElement.innerText, 10); // Parse the value as an integer

        if (quantity < 5) { // Ensure it doesn't go beyond 5
            quantity++; // Increase the value
            quantityElement.innerText = quantity; // Update the div's content
        }
    };
    return (
        <div className='w-[132px] h-[48px] gap-[30.5px] rounded-3xl bg-[#ECE9FE] flex justify-center items-center'>
            <button className='cursor-pointer' onClick={handleDecrease}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3332 8H2.6665" stroke="#1D1D1D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <div id="quantity">1</div>
            <button className='cursor-pointer' onClick={handleIncrease}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 2.66669V13.3334" stroke="#1D1D1D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2.6665 8H13.3332" stroke="#1D1D1D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    );
};

export default QuantityInput;