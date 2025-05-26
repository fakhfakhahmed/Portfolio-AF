import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  
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
  
  // Handle form input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
    
    // Clear any previous submit result when user starts typing again
    if (submitResult.status) {
      setSubmitResult({ status: null, message: '' });
    }
  };
  
  // Check if we're in development mode
  const isDev = () => {
    return window.location.hostname === 'localhost' || 
           window.location.hostname === '127.0.0.1';
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitResult({ 
        status: 'error', 
        message: 'Please fill in all required fields.' 
      });
      return;
    }
    
    // Set submitting state to show loading indicator
    setIsSubmitting(true);
    setSubmitResult({ status: null, message: '' });

    // DEVELOPMENT MODE FALLBACK
    // In development, use mailto: as a fallback since serverless functions won't work locally
    if (isDev()) {
      try {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Create email content
        const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio Website');
        const body = encodeURIComponent(
          `Name: ${formData.name}\n\n` +
          `Email: ${formData.email}\n\n` +
          `Message:\n${formData.message}`
        );
        
        // Open default email client
        window.location.href = `mailto:fakhfakh.ahmeed@gmail.com?subject=${subject}&body=${body}`;
        
        // Show success message
        setSubmitResult({ 
          status: 'success', 
          message: 'Development mode: Email client opened. In production, this would be sent via SendGrid.' 
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } catch (error) {
        console.error('Error in dev mode:', error);
        setSubmitResult({ 
          status: 'error', 
          message: 'Failed to open email client. Please try again.' 
        });
      } finally {
        setIsSubmitting(false);
      }
      return;
    }
    
    // PRODUCTION MODE - Use Netlify function with SendGrid
    try {      
      // Send data to our serverless function
      const response = await fetch('/.netlify/functions/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      let data;
      const responseText = await response.text();
      
      try {
        // Try to parse JSON response
        data = JSON.parse(responseText);
      } catch (e) {
        // If parsing fails, use text as message
        data = { message: responseText || 'Unknown error occurred' };
      }
      
      if (response.ok) {
        // Success
        setSubmitResult({ 
          status: 'success', 
          message: 'Your message has been sent successfully!' 
        });
        
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        // API returned an error
        setSubmitResult({ 
          status: 'error', 
          message: data.message || 'Failed to send message. Please try again.' 
        });
      }
    } catch (error) {
      // Network or other error
      console.error('Error sending message:', error);
      setSubmitResult({ 
        status: 'error', 
        message: 'Failed to send message. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-rn-dark text-white">
      {/* Contact Header */}
      <section className="py-20 max-w-screen-xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 uppercase tracking-tight">contact me</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-16">
          Interested in working together? Feel free to get in touch using the contact form below or through any of my social media channels.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 bg-rn-gray">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Send a Message</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Form submission status message */}
                {submitResult.status && (
                  <div className={`p-4 rounded ${submitResult.status === 'success' ? 'bg-green-800 text-green-100' : 'bg-red-800 text-red-100'}`}>
                    {submitResult.message}
                  </div>
                )}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-700 bg-rn-light-gray text-white focus:outline-none focus:border-rn-accent" 
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email <span className="text-red-500">*</span></label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-700 bg-rn-light-gray text-white focus:outline-none focus:border-rn-accent" 
                    placeholder="Your email address"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-700 bg-rn-light-gray text-white focus:outline-none focus:border-rn-accent" 
                    placeholder="Subject of your message"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message <span className="text-red-500">*</span></label>
                  <textarea 
                    id="message" 
                    rows="6" 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-700 bg-rn-light-gray text-white focus:outline-none focus:border-rn-accent" 
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`px-8 py-3 bg-rn-accent text-white text-sm uppercase tracking-widest font-medium hover:bg-rn-dark hover:border hover:border-rn-accent transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <span className="inline-block animate-pulse mr-2">⟳</span>
                      Sending...
                    </>
                  ) : 'Send Message'}
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
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
                  <h3 className="text-lg font-semibold mb-4">Connect</h3>
                  <div className="flex space-x-6">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-rn-accent transition-colors">
                      <span className="sr-only">GitHub</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-rn-accent transition-colors">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-rn-accent transition-colors">
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
          <h2 className="text-3xl font-bold mb-8 uppercase tracking-tight">availability</h2>
          <p className="text-xl max-w-3xl mx-auto mb-12 text-gray-300">
            I'm currently available for freelance work and open to discussing new opportunities.
          </p>
          <a 
            href="mailto:fakhfakh.ahmeed@gmail.com" 
            className="inline-block px-8 py-3 border border-rn-accent text-rn-accent text-sm uppercase tracking-widest font-medium hover:bg-rn-accent hover:text-white transition-colors"
          >
            Hire Me
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
