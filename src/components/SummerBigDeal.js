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
        <div id="deal" className="relative md:max-w-[1280px] max-w-[328px] mx-auto">
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
                            <div className="relative w-[286px] h-[252px] bg-[#F6F5FD] rounded-lg">
                                {/* Product Image */}
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={286}
                                    height={252}
                                    className="object-cover object-center w-full h-full rounded-md"
                                />

                                {/* "Up to 40%" Badge */}
                                <div className="absolute top-0 right-4">
                                    {/* <span>Up to</span> 
                                    <span>40%</span> */}
                                    <svg width="44" height="60" viewBox="0 0 44 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0H44V38C44 50.1503 34.1503 60 22 60C9.84974 60 0 50.1503 0 38V0Z" fill="#7E53D4" />
                                        <path d="M18.4964 15.195C17.7511 15.195 17.0946 15.0433 16.5269 14.74C15.9636 14.4367 15.5216 14.0098 15.2009 13.4595C14.8846 12.9092 14.7264 12.2635 14.7264 11.5225V5.653L16.3124 5.64V11.4835C16.3124 11.8345 16.3709 12.1487 16.4879 12.426C16.6092 12.7033 16.7717 12.9395 16.9754 13.1345C17.1791 13.3252 17.4131 13.4703 17.6774 13.57C17.9417 13.6697 18.2147 13.7195 18.4964 13.7195C18.7867 13.7195 19.0619 13.6697 19.3219 13.57C19.5862 13.466 19.8202 13.3187 20.0239 13.128C20.2276 12.933 20.3879 12.6968 20.5049 12.4195C20.6219 12.1422 20.6804 11.8302 20.6804 11.4835V5.64H22.2664V11.5225C22.2664 12.2635 22.1061 12.9092 21.7854 13.4595C21.4691 14.0098 21.0271 14.4367 20.4594 14.74C19.8961 15.0433 19.2417 15.195 18.4964 15.195ZM27.4564 15.195C26.7717 15.195 26.1975 15.0325 25.7339 14.7075C25.2702 14.3825 24.9214 13.9405 24.6874 13.3815C24.4534 12.8182 24.3364 12.1877 24.3364 11.49C24.3364 10.7837 24.4534 10.151 24.6874 9.592C24.9214 9.033 25.2637 8.59317 25.7144 8.2725C26.1694 7.9475 26.7305 7.785 27.3979 7.785C28.0609 7.785 28.635 7.9475 29.1204 8.2725C29.61 8.59317 29.9892 9.033 30.2579 9.592C30.5265 10.1467 30.6609 10.7793 30.6609 11.49C30.6609 12.192 30.5287 12.8225 30.2644 13.3815C30 13.9405 29.6274 14.3825 29.1464 14.7075C28.6654 15.0325 28.102 15.195 27.4564 15.195ZM24.0699 18.12V7.98H25.4544V12.907H25.6494V18.12H24.0699ZM27.2159 13.791C27.6232 13.791 27.959 13.6892 28.2234 13.4855C28.4877 13.2818 28.6827 13.0067 28.8084 12.66C28.9384 12.309 29.0034 11.919 29.0034 11.49C29.0034 11.0653 28.9384 10.6797 28.8084 10.333C28.6784 9.982 28.4769 9.70467 28.2039 9.501C27.9309 9.293 27.5842 9.189 27.1639 9.189C26.7652 9.189 26.4402 9.2865 26.1889 9.4815C25.9375 9.67217 25.7512 9.94083 25.6299 10.2875C25.5129 10.6298 25.4544 11.0307 25.4544 11.49C25.4544 11.945 25.5129 12.3458 25.6299 12.6925C25.7512 13.0392 25.9397 13.31 26.1954 13.505C26.4554 13.6957 26.7955 13.791 27.2159 13.791ZM20.8722 32C20.4085 32.0867 19.9535 32.1235 19.5072 32.1105C19.0652 32.1018 18.6687 32.0217 18.3177 31.87C17.9667 31.714 17.7002 31.4692 17.5182 31.1355C17.3578 30.8322 17.2733 30.5223 17.2647 30.206C17.256 29.8897 17.2517 29.5322 17.2517 29.1335V23.03H18.8117V29.0425C18.8117 29.3242 18.8138 29.5712 18.8182 29.7835C18.8268 29.9958 18.8723 30.1692 18.9547 30.3035C19.1107 30.5635 19.3598 30.7087 19.7022 30.739C20.0445 30.7693 20.4345 30.752 20.8722 30.687V32ZM15.9777 26.2085V24.98H20.8722V26.2085H15.9777ZM25.1267 32.195C24.4247 32.195 23.8115 32.0368 23.2872 31.7205C22.7629 31.4042 22.3555 30.9687 22.0652 30.414C21.7792 29.855 21.6362 29.2137 21.6362 28.49C21.6362 27.7533 21.7835 27.1077 22.0782 26.553C22.3729 25.9983 22.7824 25.565 23.3067 25.253C23.831 24.941 24.4377 24.785 25.1267 24.785C25.833 24.785 26.4484 24.9432 26.9727 25.2595C27.497 25.5758 27.9044 26.0135 28.1947 26.5725C28.485 27.1272 28.6302 27.7663 28.6302 28.49C28.6302 29.218 28.4829 29.8615 28.1882 30.4205C27.8979 30.9752 27.4905 31.4107 26.9662 31.727C26.4419 32.039 25.8287 32.195 25.1267 32.195ZM25.1267 30.726C25.7507 30.726 26.2144 30.518 26.5177 30.102C26.821 29.686 26.9727 29.1487 26.9727 28.49C26.9727 27.8097 26.8189 27.268 26.5112 26.865C26.2035 26.4577 25.742 26.254 25.1267 26.254C24.7064 26.254 24.3597 26.3493 24.0867 26.54C23.818 26.7263 23.6187 26.9885 23.4887 27.3265C23.3587 27.6602 23.2937 28.048 23.2937 28.49C23.2937 29.1703 23.4475 29.7142 23.7552 30.1215C24.0672 30.5245 24.5244 30.726 25.1267 30.726ZM13.2116 49V47.453H9.06455V45.9905L12.0611 39.64H13.8486L10.8521 45.9905H13.2116V43.553H14.7976V45.9905H15.6751V47.453H14.7976V49H13.2116ZM20.6007 49.195C19.9377 49.195 19.3527 49.0542 18.8457 48.7725C18.3387 48.4865 17.9422 48.09 17.6562 47.583C17.3746 47.076 17.2337 46.491 17.2337 45.828V42.812C17.2337 42.149 17.3746 41.564 17.6562 41.057C17.9422 40.55 18.3387 40.1557 18.8457 39.874C19.3527 39.588 19.9377 39.445 20.6007 39.445C21.2637 39.445 21.8466 39.588 22.3492 39.874C22.8562 40.1557 23.2527 40.55 23.5387 41.057C23.8247 41.564 23.9677 42.149 23.9677 42.812V45.828C23.9677 46.491 23.8247 47.076 23.5387 47.583C23.2527 48.09 22.8562 48.4865 22.3492 48.7725C21.8466 49.0542 21.2637 49.195 20.6007 49.195ZM20.6007 47.7065C20.9301 47.7065 21.2291 47.6285 21.4977 47.4725C21.7664 47.3122 21.9787 47.0998 22.1347 46.8355C22.2907 46.5668 22.3687 46.2678 22.3687 45.9385V42.695C22.3687 42.3613 22.2907 42.0623 22.1347 41.798C21.9787 41.5293 21.7664 41.317 21.4977 41.161C21.2291 41.0007 20.9301 40.9205 20.6007 40.9205C20.2714 40.9205 19.9724 41.0007 19.7037 41.161C19.4351 41.317 19.2227 41.5293 19.0667 41.798C18.9107 42.0623 18.8327 42.3613 18.8327 42.695V45.9385C18.8327 46.2678 18.9107 46.5668 19.0667 46.8355C19.2227 47.0998 19.4351 47.3122 19.7037 47.4725C19.9724 47.6285 20.2714 47.7065 20.6007 47.7065ZM27.0904 49L26.0504 47.96L34.3769 39.64L35.4169 40.6865L27.0904 49ZM33.4669 49.195C33.0379 49.195 32.6457 49.091 32.2904 48.883C31.9394 48.6707 31.6577 48.389 31.4454 48.038C31.233 47.6827 31.1269 47.2883 31.1269 46.855C31.1269 46.4303 31.2352 46.0403 31.4519 45.685C31.6685 45.3297 31.9545 45.0458 32.3099 44.8335C32.6652 44.6212 33.0509 44.515 33.4669 44.515C33.8959 44.515 34.288 44.6212 34.6434 44.8335C34.9987 45.0415 35.2804 45.3232 35.4884 45.6785C35.7007 46.0295 35.8069 46.4217 35.8069 46.855C35.8069 47.2883 35.7007 47.6827 35.4884 48.038C35.2804 48.389 34.9987 48.6707 34.6434 48.883C34.288 49.091 33.8959 49.195 33.4669 49.195ZM33.4669 47.856C33.6445 47.856 33.8092 47.8105 33.9609 47.7195C34.1169 47.6285 34.2404 47.5072 34.3314 47.3555C34.4224 47.2038 34.4679 47.037 34.4679 46.855C34.4679 46.673 34.4224 46.5062 34.3314 46.3545C34.2404 46.2028 34.1169 46.0815 33.9609 45.9905C33.8092 45.8995 33.6445 45.854 33.4669 45.854C33.2849 45.854 33.118 45.8995 32.9664 45.9905C32.8147 46.0815 32.6912 46.2028 32.5959 46.3545C32.5049 46.5062 32.4594 46.673 32.4594 46.855C32.4594 47.037 32.5049 47.2038 32.5959 47.3555C32.6912 47.5072 32.8147 47.6285 32.9664 47.7195C33.118 47.8105 33.2849 47.856 33.4669 47.856ZM28.0004 44.125C27.5714 44.125 27.1792 44.021 26.8239 43.813C26.4685 43.6007 26.1847 43.319 25.9724 42.968C25.7644 42.6127 25.6604 42.2183 25.6604 41.785C25.6604 41.3603 25.7687 40.9703 25.9854 40.615C26.202 40.2597 26.488 39.9758 26.8434 39.7635C27.1987 39.5512 27.5844 39.445 28.0004 39.445C28.4294 39.445 28.8194 39.5512 29.1704 39.7635C29.5257 39.9715 29.8095 40.2532 30.0219 40.6085C30.2342 40.9595 30.3404 41.3517 30.3404 41.785C30.3404 42.2183 30.2342 42.6127 30.0219 42.968C29.8095 43.319 29.5257 43.6007 29.1704 43.813C28.8194 44.021 28.4294 44.125 28.0004 44.125ZM28.0004 42.786C28.1824 42.786 28.3492 42.7405 28.5009 42.6495C28.6525 42.5585 28.7739 42.4372 28.8649 42.2855C28.9559 42.1338 29.0014 41.967 29.0014 41.785C29.0014 41.603 28.9559 41.4362 28.8649 41.2845C28.7739 41.1328 28.6525 41.0115 28.5009 40.9205C28.3492 40.8295 28.1824 40.784 28.0004 40.784C27.8184 40.784 27.6515 40.8295 27.4999 40.9205C27.3482 41.0115 27.2269 41.1328 27.1359 41.2845C27.0449 41.4362 26.9994 41.603 26.9994 41.785C26.9994 41.967 27.0449 42.1338 27.1359 42.2855C27.2269 42.4372 27.3482 42.5585 27.4999 42.6495C27.6515 42.7405 27.8184 42.786 28.0004 42.786Z" fill="white" />
                                    </svg>

                                </div>
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
                    className="flex items-center justify-center w-8 h-8 border border-purple-600 rounded-full"
                    onClick={handlePrev}
                >
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.00002 12.5002H20" stroke="#7E53D4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8.99966 7.5C8.99966 7.5 3.99976 11.1824 3.99976 12.5C3.99976 13.8176 8.99976 17.5 8.99976 17.5" stroke="#7E53D4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <button
                    className="flex items-center justify-center w-8 h-8 border border-purple-600 rounded-full"
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
