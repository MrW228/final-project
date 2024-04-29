import React from 'react'
import '../style_BagPage/product.css'
import bottle1 from '../image/image 6 (1).png'

function Product() {
    function handleClick(e) {
        if (e.target.id === "minus") {
            e.target.nextElementSibling.textContent = Number(e.target.nextElementSibling.textContent) - 1
        } else if (e.target.id === "plus") {
            e.target.previousElementSibling.textContent = Number(e.target.previousElementSibling.textContent) + 1
        }
    }
    return (
        <div className='product'>
            <div className="vibor">
                <p> PRODUCT</p>
                <p> PRICE</p>
                <p>QTY</p>
                <p>TOTAL</p>
            </div>
            <div className="onebottle">
                <img src={bottle1} alt="" />
                <h3> <span>Medium-bodied</span> <br />
                    2 bottles <br />
                    Delivery every 1 month <br />
                    Remove
                </h3>
                <h2>$28.00 <del>$30.00</del></h2>
                <div className="plus">
                    <div className="wrapp7" onClick={(e) => handleClick(e)}>
                        <button id='minus' className='btn99 btn12'>-</button>
                        <span className='span5'> 0</span>
                        <button id='plus' className='btn99 btn12'>+</button>
                    </div>
                </div>
            </div>
            <div className="onebottle">
                <img src={bottle1} alt="" />
                <h3> <span>Medium-bodied</span> <br />
                    2 bottles <br />
                    Delivery every 1 month <br />
                    Remove
                </h3>
                <h2>$28.00 <del>$30.00</del></h2>
                <div className="plus">
                    <div className="wrapp7" onClick={(e) => handleClick(e)}>
                        <button id='minus' className='btn99 btn12'>-</button>
                        <span className='span5'> 0</span>
                        <button id='plus' className='btn99 btn12'>+</button>

                    </div>
                </div>

            </div>



        </div>
    )
}

export default Product

// // <div aria-busy="true" aria-describedby="progress-bar"></div>
// //   <progress id="progress-bar" aria-label="Content loading…"></progress>
