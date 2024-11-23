import Image from 'next/image';
import React from 'react';
import modelPic from '../../public/image 2.png'
import ShopNowButton from './ShopNowButton';


const BigDeal = () => {
    return (
        <div className='md:flex md:justify-between bg-[#EEECFB] md:max-w-[1280px] max-w-full md:h-[450px] h-[633px] mx-auto md:mt-[48px] mt-[24px] mb-[31px] md:mb-[91px]'>
            <div className='md:ms-16 md:text-start text-center md:mt-[133px]'>
                <p className='font-pacifico md:pt-0 pt-10 text-[#6F42C1] font-semibold text-[24px] pb-2'>Big Deal</p>
                <div className='md:text-[48px] text-2xl md:ms-0 ms-16 mb-6 font-medium flex'><div className='text-[#6F42C1] me-1 font-medium'>30%</div> Off for New Customers</div>
                <div className='md:ms-0 ms-[120px]'>
                    <ShopNowButton></ShopNowButton>
                </div>
            </div>
            <Image className='md:w-[427px] w-[328px] h-[369px] md:h-[450px] md:mt-0 mt-[72px] md:me-[80px] md:ms-0 ms-[60px]' src={modelPic} alt='model-pic'></Image>
        </div>
    );
};

export default BigDeal;