import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css"; // Assuming you have defined styles in a CSS module file
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar  navbar-light   navbar-expand-lg sticky-top ${styles.navbar} ${
        isScrolled ? styles.scrolled : ""
      }`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={Logo}
            alt="Logo"
            className={`d-inline-block align-top ${styles.logo}`}
          />
          <span className={styles.heading}>Anjali Gopalakrishnan</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className={`navbar-nav ml-auto ${styles.navbarLinks}`}>
            <li className="nav-item active">
              <a className={`nav-link ${styles.navlink}`} href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${styles.navlink}`} href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${styles.navlink}`} href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${styles.navlink}`} href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${styles.navlink}`} href="#justlikethat">
                JustLikeThat
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${styles.navlink}`} href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
