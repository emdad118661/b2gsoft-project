import React from 'react';
import products from "@/data/NewArrivals.json";
import Image from 'next/image';
import { Carousel } from "flowbite-react";

async function page({ params }) {
    const { id } = await params;

    // Find the product with the matching ID
    const product = products.find((product) => product.id === parseInt(id));

    if (!product) {
        return <div>Product not found!</div>;
    }

    const customTheme = {
        "root": {
            "base": "relative w-[628px] h-[519px]",
            "leftControl": "absolute left-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none",
            "rightControl": "absolute right-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none"
        },
        "indicators": {
            "active": {
                "off": "bg-[#ECE9FE] opacity-[50%]",
                "on": "bg-white dark:bg-gray-800 opacity-[10%]"
            },
            "base": "h-[142px] w-[145px] rounded-xl",
            "wrapper": "absolute bottom-[-158px] left-1/2 flex -translate-x-1/2 space-x-3"
        },
        "item": {
            "base": "absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
            "wrapper": {
                "off": "w-full flex-shrink-0 transform cursor-default snap-center",
                "on": "w-full flex-shrink-0 transform cursor-grab snap-center"
            }
        },
        "control": {
            "base": "inline-flex h-8 w-8 items-center justify-center rounded-full bg-purple-50 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 border border-purple-600 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
            "icon": "h-5 w-5 text-purple-600 dark:text-purple-600 sm:h-6 sm:w-6"
        },
        "scrollContainer": {
            "base": "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
            "snap": "snap-x"
        }
    }

    return (
        <div className='md:max-w-[1280px] max-w-[328px] mx-auto mb-[80px]'>
            <div className='flex font-medium'>Feature Product / <div className='text-purple-600 ms-[3px] font-medium'>New Arrival</div></div>
            <h1>{product.name}</h1>
            <div>
                <Image className='absolute bottom-[-110px] h-[142px] w-[145px]' src={product.image1} alt='image1' width={145} height={142}></Image>
                <Image className='absolute bottom-[-110px] left-[280px] h-[142px] w-[145px]' src={product.image2} alt='image2' width={145} height={142}></Image>
                <Image className='absolute bottom-[-110px] left-[430px] h-[142px] w-[145px]' src={product.image3} alt='image3' width={145} height={142}></Image>
                <Image className='absolute bottom-[-110px] left-[590px] h-[142px] w-[145px]' src={product.image4} alt='image4' width={145} height={142}></Image>
                <Carousel theme={customTheme}>
                    <Image className='w-[628px] h-[519px]' src={product.image1} alt='image1' width={628} height={519}></Image>
                    <Image className='w-[628px] h-[519px]' src={product.image2} alt='image2' width={628} height={519}></Image>
                    <Image className='w-[628px] h-[519px]' src={product.image3} alt='image3' width={628} height={519}></Image>
                    <Image className='w-[628px] h-[519px]' src={product.image4} alt='image4' width={628} height={519}></Image>
                </Carousel>
            </div>
        </div>
    );
};

export default page;