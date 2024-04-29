import React from 'react'
import '../style/cocktails.css'
import onecoc from '../image/IG photo.png'
import twococ from '../image/IG photo-1.png'
import threecoc from '../image/IG photo-2.png'
import fourcoc from '../image/IG photo-3.png'

function Cocktails() {
  return (
    <div className='cocktails'>
        <img src={onecoc} alt="" />
        <img src={twococ} alt="" />
        <img src={threecoc} alt="" />
        <img src={fourcoc} alt="" />
    </div>
  )  
}

export default Cocktails
