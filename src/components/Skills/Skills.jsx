// Skills.jsx
import React from 'react';
import styles from './Skills.module.css';
import htmlIcon from '../../assets/html.png';
import cssIcon from '../../assets/css.png';
import reactIcon from '../../assets/react.png';
import jsIcon from '../../assets/js.jpg';
import psIcon from '../../assets/ps.png';
import cppIcon from '../../assets/Cplus-Plus.png';
import sqlIcon from "../../assets/sql.webp";

const icons = [
  { src: htmlIcon, alt: "HTML Icon" },
  { src: cssIcon, alt: "CSS Icon" },
  { src: jsIcon, alt: "JavaScript Icon" },
  { src: reactIcon, alt: "React Icon" },
  { src: psIcon, alt: "Photoshop Icon" },
  { src: cppIcon, alt: "C++ Icon" },
  { src: sqlIcon, alt: "SQL Icon" }
];

const Skills = () => {
  return (
    <div className={styles.container} id="skills">
      <h2 className={styles.heading}>Skills</h2>
      <div className={`d-flex flex-wrap justify-content-center ${styles.iconRow}`}>
        {icons.map((icon, index) => (
          <div key={index} className={`d-flex justify-content-center ${styles.iconWrapper}`}>
            <div className={styles.icon}>
              <img src={icon.src} alt={icon.alt} />
            </div>
          </div>
        ))}
      </div>
      <p className={styles.quote}>
        "Programming, much like parenting a cat, is full of surprises that defy logic despite all the theories you learn. This is why continuous learning is the key to making magic happen."
      </p>
    </div>
  );
};

export default Skills;
