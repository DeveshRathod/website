import React, { useState } from "react";
import data from "../utils/data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";

const Projects = () => {
  const initialProjects = data.slice(0, 3);
  const [projects, setProjects] = useState(initialProjects);
  const [showAll, setShowAll] = useState(false);

  const toggleProjects = () => {
    if (showAll) {
      setProjects(data.slice(0, 3));
    } else {
      const remainingProjects = data.slice(projects.length);
      const nextProjects = remainingProjects.slice(0, 6);
      if (nextProjects.length > 0) {
        setProjects([...projects, ...nextProjects]);
      } else {
        setProjects(initialProjects);
      }
    }
    setShowAll(!showAll);
  };

  return (
    <div
      className="flex flex-col items-center mt-8 sm:mt-36 sm:m-8 font-customFont relative"
      id="projects"
    >
      <div className="self-center">
        <h1 className="text-3xl sm:text-6xl">Projects</h1>
      </div>

      <div className="m-10 transition-all duration-500 ease-in-out">
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-7 md:justify-self-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>

      <div className="self-center">
        <button className="text-customColor" onClick={toggleProjects}>
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default Projects;
