import React from 'react'
import data from "../js/mockData.js"
import left_arrow from "../assets/left_arrow.png";
import right_arrow from "../assets/right_arrow.png";
import { Link } from "react-router-dom"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'

function Categories_section() {

    const slideLeft = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500
    }
    const slideRight = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500
    }


    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <>
            <div className='mx-[20px]'>
                <section className='categories mt-20 mx-auto min-w-[220px] md:max-w-[1320px]' data-aos="fade-right" data-aos-anchor-placement="top-center">
                    <div className="container">
                        <div className="title">
                            <p className='text-purple text-xl font-medium mb-2 md:text-3xl'>Categories</p>
                            <p className='text-slate-500'>Read contents based on our categories</p>
                        </div>
                    </div>
                    <hr className='my-3' />
                    <div className="relative flex items-center mt-10">
                        <img src={left_arrow} alt="" onClick={slideLeft} className="absolute cursor-pointer" />
                        <div id="slider" className='overflow-x-scroll flex whitespace-nowrap scroll-smooth no-scrollbar '>
                            {
                                data.map((item) => {
                                    return (
                                        <>
                                            <Link to="/Autotalk/products">
                                                <div className='mr-5 items-center min-w-[134.4px] h-[121.6px] md:w-[210px] md:h-[190px] rounded-2xl p-5 border border-zinc-200 bg-zinc-100 md:bg-white'>
                                                    <img className='cat_img' src={item.img} alt="" />

                                                    <div className="flex items-center justify-center leading-snug mt-[10px] md:my-[20px]">
                                                        <p className=' text-slate-500 text-[11.52px] md:text-[18px]'>{item.title}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </>
                                    )
                                }
                                )
                            }
                        </div>
                        <img src={right_arrow} alt="" onClick={slideRight} className='cursor-pointer' />
                    </div>
                </section>
            </div >
        </>
    )
}

export default Categories_section
