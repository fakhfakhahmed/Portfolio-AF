import React, { useState, useRef, useEffect, memo } from 'react';
import { throttle, lazyLoadVideo } from '../utils/lazyLoading';

const ProjectCard = ({ project, onViewDetails }) => {
  if (project.isOther) {
    return (
      <div className="flex flex-col justify-between h-full p-10 bg-gray-900 bg-opacity-80 rounded-2xl shadow-xl text-center">
        <div className="flex-1 flex flex-col justify-center items-center">
          <h3 className="text-2xl font-bold mb-8 mt-8">{project.title}</h3>
        </div>
        <div className="flex justify-center space-x-4 mt-8">
          <a
            href="#"
            className="inline-block text-sm uppercase tracking-wider font-medium hover:text-gray-600 transition-colors"
          >
            View Project
          </a>
          <button
            onClick={() => onViewDetails(project)}
            className="inline-block text-sm uppercase tracking-wider font-medium hover:text-gray-600 transition-colors"
          >
            View Details
          </button>
        </div>
      </div>
    );
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef(null);
  const videoRef = useRef(null);

  // Handle slider navigation
  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? project.media.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === project.media.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Handle hover state and automatic sliding with throttled updates
  useEffect(() => {
    if (isHovering && project.media.length > 1) {
      // Use throttled version of goToNext to prevent performance issues
      const throttledGoToNext = throttle(goToNext, 100);
      
      intervalRef.current = setInterval(() => {
        throttledGoToNext();
      }, 3000); // Change slide every 3 seconds when hovering (increased for better user experience)
    } else {
      clearInterval(intervalRef.current);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isHovering, currentIndex, project.media.length]);

  // Handle manual navigation with arrow keys
  const handleKeyDown = (e) => {
    if (isHovering) {
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    }
  };

  // Add key event listener
  useEffect(() => {
    if (isHovering) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isHovering, handleKeyDown]);

  // Start video autoplay when it's the current media and project is being hovered
  useEffect(() => {
    const currentMedia = project.media[currentIndex];
    if (videoRef.current && currentMedia.type === 'video') {
      // Lazy load the video when it becomes the current media
      if (!videoRef.current.src) {
        lazyLoadVideo(videoRef.current, currentMedia.src);
      }
      
      // Play video when hovered
      if (isHovering) {
        videoRef.current.play().catch(error => {
          console.log('Video autoplay failed:', error);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [currentIndex, isHovering, project.media]);

  // Render the current media (only image)
  const renderMedia = () => {
    const currentMedia = project.media[currentIndex];
    return (
      <img 
        src={currentMedia.src} 
        alt={`${project.title} - Image ${currentIndex + 1}`} 
        className="w-full h-64 object-cover transition-transform duration-500 loading-image"
        loading="lazy"
        decoding="async"
      />
    );
  }

  return (
    <div 
      className="group border border-gray-700 hover:border-black transition-colors flex flex-col justify-between h-full w-full"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      tabIndex="0"
    >
      <div>
        <div className="relative overflow-hidden">
          {/* Media (Image or Video) */}
          {renderMedia()}
          
          {/* Navigation Dots */}
          {project.media.length > 1 && (
            <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2">
              {project.media.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-white' : 'bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
          
          {/* Navigation Arrows (visible on hover) */}
          {project.media.length > 1 && (
            <>
              <button
                className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={goToPrevious}
                aria-label="Previous image"
              >
                &#8249;
              </button>
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={goToNext}
                aria-label="Next image"
              >
                &#8250;
              </button>
            </>
          )}
        </div>
        
        <div className="p-4 sm:p-6 md:p-8 pb-20">
          <div className="mb-2 text-sm text-gray-400">{project.year}</div>
          <h3 className="text-xl font-bold mb-2 sm:mb-4">{project.title}</h3>
          <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">{project.description}</p>
          <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
            {project.technologies.map((tech, index) => (
              <span key={index} className="inline-block px-2 py-1 text-xs sm:text-sm bg-rn-light-gray text-gray-300">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 pb-4 sm:pb-6 md:pb-8 flex justify-center space-x-4 sm:space-x-10">
        <a 
          href={project.link || "#"} 
          target={project.link ? "_blank" : ""}
          rel={project.link ? "noopener noreferrer" : ""}
          className="inline-block text-xs sm:text-sm uppercase tracking-wider font-medium hover:text-red-500 transition-colors"
        >
          View Project
        </a>
        <button 
          onClick={() => onViewDetails(project)}
          className="inline-block text-xs sm:text-sm uppercase tracking-wider font-medium hover:text-red-500 transition-colors border-b border-transparent hover:border-red-500 pb-1"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

// Use memo to prevent unnecessary re-renders
export default memo(ProjectCard);
