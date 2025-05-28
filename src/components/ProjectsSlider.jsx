import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSlider = ({ projects }) => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev === 0 ? projects.length - visibleCount : prev - 1
    );
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + visibleCount >= projects.length ? 0 : prev + 1
    );
  };

  const visibleProjects = projects.slice(startIndex, startIndex + visibleCount);
  // Handle wrap-around for the slider
  const projectsToShow =
    visibleProjects.length < visibleCount
      ? [
          ...visibleProjects,
          ...projects.slice(0, visibleCount - visibleProjects.length),
        ]
      : visibleProjects;

  return (
    <div className="relative">
      <div className="flex justify-center items-stretch gap-10">
        {projectsToShow.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 px-4 py-2 bg-black bg-opacity-60 text-white rounded-full hover:bg-opacity-90 transition-colors z-10"
        aria-label="Previous projects"
      >
        &#8249;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 px-4 py-2 bg-black bg-opacity-60 text-white rounded-full hover:bg-opacity-90 transition-colors z-10"
        aria-label="Next projects"
      >
        &#8250;
      </button>
    </div>
  );
};

export default ProjectsSlider;
