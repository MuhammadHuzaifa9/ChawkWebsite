import React from 'react'
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';

const Slider = () => {
  return (
    <MDBCarousel className='w-11/12 my-2 mx-auto rounded-lg' showControls showIndicators>
      <MDBCarouselItem itemId={1}>
        <img src='/banner1.png' className='d-block w-100 rounded-lg' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src='banner2.png' className='d-block w-100 rounded-lg' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src='banner3.png' className='d-block w-100 rounded-lg' alt='...' />
      </MDBCarouselItem>
    </MDBCarousel>
  )
}

export default Slider
