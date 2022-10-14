import React from 'react'
import "./LeftSidebar.scss"
import Rating from "./Rating.js"

const LeftSidebar = () => {
  return (
    <div className='leftSideBar'>
        <div className='image_'>
          <img src="https://m.media-amazon.com/images/I/710ESoXqVPL.jpg" alt='' />
        </div>

        {/*  */}

        <div className='reviews'>
         <Rating />
        </div>
    </div>
  )
}

export default LeftSidebar
