import React from 'react'
import './Footer.css'

function Footer() {
  return (
      <>
          <div className="container-fluid footer">
          
              <div className="row">
                  <div className="col-3 footer-items">
                  <div className=" web-icon">
                      <p className='web-icons fs-3'>FLORA </p>
                      <p className='web-icons-text'>THE FASHION BOUTIQUE</p>
                  </div>
                  <div className="footer-disc">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam corrupti sint, rerum voluptatibus quam ducimus blanditiis, nam, accusantium eligendi quasi facere minus maxime. Eligendi cupiditate repellendus dolore exercitationem nostrum. Placeat.</p>
                  </div>
                  <div className="footer-icon">

                  </div>
                  </div>
                  <div className="col-5 footer-items ">
                  <div className="footer-header">
                      <h3>We'll send to your inbox.</h3>
                      <input type="text" placeholder='your email address' />
                      <button className='footer-btn'>SUBSCRIBE</button>
                  </div>
                  <div className="footer-icon">
                      <h3>  Follow us on</h3>
                  </div>

                  </div>
                  <div className="col-2 footer-items">
                  <div className="footer-item">
                  <ul>
                      <li> <a href="#"> ORDER</a></li>
                      <li> <a href="#"> TERMS & CONDITION</a></li>
                      <li> <a href="#"> RETURN & EXCHANGE</a></li>
                      <li> <a href="#"> TRACK ORDER</a></li>
                      <li> <a href="#"> REWARDS AND GIFTS</a></li>
                      <li> <a href="#"> ACCOUNT</a></li>
                  </ul>
                  </div>
                  </div>
                  <div className="col-1 footer-items">
                  <div className="footer-item">
                  <ul>
                      <li> <a href="#"> ABOUT US</a></li>
                      <li> <a href="#"> OUR STORIES</a></li>
                      <li> <a href="#"> CAREERS</a></li>
                      <li> <a href="#"> CONTACT US</a></li>

                  </ul>
                  </div>
                  </div>
                  <hr />
                  <p className='Copyright'>Website by @imkrishnagarwal. Copyright Flora Fashion</p>
              </div>
          </div>
      </>
  )
}

export default Footer