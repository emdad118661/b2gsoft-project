"use client";
import { useState } from "react";
import products from "@/data/SummerBigDeal.json"; // Import the JSON file
import Image from "next/image";
import SeeMoreButton from "./SeeMoreButton";

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
        <div className="relative md:max-w-[1280px] max-w-[328px] mx-auto">
            <div className="mb-4">
                <h3 className="text-[19px] text-purple-700">
                    SUMMER
                </h3>
                <h2 className="text-[28px] font-bold">Big Deal</h2>
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
                            className="flex-shrink-0 w-[302px] bg-[#FFFFFF] h-[400px] p-2 border rounded-lg"
                        >
                            <div className="w-[286px] h-[252px] bg-gray-100 rounded-lg">
                                {/* <Image
                  src={product.image}
                  alt={product.name}
                  width={286}
                  height={287}
                  className="object-cover h-48 rounded-md"
                /> */}
                                <Image src={product.image} alt={product.name} width={286} height={252} className="object-cover object-center w-full rounded-md"></Image>
                            </div>
                            <svg className="mt-4" width="180" height="19" viewBox="0 0 180 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.15177 2.29616L10.325 4.66196C10.485 4.99129 10.9116 5.30717 11.2716 5.36766L13.398 5.72387C14.7578 5.95239 15.0778 6.94711 14.0979 7.92837L12.4448 9.59517C12.1648 9.87744 12.0115 10.4218 12.0981 10.8117L12.5714 12.875C12.9447 14.5082 12.0848 15.14 10.6516 14.2864L8.65851 13.0968C8.29857 12.8818 7.70531 12.8818 7.33864 13.0968L5.34555 14.2864C3.91904 15.14 3.05247 14.5015 3.42577 12.875L3.89905 10.8117C3.9857 10.4218 3.83239 9.87744 3.55241 9.59517L1.89927 7.92837C0.92604 6.94711 1.23934 5.95239 2.59919 5.72387L4.72562 5.36766C5.07891 5.30717 5.50553 4.99129 5.66551 4.66196L6.83871 2.29616C7.47864 1.01245 8.51851 1.01245 9.15177 2.29616Z" fill="#FFC700" />
                                <path d="M29.1518 2.29616L30.325 4.66196C30.485 4.99129 30.9116 5.30717 31.2716 5.36766L33.398 5.72387C34.7578 5.95239 35.0778 6.94711 34.0979 7.92837L32.4448 9.59517C32.1648 9.87744 32.0115 10.4218 32.0981 10.8117L32.5714 12.875C32.9447 14.5082 32.0848 15.14 30.6516 14.2864L28.6585 13.0968C28.2986 12.8818 27.7053 12.8818 27.3386 13.0968L25.3456 14.2864C23.919 15.14 23.0525 14.5015 23.4258 12.875L23.899 10.8117C23.9857 10.4218 23.8324 9.87744 23.5524 9.59517L21.8993 7.92837C20.926 6.94711 21.2393 5.95239 22.5992 5.72387L24.7256 5.36766C25.0789 5.30717 25.5055 4.99129 25.6655 4.66196L26.8387 2.29616C27.4786 1.01245 28.5185 1.01245 29.1518 2.29616Z" fill="#FFC700" />
                                <path d="M49.1518 2.29616L50.325 4.66196C50.485 4.99129 50.9116 5.30717 51.2716 5.36766L53.398 5.72387C54.7578 5.95239 55.0778 6.94711 54.0979 7.92837L52.4448 9.59517C52.1648 9.87744 52.0115 10.4218 52.0981 10.8117L52.5714 12.875C52.9447 14.5082 52.0848 15.14 50.6516 14.2864L48.6585 13.0968C48.2986 12.8818 47.7053 12.8818 47.3386 13.0968L45.3456 14.2864C43.919 15.14 43.0525 14.5015 43.4258 12.875L43.899 10.8117C43.9857 10.4218 43.8324 9.87744 43.5524 9.59517L41.8993 7.92837C40.926 6.94711 41.2393 5.95239 42.5992 5.72387L44.7256 5.36766C45.0789 5.30717 45.5055 4.99129 45.6655 4.66196L46.8387 2.29616C47.4786 1.01245 48.5185 1.01245 49.1518 2.29616Z" fill="#FFC700" />
                                <path d="M69.1518 2.29616L70.325 4.66196C70.485 4.99129 70.9116 5.30717 71.2716 5.36766L73.398 5.72387C74.7578 5.95239 75.0778 6.94711 74.0979 7.92837L72.4448 9.59517C72.1648 9.87744 72.0115 10.4218 72.0981 10.8117L72.5714 12.875C72.9447 14.5082 72.0848 15.14 70.6516 14.2864L68.6585 13.0968C68.2986 12.8818 67.7053 12.8818 67.3386 13.0968L65.3456 14.2864C63.919 15.14 63.0525 14.5015 63.4258 12.875L63.899 10.8117C63.9857 10.4218 63.8324 9.87744 63.5524 9.59517L61.8993 7.92837C60.926 6.94711 61.2393 5.95239 62.5992 5.72387L64.7256 5.36766C65.0789 5.30717 65.5055 4.99129 65.6655 4.66196L66.8387 2.29616C67.4786 1.01245 68.5185 1.01245 69.1518 2.29616Z" stroke="#FFC700" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M89.1518 2.29616L90.325 4.66196C90.485 4.99129 90.9116 5.30717 91.2716 5.36766L93.398 5.72387C94.7578 5.95239 95.0778 6.94711 94.0979 7.92837L92.4448 9.59517C92.1648 9.87744 92.0115 10.4218 92.0981 10.8117L92.5714 12.875C92.9447 14.5082 92.0848 15.14 90.6516 14.2864L88.6585 13.0968C88.2986 12.8818 87.7053 12.8818 87.3386 13.0968L85.3456 14.2864C83.919 15.14 83.0525 14.5015 83.4258 12.875L83.899 10.8117C83.9857 10.4218 83.8324 9.87744 83.5524 9.59517L81.8993 7.92837C80.926 6.94711 81.2393 5.95239 82.5992 5.72387L84.7256 5.36766C85.0789 5.30717 85.5055 4.99129 85.6655 4.66196L86.8387 2.29616C87.4786 1.01245 88.5185 1.01245 89.1518 2.29616Z" stroke="#FFC700" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M103.136 16.688C102.539 15.652 102.105 14.6067 101.834 13.552C101.563 12.4973 101.428 11.4193 101.428 10.318C101.428 9.21667 101.563 8.13867 101.834 7.084C102.105 6.02933 102.539 4.984 103.136 3.948L103.948 4.256C103.659 4.94667 103.416 5.628 103.22 6.3C103.024 6.96267 102.875 7.62533 102.772 8.288C102.679 8.95067 102.632 9.62733 102.632 10.318C102.632 10.9993 102.679 11.676 102.772 12.348C102.875 13.0107 103.024 13.6733 103.22 14.336C103.416 14.9987 103.659 15.68 103.948 16.38L103.136 16.688ZM108.853 14.126C108.433 14.126 108.023 14.0793 107.621 13.986C107.22 13.8927 106.842 13.7573 106.487 13.58C106.142 13.4027 105.834 13.1927 105.563 12.95L105.997 12.04C106.445 12.404 106.898 12.6747 107.355 12.852C107.822 13.02 108.317 13.104 108.839 13.104C109.53 13.104 110.067 12.9127 110.449 12.53C110.841 12.1473 111.037 11.6433 111.037 11.018C111.037 10.374 110.851 9.84667 110.477 9.436C110.104 9.02533 109.591 8.82 108.937 8.82C108.461 8.82 108.041 8.918 107.677 9.114C107.323 9.30067 107.001 9.59467 106.711 9.996H105.871V4.13H111.597V5.11H107.005V9.044H106.697C106.94 8.652 107.276 8.35333 107.705 8.148C108.135 7.93333 108.615 7.826 109.147 7.826C109.773 7.826 110.309 7.95667 110.757 8.218C111.215 8.47933 111.565 8.848 111.807 9.324C112.059 9.79067 112.185 10.3367 112.185 10.962C112.185 11.578 112.05 12.124 111.779 12.6C111.509 13.076 111.126 13.4493 110.631 13.72C110.137 13.9907 109.544 14.126 108.853 14.126ZM117.038 14.126C116.291 14.126 115.657 13.9347 115.134 13.552C114.621 13.16 114.233 12.586 113.972 11.83C113.711 11.074 113.58 10.15 113.58 9.058C113.58 7.95667 113.711 7.03267 113.972 6.286C114.233 5.53 114.621 4.96067 115.134 4.578C115.657 4.19533 116.291 4.004 117.038 4.004C117.794 4.004 118.429 4.19533 118.942 4.578C119.455 4.96067 119.843 5.52533 120.104 6.272C120.365 7.01867 120.496 7.94267 120.496 9.044C120.496 10.1453 120.365 11.074 120.104 11.83C119.843 12.586 119.455 13.16 118.942 13.552C118.429 13.9347 117.794 14.126 117.038 14.126ZM117.038 13.132C117.822 13.132 118.401 12.8007 118.774 12.138C119.157 11.4753 119.348 10.444 119.348 9.044C119.348 7.644 119.161 6.622 118.788 5.978C118.415 5.32467 117.831 4.998 117.038 4.998C116.263 4.998 115.685 5.32467 115.302 5.978C114.919 6.63133 114.728 7.65333 114.728 9.044C114.728 10.444 114.915 11.4753 115.288 12.138C115.671 12.8007 116.254 13.132 117.038 13.132ZM122.534 16.688L121.722 16.38C122.021 15.6707 122.264 14.98 122.45 14.308C122.646 13.6453 122.791 12.9873 122.884 12.334C122.978 11.6713 123.024 10.9993 123.024 10.318C123.024 9.63667 122.978 8.96933 122.884 8.316C122.791 7.65333 122.646 6.986 122.45 6.314C122.264 5.642 122.021 4.956 121.722 4.256L122.534 3.948C123.132 4.984 123.566 6.034 123.836 7.098C124.107 8.15267 124.242 9.226 124.242 10.318C124.242 11.4193 124.107 12.4973 123.836 13.552C123.566 14.6067 123.132 15.652 122.534 16.688Z" fill="#1D1D1D" />
                            </svg>

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
}