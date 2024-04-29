import React from 'react'
import '../style_pdpPage/enjoy.css'
import img from '../image/IMG.png'

function Enjoy() {
    return (
        <div className='enjoy'>
            <h1>How to enjoy</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br /> <br />

                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <img src={img} alt="" />
        </div>
    )
}

export default Enjoy
