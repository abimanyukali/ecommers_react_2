import React from 'react';
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/popular/Popular';
import Offers from '../Components/offers/offers';
import NewCollections from '../Components/NewCollections/NewCollections';
import NewsLetter from '../NewsLetter/NewsLetter';
const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections/>
      <NewsLetter/>
    </div>
  );
};

export default Shop;
