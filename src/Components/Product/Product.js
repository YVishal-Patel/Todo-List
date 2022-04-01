import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./Product.css";
import ProductCart from "./ProductCart";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  // { width: 1200, itemsToShow: 4 },
];

function Product() {
  return (
    <>
    
      <div className="product-container">
        <div className="heading-main">
          <h3>PRODUCTS</h3>
        </div>
        <div className="collection-data-main">
          <p>
            Shop Now <hr className="hr" />{" "}
          </p>
        </div>
        {/* <div className="collection-assets">
          <div className="collection-asset"> */}
            {/* <ProductCart imgUrl="./assets/P1.jpg" Text="CLOTHS" />
            <ProductCart imgUrl="./assets/P2.jpg" Text="WATCHES" />
            <ProductCart imgUrl="./assets/P5.jpg" Text="HANDBAGS" /> */}
            {/* <div className="product-icon"> */}
            {/* <p>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="product-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                />
              </svg>{" "}
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="product-icon "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </p> */}
            <Carousel breakPoints={breakPoints}>
        
          <Item>
          <div className="collection-assets">
           <div className="collection-asset">
           <ProductCart imgUrl="./assets/P1.jpg" Text="CLOTHS" /> </div> </div> </Item>
          <Item>
          <div className="collection-assets">
           <div className="collection-asset">
           <ProductCart imgUrl="./assets/P1.jpg" Text="CLOTHS" /> </div> </div> </Item>
               <Item>
          <div className="collection-assets">
           <div className="collection-asset">
           <ProductCart imgUrl="./assets/P1.jpg" Text="CLOTHS" /> </div> </div> </Item>
               <Item>
          <div className="collection-assets">
           <div className="collection-asset">
           <ProductCart imgUrl="./assets/P1.jpg" Text="CLOTHS" /> </div> </div> </Item>
               <Item>
          <div className="collection-assets">
           <div className="collection-asset">
           <ProductCart imgUrl="./assets/P1.jpg" Text="CLOTHS" /> </div> </div> </Item>
           <Item>
          <div className="collection-assets">
           <div className="collection-asset">
           <ProductCart imgUrl="./assets/P1.jpg" Text="CLOTHS" /> </div> </div> </Item>

        </Carousel>
            </div>
          {/* </div>
        </div> */}
      {/* </div> */}
  
    </>
  );
}

export default Product;
