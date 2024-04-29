import React from 'react'
import '../style_pdpPage/tom.css'
import art from '../image/article image.png'
import bottle1 from '../image/product scroll section.png'
import rec from '../image/Rectangle 30.png'

function Tom() {
  return (
    <div className='tom'>
      <div className="wrappp">
        <img src={art} alt="" />
        <img className='bottle123' src={bottle1} alt="" />
        <h1>Tom Collins Jr.</h1><br />
        <h3>INGREDIENTS</h3> <br />
        <p>3 oz Riverine <br />
          3/4 oz Lemon Juice <br />
          3/4 oz Simple Syrup <br />
          Club Soda</p>
          <a href="#full">VIEW FULL RECIPE</a>
          <img className='rec' src={rec} alt="" />
          <button>NEXT</button>
      </div>
    </div>
  )
}

export default Tom
