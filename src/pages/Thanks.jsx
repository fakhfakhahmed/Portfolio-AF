import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Thanks = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Automatically redirect to home page after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-rn-dark text-white flex flex-col items-center justify-center px-4">
      <div className="max-w-lg w-full text-center bg-rn-light-gray/20 rounded-lg p-8 border border-rn-accent/30">
        <div className="mb-6">
          <svg className="w-16 h-16 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold mb-4">Message Sent!</h1>
        <p className="text-xl text-gray-300 mb-8">
          Thank you for your message. I'll get back to you as soon as possible.
        </p>
        
        <p className="text-gray-400 mb-6">
          You will be redirected to the homepage in a few seconds...
        </p>
        
        <button 
          onClick={() => navigate('/')}
          className="px-6 py-2 bg-rn-accent text-white rounded-md hover:bg-opacity-90 transition-colors"
        >
          Return Home
        </button>
      </div>
    </div>
  );
};

export default Thanks;
