import React from "react";
// import './App.css'
import Navbar from "../../components/Navbar";
import Features from "./Features";
import Hero from "./Hero";
import FeaturedProduct from "./FeaturedProduct";
import Footer from "../../components/Footer";
import CouponBanner from "./CouponBanner";
import NewArrivals from "./NewArrivals";
import Banners from "./Banners";
import Newsletter from "./Newsletter";
const LandingPage = () => {
  return (
    <div>

      <Navbar />
      <Hero />
      <Features />
      <FeaturedProduct /> 
      <CouponBanner />
      <NewArrivals />
      <Banners />
      <Newsletter />
      <Footer />

    </div>
  );
};

export default LandingPage;
