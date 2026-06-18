import React, { useState } from 'react';
import imgAbout from './assets/siluet.png';

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
      {/* Visual Kiri */}
      <div className="flex-1 flex justify-center order-2 md:order-1">
        <div className="relative w-64 h-64 border-2 border-sky-200 flex items-center justify-center bg-sky-50 group shadow-xl shadow-sky-900/5">
          <div className="absolute inset-0 border border-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none"></div>
          <img
            src={imgAbout}
            alt="About Fajar"
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 z-10"
          />
        </div>
      </div>

      {/* Teks Kanan */}
      <div className="flex-1 order-1 md:order-2">
        <h3 className="text-sky-600 font-mono mb-2 tracking-[0.3em] font-bold">/ ABOUT ME</h3>
        <h2 className="text-4xl font-bold mb-6 text-slate-900">The Bridge Between Logic and Business.</h2>
        <p className="text-slate-600 leading-relaxed mb-6">
          As a final-year Management student in Indonesia, I don't just build software; I build business solutions. I believe that the best code is code that efficiently solves real-world problems.
        </p>

        <button
          onClick={() => setIsOpen(true)}
          className="text-sky-600 font-bold flex items-center gap-2 group transition-all"
        >
          READ THE FULL STORY
          <span className="group-hover:translate-x-2 transition-transform">→</span>
        </button>
      </div>

      {/* POp up terminal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Terminal Window */}
          <div className="relative bg-white border border-sky-200 w-full max-w-2xl overflow-hidden shadow-[0_20px_50px_rgba(2,132,199,0.15)] rounded-md">
            {/* Terminal Header */}
            <div className="bg-sky-50 px-4 py-3 flex justify-between items-center border-b border-sky-100 font-mono text-xs font-bold">
              <span className="text-sky-700">j_iannur_bio.exe</span>
              <button onClick={() => setIsOpen(false)} className="text-sky-700 hover:text-red-500 transition-colors">X</button>
            </div>

            {/* Terminal Content */}
            <div className="p-8 font-mono text-sm leading-relaxed max-h-[70vh] overflow-y-auto">
              <p className="mb-4 text-sky-600 underline italic">--- PROFILE START ---</p>

              <p className="mb-6 text-slate-600 italic">
                "Coming from the interior of East Kalimantan does not limit my ambition to explore the world of global technology."
              </p>

              <p className="mb-4 text-slate-600">
                "I started my coding journey in late 2021. With a background in Management, I have a unique perspective on software development: focusing on scalability and operational cost efficiency."
              </p>

              <p className="mb-4 text-slate-600">
                "Every project I work on—from social media replicas to management systems—is built with the same discipline."
              </p>

              <div className="mt-8 p-4 bg-sky-50 border-l-4 border-sky-500">
                <p className="text-sky-700 font-bold mb-1">Status Saat Ini:</p>
                <p className="text-slate-700">Working full time as a freelancer.</p>
              </div>

              <p className="mt-8 text-sky-500 animate-pulse cursor-pointer font-bold" onClick={() => setIsOpen(false)}>
                _ (click anywhere to close)
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;