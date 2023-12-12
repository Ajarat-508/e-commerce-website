import React from "react";
// import './App.css'
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import Features from "./landing-page/Features";
import Newsletter from "./landing-page/Newsletter";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Navbar />

      <PageHeader
        title="#Know More about Us"
        description="Bolam Online Store. Your one stop Shopping mall"
        backgroundImage="img/banner/b1.jpg"
      />

      <section id="about-head" className="section-p1">
        <img src="img/about/a6.jpg" alt="" />
        <div id="about-des">
          <h2>Who We Are</h2>
          <p>
            At Bolam Shopping, we believe that fashion is not just about
            clothing; it's a form of self-expression that transcends trends and
            seasons. Our online store is your go-to destination for a curated
            collection of clothing that seamlessly blends comfort, style, and
            affordability. Whether you're a trendsetter or someone who values
            timeless classics, we have something for every style palette.
          </p>

          <marquee
            bgcolor="#c6cef3"
            loop="1"
            scrollamount="5"
            color="#f0f0f0"
            width="100%"
          >
            Thank you for choosing Bolam Shopping as your fashion destination.
            We are committed to helping you discover and embrace your unique
            style.
          </marquee>
        </div>
      </section>

      <Features />
      <Newsletter />
      {/* Download App Section */}
      <section id="about-app" className="section-p1">
        <h1>
          Download Our <Link to="/about">App</Link>
        </h1>
        <div className="video">
          <video autoPlay muted loop src="img/about/1.mp4" />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
