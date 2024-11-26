import React from 'react';
import logo from "../../public/logo-white.png"
import Image from 'next/image';
import facebook from "../../public/Facebook.png"
import X from "../../public/Twitter.png"
import linkedin from "../../public/Linkedin.png"


const footer = () => {
    return (
        <div className='mt-[108px] w-full md:h-[491px] h-[850px] text-white bg-black'>
            <div className='md:max-w-[1280px] max-w-[328px] mx-auto'>
                <div className='md:pt-[55px] pt-[24px] md:grid md:grid-cols-2 md:gap-[241px]'>
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Image src={logo} alt="Logo" className="w-[197px] h-[49px]" />
                        </div>
                        <p>
                            Saepe quo suscipit vitae quia. Repudiandae nobis quis. Laboriosam
                            unde quae qui quasi mollitia tenetur. Dicta explicabo est
                            consectetur maxime quos fugit velit assumenda est.
                        </p>
                    </div>
                    <div className='pt-6 md:pt-0'>
                        <h3 className="mb-4 text-lg font-semibold">Sign Up For Our Newsletter!</h3>
                        <p className="mb-4">
                            Get notified about updates and be the first to get early access to
                            new Podcast episodes.
                        </p>
                        <form className="flex items-center">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-grow w-full px-4 py-2 text-black rounded-l-md focus:outline-none"
                            />
                            <button className="px-6 py-2 text-white bg-purple-500 hover:bg-purple-600 rounded-r-md">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <div className='md:pt-[67px] pt-4 md:grid md:grid-cols-4 md:gap-[147px]'>
                    <div>
                        <h3 className="mb-2 text-lg font-semibold">Contact Us</h3>
                        <p>support@we5ive.com</p>
                    </div>
                    <div className='pt-4 md:pt-0'>
                        <h3 className="mb-2 text-lg font-semibold">About Us</h3>
                        <ul className="space-y-2">
                            <li>About Us</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className='pt-4 md:pt-0'>
                        <h3 className="pb-2 text-lg font-semibold">Privacy</h3>
                        <ul className="space-y-2">
                            <li>Privacy Policy</li>
                            <li>Terms & Condition</li>
                        </ul>
                    </div>
                    <div className='pt-4 md:pt-0'>
                        <h3 className="mb-2 text-lg font-semibold">Social Links</h3>
                        <div className="flex space-x-4">
                            <Image src={facebook} alt='facebook'></Image>
                            <Image src={X} alt='x'></Image>
                            <Image src={linkedin} alt='likedin'></Image>
                        </div>
                    </div>
                </div>
            </div>
            {/* Bottom Bar */}
            <div className="py-4 mt-[88px] text-center bg-purple-600">
                <p>© 2024 | We5ive</p>
            </div>
        </div>
    );
};

export default footer;