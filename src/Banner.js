import React from 'react'
import flipcart from '../src/Images/flipkart.jpg'
import './Sidebar.css'
function Banner() {
  return (
    <div className='banner'>
        <img src={flipcart} className='bannerimg' />
    </div>
  )
}

export default Banner