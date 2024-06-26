import React from 'react'
import { FaCircleUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const TechInnovationCard = ({ inovdata }) => {
  const { img, title, name, type, date } = inovdata;
  return (
    <div className='max-w-[427px] max-h-[329px] mx-3'>
      <figure>
        <Link to={'/Autotalk/ProductDescription'}>  <img src={img} alt="carimages" className='max-h-[200px]' /></Link>
      </figure>
      <section className='bg-white rounded-b-xl px-6 py-4 shadow-lg'>
        <h2 className='sm:text-[16px] text-[14px] text-gray '>{title}</h2>
        <div className='sm:text-[14px] text-[10px] font-normal flex items-center justify-start gap-4 pt-2 text-gray'>
          <p className='flex items-center gap-1'><FaCircleUser className='text-xl' />{name}</p>
          <p>{type}</p>
          <p>{date}</p>
        </div>
      </section>
    </div>
  )
}

export default TechInnovationCard