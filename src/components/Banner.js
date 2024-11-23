import Image from 'next/image';
import React from 'react';
import banner from "../../public/hero.png"
import optionbgimage from "../../public/option.png"
import ShopNowButton from './ShopNowButton';

const Banner = () => {
    const optionContents = [
        { "id": 1, "heading": "FREE SHIPPING", "description": "BUY BDT 3000+ & GET FREE DELIVERY", "icon": "/truck-delivery.png" },
        { "id": 2, "heading": "7 DAYS EXCHANGE", "description": "EXCHANGE WITHIN 7 DAYS WITH SIMILAR TYPE OF PRODUCTS", "icon": "/exchange.png" },
        { "id": 3, "heading": "100% PAYMENT SECURE", "description": "CASH ON DELIVERY AND SECURED ONLINE PAYMENT", "icon": "/payment.png" }
    ]
    return (
        <div className='mb-[47px]'>
            <div className='relative'>
                <Image className='h-[500px] w-full' src={banner} alt='banner'></Image>

                <div className='bg-[#111111] h-[500px] w-full  bg-opacity-[50%] absolute inset-0 flex'>
                    <div className='w-[635px] h-[167px] text-white absolute left-[440px] top-[166px]'>
                        <h1 className='text-[48px] font-medium h-[62px]'>Elevate Your Everyday Style</h1>
                        <p className='text-center text-[19px]'>Discover the Latest Trends in Sustainable Fashion</p>
                        <div className='mt-[24px] ms-[219px]'>
                            <ShopNowButton></ShopNowButton>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative'>
                <Image className='w-full h-[82px]' src={optionbgimage} alt='option'></Image>
                <div className='bg-[#6441C2] w-full h-[82px] bg-opacity-[90%] absolute inset-0 flex'>
                    <div className='grid grid-cols-3 gap-20 max-w-[1280px] mx-auto'>
                        {
                            optionContents.map(optionContent => <div className='flex items-center justify-center text-white' key={optionContent.id}>
                                <Image className='mb-3 me-[18px]' src={optionContent.icon} alt='option-icon' width={32} height={32}></Image>
                                <div>
                                    <h1 className='text-[19px] font-medium'>{optionContent.heading}</h1>
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