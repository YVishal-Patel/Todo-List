import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
      <>
          <div className="navbar">
                  <ul className='navbar-ul'>
                      <li><a href="#">NEW ARRIVAL</a></li>
                      <li><a href="#">CLOTHING</a></li>
                      <li><a href="#">ACCESSORIES</a></li>
                      <li><a href="#">SHOES</a></li>
                      <li><a href="#">WATCHES</a></li>
                      <li><a href="#">BAGS</a></li>
                      <li><a href="#">STORE</a></li>
                      <li><a href="#" className='navbar-color'>SALE</a></li>
                  </ul>
              </div>
      </>
  )
}

export default Navbar