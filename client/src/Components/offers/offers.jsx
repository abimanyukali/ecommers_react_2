import React from 'react';
import exclusive_image from '../Assets/exclusive_image.png';
import './offer.css';
const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>EXCLUSIVE</h1>
        <h1>offers for you </h1>
        <p> ONLY ON BEST SELLERS PRODUCTS </p>
        <button>Check Now </button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt=" " />
      </div>
    </div>
  );
};

export default Offers;
