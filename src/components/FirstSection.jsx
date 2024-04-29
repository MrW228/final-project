import React from 'react'
import '../style/firstSection.css'
import oneCoctail from '../image/negronicoctel_1.png'
import { NavLink } from 'react-router-dom'
import '../App.css'

function FirstSection() {
    return (
        <div className='FirstSection'>
            <div className="oneSct">
                <img src={oneCoctail} alt="" />
            </div>
            <div className="twoSct">
                <div className="bgdiv"></div>
                <h3 className='narr'>NEW ARRIVAL</h3>
                <h1 className='Lorem'> Lorem ipsum dolor sit amet</h1>
                <NavLink to="/SecondPage">SHOP NEW</NavLink>
            </div> 

        </div>
    )
}

export default FirstSection
