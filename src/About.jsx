import React, { useState } from 'react';
import imgAbout from './assets/siluet.png';

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
      {/* Visual Kiri - Bisa pakai Logo inisial besar dengan efek glitch atau sirkuit */}
      <div className="flex-1 flex justify-center order-2 md:order-1">
        <div className="relative w-64 h-64 border-2 border-cyan-500/30 flex items-center justify-center bg-cyan-500/5 group">
          <div className="absolute inset-0 border border-cyan-400 opacity-20 group-hover:opacity-100 transition-opacity duration-500"></div>
          <img
            src={imgAbout}
            alt="About Fajar"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 z-10"
          />
        </div>
      </div>

      {/* Teks Kanan */}
      <div className="flex-1 order-1 md:order-2">
        <h3 className="text-cyan-400 font-mono mb-2 tracking-[0.3em]">/ ABOUT ME</h3>
        <h2 className="text-4xl font-bold mb-6 text-white">The Bridge Between Logic and Business.</h2>
        <p className="text-gray-400 leading-relaxed mb-6">
          As a final-year Management student in Indonesia, I don't just build software; I build business solutions. I believe that the best code is code that efficiently solves real-world problems.
        </p>

        <button
          onClick={() => setIsOpen(true)}
          className="text-cyan-400 font-bold flex items-center gap-2 group transition-all"
        >
          READ THE FULL STORY
          <span className="group-hover:translate-x-2 transition-transform">→</span>
        </button>
      </div>

      {/* Modal Pop-up bergaya Terminal */}
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>

          <div className="relative bg-[#050a10] border border-cyan-400 w-full max-w-2xl overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.2)]">
            {/* Terminal Header */}
            <div className="bg-cyan-950/50 px-4 py-2 flex justify-between items-center border-b border-cyan-400/30 font-mono text-xs">
              <span className="text-cyan-400">j_iannur_bio.exe</span>
              <button onClick={() => setIsOpen(false)} className="text-cyan-400 hover:text-white">X</button>
            </div>

            {/* Terminal Content */}
            <div className="p-8 font-mono text-sm leading-relaxed max-h-[70vh] overflow-y-auto custom-scrollbar">
              <p className="mb-4 text-cyan-400 underline italic">--- PROFILE START ---</p>

              <p className="mb-6 text-gray-300 italic">
                "Coming from the interior of East Kalimantan does not limit my ambition to explore the world of global technology."
              </p>

              <p className="mb-4 text-gray-300">
                "I started my coding journey in late 2021. With a background in Management, I have a unique perspective on software development: focusing on scalability and operational cost efficiency."
              </p>

              <p className="mb-4 text-gray-300">
                "Every project I work on—from social media replicas to management systems—is built with the same discipline."
              </p>

              <div className="mt-8 p-4 bg-cyan-400/5 border-l-2 border-cyan-400">
                <p className="text-cyan-400 font-bold mb-1">Status Saat Ini:</p>
                <p className="text-gray-400">working full time as a freelancer.</p>
              </div>

              <p className="mt-8 text-cyan-400 animate-pulse cursor-pointer" onClick={() => setIsOpen(false)}>
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