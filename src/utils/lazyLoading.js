/**
 * Utility functions for lazy loading images and improving performance
 */

/**
 * Lazy loads an image by setting the src attribute only when the image is about to enter the viewport
 * @param {HTMLImageElement} imageElement - The image element to lazy load
 * @param {string} src - The image source URL
 */
export const lazyLoadImage = (imageElement, src) => {
  if (!imageElement) return;
  
  // Create IntersectionObserver to detect when image enters viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // If image is about to enter viewport, load it
      if (entry.isIntersecting) {
        const image = entry.target;
        image.src = src;
        image.classList.add('loaded');
        // Once loaded, no need to observe anymore
        observer.unobserve(image);
      }
    });
  }, { rootMargin: '100px' }); // Start loading 100px before image enters viewport
  
  observer.observe(imageElement);
};

/**
 * Creates a throttled function that won't be triggered as often during browser resize events
 * @param {Function} func - The function to throttle
 * @param {number} limit - The time limit in milliseconds
 * @returns {Function} - The throttled function
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

/**
 * Preload critical images for faster rendering
 * @param {Array<string>} imageUrls - Array of image URLs to preload
 */
export const preloadCriticalImages = (imageUrls) => {
  if (!imageUrls || !Array.isArray(imageUrls)) return;
  
  imageUrls.forEach(url => {
    const img = new Image();
    img.src = url;
  });
};

/**
 * Dynamically load a video and replace placeholder
 * @param {HTMLVideoElement} videoElement - The video element
 * @param {string} src - The video source URL
 */
export const lazyLoadVideo = (videoElement, src) => {
  if (!videoElement) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const video = entry.target;
        if (!video.src) {
          video.src = src;
          video.load();
        }
        observer.unobserve(video);
      }
    });
  }, { rootMargin: '200px' });
  
  observer.observe(videoElement);
};
