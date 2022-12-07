import React from "react";
import "./HomePage.css";
function HomePage() {
  return (
    <>
      <div className="Home-container">
        <div className="row">
          <div className="col-7 col-lg-6 col-md-6 col-sm-12 ">
            {/* <div className="home-img"> */}
              {/* <img src="./assets/Home2.jpg" alt="Image not found" /> */}
              <div id="carouselExampleControls" class="carousel slide home" data-bs-ride="carousel">
  <div class="carousel-inner ">
    <div class="carousel-item active ">
      <img src="./assets/Home2.jpg" class=" " alt="..." />
    </div>
    <div class="carousel-item  ">
      <img src="./assets/Home1.jpg" class="d-block " alt="..." />
    </div>
    <div class="carousel-item  ">
      <img src="./assets/Home4.jpg" class="d-block " alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev home-prev-button" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
{/* // </div> */}
            </div>
          </div>
          <div className="col-5 col-lg-6 col-md-6 col-sm-12 ">
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
