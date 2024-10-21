import React from 'react'
import { cardData } from '../../utils/consts/Card'

const Banner = () => {
    
  return (
    <div className='flex justify-around gap-16 m-14' >
      {cardData.map((item,index)=>{
        return(
            <>
            <div className={`bg-purple-400 w-80 h-auto p-6 rounded-lg flex flex-col  justify-center`}>
            <h1 className='p-4 text-4xl'>{item.heading}</h1>
            <h3 className='p-4'>{item.subtitles}</h3>
            <p className='p-4'>{item.goto}</p>
            </div>
            </>
        )
      })}
    </div>
  )
}

export default Banner
