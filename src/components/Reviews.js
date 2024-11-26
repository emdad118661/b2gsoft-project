import Image from 'next/image';
import React from 'react';
import dp from "../../public/dp.png"

const Reviews = () => {
    return (
        <div>
            <div className='flex gap-[13px]'>
                <Image className='w-[40px] h-[40px]' src={dp} alt='dp'></Image>
                <div>
                    <div className='flex'>
                        <p className='text-[16px] font-semibold font-manrope leading-[130%]'>Cameron Williamvvvson</p>
                        <p className='text-[13px] font-manrope flex justify-center items-center ms-2 text-[#656565] leading-[130%]'>3 days</p>
                    </div>
                    <svg width="136" height="24" viewBox="0 0 136 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z" fill="#FFCF11" />
                        <path d="M41.7276 3.44418L43.4874 6.99288C43.7274 7.48687 44.3673 7.9607 44.9073 8.05143L48.0969 8.58575C50.1367 8.92853 50.6167 10.4206 49.1468 11.8925L46.6671 14.3927C46.2471 14.8161 46.0172 15.6327 46.1471 16.2175L46.8571 19.3125C47.417 21.7623 46.1271 22.71 43.9774 21.4296L40.9877 19.6452C40.4478 19.3226 39.5579 19.3226 39.0079 19.6452L36.0183 21.4296C33.8785 22.71 32.5786 21.7522 33.1386 19.3125L33.8485 16.2175C33.9785 15.6327 33.7485 14.8161 33.3286 14.3927L30.8488 11.8925C29.389 10.4206 29.8589 8.92853 31.8987 8.58575L35.0884 8.05143C35.6183 7.9607 36.2582 7.48687 36.4982 6.99288L38.258 3.44418C39.2179 1.51861 40.7777 1.51861 41.7276 3.44418Z" fill="#FFCF11" />
                        <path d="M69.7276 3.44418L71.4874 6.99288C71.7274 7.48687 72.3673 7.9607 72.9073 8.05143L76.0969 8.58575C78.1367 8.92853 78.6167 10.4206 77.1468 11.8925L74.6671 14.3927C74.2471 14.8161 74.0172 15.6327 74.1471 16.2175L74.8571 19.3125C75.417 21.7623 74.1271 22.71 71.9774 21.4296L68.9877 19.6452C68.4478 19.3226 67.5579 19.3226 67.0079 19.6452L64.0183 21.4296C61.8785 22.71 60.5786 21.7522 61.1386 19.3125L61.8485 16.2175C61.9785 15.6327 61.7485 14.8161 61.3286 14.3927L58.8488 11.8925C57.389 10.4206 57.8589 8.92853 59.8987 8.58575L63.0884 8.05143C63.6183 7.9607 64.2582 7.48687 64.4982 6.99288L66.258 3.44418C67.2179 1.51861 68.7777 1.51861 69.7276 3.44418Z" fill="#FFCF11" />
                        <path d="M97.7276 3.44418L99.4874 6.99288C99.7274 7.48687 100.367 7.9607 100.907 8.05143L104.097 8.58575C106.137 8.92853 106.617 10.4206 105.147 11.8925L102.667 14.3927C102.247 14.8161 102.017 15.6327 102.147 16.2175L102.857 19.3125C103.417 21.7623 102.127 22.71 99.9774 21.4296L96.9877 19.6452C96.4478 19.3226 95.5579 19.3226 95.0079 19.6452L92.0183 21.4296C89.8785 22.71 88.5786 21.7522 89.1386 19.3125L89.8485 16.2175C89.9785 15.6327 89.7485 14.8161 89.3286 14.3927L86.8488 11.8925C85.389 10.4206 85.8589 8.92853 87.8987 8.58575L91.0884 8.05143C91.6183 7.9607 92.2582 7.48687 92.4982 6.99288L94.258 3.44418C95.2179 1.51861 96.7777 1.51861 97.7276 3.44418Z" fill="#FFCF11" />
                        <path d="M125.728 3.44418L127.487 6.99288C127.727 7.48687 128.367 7.9607 128.907 8.05143L132.097 8.58575C134.137 8.92853 134.617 10.4206 133.147 11.8925L130.667 14.3927C130.247 14.8161 130.017 15.6327 130.147 16.2175L130.857 19.3125C131.417 21.7623 130.127 22.71 127.977 21.4296L124.988 19.6452C124.448 19.3226 123.558 19.3226 123.008 19.6452L120.018 21.4296C117.878 22.71 116.579 21.7522 117.139 19.3125L117.849 16.2175C117.978 15.6327 117.749 14.8161 117.329 14.3927L114.849 11.8925C113.389 10.4206 113.859 8.92853 115.899 8.58575L119.088 8.05143C119.618 7.9607 120.258 7.48687 120.498 6.99288L122.258 3.44418C123.218 1.51861 124.778 1.51861 125.728 3.44418Z" fill="#DFDFDF" />
                    </svg>
                </div>

            </div>
            <p className='mt-[15px] text-[16px] font-manrope font-bold leading-[130%]'>Very Nice!!</p>
            <div className='mt-[15px] flex'>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.3335 8.33333C1.3335 7.59693 1.93045 7 2.66683 7C3.7714 7 4.66683 7.8954 4.66683 9V11.6667C4.66683 12.7713 3.7714 13.6667 2.66683 13.6667C1.93045 13.6667 1.3335 13.0697 1.3335 12.3333V8.33333Z" stroke="#1D1D1D" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10.319 5.20417L10.1414 5.77756C9.99597 6.24741 9.92324 6.48233 9.97917 6.66787C10.0244 6.81793 10.1238 6.94733 10.2592 7.03247C10.4265 7.13767 10.6796 7.13767 11.1859 7.13767H11.4552C13.1686 7.13767 14.0253 7.13767 14.43 7.64487C14.4762 7.7028 14.5173 7.76447 14.5529 7.82913C14.8642 8.39473 14.5103 9.15673 13.8025 10.6807C13.153 12.0793 12.8282 12.7785 12.2252 13.1901C12.1668 13.2299 12.1068 13.2675 12.0454 13.3027C11.4105 13.6667 10.624 13.6667 9.05077 13.6667H8.70957C6.80364 13.6667 5.85069 13.6667 5.2586 13.093C4.6665 12.5193 4.6665 11.5959 4.6665 9.74927V9.1002C4.6665 8.12973 4.6665 7.64453 4.83873 7.2004C5.01096 6.75627 5.34074 6.39109 6.0003 5.66075L8.7279 2.64037C8.7963 2.56463 8.8305 2.52675 8.8607 2.5005C9.14217 2.25552 9.57664 2.28309 9.82277 2.56157C9.84917 2.5914 9.87797 2.63327 9.93557 2.71703C10.0257 2.84803 10.0708 2.91354 10.1101 2.97843C10.4617 3.55942 10.5681 4.24957 10.407 4.90477C10.389 4.97795 10.3657 5.0534 10.319 5.20417Z" stroke="#1D1D1D" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className='text-[13px] font-manrope leading-[130%]'>10</p>
            </div>
        </div>
    );
};

export default Reviews;