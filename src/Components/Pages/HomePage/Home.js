import React from 'react';
import HomeOffers from '../Offers/Offers';
import NavBar from '../Navbar/NavBar';
import HeroSection from '../HeroSection/HeroSection';
import Companies from '../Companies/Companies';
import Activities from '../Activities/Activities';
import Packages from '../Packages/Packages';
import Suggestion from '../Suggestion/Suggestion';
import Revies from '../Review/Review';
import Subscribe from '../Subscribe/Subscribe';
import Footer from '../Footer/Footer';

function Home() {
  return (
    <>
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <Companies></Companies>
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
