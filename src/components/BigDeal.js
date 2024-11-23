import Image from 'next/image';
import React from 'react';
import modelPic from '../../public/image 2.png'
import ShopNowButton from './ShopNowButton';


const BigDeal = () => {
    return (
        <div className='flex justify-between bg-[#EEECFB] max-w-[1280px] h-[450px] mx-auto mt-[48px] mb-[91px]'>
           <div className='ms-16 mt-[133px]'>
            <p className='font-pacifico text-[#6F42C1] font-semibold text-[24px]'>Big Deal</p>
            <div className='text-[48px] mb-6 font-medium flex'><div className='text-[#6F42C1] me-1 font-medium'>30%</div> Off for New Customers</div>
            <ShopNowButton></ShopNowButton>
            </div>
            <Image className='w-[427px] h-[450px] me-[80px]' src={modelPic} alt='model-pic'></Image> 
        </div>
    );
};

export default BigDeal;