import React from "react";
import Product from "./Product";


const Home = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="/assets/img2.jpg" className="d-block w-100" alt="Iphone" height="500px" />
      </div>
      <div className="carousel-item">
        <img src="/assets/img1.jpg" className="d-block w-100" alt="Iphone"  height="500px" />
      </div>
      <div className="carousel-item">
        <img src="/assets/img3.jpg" className="d-block w-100" alt="Iphone"  height="500px" />
      </div>
      <div className="carousel-item">
        <img src="/assets/img4.jpg" className="d-block w-100" alt="Iphone"  height="500px" />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
    <Product/>
  </div>
 
  );
};

export default Home;
