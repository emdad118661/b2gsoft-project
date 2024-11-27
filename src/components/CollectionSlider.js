import React from 'react';
import { Carousel } from "flowbite-react";
import Image from 'next/image';
import BigDeal from './BigDeal';
import ShopNowButton from './ShopNowButton';
import menCollection from '../../public/model-wearing-jeans-clothes-sunglasses.png'
import kidCollection from '../../public/image 14.png'
import womenCollection from '../../public/image 1.png'

//slider custom theme data
const customTheme = {
    "root": {
        "base": "relative h-full w-full",
        "leftControl": "absolute left-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none",
        "rightControl": "absolute right-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none"
    },
    "indicators": {
        "active": {
            "off": "bg-[#E0DCF8] h-[8px] w-[16px]",
            "on": "bg-[#7E53D4]"
        },
        "base": "h-[8px] w-[32px] rounded-lg",
        "wrapper": "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3"
    },
    "item": {
        "base": "absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
        "wrapper": {
            "off": "w-full flex-shrink-0 transform cursor-default snap-center",
            "on": "w-full flex-shrink-0 transform cursor-grab snap-center"
        }
    },
    "control": {
        "base": "hidden",
        "icon": "hidden"
    },
    "scrollContainer": {
        "base": "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
        "snap": "snap-x"
    }
}

const CollectionSlider = () => {
    return (
        <div className='relative mb-[80px]'>
            <div className="md:mt-[91px] mt-[31px] h-[614px] sm:h-[459px] xl:h-[614px] 2xl:h-[614px]">
                {/* main carousel */}
                <Carousel theme={customTheme}>

                    {/* men collection */}
                    <div className='md:h-[574px] h-[459px] md:max-w-[1272px] max-w-[328px] mx-auto md:flex md:justify-between'>
                        <div className='md:w-[621px] w-full h-[302px] bg-[#EEECFB] md:h-[481px]'>
                            <Image className='absolute bottom-[159px] md:bottom-[92px] md:w-[468px] w-[328px] md:h-[534px] h-[356.33px]' src={menCollection} alt='men-collection'></Image>
                        </div>
                        <div className='md:mt-[166px] mt-[8.67px] md:ms-0 ms-[16px] md:me-[180px]'>
                            <h1 className='md:text-[48px] font-semibold leading-130'>MEN COLLECTION</h1>
                            <ShopNowButton></ShopNowButton>
                        </div>
                    </div>

                    {/* women collection */}
                    <div className='md:h-[574px] h-[459px] md:max-w-[1272px] max-w-[328px] mx-auto flex md:flex-row flex-col md:justify-between'>
                        <div className='md:mt-[166px] mt-[8.67px] md:ms-[100px] mx-[16px] md:order-1 order-2'>
                            <h1 className='md:text-[48px] font-semibold leading-130'>WOMEN COLLECTION</h1>
                            <ShopNowButton></ShopNowButton>
                        </div>
                        <div className='md:w-[621px] w-full h-[302px] bg-[#EEECFB] md:h-[481px] md:order-2 order-1'>
                            <Image className='absolute md:bottom-[94px] bottom-[159px] md:right-[150px] right-[30px] md:w-[341px] w-[250px]  md:h-[525px] h-[356.33px]' src={womenCollection} alt='kid-collection'></Image>
                        </div>
                    </div>

                    {/* kid collection */}
                    <div className='md:h-[574px] h-[459px] md:max-w-[1272px] max-w-[328px] mx-auto md:flex md:justify-between'>
                        <div className='md:w-[621px] w-full h-[302px] bg-[#EEECFB] md:h-[481px]'>
                            <Image className='absolute bottom-[159px] md:bottom-[88px] md:left-[90px] md:w-[468px] w-[328px] md:h-[527px] h-[356.33px]' src={kidCollection} alt='kid-collection'></Image>
                        </div>
                        <div className='md:mt-[166px] mt-[8.67px] md:ms-0 ms-[16px] md:me-[205px]'>
                            <h1 className='md:text-[48px] font-semibold leading-130'>KID COLLECTION</h1>
                            <ShopNowButton></ShopNowButton>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default CollectionSlider;