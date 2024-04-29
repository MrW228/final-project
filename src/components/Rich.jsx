import React from 'react'
import '../style/rich.css'
import coctels from '../image/coctels.png'


function Rich() {
    return (
        <div className='rich'>
            <div className="rsct">
                <h3>NEW IN</h3>
                <h1>Rich and fruity</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <a href="">SHOP NOW</a>
            </div>
            <div className="lsct">
                <img src={coctels} alt="" />
            </div>
        </div>
    )
}

export default Rich
