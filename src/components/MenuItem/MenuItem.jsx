import React from 'react'
import './MenuItem.css'

export default function MenuItem({ title, price, tags}) {
  return (
    <div className='app__menuItem'>
      <div className='app__menuItem-head'>
        <div className='app__menuItem-name'>
          <p className='p__cormorant app__menuItem-name_p'>{title}</p>
        </div>
        <div className='app__menuItem-dash'></div>
        <div className='app__menuItem-price'>
          <p className='p__cormorant'>{price}</p>
        </div>
      </div>
      <div className='app__menuItem-sub'>
        <p className='p__opensans app__menuItem-sub_p'>{tags}</p>
      </div>
    </div>
  )
}
