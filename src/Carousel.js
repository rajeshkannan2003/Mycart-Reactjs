import React from 'react';

const Carousel = () => {
  return (
    <div id="carouselExample" className="carousel slide my-3" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="./images/c1.jpg" className="d-block w-100" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src="./images/c2.png" className="d-block w-100" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src="./images/c3.jpg" className="d-block w-100" alt="Slide 3" />
        </div>
        <div className="carousel-item">
          <img src="./images/c4.jpg" className="d-block w-100" alt="Slide 4" />
        </div>
       
      </div>
      <a className="carousel-control-prev" href="#carouselExample" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExample" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  );
};

export default Carousel;


