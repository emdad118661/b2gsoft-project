import Image from 'next/image';
import React from 'react';
import banner from "../../public/hero.png"
import optionbgimage from "../../public/option.png"
import ShopNowButton from './ShopNowButton';

const Banner = () => {

    // Data of Bottom dark puple line image ovarley
    const optionContents = [
        { "id": 1, "heading": "FREE SHIPPING", "description": "BUY BDT 3000+ & GET FREE DELIVERY", "icon": "/truck-delivery.png" },
        { "id": 2, "heading": "7 DAYS EXCHANGE", "description": "EXCHANGE WITHIN 7 DAYS WITH SIMILAR TYPE OF PRODUCTS", "icon": "/exchange.png" },
        { "id": 3, "heading": "100% PAYMENT SECURE", "description": "CASH ON DELIVERY AND SECURED ONLINE PAYMENT", "icon": "/payment.png" }
    ]
    return (
        <div className='md:mb-[47px] mb-[66px]'>
            {/* Top image Ovarley section */}
            <div className='relative'>
                <Image className='md:h-[500px] h-[350px] w-full object-cover object-center' src={banner} alt='banner'></Image>

                <div className='bg-[#111111] md:h-[500px] h-[350px] w-full  bg-opacity-[50%] absolute inset-0 flex'>
                    <div className='md:w-[635px] w-[328px] md:h-[167px] h-[127px] text-white absolute md:left-[440px] left-[15%] md:top-[166px] top-[111px]'>
                        <h3 className='md:text-[48px] text-2xl font-medium leading-130 md:h-[62px] h-[30px]'>Elevate Your Everyday Style</h3>
                        <p className='text-center md:text-[19px] md:me-0 me-6'>Discover the Latest Trends in Sustainable Fashion</p>
                        <div className='mt-[24px] md:ms-[219px] ms-[65.5px]'>
                            <ShopNowButton></ShopNowButton>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom image overley section */}
            <div className='relative'>
                <Image className='w-full md:h-[82px] h-[236px] object-cover object-center' src={optionbgimage} alt='option'></Image>
                <div className='bg-[#6441C2] w-full md:h-[82px] h-[236px] bg-opacity-[90%] absolute inset-0 flex'>
                    <div className='md:grid md:grid-cols-3 md:gap-20 md:max-w-[1280px] max-w-[328px] mx-auto'>
                        {
                            optionContents.map(optionContent => <div className='flex my-4 mt-4 text-white md:my-0 md:mt-0 md:items-center md:justify-center' key={optionContent.id}>
                                <Image className='mb-3 md:me-[18px]' src={optionContent.icon} alt='option-icon' width={32} height={32}></Image>
                                <div className='md:ms-0 ms-5'>
                                    <h1 className='text-[19px] font-semibold leading-130'>{optionContent.heading}</h1>
                                    <p className='text-[10px]'>{optionContent.description}</p>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;