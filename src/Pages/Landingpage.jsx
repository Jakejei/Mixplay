import React from 'react';
import '../LandingPage.css';
import { Link } from 'react-router-dom';


export function LandingPage() {
  return (
    <div id="landingCarousel" className="carousel slide carousel-fade position-relative" data-bs-ride="carousel">
      <div className="carousel-inner">

        <div className="carousel-item active">
          <img src="/show1.jpg" className="d-block w-100 vh-100 object-fit-cover" alt="Slide 1" />
        </div>

        <div className="carousel-item">
          <img src="/show2.jpg" className="d-block w-100 vh-100 object-fit-cover" alt="Slide 2" />
        </div>

        <div className="carousel-item">
          <img src="/show3.jpg" className="d-block w-100 vh-100 object-fit-cover" alt="Slide 3" />
        </div>

      </div>

      {/* Fixed Button Container */}
      <div className="button-overlay position-absolute top-50 start-50 translate-middle text-center text-white">
        <h1 className="fw-bold display-4 mb-4">LEARN HOW TO PLAY GUITAR WITH MIXPLAY</h1>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          <Link to="/home" className="btn btn-warning text-dark btn-gamified">Start</Link>
          <Link to="/tuner" className="btn btn-info text-white btn-gamified">Tuner</Link>
          <Link to="/mixer" className="btn btn-light text-dark btn-gamified">Mixer</Link>
        </div>

      </div>

      {/* Optional carousel controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#landingCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#landingCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
