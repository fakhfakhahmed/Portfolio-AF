import React from 'react';
import { useTranslation } from 'react-i18next';

const Experience = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-rn-dark text-white">
      {/* Experience Header */}
      <section className="py-20 max-w-screen-xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 uppercase tracking-tight">professional experience</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-16">
          Throughout my career, I've had the opportunity to work on diverse projects that have enhanced my technical skills 
          and problem-solving abilities. Here's a glimpse of my professional journey.
        </p>
      </section>

      {/* Timeline Section */}
      <section className="py-12">
        <div className="max-w-screen-xl mx-auto px-6">
          {/* Freelance Experience */}
          <div className="mb-20 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <div className="text-sm text-gray-500 uppercase tracking-wider">01/2024 - Present</div>
              <div className="text-sm text-gray-500 uppercase mt-2">Remote</div>
            </div>
            <div className="md:col-span-3">
              <h2 className="text-2xl font-bold mb-4">Freelance Full-Stack Developer</h2>
              <h3 className="text-xl mb-6">Self-Employed</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-2 text-gray-400">-</span>
                  <span>Delivering web and mobile solutions for international clients as a freelance developer</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gray-400">-</span>
                  <span>Building apps with React.js, Node.js, MongoDB, and modern frameworks</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gray-400">-</span>
                  <span>Managing full project lifecycle: requirements, design, development, deployment, and client support</span>
                </li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="inline-block px-3 py-1 text-sm bg-rn-light-gray text-gray-300">React.js</span>
                <span className="inline-block px-3 py-1 text-sm bg-rn-light-gray text-gray-300">Node.js</span>
                <span className="inline-block px-3 py-1 text-sm bg-rn-light-gray text-gray-300">MongoDB</span>
                <span className="inline-block px-3 py-1 text-sm bg-rn-light-gray text-gray-300">Express</span>
                <span className="inline-block px-3 py-1 text-sm bg-rn-light-gray text-gray-300">REST APIs</span>
                <span className="inline-block px-3 py-1 text-sm bg-rn-light-gray text-gray-300">Flutter</span>
              </div>
            </div>
          </div>
          {/* TAC-TIC Experience */}
          <div className="mb-20 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <div className="text-sm text-gray-500 uppercase tracking-wider">02/2023 - 08/2023</div>
              <div className="text-sm text-gray-500 uppercase mt-2">Tunisia</div>
            </div>
            <div className="md:col-span-3">
              <h2 className="text-2xl font-bold mb-4">Full-Stack Developer - Final Year Internship</h2>
              <h3 className="text-xl mb-6">TAC-TIC</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-2 text-gray-400">-</span>
                  <span>Built a mobile app with Flutter and web app with React.js</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gray-400">-</span>
                  <span>Designed software architecture with Spring Boot</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gray-400">-</span>
                  <span>Designed CI/CD pipelines using Jenkins and Docker</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gray-400">-</span>
                  <span>Optimized REST APIs, reducing response time by 30%</span>
                </li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="inline-block px-3 py-1 text-sm bg-rn-light-gray text-gray-300">Flutter</span>
                <span className="inline-block px-3 py-1 text-sm bg-rn-light-gray text-gray-300">React.js</span>
                <span className="inline-block px-3 py-1 text-sm bg-rn-light-gray text-gray-300">Spring Boot</span>
                <span className="inline-block px-3 py-1 text-sm bg-rn-light-gray text-gray-300">Jenkins</span>
                <span className="inline-block px-3 py-1 text-sm bg-rn-light-gray text-gray-300">Docker</span>
                <span className="inline-block px-3 py-1 text-sm bg-rn-light-gray text-gray-300">REST APIs</span>
              </div>
            </div>
          </div>
          
          {/* Beecoders Experience */}
          <div className="mb-20 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <div className="text-sm text-gray-500 uppercase tracking-wider">06/2022 - 08/2022</div>
              <div className="text-sm text-gray-500 uppercase mt-2">Tunisia</div>
            </div>
            <div className="md:col-span-3">
              <h2 className="text-2xl font-bold mb-4">Full-Stack Developer - Engineering Internship</h2>
              <h3 className="text-xl mb-6">Beecoders</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-2 text-gray-400">-</span>
                  <span>Developed a gaming e-commerce platform using React.js, Node.js, and MongoDB</span>
                </li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="inline-block px-3 py-1 text-sm bg-rn-light-gray text-gray-300">React.js</span>
                <span className="inline-block px-3 py-1 text-sm bg-rn-light-gray text-gray-300">Node.js</span>
                <span className="inline-block px-3 py-1 text-sm bg-rn-light-gray text-gray-300">MongoDB</span>
              </div>
            </div>
          </div>
          
          {/* Shoppy Experience */}
          <div className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <div className="text-sm text-gray-500 uppercase tracking-wider">06/2021 - 08/2021</div>
              <div className="text-sm text-gray-500 uppercase mt-2">Bizerte</div>
            </div>
            <div className="md:col-span-3">
              <h2 className="text-2xl font-bold mb-4">Web Developer - Technical Internship</h2>
              <h3 className="text-xl mb-6">Sisagri</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-2 text-gray-400">-</span>
                  <span>Created an e-commerce website for agricultural equipment sales and rentals</span>
                </li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="inline-block px-3 py-1 text-sm bg-rn-light-gray text-gray-300">HTML/CSS</span>
                <span className="inline-block px-3 py-1 text-sm bg-rn-light-gray text-gray-300">JavaScript</span>
                <span className="inline-block px-3 py-1 text-sm bg-rn-light-gray text-gray-300">PHP</span>
                <span className="inline-block px-3 py-1 text-sm bg-rn-light-gray text-gray-300">MySQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Gained Section */}
      <section className="py-20 bg-rn-gray">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 uppercase tracking-tight">skills gained</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2 text-gray-400">-</span>
                  <span>Full-stack development expertise</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-gray-400">-</span>
                  <span>Microservices architecture</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-gray-400">-</span>
                  <span>CI/CD pipeline implementation</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-gray-400">-</span>
                  <span>Mobile app development</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2 text-gray-400">-</span>
                  <span>Project management</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-gray-400">-</span>
                  <span>Team collaboration</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-gray-400">-</span>
                  <span>Client communication</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-gray-400">-</span>
                  <span>Problem-solving</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Business Insights</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2 text-gray-400">-</span>
                  <span>Performance optimization</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-gray-400">-</span>
                  <span>Cost reduction strategies</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-gray-400">-</span>
                  <span>User experience enhancement</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-gray-400">-</span>
                  <span>Scalable solutions design</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Interested in my work?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-12">
            Check out my portfolio of projects or get in touch to discuss potential collaborations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/projects" 
              className="inline-block px-8 py-3 bg-black text-white text-sm uppercase tracking-widest font-medium hover:bg-gray-800 transition-colors"
            >
              View Projects
            </a>
            <a 
              href="/contact" 
              className="inline-block px-8 py-3 border border-black text-sm uppercase tracking-widest font-medium hover:bg-black hover:text-white transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
