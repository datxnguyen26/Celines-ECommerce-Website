import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className="navbar-container">
      <img class="logo-img" src="/logopic.png" width="100" height="100"/>
      <p className="logo">
        <Link href="/">CELINE'S&nbsp;DESSERTS</Link>
      </p>
      {/*<button type="button" className="cart-icon" onClick="">
        <AiOutlineShopping />
        <span className="cart-item-qty">1</span>

  </button> */}
    </div>
  )
}

export default Navbar