import './HomePageStyles.css'

import React from 'react'

import NavBar from '../../Components/NavBar/NavBar'
import ProductCard from '../../Components/ProductCards/ProductCard'
import ProductCardContainer from '../../Components/ProductCardContainer/ProductCardContainer';
import Footer from '../../Components/Footer/Footer';

function Landing() {
  return (
    <div className="HomePage">
        <NavBar/>
        <ProductCardContainer/>
        <Footer/>
    </div>
  );
}

export default Landing;