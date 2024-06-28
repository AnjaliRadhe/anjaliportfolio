import React from 'react';
import styles from './Footer.module.css';

// Import your images
import twitterIcon from '../../assets/logo-linkedin-icon-4096.png';
import instagramIcon from '../../assets/instalogo.png';

const Footer = () => {
  return (
    <footer className={styles.footer} id="contact">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className=" col-md-8 col-sm-12 d-flex flex-column flex-md-row justify-content-center align-items-center">
            <div className="d-flex flex-column flex-md-row align-items-center text-center mr-md-5 mb-3 mb-md-0">
              <h2 className="mr-md-3 mb-2 mb-md-0">Contact Me</h2>
              <p className={`${styles.email}`}>Email: anjalishivaraj@gmail.com</p>
            </div>
            <div className="d-flex flex-column flex-md-row align-items-center text-center">
              <h2 className="mr-md-3 mb-2 mb-md-0">Follow</h2>
              <div className="d-flex">
                <a href="https://www.linkedin.com/in/anjali-gopalakrishnan-356148247/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                  <img src={twitterIcon} alt="Twitter" className={styles.icon} />
                </a>
                <a href="https://www.instagram.com/the_colourful_labyrinth/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                  <img src={instagramIcon} alt="Instagram" className={styles.icon} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
