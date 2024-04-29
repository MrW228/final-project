import React from 'react'
import BeverageText from '../components_secondPage/Beverage_text'
import Shoptext from '../components_secondPage/Shoptext'
import ShopCards31 from '../components_secondPage/ShopCards31'
import ShopCards32 from '../components_secondPage/ShopCards32'
import ShopCards33 from '../components_secondPage/ShopCards33'

function SecondPage() {
  return (
    <div className="container">
      <div className='SecondPage'>
        <BeverageText />
        <Shoptext />
        <ShopCards31 />
        <ShopCards32 />
        <ShopCards33 />
      </div>
    </div>

  )
}

export default SecondPage
