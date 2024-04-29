import React from 'react'
import '../style/footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className="div3">
                <h1>Newsletter</h1>
                <p>Sign up to save 10% on your next order</p>
                <input type="email" placeholder='Email Address' />
                <div className="icons">
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
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
    )
}

export default Footer
