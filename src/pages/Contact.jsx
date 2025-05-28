import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import cvPDF from '../assets/Ahmed-Fakhfakh-English-CV.pdf';

const Contact = () => {
  const { t } = useTranslation();
  const formRef = useRef(null);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState({ status: null, message: '' });
  
  // CV download state
  const [isHovered, setIsHovered] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
    
    // Clear any previous submit result when user starts typing again
    if (submitResult.status) {
      setSubmitResult({ status: null, message: '' });
    }
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitResult({ 
        status: 'error', 
        message: t('contact.formMessages.error') 
      });
      return;
    }
    
    // Set submitting state to show loading indicator
    setIsSubmitting(true);
    setSubmitResult({ status: null, message: '' });

    try {
      // Submit the form using the browser's built-in form submission
      // FormSubmit.co will handle the email delivery
      formRef.current.submit();
      
      // Show success message
      setSubmitResult({ 
        status: 'success', 
        message: t('contact.formMessages.success') 
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitResult({
        status: 'error',
        message: 'An unexpected error occurred. Please try contacting directly at fakhfakh.ahmeed@gmail.com'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Handle CV download
  const handleDownload = () => {
    setIsDownloading(true);
    
    // Simulate download delay for animation
    setTimeout(() => {
      setIsDownloading(false);
    }, 1500);
    
    // Create a temporary link element to trigger the download
    const link = document.createElement('a');
    link.href = cvPDF;
    link.download = 'Ahmed-Fakhfakh-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-rn-dark text-white">
      {/* Contact Header */}
      <section className="py-20 bg-rn-dark">
        <div className="max-w-screen-xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-8 text-center uppercase tracking-tight">{t('contact.pageTitle')}</h1>
          
          <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-16">
            {t('contact.intro')}
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 bg-rn-gray">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-8">{t('contact.sendMessage')}</h2>
              {/* Form submission status message */}
              {submitResult.status && (
                <div className={`p-4 mb-6 rounded ${submitResult.status === 'success' ? 'bg-green-800 text-green-100' : 'bg-red-800 text-red-100'}`}>
                  {submitResult.message}
                </div>
              )}

              {/* Custom Contact Form that matches site theme */}
              <form 
                ref={formRef}
                onSubmit={handleSubmit} 
                className="space-y-6 relative overflow-hidden rounded-lg border border-gray-700 p-6 transition-all duration-300 hover:border-rn-accent/30 mb-8 bg-rn-light-gray/20"
                action="https://formsubmit.co/fakhfakh.ahmeed@gmail.com" 
                method="POST"
              >
                {/* FormSubmit.co configuration */}
                <input type="hidden" name="_subject" value="New message from your portfolio website" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://fakhfakhahmed.github.io/contact" />
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">{t('contact.formLabels.name')} <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    id="name"
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-rn-gray text-white border border-gray-600 focus:border-rn-accent focus:ring-1 focus:ring-rn-accent rounded-md transition-colors ease-in-out"
                    placeholder={t('contact.placeholders.name')}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">{t('contact.formLabels.email')} <span className="text-red-500">*</span></label>
                  <input 
                    type="email" 
                    id="email"
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-rn-gray text-white border border-gray-600 focus:border-rn-accent focus:ring-1 focus:ring-rn-accent rounded-md transition-colors ease-in-out"
                    placeholder={t('contact.placeholders.email')}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">{t('contact.formLabels.subject')}</label>
                  <input 
                    type="text" 
                    id="subject"
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-rn-gray text-white border border-gray-600 focus:border-rn-accent focus:ring-1 focus:ring-rn-accent rounded-md transition-colors ease-in-out"
                    placeholder={t('contact.placeholders.subject')}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">{t('contact.formLabels.message')} <span className="text-red-500">*</span></label>
                  <textarea 
                    id="message"
                    name="message" 
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-rn-gray text-white border border-gray-600 focus:border-rn-accent focus:ring-1 focus:ring-rn-accent rounded-md transition-colors ease-in-out"
                    placeholder={t('contact.placeholders.message')}
                    required
                  ></textarea>
                </div>
                
                <div className="absolute top-0 right-0 -mt-2 -mr-2 h-16 w-16 opacity-10">
                  <div className="relative h-full w-full">
                    <div className="absolute rotate-45 transform bg-rn-accent h-8 w-32 right-0 top-0"></div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`px-8 py-3 bg-rn-accent text-white text-sm uppercase tracking-widest font-medium hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rn-accent rounded-md ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {t('contact.submitting')}
                      </span>
                    ) : t('contact.submitButton')}
                  </button>
                </div>
              </form>

              <div className="mt-8 flex justify-center">
                <button 
                  type="button" 
                  onClick={handleDownload}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className={`relative overflow-hidden group px-8 py-3 ${isDownloading ? 'bg-green-600 text-white' : 'border border-rn-accent text-rn-accent'} text-sm uppercase tracking-widest font-medium hover:bg-rn-accent hover:text-white transition-colors focus:outline-none`}
                  disabled={isDownloading}
                >
                  {isDownloading ? (
                    <div className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>{t('contact.downloading')}</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <svg className={`w-4 h-4 ${isHovered ? 'animate-bounce' : ''} transition-all duration-300`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                      <span>{t('contact.downloadCV')}</span>
                    </div>
                  )}
                  <span className="absolute inset-0 h-full w-full bg-white opacity-0 group-hover:opacity-10 group-hover:animate-pulse"></span>
                </button>
              </div>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-8">{t('contact.contactInfo')}</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <a href="mailto:fakhfakh.ahmeed@gmail.com" className="text-gray-300 border-b border-gray-600 hover:text-rn-accent hover:border-rn-accent transition-colors">
                    fakhfakh.ahmeed@gmail.com
                  </a>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Phone</h3>
                  <a href="tel:+21628820474" className="text-gray-300 border-b border-gray-600 hover:text-rn-accent hover:border-rn-accent transition-colors">
                    +216 28 820 474
                  </a>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
                  <a href="https://linkedin.com/in/ahmed-fakhfakh" target="_blank" rel="noopener noreferrer" className="text-gray-300 border-b border-gray-600 hover:text-rn-accent hover:border-rn-accent transition-colors">
                    linkedin.com/in/ahmed-fakhfakh
                  </a>
                </div>
                
                <div className="pt-8 mt-8 border-t border-gray-700">
                  <h3 className="text-lg font-semibold mb-4">{t('contact.connect')}</h3>
                  <div className="flex space-x-6">
                    <a href="https://github.com/fakhfakhahmed" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-rn-accent transition-colors">
                      <span className="sr-only">GitHub</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  
                    <a href="https://www.linkedin.com/in/ahmed-fakhfakh/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-rn-accent transition-colors">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Availability Section */}
      <section className="py-20 bg-rn-gray">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8 uppercase tracking-tight">{t('contact.availability')}</h2>
          <p className="text-xl max-w-3xl mx-auto mb-12 text-gray-300">
            {t('contact.availabilityText')}
          </p>
          <a 
            href="https://www.linkedin.com/in/ahmed-fakhfakh/" 
            className="inline-block px-8 py-3 border border-rn-accent text-rn-accent text-sm uppercase tracking-widest font-medium hover:bg-rn-accent hover:text-white transition-colors"
          >
            {t('contact.hireMe')}
          </a>
        </div>
      </section>
    </div>
  );
};



export default Contact;
