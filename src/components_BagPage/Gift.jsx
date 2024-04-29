import React from 'react'
import '../style_BagPage/gift.css'
import gift from '../image/icon.svg'
import newlogo from '../image/image 5.svg'
import bottle1 from '../image/image 6 (1).png'


function Gift() {
    return (
        <div className='gift'>
            <div className="left1">
                <img src={gift} alt="" />
                <h3>SENDING A GIFT?</h3>
                <textarea className='input2' name="" id="" cols="30" rows="10"></textarea>
                <button className='btn5'>save message</button>
                <a href="">Cancel</a>
            </div>
            <div className="right1">
                <h1>Subtotal</h1>
                <h2>$99.18</h2> <br />
                <h4>Shipping & tax calculated at checkout</h4> <br />
                <div className="prbar"></div> <br />
                <h5><span>$5.00</span> away from free shipping</h5>
                <div className="newdiv">
                    <img src={newlogo} alt="" />
                    <h3>PACKAGE PROTECTION</h3>
                    <h4>For damage, lost & theft for <span>$0.99</span> </h4>
                    <label className='switch1'>
                        <input type="checkbox" />
                        <span className='slider1 round1'></span>
                    </label>
                    <div className="btn6">
                    Checkout
                    </div>

                </div>
            </div>
            <div className="nig">
                <h3>YOU MIGHT ALSO LIKE</h3>
                <img src={bottle1} alt="" />
                <h4>Full-bodied</h4><h5>$35.59</h5>
                <h6>1 bottle</h6>
                <input type="text" />
            </div>


        </div>
    )
}

export default Gift
