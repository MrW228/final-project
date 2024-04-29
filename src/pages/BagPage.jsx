import React from 'react'
import '../style_BagPage/bagpage.css'
import Product from '../components_BagPage/Product'
import Gift from '../components_BagPage/Gift'

function BagPage() {
  return (
    <div className="container">
      <div className='bagpage'>
        <h1>My Bag</h1>
        <Product />
        <Gift />
      </div>
    </div>

  )
}

export default BagPage
