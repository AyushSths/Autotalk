import React from "react";
import image_1 from "../assets/image_1.png"
import image_2 from "../assets/image_2.png"
import image_3 from "../assets/image_3.png"
import image_4 from "../assets/image_4.png"
import image_5 from "../assets/image_5.png"
import { Link } from "react-router-dom"
import left_arrow from "../assets/left_arrow.png";
import right_arrow from "../assets/right_arrow.png";
import Slider from "react-slick";
import { useState } from "react";
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Herosection = ({ isScrolled }) => {

  const cars = [
    {
      id: 1,
      img: image_2
    },
    {
      id: 2,
      img: image_5
    },
    {
      id: 3,
      img: image_1
    },
    {
      id: 4,
      img: image_2
    },
    {
      id: 5,
      img: image_3
    },
  ]

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <IoIosArrowForward className="h-10 w-10 text-sky-300" />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <IoIosArrowBack className="h-10 w-10 text-sky-300" />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <main className={`hero_section curve bg-sky-100 max-h-[750px] w-full p-4 ${isScrolled ? 'mt-[3em]' : 'mt-[3px] md:mt-0'}`} >
      <div className="sm:mt-20 py-4">
        <h2 className="animate-slideleft font-semibold md:text-[42px] px-4 text-xl  text-purple text-center mx-auto max-w-[1096px] tracking-wide leading-[145%]">
          Get Latest updates on what's going on AutoEcosystem in Nepal
        </h2>
        <p className="animate-slideright py-4 px-1 md:text-[16px] text-[14px] text-gray text-center mx-auto max-w-[1096px]  tracking-wide font-normal">
          We cover trending and latest news on Cars & Bikes and publish it on{" "}
          <span className="text-purple font-semibold">Technews.today</span> on a
          daily basis. All resources published here are fact-checked and proof
          read so you can enjoy and get updates on what happening here at Nepal.
        </p>
        <div className="max-w-[1320px] mx-auto mt-5">
          {/* <img src="./div.png" alt="herosection" className="mx-auto animate-slideleft" / */}
          {/* <img src={left_arrow} alt="" onClick={slideLeft} className="absolute cursor-pointer" /> */}
          <Slider {...settings}>
            {

              cars.map((item, index) => {
                console.log(item.img);
                return (
                  <Link to="/Autotalk/products" key={index}>
                    <div className={`max-w-[513px] ${index === imageIndex ? "slide activeSlide" : "slide"}`}>
                      <img className='cat_img' src={item.img} alt="" />
                    </div>
                  </Link>
                )
              }
              )
            }
          </Slider>
          {/* <img src={right_arrow} alt="" onClick={slideRight} className='cursor-pointer' /> */}

        </div>
      </div>
    </main>
  );
};

export default Herosection;
