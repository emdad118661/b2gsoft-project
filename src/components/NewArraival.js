"use client";
import { useState } from "react";
import products from "@/data/NewArrivals.json"; // Import the JSON file
import Image from "next/image";
import SeeMoreButton from "./SeeMoreButton";
import { useRouter } from "next/navigation";

export default function ProductSlider() {
    const router = useRouter();

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    };

    const handlePrev = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + products.length) % products.length
        );
    };

    const handleProductClick = (id) => {
        router.push(`/products/${id}`); // Navigate to the product details page
    };

    return (
        <div className="relative md:max-w-[1280px] max-w-[328px] mx-auto">
            <div className="mb-4">
                <h3 className="text-[19px] text-purple-700">
                    FEATURED PRODUCT
                </h3>
                <h2 className="text-[28px] font-bold">New Arrivals</h2>
            </div>

            {/* Slider */}
            <div className="relative overflow-hidden">
                <div
                    className="flex gap-6 transition-transform duration-500"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                >
                    {products.map((product) => (
                        <div onClick={() => handleProductClick(product.id)}
                            key={product.id}
                            className="flex-shrink-0 w-[302px] bg-[#FFFFFF] h-[400px] p-2 border rounded-lg cursor-pointer"
                        >
                            <div className="w-[286px] h-[287px] bg-gray-100 rounded-lg">
                                {/* <Image
                  src={product.image}
                  alt={product.name}
                  width={286}
                  height={287}
                  className="object-cover h-48 rounded-md"
                /> */}
                                <Image src={product.image} alt={product.name} width={286} height={287} className="object-cover w-full rounded-md"></Image>
                            </div>
                            <div className="flex justify-between h-[25px] my-4">
                                <p className="text-[16px]">{product.name}</p>
                                <p className="font-semibold text-[19px]">BDT {product.price}</p>
                            </div>

                            <button className="w-[286px] h-[40px] text-purple-700 border border-purple-700 rounded-md">
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Buttons */}
            <div className="absolute flex gap-2 top-4 right-2">
                <button
                    className="flex items-center justify-center w-8 h-8 text-purple-600 border border-purple-600 rounded-full"
                    onClick={handlePrev}
                >
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.00002 12.5002H20" stroke="#7E53D4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8.99966 7.5C8.99966 7.5 3.99976 11.1824 3.99976 12.5C3.99976 13.8176 8.99976 17.5 8.99976 17.5" stroke="#7E53D4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                </button>
                <button
                    className="flex items-center justify-center w-8 h-8 text-purple-600 border border-purple-600 rounded-full"
                    onClick={handleNext}
                >
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 12.4998H4" stroke="#7E53D4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15.0003 17.5C15.0003 17.5 20.0002 13.8176 20.0002 12.5C20.0002 11.1824 15.0002 7.5 15.0002 7.5" stroke="#7E53D4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                </button>
            </div>

            {/* See More Button */}
            <SeeMoreButton></SeeMoreButton>
        </div>
    );
}
