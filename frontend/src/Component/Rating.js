import React from 'react'
import { RatingStar } from "rating-star";
import "./Rating.scss"

const Rating = () => {

    const [rating, setRating] = React.useState(30);

    const onRatingChange = (score) => {
        setRating(score);
      };
  return (
    <div className='rating'>
       <h1>Rating Star</h1>
      <RatingStar className="rating_star"
        clickable
        maxScore={100}
        id="123"
        rating={rating}
        onRatingChange={onRatingChange}
      />
     <div>
        <p>Rahul</p>
        <p>Nice book to read</p>
     </div>
    </div>
  )
}

export default Rating
