import React from 'react';
import products from "@/data/NewArrivals.json";
import Image from 'next/image';
import { Carousel, Rating, RatingStar } from "flowbite-react";
import QuantityInput from '@/components/QuantityInput';

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
                "off": "bg-transparent",
                "on": "bg-white dark:bg-gray-800 opacity-[50%]"
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
            "icon": "hidden"
        },
        "scrollContainer": {
            "base": "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
            "snap": "snap-x"
        }
    }

    return (
        <div className='md:max-w-[1280px] max-w-[328px] mx-auto mb-[80px]'>
            <div className='flex font-medium'>Feature Product / <div className='text-purple-600 ms-[3px] font-medium'>New Arrival</div></div>
            <div className='flex mt-6 gap-[24px] h-[677px]'>
                <div className='w-[628px] h-[677px]'>
                    <Image className='absolute bg-[#ECE9FE] rounded-lg bottom-[-109.8px] left-[125.5px]  h-[142px] w-[145px]' src={product.image1} alt='image1' width={145} height={142}></Image>
                    <Image className='absolute bg-[#ECE9FE] bottom-[-109.8px] left-[282.5px] rounded-lg h-[142px] w-[145px]' src={product.image2} alt='image2' width={145} height={142}></Image>
                    <Image className='absolute bg-[#ECE9FE] bottom-[-109.8px] left-[438.5px] rounded-lg h-[142px] w-[145px]' src={product.image3} alt='image3' width={145} height={142}></Image>
                    <Image className='absolute bg-[#ECE9FE] bottom-[-109.8px] left-[597.5px] rounded-lg h-[142px] w-[145px]' src={product.image4} alt='image4' width={145} height={142}></Image>
                    <Carousel theme={customTheme}>
                        <Image className='w-[628px] h-[519px]' src={product.image1} alt='image1' width={628} height={519}></Image>
                        <Image className='w-[628px] h-[519px]' src={product.image2} alt='image2' width={628} height={519}></Image>
                        <Image className='w-[628px] h-[519px]' src={product.image3} alt='image3' width={628} height={519}></Image>
                        <Image className='w-[628px] h-[519px]' src={product.image4} alt='image4' width={628} height={519}></Image>
                    </Carousel>
                </div>
                <div className='w-[633px] h-[581px]'>
                    <div className='w-[193px] h-[40px] bg-purple-950 text-white rounded-xl flex items-center justify-center'>New Arrival</div>
                    <h1 className='text-[33px] mt-[24px] font-medium'>{product.name}</h1>
                    <div className='mt-[15px] flex font-medium'>
                        <Rating>
                            <RatingStar />
                            <RatingStar />
                            <RatingStar />
                            <RatingStar />
                            <RatingStar filled={false} />
                        </Rating>
                        <p>(4.0)</p>
                        <p className='text-purple-600 ms-4'>121 reviews</p>
                    </div>
                    <h1 className='text-[28px] font-semibold my-[24px]'>BDT {product.price}</h1>
                    <hr />
                    <div className='my-[24px] flex gap-[69px] w-[633px] h-[81px]'>
                        <div className='w-[282px]'>
                            <h1 className='text-[19px] font-medium'>Available Size</h1>
                            <div className='flex gap-2 mt-4'>
                                <p className='w-[40px] h-[40px] flex justify-center items-center rounded-lg hover:border hover:border-purple-600'>S</p>
                                <p className='w-[40px] h-[40px] flex justify-center items-center rounded-lg hover:border hover:border-purple-600'>M</p>
                                <p className='w-[40px] h-[40px] flex justify-center items-center rounded-lg hover:border hover:border-purple-600'>L</p>
                                <p className='w-[40px] h-[40px] flex justify-center items-center rounded-lg hover:border hover:border-purple-600'>XL</p>
                            </div>
                        </div>
                        <div className='w-[282px]'>
                            <h1 className='text-[19px] font-medium'>Available Color</h1>
                            <div className='flex gap-2 mt-4'>
                                <input type="radio" name="radio-1" className="radio" defaultChecked />
                                <p>Off white</p>
                                <input type="radio" name="radio-1" className="radio" />
                                <p>Black</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='mt-[24px]'>
                        <h1 className='text-[16px] font-semibold'>Quantity</h1>
                        <div className='mt-[16px]'>
                            <QuantityInput></QuantityInput>
                        </div>
                    </div>
                    <div className='flex gap-4 mt-[32px]'>
                        <button className='w-[308.5px] h-[40px] rounded-lg text-white bg-purple-600'>Buy Now</button>
                        <button className='w-[308.5px] h-[40px] rounded-lg text-purple-600 border border-purple-600'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;