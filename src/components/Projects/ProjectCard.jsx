// ProjectCard.jsx
import React from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ title, description, imageSrc, link }) => {
  return (
    <div className={`card ${styles.card}`}>
      <img src={imageSrc} className={`card-img-top ${styles.cardImage}`} alt={title} />
      <div className={`card-body ${styles.cardBody}`}>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
      <a href={link} className={`btn ${styles.btnCustom}`}>Demo</a>
    </div>
  );
};

export default ProjectCard;
