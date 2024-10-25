import React from 'react'
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Categories from '../components/Categories/Categories'
import Slider from '../components/Slider/Slider'

const Home = () => {
  return (
    <div>
      <Header />
      <Slider/>
      <Banner/>
      <Categories/>
    </div>
  )
}

export default Home
