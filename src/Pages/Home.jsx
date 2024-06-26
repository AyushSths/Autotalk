import React from 'react'
import Navbar from '../Components/Navbar'
import Herosection from '../Components/Herosection'
import TechInnovation from '../Components/TechInnovation'
import WhatsNew from '../Components/WhatsNew'
import Vintage from '../Components/Vintage'
import Customization from '../Components/Customization'
import Automotive from '../Components/Automotive'
import MoreMotorsports from '../Components/MoreMotorsports'
import Most_read_section from '../Components/Most_read_section'
import Categories_section from '../Components/Categories_section'
import Comparisons_section from '../Components/Comparisons_section'
import Automative_events from '../Components/Automative_events'
import Recent_news from '../Components/Recent_news'
import Car_details from '../Components/Car_details'

const Home = ({ isScrolled, setisScrolled }) => {
  return (
    <main>
      <Herosection isScrolled={isScrolled} />
      <Most_read_section />
      <Categories_section />
      <TechInnovation />
      <WhatsNew />
      <Comparisons_section />
      <MoreMotorsports />
      <Vintage />
      <Customization />
      <Automative_events />
      <Automotive />
    </main>
  )
}

export default Home