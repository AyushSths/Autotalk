import React, { useState } from 'react'
import { Link } from "react-router-dom"
import auto from "../assets/auto 1.png"
import search from "../assets/search (1).png"
import bsearch from "../assets/search.png"
import cross from "../assets/cross.png"
import bcross from "../assets/bcross.png"
import group from "../assets/Group.png"
import red_car from "../assets/red car.png"
import blue_car from "../assets/blue car.png"
import bike from "../assets/bike.png"
import uparrow from "../assets/uparrow.png"
import right_arrow from "../assets/right_arrow_3.png"
import black_car from "../assets/black car.png"
import red_carr from "../assets/red car(2).png"
import { useEffect } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";


function Menu_categories({ open, setopen }) {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1024);
    const [dropdown, setDropdown] = useState(false)

    useEffect(() => {

        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 1024);
        };

        window.addEventListener('resize', handleResize);


        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div className={`menu-category min-w-[375px] md:h-[1020px] bg-menu_blue grid grid-rows-12 justify-center xl:p-[20px_0_20px_0] box-sizing-border ${open ? 'block' : 'hidden'}`}>
                <div className="header w-full row-span-1 flex justify-between items-center bg-white pr-5 lg:bg-menu_blue lg:px-5">
                    <div className="logo ">
                        <img src={auto} alt="" />
                    </div>
                    <div className="controller flex items-center gap-5">
                        <div className="menu-search">
                            {
                                isSmallScreen ? <img src={bsearch} alt="" /> : <img src={search} alt="" />
                            }
                        </div>
                        <div className="menu-cross" onClick={() => setopen(!open)}>
                            {
                                isSmallScreen ? <img src={bcross} alt="" /> : <img src={cross} alt="" />
                            }
                        </div>
                    </div>
                </div>
                <div className="row-span-11">
                    <div className="title mt-[10px]">
                        <p className='font-playfair text-2xl text-white text-center'>Categories</p>
                    </div>
                    <hr className='my-3 border-blue-300' />
                    <div className="categories_section grid p-5 md:grid-cols-3 justify-between">
                        <div className="first_section">
                            <div className="dropdown w-[293px] ">
                                <div className="flex items-center gap-[14px] p-5 " onClick={() => setDropdown(!dropdown)} >
                                    <img src={group} alt="" />
                                    <p className='text-lg text-white'>What’s New in Auto </p>
                                    {
                                        dropdown ?
                                            <img src={uparrow} alt="" /> : <IoIosArrowDown className='text-white text-xl' />
                                    }
                                </div>
                                {/* <hr className='my-2 border-blue-300' /> */}
                                <div className={`flex justify-center border-t border-blue-300 ${dropdown ? 'block' : 'hidden'}`}>
                                    <ul className='grid gap-y-5 list-disc text-white mt-5 cursor-pointer'>
                                        <li><Link to="/Autotalk/4-Wheeler" onClick={() => setopen(!open)}>4-Wheeler <img src={right_arrow} alt="" className='inline ml-[10px]' /></Link> </li>
                                        <li><Link to="/Autotalk/ProductDescription" onClick={() => setopen(!open)}>Bikes<img src={right_arrow} alt="" className='inline ml-[10px]' /></Link></li>
                                        <li><Link to="/Autotalk/Products" onClick={() => setopen(!open)}>Scooters<img src={right_arrow} alt="" className='inline ml-[10px]' /></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex items-center gap-[14px] p-5">
                                <img src={group} alt="" />
                                <p className='text-lg text-white'>Auto Tech and Innovation</p>
                            </div>
                            <div className="flex items-center gap-[14px] p-5">
                                <img src={group} alt="" />
                                <p className='text-lg text-white'>Automotive Lifestyle</p>
                            </div>
                            <div className="flex items-center gap-[14px] p-5">
                                <img src={group} alt="" />
                                <p className='text-lg text-white'>Car Buying Guides</p>
                            </div>
                        </div>
                        <div className="first_section">
                            <div className="flex items-center gap-[14px] p-5">
                                <img src={group} alt="" />
                                <p className='text-lg text-white'>Comparisons</p>
                            </div>
                            <div className="flex items-center gap-[14px] p-5">
                                <img src={group} alt="" />
                                <p className='text-lg text-white'>Automotive Events</p>
                            </div>
                            <div className="flex items-center gap-[14px] p-5">
                                <img src={group} alt="" />
                                <p className='text-lg text-white'>Motorsports</p>
                            </div>
                            <div className="flex items-center gap-[14px] p-5">
                                <img src={group} alt="" />
                                <p className='text-lg text-white'>4-Wheeler</p>
                            </div>
                        </div>
                        <div className="first_section">
                            <div className="flex items-center gap-[14px] p-5">
                                <img src={group} alt="" />
                                <p className='text-lg text-white'>Vintage Collection</p>
                            </div>
                            <div className="flex items-center gap-[14px] p-5">
                                <img src={group} alt="" />
                                <p className='text-lg text-white'>Customization and Modifications</p>
                            </div>
                            <div className="flex items-center gap-[14px] p-5">
                                <img src={group} alt="" />
                                <p className='text-lg text-white'>DIY and Maintenance Tips</p>
                            </div>
                            <div className="flex items-center gap-[14px] p-5">
                                <img src={group} alt="" />
                                <p className='text-lg text-white'>Bikes</p>
                            </div>
                        </div>
                    </div>
                    <div className={`footer p-5 md:p-0  ${dropdown ? 'mt-[40px] md:mt-[70px]' : 'mt-[100px] md:mt-[200px]'}`}>
                        <div className="car_images flex justify-between items-center">
                            <img src={red_car} alt="" className='w-[53.33px] md:w-[130px] xl:w-[185.12px]' />
                            <img src={blue_car} alt="" className='w-[53.33px] md:w-[130px] xl:w-[185.12px]' />
                            <img src={bike} alt="" className='w-[53.33px] md:w-[130px] xl:w-[185.12px]' />
                            <img src={black_car} alt="" className='w-[53.33px] md:w-[130px] xl:w-[185.12px]' />
                            <img src={red_carr} alt="" className='w-[53.33px] md:w-[130px] xl:w-[185.12px]' />
                        </div>
                        <hr className='my-3 border-blue-200' />
                        <div className="copright mt-5">
                            <p className='text-white text-center'>©2023 Company. All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu_categories