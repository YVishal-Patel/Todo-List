import React from 'react'
import Card from './Card'
import './NewCollection.css'

function NewCollection() {
  return (
      <>
          <div className="collection-container">
              <div className="heading">
                  <h3>NEW 2022 COLLECTION</h3>
              </div>
              <div className="collection-data">
                  <p>Shop Now</p>
                <span>  <svg xmlns="http://www.w3.org/2000/svg" class="arrow-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
</svg>
 <svg xmlns="http://www.w3.org/2000/svg" class="arrow-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> </span>
              </div>
              <div className="collection-assets">
              <div className="asset">
              
                 <Card
                 imgUrl="./assets/img1.jpg"
                 Title="Flora New Arrival"
                 Discription="Women Legacy A Line Text"
                 Price="$250"            
                  />

<Card
                 imgUrl="./assets/img5.jpg"
                 Title="Flora New Arrival"
                 Discription="Women Legacy A Line Text"
                 Price="$250"            
                  />
                   <Card
                 imgUrl="./assets/img3.jpg"
                 Title="Flora New Arrival"
                 Discription="Women Legacy A Line Text"
                 Price="$250"            
                  />
                   <Card
                 imgUrl="./assets/img4.jpg"
                 Title="Flora New Arrival"
                 Discription="Women Legacy A Line Text"
                 Price="$250"            
                  />
               </div>
              </div> 
          </div>
         
      </>
  )
}
{/* <img src="./assets/img1.jpg" alt="" />
<img src="./assets/img2.jpg" alt="" />
<img src="./assets/img3.jpg" alt="" />
<img src="./assets/img4.jpg" alt="" /> */}

export default NewCollection