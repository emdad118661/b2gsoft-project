import React from 'react';

const ShopNowButton = () => {
    return (
        <div className='flex text-white'>
            <button className='bg-[#8F71E1] w-[149px] h-[48px] text-[19px] rounded-3xl'>Shop Now</button>
            <div className='w-[48px] h-[48px] rounded-full bg-[#8F71E1]'>
                <svg className='mt-3 ms-3' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 7L6 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M11 6.13153C11 6.13153 16.6335 5.65664 17.4885 6.51155C18.3434 7.36647 17.8684 13 17.8684 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    );
};

export default ShopNowButton;