import React from 'react';
import { FaReact, FaNodeJs, FaDocker, FaJenkins, FaDatabase, FaCheckCircle, FaUsers, FaChartLine } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Experience = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-rn-dark text-white">
      {/* Experience Header */}
      <section className="py-20 max-w-screen-xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 uppercase tracking-tight">{t('experience.pageTitle')}</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-16">
          {t('experience.intro')}
        </p>
      </section>

      {/* Timeline Section */}
      <section className="py-12">
        <div className="max-w-screen-xl mx-auto px-6">
          {/* Freelance Experience */}
          <div className="mb-20 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <div className="text-sm text-gray-500 uppercase tracking-wider">{t('experience.freelance.dates')}</div>
              <div className="text-sm text-gray-500 uppercase mt-2">{t('experience.freelance.location')}</div>
            </div>
            <div className="md:col-span-3">
              <h2 className="text-2xl font-bold mb-4">{t('experience.freelance.role')}</h2>
              <h3 className="text-xl mb-6">{t('experience.freelance.company')}</h3>
              <ul className="space-y-4">
                {t('experience.freelance.details', { returnObjects: true }).map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-gray-400">-</span>
                    <span>{detail}</span>
                  </li>
                ))}
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
              <div className="text-sm text-gray-500 uppercase tracking-wider">{t('experience.tactic.dates')}</div>
              <div className="text-sm text-gray-500 uppercase mt-2">{t('experience.tactic.location')}</div>
            </div>
            <div className="md:col-span-3">
              <h2 className="text-2xl font-bold mb-4">{t('experience.tactic.role')}</h2>
              <h3 className="text-xl mb-6">{t('experience.tactic.company')}</h3>
              <ul className="space-y-4">
                {t('experience.tactic.details', { returnObjects: true }).map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-gray-400">-</span>
                    <span>{detail}</span>
                  </li>
                ))}
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
              <div className="text-sm text-gray-500 uppercase tracking-wider">{t('experience.beecoders.dates')}</div>
              <div className="text-sm text-gray-500 uppercase mt-2">{t('experience.beecoders.location')}</div>
            </div>
            <div className="md:col-span-3">
              <h2 className="text-2xl font-bold mb-4">{t('experience.beecoders.role')}</h2>
              <h3 className="text-xl mb-6">{t('experience.beecoders.company')}</h3>
              <ul className="space-y-4">
                {t('experience.beecoders.details', { returnObjects: true }).map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-gray-400">-</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="inline-block px-3 py-1 text-sm bg-rn-light-gray text-gray-300">React.js</span>
                <span className="inline-block px-3 py-1 text-sm bg-rn-light-gray text-gray-300">Node.js</span>
                <span className="inline-block px-3 py-1 text-sm bg-rn-light-gray text-gray-300">MongoDB</span>
              </div>
            </div>
          </div>
          
          {/* Shoppy Experience */}
          <div className="mb-20 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <div className="text-sm text-gray-500 uppercase tracking-wider">{t('experience.sisagri.dates')}</div>
              <div className="text-sm text-gray-500 uppercase mt-2">{t('experience.sisagri.location')}</div>
            </div>
            <div className="md:col-span-3">
              <h2 className="text-2xl font-bold mb-4">{t('experience.sisagri.role')}</h2>
              <h3 className="text-xl mb-6">{t('experience.sisagri.company')}</h3>
              <ul className="space-y-4">
                {t('experience.sisagri.details', { returnObjects: true }).map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-gray-400">-</span>
                    <span>{detail}</span>
                  </li>
                ))}
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
      <section className="bg-rn-mid-dark py-20">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">{t('experience.skillsSection.title')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Technical Skills */}
            <div className="bg-rn-dark rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-rn-green">{t('experience.skillsSection.technical.title')}</h3>
              <ul className="space-y-3">
                {t('experience.skillsSection.technical.skills', { returnObjects: true }).map((skill, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheckCircle className="text-rn-green text-lg mr-2 mt-1" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Soft Skills */}
            <div className="bg-rn-dark rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-rn-blue">{t('experience.skillsSection.soft.title')}</h3>
              <ul className="space-y-3">
                {t('experience.skillsSection.soft.skills', { returnObjects: true }).map((skill, index) => (
                  <li key={index} className="flex items-start">
                    <FaUsers className="text-rn-blue text-lg mr-2 mt-1" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Business Insights */}
            <div className="bg-rn-dark rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-rn-orange">{t('experience.skillsSection.business.title')}</h3>
              <ul className="space-y-3">
                {t('experience.skillsSection.business.skills', { returnObjects: true }).map((skill, index) => (
                  <li key={index} className="flex items-start">
                    <FaChartLine className="text-rn-orange text-lg mr-2 mt-1" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('experience.cta.title')}</h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            {t('experience.cta.text')}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="/projects" className="inline-block bg-rn-green hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-md transition duration-300 transform hover:scale-105">
              {t('experience.cta.viewProjects')}
            </a>
            <a href="/contact" className="inline-block bg-rn-blue hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-md transition duration-300 transform hover:scale-105">
              {t('experience.cta.contactMe')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
