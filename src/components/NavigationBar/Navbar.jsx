import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css"; // Assuming you have defined styles in a CSS module file
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);



  useEffect(() => {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    const navbarLinks = document.querySelectorAll(".nav-link");

    const handleLinkClick = () => {
      if (navbarCollapse.classList.contains("show")) {
        navbarCollapse.classList.remove("show");
      }
    };

    navbarLinks.forEach(link => {
      link.addEventListener("click", handleLinkClick);
    });

    return () => {
      navbarLinks.forEach(link => {
        link.removeEventListener("click", handleLinkClick);
      });
    };
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`navbar navbar-light navbar-expand-lg sticky-top ${styles.navbar} ${
        isScrolled ? styles.scrolled : ""
      }`} 
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
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
              <a
                className={`nav-link ${styles.navlink}`}
                href="/#"
                onClick={(e) => scrollToSection(e, "home")}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${styles.navlink}`}
                href="/#about"
                onClick={(e) => scrollToSection(e, "about")}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${styles.navlink}`}
                href="/#skills"
                onClick={(e) => scrollToSection(e, "skills")}
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${styles.navlink}`}
                href="/#projects"
                onClick={(e) => scrollToSection(e, "projects")}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${styles.navlink}`}
                href="/#justlikethat"
                onClick={(e) => scrollToSection(e, "justlikethat")}
              >
                JustLikeThat
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${styles.navlink}`}
                href="/#contact"
                onClick={(e) => scrollToSection(e, "contact")}
              >
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
