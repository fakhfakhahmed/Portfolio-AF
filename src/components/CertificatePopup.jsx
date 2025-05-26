import React, { useEffect, useRef, useState } from 'react';
import '../assets/styles/certificate-popup.css';

const CertificatePopup = ({ isOpen, onClose, image, alt, title }) => {
  const popupRef = useRef(null);
  const [isImageLoading, setIsImageLoading] = useState(true);

  useEffect(() => {
    // Reset loading state when image changes
    setIsImageLoading(true);
  }, [image]);

  useEffect(() => {
    // Handle click outside to close popup
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    // Handle ESC key to close popup
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    // Add event listeners when popup is open
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
      // Prevent scrolling of the body when popup is open
      document.body.style.overflow = 'hidden';
    }

    // Cleanup event listeners
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
      // Restore scrolling when popup is closed
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75 transition-opacity duration-300 popup-overlay"
    >
      <div 
        ref={popupRef} 
        className="relative w-[95%] sm:w-[90%] md:w-[80%] lg:max-w-3xl max-h-[90vh] overflow-auto bg-white rounded-lg shadow-xl popup-content"
      >
        <div className="flex justify-between items-center border-b border-gray-200 p-2 sm:p-3 md:p-4">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{title || 'Certificate'}</h3>
          <button 
            onClick={onClose}
            className="close-button"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <div className="p-2 sm:p-3 md:p-4 relative">
          <div className="image-container">
            {isImageLoading && <div className="loading-spinner"></div>}
            <img 
              src={image} 
              alt={alt || title || "Certificate"} 
              className={`certificate-image ${isImageLoading ? 'loading' : ''}`} 
              onLoad={() => setIsImageLoading(false)}
              onError={() => setIsImageLoading(false)}
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default CertificatePopup;
