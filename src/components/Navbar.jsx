import React from "react";
import { Link } from "react-router-dom";
import { useRef, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faShoppingBag,
  faShoppingCart,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const navbarRef = useRef(null);
  const barRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    const navbar = navbarRef.current;
    const bar = barRef.current;
    const close = closeRef.current;

    const handleBarClick = () => {
      navbar.classList.toggle("active");
    };

    const handleCloseClick = () => {
      navbar.classList.remove("active");
    };

    if (bar) {
      bar.addEventListener("click", handleBarClick);
    }

    if (close) {
      close.addEventListener("click", handleCloseClick);
    }

    return () => {
      if (bar) {
        bar.removeEventListener("click", handleBarClick);
      }
      if (close) {
        close.removeEventListener("click", handleCloseClick);
      }
    };
  }, []);

  return (
    <section id="header">
      <Link to="/">
        <img
          className="logo"
          src="img/Bolam-logo.png"
          alt=""
          width="100px"
          height="100px"
        />
      </Link>

      <div>
        <ul id="navbar" ref={navbarRef}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} id="large-bg" />
            </Link>
          </li>
          <button id="close" ref={closeRef}>
            <FontAwesomeIcon icon={faXmark} id="close" />
          </button>
        </ul>
      </div>

      <div id="mobile">
        <Link to="cart">
          <FontAwesomeIcon icon={faShoppingBag} style={{ color: "#1d2634" }} />
        </Link>

        <FontAwesomeIcon
          icon={faBars}
          id="bar"
          ref={barRef}
          style={{ marginLeft: "10px" }}
        />
      </div>
    </section>
  );
};

export default Navbar;
