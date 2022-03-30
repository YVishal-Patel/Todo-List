import React from "react";
import "./HomePage.css";
function HomePage() {
  return (
    <>
      <div className="Home-container">
        <div className="row">
          <div className="col-7">
            <div className="home-img">
              <img src="./assets/Home2.jpg" alt="Image not found" />
            </div>
          </div>
          <div className="col-5">
            <div className="home-content">
              <div className="home-items">
                <h2>WE CURATE, YOUR SHOP</h2>
                <h5>Handpicked favourites just for you</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum{" "}
                  <br /> at est fuga? Earum culpa magnam exercitationem quidem
                  place <br /> doloribus molestias voluptas pariatur aut, nemo
                  illo dignissimos <br /> eos saepe labore. Dolorum!
                </p>
                <button className="btn-main">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
