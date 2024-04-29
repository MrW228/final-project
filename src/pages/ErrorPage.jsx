import React from 'react'
import err from '../image/fehlerbeispiel.gif'
import '../style/errpage.css'
import { NavLink } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className="container">
      <div className='errpage'>
        <img src={err} alt="" />
        <NavLink to='/HomePage' >Home Page</NavLink>
      </div>
    </div>

  )
}

export default ErrorPage
