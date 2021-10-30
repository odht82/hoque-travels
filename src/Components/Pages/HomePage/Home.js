import React from 'react';
import HomeOffers from '../Offers/Offers';
import HeroSection from '../HeroSection/HeroSection';
import Activities from '../Activities/Activities';
import Packages from '../Packages/Packages';
import Suggestion from '../Suggestion/Suggestion';
import Revies from '../Review/Review';
import Subscribe from '../Subscribe/Subscribe';
import Footer from '../Footer/Footer';

function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <Activities></Activities>
      <Packages></Packages>
      <Suggestion></Suggestion>
      <Revies></Revies>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </>
  );
}

export default Home;

// Navbar
// herosection
// company
// activity
// packages
// suggestionlist
// review
// subscription
// footer
