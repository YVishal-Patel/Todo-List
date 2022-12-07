import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
      <>
          <div className="navbar">
                  {/* <ul className='navbar-ul'>
                      <li><a href="#">NEW ARRIVAL</a></li>
                      <li><a href="#">CLOTHING</a></li>
                      <li><a href="#">ACCESSORIES</a></li>
                      <li><a href="#">SHOES</a></li>
                      <li><a href="#">WATCHES</a></li>
                      <li><a href="#">BAGS</a></li>
                      <li><a href="#">STORE</a></li>
                      <li><a href="#" className='navbar-color'>SALE</a></li> */}
                  {/* </ul> */}
                  <nav class="navbar navbar-expand-lg navbar-light  ">
  <div class="container-fluid">
    <button class="navbar-toggler nav-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#">NEW ARRIVAL</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#">NEW ARRIVAL</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">CLOTHING</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">ACCESSORIES</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">SHOES</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">WATCHES</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">BAGS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link navbar-color" href="#">STORE</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
              </div>
      </>
  )
}

export default Navbar