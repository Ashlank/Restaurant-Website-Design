import React from 'react'
import './FindUs.css'

import { SubHeading } from '../../components'
import { images } from '../../constants'

export default function FindUs() {
  return (
    <div className='app__bg app__wrapper section__padding' id='contact'>
      <div className='app__wrapper_info'>
        <SubHeading title="Contact" />
        <h1 className='headtext__cormorant app__wrapper_info-h1'>Find Us</h1>
        <div className='app__wrapper-content'>
          <p className='p__opensans'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
          <p className='p__cormorant app__wrapper-content_p'>Opening Hours</p>
          <p className='p__opensans'>Mon - Fri: 10:00 am - 02:00 am</p>
          <p className='p__opensans'>Sat - Sun: 10:00 am - 03:00 am</p>
        </div>
        <button className='custom__button app__wrapper_info-button'>Visit Us</button>
      </div>
      <div className='app__wrapper_img'>
        <img src={images.findus} alt="find us"/>
      </div>
    </div>
  )
}
