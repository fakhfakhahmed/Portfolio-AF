import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FlipCard from '../components/FlipCard';
import CertificatePopup from '../components/CertificatePopup';
import '../assets/styles/flipcard.css';

// Import certificate images
import awsCertificate from '../assets/certificates/aws-certificate.jpg';
import scrumCertificate from '../assets/certificates/scrum-certificate.jpg';
import googleCloudCertificate from '../assets/certificates/google-cloud-certificate.jpg';

// Import tech stack logos
import jsLogo from '../assets/logos/javascript.svg';
import typescriptLogo from '../assets/logos/typescript.svg';
import phpLogo from '../assets/logos/php.svg';
import dartLogo from '../assets/logos/dart.svg';
import reactLogo from '../assets/logos/react.svg';
import angularLogo from '../assets/logos/angular.svg';
import flutterLogo from '../assets/logos/flutter.svg';
import dockerLogo from '../assets/logos/docker.svg';
import jenkinsLogo from '../assets/logos/jenkins.svg';
import nodejsLogo from '../assets/logos/nodejs.svg';
import springLogo from '../assets/logos/spring.svg';
import mysqlLogo from '../assets/logos/mysql.svg';
import mongodbLogo from '../assets/logos/mongodb.svg';
import microservicesLogo from '../assets/logos/microservices.svg';
import restApiLogo from '../assets/logos/rest-api.svg';
import cicdLogo from '../assets/logos/cicd.svg';

const About = () => {
  const { t } = useTranslation();
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [certificateTitle, setCertificateTitle] = useState('');
  
  // Certificate data
  const certificates = [
    {
      id: 1,
      year: '2023',
      title: 'AWS Certified Solutions Architect',
      description: 'Validated expertise in designing distributed systems on AWS.',
      image: awsCertificate
    },
    {
      id: 2,
      year: '2022',
      title: 'Professional Scrum Master I',
      description: 'Certified in Scrum framework implementation and agile project management.',
      image: scrumCertificate
    },
    {
      id: 3,
      year: '2021',
      title: 'Google Cloud Professional Developer',
      description: 'Demonstrated ability to build scalable applications on Google Cloud Platform.',
      image: googleCloudCertificate
    }
  ];
  
  const closeCertificate = () => {
    setSelectedCertificate(null);
    setCertificateTitle('');
  };

  return (
    <div className="min-h-screen bg-rn-dark text-white">
      {/* About Section */}
      <section className="py-10 sm:py-16 md:py-20 max-w-screen-xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 uppercase tracking-tight">{t('about.title')}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">{t('about.professionalTitle')}</h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8">{t('about.description')}</p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">{t('about.experience')}</p>
          </div>

         
          
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">{t('about.educationTitle')}</h2>
            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-semibold">{t('about.degree1')}</h3>
              <p className="text-gray-400">{t('about.school1')}</p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold">{t('about.degree2')}</h3>
              <p className="text-gray-400">{t('about.school2')}</p>
              <br/> <br/>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">{t('about.languagesTitle')}</h2>
            <div className="flex items-center mb-6">
              <div className="mr-6">
                <h3 className="text-lg sm:text-xl font-semibold">{t('about.arabic')}</h3>
                <p className="text-gray-400">{t('about.native')}</p>
              </div>
              
              <div className="mx-1 h-10 w-px bg-white"></div>
              
              <div className="mx-6">
                <h3 className="text-xl font-semibold">{t('about.english')}</h3>
                <p className="text-gray-400">B2</p>
              </div>
              
              <div className="mx-1 h-10 w-px bg-white"></div>
              
              <div className="ml-6">
                <h3 className="text-xl font-semibold">{t('about.french')}</h3>
                <p className="text-gray-400">B2</p>
              </div>
            </div>
          </div>
        </div>
        
           {/* Soft Skills Section */}
           <div className="mb-16">
            
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-rn-gray p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{t('about.problemSolving')}</h3>
                <p className="text-gray-400">{t('about.problemSolvingDesc')}</p>
              </div>
              <div className="bg-rn-gray p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{t('about.teamwork')}</h3>
                <p className="text-gray-400">{t('about.teamworkDesc')}</p>
              </div>
              <div className="bg-rn-gray p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{t('about.communication')}</h3>
                <p className="text-gray-400">{t('about.communicationDesc')}</p>
              </div>
              <div className="bg-rn-gray p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{t('about.adaptability')}</h3>
                <p className="text-gray-400">{t('about.adaptabilityDesc')}</p>
              </div>
            </div>
          </div>
      </section>
      
    
      
      {/* Tech Stack Section */}
      <section className="py-20 bg-rn-gray">
        <div className="max-w-screen-xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 uppercase tracking-tight">{t('about.techStackTitle')}</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Languages */}
            <div className="bg-rn-dark p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-bold mb-6 text-center">{t('about.langSectionTitle')}</h3>
              <div className="flex flex-wrap justify-center gap-6">
                <FlipCard 
                  logo={jsLogo} 
                  name="JavaScript" 
                  description="Modern JS with ES6+ features" 
                  experience="4+ years"
                />
                <FlipCard 
                  logo={typescriptLogo} 
                  name="TypeScript" 
                  description="Type-safe JavaScript development" 
                  experience="3+ years"
                />
                <FlipCard 
                  logo={phpLogo} 
                  name="PHP" 
                  description="Backend web development" 
                  experience="3+ years"
                />
                <FlipCard 
                  logo={dartLogo} 
                  name="Dart" 
                  description="For Flutter mobile apps" 
                  experience="2+ years"
                />
              </div>
            </div>

            {/* Frontend */}
            <div className="bg-rn-dark p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-bold mb-6 text-center">{t('about.frontendTitle')}</h3>
              <div className="flex flex-wrap justify-center gap-6">
                <FlipCard 
                  logo={reactLogo} 
                  name="React.js" 
                  description="Component-based UI development" 
                  experience="4+ years"
                />
                <FlipCard 
                  logo={angularLogo} 
                  name="Angular" 
                  description="Enterprise-grade web apps" 
                  experience="3+ years"
                />
                <FlipCard 
                  logo={flutterLogo} 
                  name="Flutter" 
                  description="Cross-platform mobile development" 
                  experience="2+ years"
                />
              </div>
            </div>
            
            {/* DevOps & Tools */}
            <div className="bg-rn-dark p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-bold mb-6 text-center">{t('about.devopsTitle')}</h3>
              <div className="flex flex-wrap justify-center gap-6">
                <FlipCard 
                  logo={dockerLogo} 
                  name="Docker" 
                  description="Containerization for apps" 
                  experience="3+ years"
                />
                <FlipCard 
                  logo={jenkinsLogo} 
                  name="Jenkins" 
                  description="Automation server for CI/CD" 
                  experience="2+ years"
                />
                <FlipCard 
                  logo={cicdLogo} 
                  name="CI/CD" 
                  description="Continuous integration/delivery" 
                  experience="3+ years"
                />
              </div>
            </div>
            
            {/* Backend */}
            <div className="bg-rn-dark p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-bold mb-6 text-center">{t('about.backendTitle')}</h3>
              <div className="flex flex-wrap justify-center gap-6">
                <FlipCard 
                  logo={nodejsLogo} 
                  name="Node.js" 
                  description="JavaScript runtime for backends" 
                  experience="4+ years"
                />
                <FlipCard 
                  logo={springLogo} 
                  name="Spring Boot" 
                  description="Java-based backend framework" 
                  experience="3+ years"
                />
              </div>
            </div>
            
            {/* Databases */}
            <div className="bg-rn-dark p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-bold mb-6 text-center">{t('about.databasesTitle')}</h3>
              <div className="flex flex-wrap justify-center gap-6">
                <FlipCard 
                  logo={mysqlLogo} 
                  name="MySQL" 
                  description="Relational database management" 
                  experience="4+ years"
                />
                <FlipCard 
                  logo={mongodbLogo} 
                  name="MongoDB" 
                  description="NoSQL document database" 
                  experience="3+ years"
                />
              </div>
            </div>
            
            {/* Architectures */}
            <div className="bg-rn-dark p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-bold mb-6 text-center">{t('about.architecturesTitle')}</h3>
              <div className="flex flex-wrap justify-center gap-6">
                <FlipCard 
                  logo={microservicesLogo} 
                  name="Microservices" 
                  description="Distributed system architecture" 
                  experience="3+ years"
                />
                <FlipCard 
                  logo={restApiLogo} 
                  name="REST APIs" 
                  description="RESTful web service design" 
                  experience="4+ years"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Certifications Section */}
      <section className="py-20">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 uppercase tracking-tight">{t('about.certificationsTitle')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {certificates.map((cert, index) => (
              <div key={cert.id} className="border border-gray-700 p-4 sm:p-6 md:p-8 hover:border-black transition-colors">
                <div className="text-sm text-gray-400 mb-2">{cert.year}</div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{cert.title}</h3>
                <p className="text-gray-400 mb-4">{cert.description}</p>
                <button 
                  onClick={() => {
                    setSelectedCertificate(cert.image);
                    setCertificateTitle(cert.title);
                  }}
                  className="inline-block text-sm uppercase tracking-wider font-medium border-b border-black pb-1 hover:text-gray-600 transition-colors"
                >
                  {t('about.viewCertificate')}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
     
        {/* Philosophy Section */}
        <section className="py-10 sm:py-16 md:py-20 bg-rn-gray">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 uppercase tracking-tight">{t('about.philosophyTitle')}</h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto">
            "{t('about.philosophyText')}"
          </p>
        </div>
      </section>
       {/* Personal Interests */}
       <section className="py-10 sm:py-16 md:py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 uppercase tracking-tight">{t('about.interestsTitle')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{t('about.gaming')}</h3>
              <p className="text-gray-400">{t('about.gamingDesc')}</p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{t('about.camping')}</h3>
              <p className="text-gray-400">{t('about.campingDesc')}</p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{t('about.sport')}</h3>
              <p className="text-gray-400">{t('about.sportDesc')}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Certificate Popup */}
      <CertificatePopup 
        isOpen={!!selectedCertificate}
        onClose={closeCertificate}
        image={selectedCertificate}
        alt={t('about.certificateAlt')}
        title={certificateTitle}
      />
    </div>
  );
};

export default About;
