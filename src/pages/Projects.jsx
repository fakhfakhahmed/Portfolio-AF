import React from 'react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectsCarousel from '../components/ProjectsCarousel';
import GitHubProfile from '../components/GitHubProfile';
import GitHubActivity from '../components/GitHubActivity';
import ProjectDetailsPopup from '../components/ProjectDetailsPopup';

// Import project media using URL constructor for reliable path resolution during builds
// Portfolio Website
const portfolioGif = new URL('../assets/projects/Portfolio Website/brave_CxTzltUxdb.gif', import.meta.url).href;
const portfolioImg1 = new URL('../assets/projects/Portfolio Website/Screenshot 2025-05-27 142647.png', import.meta.url).href;
const portfolioImg2 = new URL('../assets/projects/Portfolio Website/Screenshot 2025-05-27 142725.png', import.meta.url).href;
const portfolioImg3 = new URL('../assets/projects/Portfolio Website/Screenshot 2025-05-27 142752.png', import.meta.url).href;
// Raskelni
const raskelniGif = new URL('../assets/projects/Raskelni/raskelni.gif', import.meta.url).href;
const raskelniImg1 = new URL('../assets/projects/Raskelni/MobileDemandeAccpeter.png', import.meta.url).href;
const raskelniImg2 = new URL('../assets/projects/Raskelni/MobileHome.png', import.meta.url).href;
const raskelniImg3 = new URL('../assets/projects/Raskelni/MobileLivreurPaiments.png', import.meta.url).href;
const raskelniImg4 = new URL('../assets/projects/Raskelni/MobileSuiviLesDemande.png', import.meta.url).href;
const raskelniImg5 = new URL('../assets/projects/Raskelni/UserAddProduct.png', import.meta.url).href;
const raskelniImg6 = new URL('../assets/projects/Raskelni/UserAddProductPOPUP.png', import.meta.url).href;
const raskelniImg7 = new URL('../assets/projects/Raskelni/UserSubmitDemande.png', import.meta.url).href;
// Boostra - Using URL constructor for all imports to avoid path resolution issues
const boostraImg1 = new URL('../assets/projects/Boostra/1.png', import.meta.url).href;
const boostraImg2 = new URL('../assets/projects/Boostra/2.png', import.meta.url).href;
const boostraImg3 = new URL('../assets/projects/Boostra/278924760_839178530372415_5549002044770435650_n.png', import.meta.url).href;
const boostraImg4 = new URL('../assets/projects/Boostra/NEWSFEED_Copy.png', import.meta.url).href;
const boostraImg5 = new URL('../assets/projects/Boostra/quiz.png', import.meta.url).href;
// GameZone
const gamezoneImg1 = new URL('../assets/projects/GameZone/BLOG.png', import.meta.url).href;
const gamezoneImg2 = new URL('../assets/projects/GameZone/EVENT.png', import.meta.url).href;
const gamezoneImg3 = new URL('../assets/projects/GameZone/HOME.png', import.meta.url).href;
const gamezoneImg4 = new URL('../assets/projects/GameZone/LOGIN.png', import.meta.url).href;
const gamezoneImg5 = new URL('../assets/projects/GameZone/LOGIN2.png', import.meta.url).href;
const gamezoneImg6 = new URL('../assets/projects/GameZone/PRODUCT.png', import.meta.url).href;
// Budarent
const budarentImg1 = new URL('../assets/projects/Budarent/admindashbordcars.png', import.meta.url).href;
const budarentImg2 = new URL('../assets/projects/Budarent/booking.png', import.meta.url).href;
const budarentImg3 = new URL('../assets/projects/Budarent/card_details_and_reviews.png', import.meta.url).href;
const budarentImg4 = new URL('../assets/projects/Budarent/cars.png', import.meta.url).href;
const budarentImg5 = new URL('../assets/projects/Budarent/home.png', import.meta.url).href;
const budarentImg6 = new URL('../assets/projects/Budarent/userprofile.png', import.meta.url).href;

const Projects = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);
  const [showDetailsPopup, setShowDetailsPopup] = useState(false);
  
  // Function to open project details popup
  const openProjectDetails = (project) => {
    setSelectedProject(project);
    setShowDetailsPopup(true);
  };
  
  // Function to close project details popup
  const closeProjectDetails = () => {
    setShowDetailsPopup(false);
  };

  // Project data
  const projects = [
    {
      id: 1,
      title: t('projects.portfolio.title', 'Portfolio Website'),
      description: t('projects.portfolio.description', 'A bilingual responsive portfolio website built with React, Tailwind CSS, and i18next for internationalization.'),
      detailedDescription: t('projects.portfolio.detailedDescription', 'This portfolio website showcases my work and skills as a full-stack developer. The site is built with React and uses Tailwind CSS for styling. It features a bilingual interface (English and French) using i18next for internationalization, ensuring content is accessible to a wider audience.'),
      features: t('projects.portfolio.features', { returnObjects: true }) || [
        'Responsive design that works on all devices',
        'Bilingual support with language switching',
        'Interactive project showcase with media galleries',
        'Dark mode design with modern aesthetics',
        'Optimized performance with lazy loading',
        'Contact form with validation'
      ],
      challenges: t('projects.portfolio.challenges', { returnObjects: true }) || [
        'Creating a seamless bilingual experience while maintaining an elegant UI was a key challenge. I implemented a context-based translation system and designed the UI to gracefully handle text length differences between languages.'
      ],
      technologies: ['React.js', 'Tailwind CSS', 'i18next', 'React Router', 'Vite'],
      year: '2025',
      link: 'https://github.com/fakhfakhahmed',
      media: [
        { type: 'image', src: portfolioGif },
        { type: 'image', src: portfolioImg1 },
        { type: 'image', src: portfolioImg2 },
        { type: 'image', src: portfolioImg3 }
      ]
    },
    {
      id: 2,
      title: t('projects.budarent.title', 'Budarent'),
      description: t('projects.budarent.description', 'Developed a car rental web application with Angular, Node.js, and MongoDB featuring Google Maps integration, booking system, and admin dashboard.'),
      detailedDescription: t('projects.budarent.detailedDescription', 'Budarent is a comprehensive car rental platform built in collaboration with Abdelmoementrabelsi. The application allows users to browse available vehicles, make reservations, and manage their bookings. It features an interactive map interface using Google Maps API for location-based vehicle selection, a secure authentication system with JWT, and a robust booking management system. The admin dashboard provides complete control over the rental fleet, user accounts, and reservation data.'),
      features: t('projects.budarent.features', { returnObjects: true }) || [
        'Interactive vehicle browsing with detailed specifications',
        'Location-based car rental using Google Maps integration',
        'Secure user authentication and authorization with JWT',
        'Comprehensive booking system with availability calendar',
        'Payment processing and invoice generation',
        'Admin dashboard for fleet and reservation management',
        'User reviews and ratings for vehicles',
        'Multi-language support for international users'
      ],
      challenges: t('projects.budarent.challenges', { returnObjects: true }) || [
        'A significant challenge was implementing the real-time availability system that needed to account for bookings, maintenance schedules, and vehicle locations. We developed a custom algorithm to optimize vehicle assignment based on proximity and availability, reducing customer wait times by 25%.'
      ],
      technologies: [
        'Angular', 'Node.js', 'Express', 'MongoDB', 'JWT', 
        'Google Maps API', 'Socket.io', 'Stripe', 'Docker'
      ],
      year: '2025',
      link: 'https://github.com/fakhfakhahmed',
      media: [
        { type: 'image', src: budarentImg1 },
        { type: 'image', src: budarentImg2 },
        { type: 'image', src: budarentImg3 },
        { type: 'image', src: budarentImg4 },
        { type: 'image', src: budarentImg5 },
        { type: 'image', src: budarentImg6 }
      ]
    },
    {
      id: 3,
      title: t('projects.raskelni.title', 'Raskelni'),
      description: t('projects.raskelni.description', 'Built a recycling app with mobile (Flutter) and web (React.js) interfaces, promoting environmental sustainability through a reward-based system in Tunisia.'),
      detailedDescription: t('projects.raskelni.detailedDescription', 'Raskelni is a recycling platform developed to encourage eco-friendly behavior by allowing users to sell and buy recyclable items such as bottles and cartons. The application integrates a reward system that incentivizes users for every delivery. Designed with a scalable microservices architecture using Spring Boot, the system ensures efficient communication and maintainability. CI/CD pipelines automate the delivery process using Jenkins and Docker, while REST APIs were optimized to reduce response times by 30%.'),
      features: t('projects.raskelni.features', { returnObjects: true }) || [
        'Mobile app built using Flutter',
        'Web application developed with React.js',
        'Microservices architecture with Spring Boot',
        'Reward system for users recycling bottles and cartons',
        'Integrated CI/CD pipelines using Jenkins and Docker',
        'Optimized REST APIs for performance and scalability',
        'Secure user authentication and role-based access',
        'Location-based delivery tracking system'
      ],
      challenges: t('projects.raskelni.challenges', 'A key challenge was maintaining consistent performance across both mobile and web platforms while handling user rewards and logistics. To address this, services were modularized, APIs were optimized, and CI/CD automation was introduced to streamline testing and deployments.'),
      technologies: [
        'Flutter', 'React.js', 'Spring Boot', 'Jenkins', 'Docker',
        'MySQL', 'MongoDB', 'RabbitMQ', 'Eureka', 'Grafana', 'Prometheus'
      ],
      year: '2024',
      link: 'https://github.com/fakhfakhahmed',
      media: [
        { type: 'image', src: raskelniGif },
        { type: 'image', src: raskelniImg1 },
        { type: 'image', src: raskelniImg2 },
        { type: 'image', src: raskelniImg3 },
        { type: 'image', src: raskelniImg4 },
        { type: 'image', src: raskelniImg5 },
        { type: 'image', src: raskelniImg6 },
        { type: 'image', src: raskelniImg7 }
      ]
    },
    {
      id: 4,
      title: t('projects.gamezone.title', 'GameZone'),
      description: t('projects.gamezone.description', 'Developed a gaming e-commerce platform allowing users to browse, purchase, and review video games using React.js, Node.js, and MongoDB.'),
      detailedDescription: t('projects.gamezone.detailedDescription', 'GameZone is a full-stack e-commerce platform tailored for the gaming community. The application allows users to create accounts, explore a wide range of video games, make purchases, and leave reviews. It includes features such as a shopping cart, secure payment gateway integration, admin dashboard for managing products and orders, and real-time stock management. The frontend was built with React.js, providing a responsive and dynamic user experience, while the backend used Node.js with Express and MongoDB for flexible, scalable data storage.'),
      features: t('projects.gamezone.features', { returnObjects: true }) || [
        'Interactive and responsive UI built with React.js',
        'RESTful APIs using Node.js and Express',
        'Product catalog with categories, search, and filtering',
        'Secure user authentication and authorization',
        'Shopping cart and checkout system with payment integration',
        'Admin dashboard for managing inventory and orders',
        'User reviews and ratings for games',
        'Real-time inventory and order tracking'
      ],
      challenges: t('projects.gamezone.challenges', 'One of the main challenges was implementing a real-time inventory management system that could handle concurrent user actions without overselling. The solution involved implementing optimistic UI updates with server-side validation and a queue-based transaction system for processing orders.'),
      technologies: [
        'React.js', 'Redux', 'Node.js', 'Express', 'MongoDB',
        'JWT', 'Socket.io', 'Stripe', 'AWS S3'
      ],
      year: '2022',
      link: 'https://github.com/fakhfakhahmed',
      media: [
        { type: 'image', src: gamezoneImg1 },
        { type: 'image', src: gamezoneImg2 },
        { type: 'image', src: gamezoneImg3 },
        { type: 'image', src: gamezoneImg4 },
        { type: 'image', src: gamezoneImg5 },
        { type: 'image', src: gamezoneImg6 }
      ]
    },
    {
      id: 5,
      title: t('projects.boostra.title', 'Boostra'),
      description: t('projects.boostra.description', 'Developed a collaborative workplace platform that facilitates communication, project coordination, and employee engagement within companies.'),
      detailedDescription: t('projects.boostra.detailedDescription', 'Boostra is a comprehensive collaboration platform designed to enhance workplace connectivity and streamline operations within organizations. The application focuses on facilitating teamwork, knowledge sharing, and efficient communication between employees and departments. It provides features for project collaboration, document sharing, real-time messaging, and company-wide announcements. Built with Angular on the frontend for a responsive user experience and Spring Boot backend for secure data processing, Boostra helps companies create a more connected and productive work environment.'),
      features: t('projects.boostra.features', { returnObjects: true }) || [
        'Comprehensive employee management system',
        'Performance tracking and evaluation tools',
        'Scheduling and time management',
        'Company-wide communication platform',
        'Department-specific coordination tools',
        'Advanced workforce analytics and reporting',
        'Document management and sharing',
        'Customizable workflow automation'
      ],
      challenges: t('projects.boostra.challenges', 'The main challenge was creating a secure yet flexible system that could adapt to different organizational structures while maintaining data privacy. We implemented role-based access controls and designed a modular architecture that allows customization without compromising the core functionality.'),
      technologies: [
        'Angular', 'TypeScript', 'Spring Boot', 'Java', 'MySQL',
        'Redis', 'WebSockets', 'JWT', 'Docker'
      ],
      year: '2021',
      link: 'https://github.com/fakhfakhahmed',
      media: [
        { type: 'image', src: boostraImg1 },
        { type: 'image', src: boostraImg2 },
        { type: 'image', src: boostraImg3 },
        { type: 'image', src: boostraImg4 },
        { type: 'image', src: boostraImg5 }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-rn-dark text-white">
      {/* Projects Header */}
      <section className="py-10 sm:py-16 md:py-20 max-w-screen-xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 md:mb-12 uppercase tracking-tight">{t('projects.pageTitle')}</h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-8 sm:mb-12 md:mb-16">
          {t('projects.intro')}
        </p>
      </section>

      {/* GitHub Profile */}
      <GitHubProfile username="fakhfakhahmed" />

      {/* Projects Grid */}
      <section className="py-12">
        <div className="max-w-screen-xl mx-auto px-6">
          <ProjectsCarousel 
            projects={projects} 
            onViewDetails={openProjectDetails} 
          />
        </div>
      </section>
      
      {/* Additional Projects Section */}
      <section className="py-10 sm:py-16 md:py-20 bg-rn-gray">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 md:mb-12 uppercase tracking-tight">other works</h2>
          
          <ul className="space-y-4 sm:space-y-6 max-w-4xl">
            {t('projects.list', { returnObjects: true }).map((project, index) => (
              <li key={index} className="flex flex-col md:flex-row md:items-center justify-between p-4 sm:p-6 border border-gray-700 hover:border-red-600 transition-colors rounded-md">
                <div className="mb-3 md:mb-0">
                  <h3 className="text-lg sm:text-xl font-bold">{project}</h3>
                </div>
                <a href="#" className="inline-block text-xs sm:text-sm uppercase tracking-wider font-medium border-b border-transparent hover:border-red-600 pb-1 hover:text-red-500 transition-colors self-start md:self-center">
                  Details
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      
      {/* GitHub Activity Section */}
      <GitHubActivity username="fakhfakhahmed" />
      
      {/* Project Details Popup (rendered at the page level) */}
      <ProjectDetailsPopup
        isOpen={showDetailsPopup}
        onClose={closeProjectDetails}
        project={selectedProject}
      />
    </div>
  );
};

export default Projects;
