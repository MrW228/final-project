
import React from 'react'
import '../style_pdpPage/rich2.css'
import coctels2 from '../image/COCTELES_FAMOSOS_2ok-Ri4uYU0f8uOE7LDssWi0lTN-1248x770@Diario Vasco 1.png'
import { NavLink } from 'react-router-dom'

function Rich2() {
  return (
     <div className='rich2'>
    <div className="rsct2">
        <h3>Try this</h3>
        <h1>Variety Pack</h1>
        <p>Don’t know what to choose? Our variety pack is a three-bottle kit with De Soi’s Light, Medium and Full bodied flavors. Taste all 3 flavors at once! </p>
        <NavLink to="/ShopPage" ><a href="">SHOP NOW</a></NavLink>
    </div>
    <div className="lsct2">
        <img src={coctels2} alt="" />
    </div>
</div>
  )
}

export default Rich2
