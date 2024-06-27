// Projects.jsx
import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';
import projectsData from '../../projects.json';

// Import images
import project1 from '../../assets/project2.png';
import project2 from '../../assets/project1.png';
import project3 from '../../assets/project3.png';

// Map image keys to imported images
const images = {
  project1,
  project2,
  project3
};

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Assuming you may want to fetch this data from an API in the future
    setProjects(projectsData);
  }, []);

  return (
    <div className={styles.container} id="projects">
      <h2 className={styles.heading}>Projects</h2>
      <div className={`row ${styles.cardContainer} `}>
        {projects.map((project, index) => (
          <div key={index} className="col-12 col-md-4 d-flex justify-content-center">
            <ProjectCard
              title={project.title}
              description={project.description}
              imageSrc={images[project.imageKey]}
              link={project.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
