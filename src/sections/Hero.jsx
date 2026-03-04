import React, { useEffect } from 'react'
import gsap from 'gsap'
import BgImage from '../assets/images/bgimage.jpg'
import Sticker1 from '../assets/images/sticker1.png'
import Sticker2 from '../assets/images/sticker2.png'
import Sticker3 from '../assets/images/sticker3.png'
import Sticker4 from '../assets/images/sticker4.png'
import Sticker5 from '../assets/images/sticker5.png'
import Sticker8 from '../assets/images/sticker8.png'
import Stickers10 from '../assets/images/stickers10.png'

const Hero = () => {
    useEffect(() => {
        gsap.to(".name-bg", {
            scaleX: 1,
            duration: 1.2,
            ease: "power3.out",
            delay: 0.5
        });
    }, []);
    return (
        <div className='relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${BgImage})` }} >
            <div className="hsection" >
                {/* Stickers Layer */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <img src={Sticker1}
                        className="absolute top-[15%] left-[10%]   w-26 sm:w-30 lg:w-40 rotate-[-20deg]" />
                    <img src={Sticker2}
                        className="absolute top-[10%] right-[12%] w-26 sm:w-30 lg:w-40  rotate-[15deg]" />
                    <img src={Sticker3}
                        className="absolute bottom-[32%] left-[48%] w-10 sm:w-15 lg:w-20  rotate-[5deg]" />
                    <img src={Sticker4}
                        className="absolute bottom-[18%] left-[10%] hidden  md:block w-28 rotate-[45deg]" />
                    <img src={Sticker5}
                        className="absolute bottom-[25%] right-[10%] w-30 sm:w-40 lg:w-60  rotate-[10deg]" />
                    <img src={Sticker8}
                        className="absolute bottom-[25%] left-[10%] md:left-[30%] w-26 sm:w-30 lg:w-40  rotate-[10deg]" />
                    <img src={Stickers10}
                        className="absolute top-[5%] right-[38%] md:right-[44%] w-24 sm:w-30 lg:w-40  rotate-[10deg]" />
                </div>
                <div className='flex flex-col items-center justify-center text-center px-5 mb-38 whitespace-nowrap space-y-6 '>
                    <h1 className='text-2xl md:text-3xl lg:text-5xl text-black  font-serif [word-spacing:-3px]'>I am
                        <span className="relative inline-block overflow-hidden top-3.5 rounded-lg m-1 mb-2">
                            {/* Animated Black Background */}
                            <span className="name-bg absolute left-0 top-0 h-full w-full bg-black origin-left scale-x-0"></span>
                            {/* Text */}
                            <span className="relative z-10 font-[font1] text-3xl md:text-4xl lg:text-6xl px-2.5  text-white">
                                Lavesh Bhagwani
                            </span>
                        </span>
                        <br className='block md:hidden' />
                        I Build <span className='relative bottom-1 md:bottom-2 '>3</span>D animated Website
                        <br />
                        <span className="relative inline-block overflow-hidden top-1 md:top-2.5 ml-2 mr-2  rounded-lg ">
                            {/* Animated Black Background */}
                            <span className="name-bg absolute left-0 top-0 h-full w-full bg-black origin-left scale-x-0"></span>
                            {/* Text */}
                            <span className="relative z-10 font-[font1]  text-3xl md:text-4xl lg:text-6xl px-2.5 text-white ">
                                That's Feels Alive
                            </span>
                        </span>
                        <br className='block md:hidden' />
                        And People Want to Take
                        <br className='block md:hidden' />
                        <span className="relative inline-block overflow-hidden top-1 md::top-2.5 ml-2  rounded-lg ">
                            {/* Animated Black Background */}
                            <span className="name-bg absolute left-0 top-0 h-full w-full bg-black origin-left scale-x-0"></span>
                            {/* Text */}
                            <span className="relative z-10 font-[font1]  text-3xl md:text-4xl lg:text-6xl px-2.5 text-white ">
                                ScreenShot!!!
                            </span>
                        </span>
                    </h1>
                    <p className='relative bottom-5 md:bottom-2 font-[font2] textxl md:text-2xl'>Code. Craft. Create.</p>
                </div>
            </div>
        </div>
    )
}

export default Hero