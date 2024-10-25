import React from 'react'
import FeaturedSale from '../../../utils/Featured-Sale-Prods/FeaturedSale'
import NewArrival from '../../../utils/Featured-Sale-Prods/NewArrival'

const Featured = () => {
  return (
    <div className='open-sans w-11/12 mx-auto my-4 text-3xl font-semibold text-black'>
      <h1 className='my-8'>Featured Products</h1>
      <FeaturedSale start='0' end='8'/>
      <h1 className='mt-16 mb-4'>Flash Sale</h1>
      <FeaturedSale start='8' end='16'/>
      <img src="/banner4.png" alt="" className='w-100 mx-auto my-8' />
      <h1 className='mt-16 mb-4'>New Arrivals</h1>
      <NewArrival start='0' end='8'/>
    </div>
  )
}

export default Featured
