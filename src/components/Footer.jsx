import React from 'react'
import '../style/footer.css'
import inst from '../image/icon.png'
import face from '../image/icon-1.png'
import pint from '../image/icon-2.png'
import twit from '../image/icon-3.png'
import yt from '../image/icon-4.png'
import '../App.css'

function Footer() {
    return (
        <div className="container">
            <div className='footer'>
                <div className="div3">
                    <h1>Newsletter</h1>
                    <p>Sign up to save 10% on your next order</p>
                    <input type="email" placeholder='Email Address' />
                    <div className="icons">
                        <img src={inst} alt="" />
                        <img src={face} alt="" />
                        <img src={pint} alt="" />
                        <img src={twit} alt="" />
                        <img src={yt} alt="" />
                    </div>

                    <h2>/DE · SWA/</h2>
                    <h3>®2021 Сocktail &nbsp;&nbsp; Privacy policy &nbsp;&nbsp; Terms of use &nbsp;&nbsp; AMASS</h3>

                </div>
                <div className="div4">
                    <h1><span>EXPLORE</span> <br /><br />
                        Account <br /><br />
                        Gift Card <br /><br />
                        Refer a Friend <br /><br />
                        Affilities<br /><br />
                        Corporate Gifting <br /><br />

                    </h1>
                    <h1><span>GET HELP</span> <br /><br />
                        Shop <br /><br />
                        FAQ <br /><br />
                        Shipping <br /><br />
                        Store Locator<br /><br />
                        Corporate Gidting <br /><br />
                    </h1>
                    <h1><span>COMPANY</span> <br /><br />
                        About <br /><br />
                        Contact <br /><br />
                        Blog <br /><br />
                        Press<br /><br />
                        Corporate Gifting <br /><br />

                    </h1>

                </div>
            </div>
        </div>

    )
}

export default Footer
