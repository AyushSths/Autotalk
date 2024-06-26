import React, { useState, useEffect } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import TechInnovationCard from "./TechInnovationCard";
import { innovation } from "../db/Data";
import AOS from "aos";
import "aos/dist/aos.css";

const TechInnovation = () => {
  const [displayItems, setDisplayItems] = useState([]);

  useEffect(() => {
    AOS.init(); // Initialize AOS
    const handleResize = () => {
      const newSize = window.innerWidth < 768 ? innovation.slice(0, 2) : innovation;
      setDisplayItems(newSize);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="min-h-[600px]  bg-sky-100 pb-8 px-4 my-10" >
      <header className="flex justify-between max-w-[1320px] mx-auto md:pt-[100px] pt-10 border-b border-gray" data-aos="fade-right" data-aos-anchor-placement="top-center">
        <div>
          <h2 className="sm:text-[24px] text-[20px] font-semibold text-purple tracking-wide">Tech and Innovation</h2>
          <p className="sm:text-[16px] text-[14px] font-normal text-gray my-4">See What happening new in auto</p>
        </div>
        <div className="md:flex hidden items-center gap-2 ">
          <a href="#" className="text-[16px] font-normal text-gray whitespace-nowrap">View all</a>
          <FiArrowUpRight />
        </div>
      </header>

      <section className="flex flex-wrap justify-center mx-auto gap-y-6 mt-10 max-w-[1370px]" data-aos="fade-right" data-aos-anchor-placement="top-center">
        {displayItems.map((inovdata, index) => (
          <TechInnovationCard key={index} inovdata={inovdata} />
        ))}
      </section>
    </main>
  );
};

export default TechInnovation;
