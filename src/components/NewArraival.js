"use client";
import { useState } from "react";
import products from "@/data/NewArrivals.json"; // Import the JSON file
import Image from "next/image";

export default function ProductSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    };

    const handlePrev = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + products.length) % products.length
        );
    };

    return (
        <div className="relative max-w-[1280px] mx-auto">
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
                        <div
                            key={product.id}
                            className="flex-shrink-0 w-[302px] h-[400px] p-2 border rounded-lg"
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
                            <div className="flex justify-between my-4">
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
                    className="flex items-center justify-center w-8 h-8 text-white bg-purple-700 rounded-full"
                    onClick={handlePrev}
                >
                    &lt;
                </button>
                <button
                    className="flex items-center justify-center w-8 h-8 text-white bg-purple-700 rounded-full"
                    onClick={handleNext}
                >
                    &gt;
                </button>
            </div>

            {/* See More Button */}
            <div className="mt-6 text-center">
                <button className="px-6 py-2 text-white bg-purple-700 rounded-md">
                    See more
                </button>
            </div>
        </div>
    );
}
