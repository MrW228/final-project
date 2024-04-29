import React from 'react'
import rose from '../image/Rose.png'
import '../style/bestSell.css'
import { NavLink } from 'react-router-dom'
import pear from '../image/Pear.png'
import berg from '../image/Bergamot.png'
import img6 from '../image/image 6 (1).png'

function BestSell() {
  return (
       <div className='bestSell'>
      <h1>Our best sellers</h1>
        <div className="wrapper">
            <div className="card">
            <NavLink className="img1" to="/ShopPage"><img src={pear} alt="" /></NavLink> 
                <h3>Ipsum dolor</h3>
                <p>Ut enim ad minim veniam, quis nostrud exerp ex ea commodo consequat. </p>
                <NavLink to="/ShopPage"><a href="#!">SHOP NOW</a></NavLink>
            </div>
            <div className="card">
                <NavLink className="img1" to="/ShopPage"><img src={berg} alt="" /></NavLink> 
                <h3>Consectetur adipiscing</h3>
                <p>Ut enim ad minim veniam, quis nostrud exerp ex ea commodo consequat. </p>
                <NavLink to="/ShopPage"><a href="#!">SHOP NOW</a></NavLink>

            </div> 
            <div className="card">
            <NavLink className="img1" to="/ShopPage"><img src={rose} alt="" /></NavLink> 
                <h3>Consequat</h3>
                <p>Ut enim ad minim veniam, quis nostrud exerp ex ea commodo consequat. </p>
                <NavLink to="/ShopPage"><a href="#!">SHOP NOW</a></NavLink>

            </div>
            <div className="card">
            <NavLink className="img1" to="/ShopPage"><img src={img6} alt="" /></NavLink> 
                <h3>Commodo</h3>
                <p>Ut enim ad minim veniam, quis nostrud exerp ex ea commodo consequat. </p>
                <NavLink to="/ShopPage"><a href="#!">SHOP NOW</a></NavLink>

            </div>
        </div>
    </div>
   
  )
}

export default BestSell
