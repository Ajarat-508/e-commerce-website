import React from "react";
// import './App.css'
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
// import Newsletter from "../landing-page/Newsletter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap } from "@fortawesome/free-regular-svg-icons";
import {
  faClock,
  faEnvelope,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import Newsletter from "./landing-page/Newsletter";
import Footer from "../components/Footer";
const Contact = () => {
  const images = [
    // 'https://cdn.hashnode.com/res/hashnode/image/upload/v1704145590244/8b8aec8d-e86a-4ecf-af47-7f655662e939.jpeg',
    'https://cdn.hashnode.com/res/hashnode/image/upload/v1704145625637/f9a1d3e4-2bcb-4498-8376-0db23284c4d0.jpeg',
    'https://cdn.hashnode.com/res/hashnode/image/upload/v1704145661589/2034bbc1-f27b-4be2-98c7-fdf2aed1759b.jpeg'
  
  
  ];
  return (
    <>
      <Navbar />
      <PageHeader
        title="#let's talk"
        description="Leave a message for Us. We love to hear your feedbacks."
        backgroundImages={images}
        
      />

      <section id="contact-details" className="section-p1">
        <div className="details">
          <span>Get in Touch</span>
          <h2 className="details-h2">Visit one of our agency locations or contact us today</h2>
          <h3>Head Office</h3>
          <div>
            <li>
              <FontAwesomeIcon icon={faMap} />
              <p>25, Ibaji Quaters, Lokoja Kogi State, Nigeria.</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
              <p>ajaratazeez@gmail.com</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faPhoneVolume} />
              <p>+2348037775311</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faClock} />
              <p>Monday - Sunday || 8:00Am - 11:00Pm</p>
            </li>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15811.622252655981!2d6.7197047!3d7.7998224!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104f5fefa7c287a5%3A0x8fbce5612cf9351f!2sGanaja%20Junction%20Bridge%2C%20Lokoja!5e0!3m2!1sen!2sng!4v1701006471937!5m2!1sen!2sng"
            width={400}
            height={450}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <section id="form-details">
        <form action>
          <span>Leave Us a Message</span>
          <h2 className='contact-tag'>We love to hear your feedbacks</h2>
          <input type="text" name id placeholder="Enter Your Name" />
          <input type="email" name id placeholder="Enter Your Email" />
          <input type="text" name id placeholder="Subject" />
          <textarea
            name
            id
            cols={30}
            rows={10}
            placeholder="Your Message"
            defaultValue={""}
          />
          <button id="submit-btn" type="submit" className="normal">
            Send a Message
          </button>
        </form>
        <div className="people">
          <div className="people-container">
            <img src="img/people/1.png" alt />
            <p>
              <span>Ajarat Azeez</span>
              <br /> Front-End Developer
              <br /> Phone: + 23437775311
              <br /> Email: ajarat@gmail.com
            </p>
          </div>
          <div className="people-container">
            <img src="img/people/2.png" alt />
            <p>
              <span>Uthman Misbaudeen</span>
              <br /> Senior Marketing Manager
              <br /> Phone: + 23437775311
              <br /> Email: uthman@gmail.com
            </p>
          </div>
          <div className="people-container">
            <img src="img/people/3.png" alt />
            <p>
              <span> Maryam Abdullah</span> <br />
              Senior Logistics Officer <br />
              Phone: + 23437775311 <br /> Email: maryam@gmail.com
            </p>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </>
  );
};

export default Contact;
