import React from 'react'
import '../style_secondPage/cards3_1.css'
import funkin__botlle from '../image/photo_2024-04-18_17-02-14.jpg'
import b_c_yulduscha from '../image/photo_2024-04-18_17-10-51.jpg'
import oq_yulduz from '../image/photo_2024-04-18_17-10-47.jpg'
function ShopCards3_1() {
  return (
    <section className='Variety'>

      <div className="veriety__card">
        <h2>Variety Pack</h2>
        <h5>-  Delicate and lean to sip -</h5>
        <div className="v_c_span"></div>
        <p><b>Adaptogenic ingredients: </b>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div className="v_c_span"></div>
        <p><b>Adaptogenic ingredients: </b>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>


      <div className="bootle__card">
        <img className='butlka' src={funkin__botlle} alt="" />
        <div className="b_c_text">
            <b>Bottle</b><br />
            <img className='qorayulduscha' src={b_c_yulduscha} alt="" /><br />
            <p>$35.59</p>
            <h4 className='bdf' >Shop now</h4>
        </div>
      </div>

      <div className="bootle__card1">
        <img className='butlka' src={funkin__botlle} alt="" />
        <div className="b_c_text">
            <b>Can</b><br />
            <img className='yulduscha' src={oq_yulduz} alt="" /><br />
            <p>$15.00</p>
            <h4 className='bdf'> Shop now</h4>
        </div>
      </div> 
    </section>
  )
}

export default ShopCards3_1

