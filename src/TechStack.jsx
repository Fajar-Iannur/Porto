import React from 'react';
import { FaHtml5, FaReact } from 'react-icons/fa';
import { DiCss3Full } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTailwindcss, SiGooglegemini, SiAnthropic, SiGithubcopilot } from 'react-icons/si';
import { Claude } from '@lobehub/icons';
import { GithubCopilot } from '@lobehub/icons';

const TechStack = () => {
  const technologies = [
    { name: 'HTML5', icon: <FaHtml5 />, color: 'group-hover:text-orange-500' },
    { name: 'CSS3', icon: <DiCss3Full />, color: 'group-hover:text-blue-500' },
    { name: 'JavaScript', icon: <IoLogoJavascript />, color: 'group-hover:text-yellow-400' },
    { name: 'React', icon: <FaReact />, color: 'group-hover:text-cyan-400' },
    { name: 'Tailwind', icon: <SiTailwindcss />, color: 'group-hover:text-teal-400' },
    // Barisan AI Tools
    { name: 'Gemini AI', icon: <SiGooglegemini />, color: 'group-hover:text-blue-400' },
    { name: 'Claude', icon: <Claude />, color: 'group-hover:text-amber-600' },
    { name: 'Copilot', icon: <GithubCopilot  />, color: 'group-hover:text-white' },
  ];

  return (
    <section id="tech-stack" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="mb-12 text-center md:text-left">
        <h3 className="text-cyan-400 font-mono mb-2 tracking-[0.3em] uppercase text-sm">
          / Tech Stack & AI Tools
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          My Arsenal
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {technologies.map((tech, index) => (
          <div 
            key={index}
            className="group relative bg-[#050a10] border border-cyan-500/20 rounded-xl p-8 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_20px_var(--color-cyan-400)] cursor-pointer"
          >
            <div className={`text-6xl text-gray-500 transition-colors duration-300 ${tech.color}`}>
              {tech.icon}
            </div>
            
            <span className="text-gray-300 font-medium tracking-wider group-hover:text-white transition-colors text-center">
              {tech.name}
            </span>
            
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-cyan-400 group-hover:w-1/2 transition-all duration-300 rounded-t-md"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;