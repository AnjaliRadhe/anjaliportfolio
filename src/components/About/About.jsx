import React, { useEffect, useState } from "react";
import styles from "./About.module.css";
import aboutimage from "../../assets/about.webp";
import planeanimation from "../plane-animation";
import plane from "../../assets/plane.png";

const About = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  return (
    <div className={`container ${styles.aboutSection}`} id="about">
      <div className="row">
        <div className="col-md-6">
          <img
            src={aboutimage}
            alt="About"
            className={`img-fluid ${styles.image} ${styles.aboutImage}`}
          />
        </div>
        <div className="col-md-6">
          <div className={styles.content}>
            <h1 className={styles.title}>Hello!</h1>
            <p className={styles.description}>
              <strong>
                I am an aspiring web developer passionate about aesthetically
                designed, highly functional digital applications.{" "}
              </strong>
            </p>
            <p className={styles.description}>
              After completing a comprehensive web development course with
              Generation Australia, I refined my proficiency in HTML, CSS,
              JavaScript and React. I am now dedicated to realizing my ambition
              of establishing myself as a full-time web developer, ready to make
              meaningful contributions to impactful projects.
            </p>
            <div className={styles.buttonContainer}>
              <a href="#contact" className={`btn ${styles.customButton}`}>
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
