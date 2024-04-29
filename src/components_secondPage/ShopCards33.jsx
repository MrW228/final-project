import React from 'react'
import '../style_secondPage/cards3_3.css'
import qora_gul_icon from '../image/earl gray.png'
import qora_nok_icon from '../image/pear 1.png'
import qora_uzum_icon from '../image/black-currant 1.png'
import funkin__botlle from '../image/photo_2024-04-18_17-02-14.jpg'
import b_c_yulduscha from '../image/photo_2024-04-18_17-10-51.jpg'
function ShopCards3_3() {
  return (
    <section className='palkovnik'>

      {/* 1-card */}
      <div className="bodied__card">
                <h2>Medium - bodied</h2>
                <h5>-  Delicate and lean to sip -</h5>

                <div className="b_c_span"></div>

                <p><b>Adaptogenic ingredients:</b>  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

                <div className="b_imgs_card">
                    {/* 1 */}
                    <div className="b_imgs_card1">
                        <img src={qora_gul_icon} alt="" />
                        <h5>Earl Grey</h5>
                    </div>
                    {/* 2 */}
                    <div className="b_imgs_card1">
                        <img src={qora_nok_icon} alt="" />
                        <h5>peach</h5>
                    </div>
                    {/* 3 */}
                    <div className="b_imgs_card1">
                        <img src={qora_uzum_icon} alt="" />
                        <h5>pear</h5>
                    </div>
                </div>

                <div className="b_c_span"></div>

                <p><b>Adaptogenic ingredients:</b>  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>

        {/* 2-card */}
        <div className="bootle__card">
                <img className='butlka' src={funkin__botlle} alt="" />
                <div className="b_c_text">
                    <b>Bottle</b><br />
                    <img className='qorayulduscha' src={b_c_yulduscha} alt="" /><br />
                    <p>$35.59</p>
                    <h4>Shop now</h4>
                </div>
            </div>

        {/* 3-card */}
        <div className="palkovnik__card">
            <h1>New lifestyle</h1>
        </div>
    </section>
  )
}

export default ShopCards3_3
