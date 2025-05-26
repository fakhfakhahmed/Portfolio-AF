import React from 'react';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();

  // Skill categories and levels
  const technicalSkills = [
    { name: 'JavaScript / TypeScript', level: 90 },
    { name: 'React / Next.js', level: 85 },
    { name: 'Node.js / Express', level: 80 },
    { name: 'HTML / CSS / Tailwind', level: 90 },
    { name: 'Java / Spring Boot', level: 75 },
    { name: 'Flutter / Dart', level: 70 },
    { name: 'Python / Django', level: 65 },
    { name: 'SQL / NoSQL Databases', level: 80 },
  ];

  const devOpsSkills = [
    { name: 'Docker / Kubernetes', level: 70 },
    { name: 'CI/CD Pipelines', level: 75 },
    { name: 'Jenkins / GitHub Actions', level: 80 },
    { name: 'AWS / Azure', level: 65 },
    { name: 'Prometheus / Grafana', level: 60 },
    { name: 'Linux Server Administration', level: 70 },
  ];

  const softSkills = [
    { name: t('skills.soft.teamwork'), level: 95 },
    { name: t('skills.soft.communication'), level: 90 },
    { name: t('skills.soft.problemSolving'), level: 85 },
    { name: t('skills.soft.adaptability'), level: 95 },
    { name: t('skills.soft.leadership'), level: 80 },
    { name: t('skills.soft.timeManagement'), level: 85 },
  ];

  const languages = [
    { name: t('skills.languages.english'), level: 90 },
    { name: t('skills.languages.french'), level: 100 },
    { name: t('skills.languages.arabic'), level: 100 },
    { name: t('skills.languages.spanish'), level: 40 },
  ];

  // Skill bar component
  const SkillBar = ({ skill, level }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium">{skill}</span>
        <span className="text-sm text-gray-400">{level}%</span>
      </div>
      <div className="h-2 bg-rn-light-gray w-full">
        <div 
          className="h-full bg-black" 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-rn-dark text-white">
      {/* Skills Header */}
      <section className="py-20 max-w-screen-xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 uppercase tracking-tight">{t('skills.title')}</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-16">
          My skill set spans across various technologies and domains, allowing me to tackle diverse challenges 
          and contribute effectively to multifaceted projects.
        </p>
      </section>

      {/* Technical Skills Section */}
      <section className="py-12">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 uppercase tracking-tight">technical skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
            <div>
              {technicalSkills.slice(0, 4).map((skill, index) => (
                <SkillBar key={index} skill={skill.name} level={skill.level} />
              ))}
            </div>
            <div>
              {technicalSkills.slice(4).map((skill, index) => (
                <SkillBar key={index} skill={skill.name} level={skill.level} />
              ))}
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-12 uppercase tracking-tight">devops & cloud</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
            <div>
              {devOpsSkills.slice(0, 3).map((skill, index) => (
                <SkillBar key={index} skill={skill.name} level={skill.level} />
              ))}
            </div>
            <div>
              {devOpsSkills.slice(3).map((skill, index) => (
                <SkillBar key={index} skill={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Soft Skills Section */}
      <section className="py-20 bg-rn-gray">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 uppercase tracking-tight">soft skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
            <div>
              {softSkills.slice(0, 3).map((skill, index) => (
                <SkillBar key={index} skill={skill.name} level={skill.level} />
              ))}
            </div>
            <div>
              {softSkills.slice(3).map((skill, index) => (
                <SkillBar key={index} skill={skill.name} level={skill.level} />
              ))}
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-12 uppercase tracking-tight">languages</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              {languages.slice(0, 2).map((skill, index) => (
                <SkillBar key={index} skill={skill.name} level={skill.level} />
              ))}
            </div>
            <div>
              {languages.slice(2).map((skill, index) => (
                <SkillBar key={index} skill={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        </div>
      </section>

      

      {/* Call to Action */}
      <section className="py-20 bg-rn-gray">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to work together?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-12">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-8 py-3 bg-black text-white text-sm uppercase tracking-widest font-medium hover:bg-gray-800 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Skills;
