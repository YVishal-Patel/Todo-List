// import React from "react";
// import Card from "./Card";
// import "./NewCollection.css";

// function NewCollection({Title}) {
//   return (
//     <>
//       <div className="collection-container">
//         <div className="heading-main">
//           <h3>{Title}</h3>
//         </div>
//         <div className="collection-data-main">
//           <p>
//             Shop Now <hr className="hr" />{" "}
//           </p>
//           <span>
//             {" "}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               class="arrow-icon"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               stroke-width="2"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
//               />
//             </svg>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               class="arrow-icon"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               stroke-width="2"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
//               />
//             </svg>{" "}
//           </span>
//         </div>
//         <div className="collection-assets">
//           <div className="asset">
//             <Card
//               imgUrl="./assets/img1.jpg"
//               Title="Flora New Arrival"
//               Discription="Women Legacy A Line Text"
//               Price="$250"
//             />

//             <Card
//               imgUrl="./assets/img5.jpg"
//               Title="Flora New Arrival"
//               Discription="Women Legacy A Line Text"
//               Price="$250"
//             />
//             <Card
//               imgUrl="./assets/img3.jpg"
//               Title="Flora New Arrival"
//               Discription="Women Legacy A Line Text"
//               Price="$250"
//             />
//             <Card
//               imgUrl="./assets/img4.jpg"
//               Title="Flora New Arrival"
//               Discription="Women Legacy A Line Text"
//               Price="$250"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// {
 
// }

// export default NewCollection;


import React from "react";
import Carousel from "react-elastic-carousel";
 import Card from "./Card";
import Item from "./Item";
import './NewCollection.css'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function NewCollection({Title}) {
  return (
    <>
      <div className="App">

      <div className="collection-container">
         <div className="heading-main">
           <h3>{Title}</h3>
         </div>
         <div className="collection-data-main">
           <p>
             Shop Now <hr className="hr" />{" "}
           </p>
           {/* <span>
             {" "}
             <svg
              xmlns="http://www.w3.org/2000/svg"
              class="arrow-icon"
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
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="arrow-icon"
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
            </svg>{" "}
          </span> */}
        </div>
        <Carousel breakPoints={breakPoints}>
        
          {/* <Item> <div className="container">
           
          </div> */}
          {/* <div className="collection-assets">
           <div className="asset"> */}
          <Item>
          <div className="collection-assets">
           <div className="asset">
          <Card
           imgUrl="./assets/img1.jpg"
              Title="Flora New Arrival"
              Discription="Lorem ipsum dolor sit amet"
               Price="$250"/> </div> </div> </Item>
          <Item>
          <div className="collection-assets">
           <div className="asset">
          <Card
           imgUrl="./assets/img2.jpg"
              Title="Flora New Arrival"
              Discription="Lorem ipsum dolor sit amet"
               Price="$250"/> </div> </div> </Item>
               <Item>
          <div className="collection-assets">
           <div className="asset">
          <Card
           imgUrl="./assets/img3.jpg"
              Title="Flora New Arrival"
              Discription="Lorem ipsum dolor sit amet"
               Price="$250"/> </div> </div> </Item>
               <Item>
          <div className="collection-assets">
           <div className="asset">
          <Card
           imgUrl="./assets/img4.jpg"
              Title="Flora New Arrival"
              Discription="Lorem ipsum dolor sit amet"
               Price="$250"/> </div> </div> </Item>
               <Item>
          <div className="collection-assets">
           <div className="asset">
          <Card
           imgUrl="./assets/img5.jpg"
              Title="Flora New Arrival"
              Discription="Lorem ipsum dolor sit amet"
               Price="$250"/> </div> </div> </Item>
           <Item>
          <div className="collection-assets">
           <div className="asset">
          <Card
           imgUrl="./assets/img6.jpg"
              Title="Flora New Arrival"
              Discription="Lorem ipsum dolor sit amet"
               Price="$250"/> </div> </div> </Item>

        </Carousel>
      </div>
      </div>
    </>
  );

  }
export default NewCollection;
