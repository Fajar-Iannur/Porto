import React from 'react';
import { FaHtml5, FaReact } from 'react-icons/fa';
import { DiCss3Full } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTailwindcss, SiGooglegemini, SiAnthropic, SiGithubcopilot } from 'react-icons/si';
import { Claude } from '@lobehub/icons';
import { GithubCopilot } from '@lobehub/icons';

const TechStack = () => {
  const technologies = [
    { name: 'HTML5', icon: <FaHtml5 />, color: 'text-orange-500' },
    { name: 'CSS3', icon: <DiCss3Full />, color: 'text-blue-500' },
    { name: 'JavaScript', icon: <IoLogoJavascript />, color: 'text-yellow-500' },
    { name: 'React', icon: <FaReact />, color: 'text-sky-400' },
    { name: 'Tailwind', icon: <SiTailwindcss />, color: 'text-teal-400' },
    { name: 'Gemini AI', icon: <SiGooglegemini />, color: 'text-blue-500' },
    { name: 'Claude', icon: <Claude />, color: 'text-amber-600' },
    { name: 'Copilot', icon: <GithubCopilot />, color: 'text-slate-800' },
  ];

  return (
    <section id="tech-stack" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="mb-12 text-center md:text-left">
        <h3 className="text-sky-600 font-mono mb-2 tracking-[0.3em] uppercase text-sm font-bold">
          / Tech Stack & AI Tools
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          My Arsenal
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {technologies.map((tech, index) => (
          <div 
            key={index}
            className="group relative bg-sky-50 border border-sky-100 rounded-xl p-8 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:-translate-y-2 hover:border-sky-300 hover:shadow-[0_10px_20px_rgba(2,132,199,0.1)] cursor-pointer"
          >
            <div className={`text-6xl transition-transform duration-300 group-hover:scale-110 ${tech.color}`}>
              {tech.icon}
            </div>
            <span className="text-slate-700 font-medium tracking-wider group-hover:text-sky-700 transition-colors text-center">
              {tech.name}
            </span>
            
            {/* Animasi Garis Bawah pas di hover */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-sky-400 group-hover:w-1/2 transition-all duration-300 rounded-t-md"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;