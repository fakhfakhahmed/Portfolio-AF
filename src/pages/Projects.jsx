import React from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../components/ProjectCard';

// Import project media
import project1Video from '../assets/projects/project1-video.mp4';
import project1Image1 from '../assets/projects/project1-image1.jpg';
import project1Image2 from '../assets/projects/project1-image2.jpg';
import project2Image1 from '../assets/projects/project2-image1.jpg';
import project2Image2 from '../assets/projects/project2-image2.jpg';

const Projects = () => {
  const { t } = useTranslation();

  // Project data
  const projects = [
    {
      id: 1,
      title: 'DevOps CI/CD Project',
      description: 'Implemented CI/CD pipelines with Jenkins, Docker, SonarQube, Prometheus, and Grafana for automated testing, deployment, and monitoring.',
      detailedDescription: 'This project focused on implementing robust DevOps practices for a microservices-based application. The CI/CD pipeline was designed to automate the entire software delivery process, from code commit to production deployment, with quality gates at each stage.',
      features: [
        'Containerized microservices architecture using Docker',
        'Jenkins pipelines for continuous integration and deployment',
        'Automated code quality checks with SonarQube',
        'Comprehensive monitoring with Prometheus and Grafana dashboards',
        'Infrastructure as Code using Terraform',
        'Automated security scanning and vulnerability assessment'
      ],
      challenges: 'One of the main challenges was integrating various tools into a cohesive pipeline while ensuring security and compliance. I implemented a custom Jenkins shared library to standardize pipeline definitions across multiple services, and developed automated rollback mechanisms for failed deployments.',
      technologies: ['Jenkins', 'Docker', 'SonarQube', 'Prometheus', 'Grafana', 'Terraform', 'Kubernetes'],
      year: '2022',
      link: 'https://github.com/fakhfakhahmed',
      media: [
        { type: 'video', src: project1Video },
        { type: 'image', src: project1Image1 },
        { type: 'image', src: project1Image2 }
      ]
    },
    {
      id: 2,
      title: 'HR Web App',
      description: 'Developed a human resources management application using Angular, Spring Boot, and MySQL database for efficient employee data management.',
      detailedDescription: 'The HR Web App is a comprehensive human resources management system designed to streamline HR processes in medium to large organizations. The application provides modules for employee management, attendance tracking, performance evaluations, and recruitment.',
      features: [
        'Employee profile management with document storage',
        'Attendance and leave management system',
        'Performance review and goal tracking',
        'Recruitment and applicant tracking',
        'Role-based access control',
        'Reporting and analytics dashboard'
      ],
      challenges: 'Creating a system that balanced ease of use with robust functionality was challenging. I implemented a modular architecture that allowed different HR departments to customize their workflows while maintaining data consistency across the platform.',
      technologies: ['Angular', 'Spring Boot', 'MySQL', 'JWT', 'Hibernate', 'Bootstrap', 'Chart.js'],
      year: '2021',
      link: 'https://github.com/fakhfakhahmed',
      media: [
        { type: 'image', src: project2Image1 },
        { type: 'image', src: project2Image2 }
      ]
    },
    {
      id: 3,
      title: 'Multi-Platform Artist App',
      description: 'Created a versatile application for artists using Symfony for web, JavaFX for desktop, and CodeNameOne for mobile platforms.',
      detailedDescription: 'The Multi-Platform Artist App is designed to help digital artists manage their portfolios, track commissions, and connect with clients across different devices. The application maintains a consistent user experience while leveraging the native capabilities of each platform.',
      features: [
        'Portfolio management with customizable galleries',
        'Commission tracking and invoicing system',
        'Client communication and feedback tools',
        'Cross-platform synchronization',
        'Offline work capability with automatic syncing',
        'Integration with popular social media platforms'
      ],
      challenges: 'Maintaining a consistent user experience and data model across three different platforms was the biggest challenge. I implemented a shared API layer and used platform-specific adapters to ensure consistent behavior while leveraging native platform capabilities.',
      technologies: ['Symfony', 'JavaFX', 'CodeNameOne', 'MySQL', 'REST API', 'AWS S3'],
      year: '2020',
      media: [
        { type: 'image', src: project1Image2 }
      ]
    },
    {
      id: 4,
      title: 'HR Web Platform',
      description: 'Angular, Spring Boot, MySQL based platform for HR management with comprehensive employee data tracking.',
      detailedDescription: 'The HR Web Platform is an enterprise-grade solution for human resources departments that need comprehensive employee data management with advanced reporting capabilities. The platform was designed with large organizations in mind, supporting complex organizational structures and approval workflows.',
      features: [
        'Advanced employee record management',
        'Customizable organizational chart',
        'Time tracking and absence management',
        'Integration with payroll systems',
        'Compliance tracking and reporting',
        'Custom workflow builder for HR processes'
      ],
      challenges: 'Handling complex organizational hierarchies and permission systems was particularly challenging. I developed a flexible data model that could represent various organizational structures while maintaining efficient queries for permissions and reporting.',
      technologies: ['Angular', 'Spring Boot', 'MySQL', 'Redis', 'ElasticSearch', 'Docker'],
      year: '2021',
      media: [
        { type: 'image', src: project2Image2 },
        { type: 'image', src: project2Image1 }
      ]
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A bilingual responsive portfolio website built with React, Tailwind CSS, and i18next for internationalization.',
      detailedDescription: 'This portfolio website showcases my work and skills as a full-stack developer. The site is built with React and uses Tailwind CSS for styling. It features a bilingual interface (English and French) using i18next for internationalization, ensuring content is accessible to a wider audience.',
      features: [
        'Responsive design that works on all devices',
        'Bilingual support with language switching',
        'Interactive project showcase with media galleries',
        'Dark mode design with modern aesthetics',
        'Optimized performance with lazy loading',
        'Contact form with validation'
      ],
      challenges: 'Creating a seamless bilingual experience while maintaining an elegant UI was a key challenge. I implemented a context-based translation system and designed the UI to gracefully handle text length differences between languages.',
      technologies: ['React.js', 'Tailwind CSS', 'i18next', 'React Router', 'Vite'],
      year: '2023',
      media: [
        { type: 'image', src: project1Image1 },
        { type: 'image', src: project1Image2 }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-rn-dark text-white">
      {/* Projects Header */}
      <section className="py-20 max-w-screen-xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 uppercase tracking-tight">my projects</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-16">
          Below is a selection of projects I've worked on. Each one represents a unique challenge 
          and showcases different aspects of my technical abilities and problem-solving skills.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Additional Projects Section */}
      <section className="py-20 bg-rn-gray">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 uppercase tracking-tight">other works</h2>
          
          <ul className="space-y-6 max-w-4xl">
            {t('projects.list', { returnObjects: true }).map((project, index) => (
              <li key={index} className="flex flex-col md:flex-row md:items-center justify-between p-6 border border-gray-200 hover:border-black transition-colors">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-bold">{project}</h3>
                </div>
                <a href="#" className="inline-block text-sm uppercase tracking-wider font-medium border-b border-black pb-1 hover:text-gray-600 transition-colors self-start md:self-center">
                  Details
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      
      {/* GitHub Section */}
      <section className="py-20">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Explore More on GitHub</h2>
          <p className="text-xl max-w-3xl mx-auto mb-12">
            Check out my GitHub repositories for more projects, contributions, and code samples.
          </p>
          <a 
            href="https://github.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-black text-white text-sm uppercase tracking-widest font-medium hover:bg-gray-800 transition-colors"
          >
            Visit GitHub Profile
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
