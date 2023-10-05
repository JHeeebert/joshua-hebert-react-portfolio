import React from "react";

import main1 from "../../assets/slide1.jpg";

import main2 from "../../assets/slide2.jpg";

import main3 from "../../assets/slide3.jpg";

import main4 from "../../assets/slide4.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Carousel.css";

function Carousel() {
  return (
    <div id="myCarousel" className="carousel slide" data-ride='carousel' data-interval='3000' data-pause='hover'>
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>

        <li data-target="#myCarousel" data-slide-to="1"></li>

        <li data-target="#myCarousel" data-slide-to="2"></li>

        <li data-target="#myCarousel" data-slide-to="3"></li>
      </ol>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={main1} className="d-block w-100" alt="Slide 1" />
        </div>

        <div className="carousel-item">
          <img src={main2} className="d-block w-100" alt="Slide 2" />
        </div>

        <div className="carousel-item">
          <img src={main3} className="d-block w-100" alt="Slide 3" />
        </div>

        <div className="carousel-item">
          <img src={main4} className="d-block w-100" alt="Slide 4" />
        </div>
      </div>

      <a
        className="carousel-control-prev"
        href="#myCarousel"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>

        <span className="sr-only"></span>
      </a>

      <a
        className="carousel-control-next"
        href="#myCarousel"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" ></span>

        <span className="sr-only"></span>
      </a>
    </div>
  );
}

export default Carousel;