import React from 'react'
import './SubHeading.css'

import { images } from '../../constants'

export default function SubHeading({ title }) {
  return (
    <div className='app__subheading'>
      <p className='p__cormorant'>{title}</p>
      <img src={images.spoon} alt='spoon' className='spoon__img' />
    </div>
  )
}
