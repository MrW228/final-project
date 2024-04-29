import React from 'react'
import '../style_pdpPage/ingredients.css'
import straw from '../image/Vector.png'
import pear2 from '../image/Vector (1).png'
import apic from '../image/Vector (2).png'

function Ingredients() {
    return (
        <div className='ing2' id='full'>
        <h1>Benefits and Ingredients</h1>
        <p>Benefits: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        <div className="wrapp9">
            <div className="card3">
                <img src={straw} alt="" /><br />
                <h1>Strawberry</h1><br />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
            </div>
            <div className="card3">
                <img src={pear2} alt="" /><br />
                <h1>Birch</h1><br />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>

            </div>
            <div className="card3">
                <img src={apic} alt="" /><br />
                <h1>Apricot</h1><br />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>

            </div>
        </div>
    </div>
    )
}

export default Ingredients
