import React from 'react'
import "./RightSideBar.scss"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const RightSideBar = () => {
  return (
    <div className='rightsidebar'>
      <div className='right_part_1'>
        <p>description</p>
        <p>$price</p>
        <div>
            <button>Add to Cart</button>
            <button>Buy Now</button>
            <button><FavoriteBorderIcon /></button>
        </div>
        {/*  */}

        <p>Author</p>
        <p>Status</p>
        <p>Category</p>

        {/*  */}
      </div>
    </div>
  )
}

export default RightSideBar
