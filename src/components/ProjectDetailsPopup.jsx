import React, { useState, useEffect, useRef, memo } from 'react';
import { useTranslation } from 'react-i18next';
import '../assets/styles/project-details-popup.css';
import { lazyLoadVideo } from '../utils/lazyLoading';

const ProjectDetailsPopup = ({ isOpen, onClose, project }) => {
  const { t } = useTranslation();
  const popupRef = useRef(null);
  const videoRef = useRef(null);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);

  // Reset state when project changes
  useEffect(() => {
    if (project) {
      setActiveMediaIndex(0);
      setIsImageLoading(true);
    }
  }, [project]);

  // Handle body overflow
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle click outside and ESC key
  useEffect(() => {
    if (!isOpen) return;
    
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Handle video loading and playback
  useEffect(() => {
    if (!isOpen || !project) return;
    
    const currentMedia = project.media?.[activeMediaIndex];
    if (videoRef.current && currentMedia?.type === 'video') {
      if (!videoRef.current.src) {
        lazyLoadVideo(videoRef.current, currentMedia.src);
      }
      
      videoRef.current.play().catch(error => {
        console.log('Video autoplay failed:', error);
      });
    }
    
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, [activeMediaIndex, project, isOpen]);

  // Early return if not open or no project
  if (!isOpen || !project) {
    return null;
  }

  const goToPrevious = () => {
    setActiveMediaIndex((prev) => 
      prev === 0 ? (project.media?.length || 1) - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setActiveMediaIndex((prev) => 
      prev === (project.media?.length || 1) - 1 ? 0 : prev + 1
    );
  };

  const renderMedia = () => {
    if (!project.media || project.media.length === 0) {
      return <div className="no-media">No media available</div>;
    }
    
    const currentMedia = project.media[activeMediaIndex];
    return (
      <div className="image-container">
        {isImageLoading && <div className="loading-spinner"></div>}
        <img 
          src={currentMedia.src} 
          alt={`${project.title} - Image ${activeMediaIndex + 1}`} 
          className={`media-item ${isImageLoading ? 'loading' : ''}`}
          onLoad={() => setIsImageLoading(false)}
          onError={() => setIsImageLoading(false)}
          loading="lazy"
          decoding="async"
        />
      </div>
    );
  }

  return (
    <div className="project-popup-overlay">
      <div ref={popupRef} className="project-popup-content">
        <div className="popup-header">
          <h2 className="popup-title">{project.title}</h2>
          <button 
            onClick={onClose}
            className="close-button"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        
        <div className="popup-body">
          <div className="media-section">
            {renderMedia()}
            
            {/* Media Navigation */}
            {project.media.length > 1 && (
              <div className="media-controls">
                <button className="nav-button left-nav" onClick={goToPrevious}>&#8249;</button>
                <div className="nav-dots">
                  {project.media.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveMediaIndex(index)}
                      className={`nav-dot ${index === activeMediaIndex ? 'active' : ''}`}
                      aria-label={`Go to media ${index + 1}`}
                    />
                  ))}
                </div>
                <button className="nav-button right-nav" onClick={goToNext}>&#8250;</button>
              </div>
            )}
          </div>
          
          <div className="details-section">
            <div className="project-year">{project.year}</div>
            <div className="project-description">{project.description}</div>
            
            {project.detailedDescription && (
              <div className="detailed-description">
                {project.detailedDescription}
              </div>
            )}
            
            <div className="tech-stack">
              <h3>{t('projects.technologiesUsed')}</h3>
              <div className="tech-tags">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {project.features && (
              <div className="features">
                <h3>{t('projects.projectFeatures')}</h3>
                <ul>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {project.challenges && (
              <div className="challenges">
                <h3>{t('projects.challenges')}</h3>
                <p>{project.challenges}</p>
              </div>
            )}
            
            {project.link && (
              <div className="project-link">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="view-project-link"
                >
                  {t('projects.viewCode')}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Use memo to prevent unnecessary re-renders
export default memo(ProjectDetailsPopup);
