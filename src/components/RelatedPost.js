"use client";
import { useState } from "react";
import React from 'react';
import { useRouter } from "next/navigation";
import SeeMoreButton from "./SeeMoreButton";
import products from "@/data/NewArrivals.json";
import Image from "next/image";

const RelatedPost = () => {
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
                <h2 className="text-[28px] font-bold">Related Products</h2>
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
                <SeeMoreButton></SeeMoreButton>
            </div>
    );
};

export default RelatedPost;