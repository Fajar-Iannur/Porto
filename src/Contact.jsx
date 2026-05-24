import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center border-t border-cyan-500/20 mt-20">
      <h3 className="text-cyan-400 font-mono mb-4 tracking-[0.3em] uppercase text-sm">
        / What's Next?
      </h3>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Let's Build Something Great.
      </h2>
      <p className="text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
        I'm always open to discussing new project opportunities, collaborations, or simply exchanging ideas about software development and systems management. Feel free to say hello!
      </p>

      {/* Tombol Email Utama */}
      <a 
        href="mailto:emailkamu@gmail.com" 
        className="inline-block px-10 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold tracking-wider rounded-full hover:bg-cyan-400 hover:text-[#01050a] hover:shadow-[0_0_30px_var(--color-cyan-400)] transition-all duration-300 mb-16"
      >
        SAY HELLO
      </a>

      {/* Social Links Bawah */}
      <div className="flex justify-center gap-8 text-2xl text-gray-500">
        <a 
          href="https://github.com/Fajar-Iannur" 
          target="_blank" 
          rel="noreferrer"
          className="hover:text-white transition-colors duration-300"
        >
          <FaGithub />
        </a>
        <a 
          href="https://www.linkedin.com/in/fajar-iannur-b30bb7327/" 
          className="hover:text-cyan-400 transition-colors duration-300"
        >
          <FaLinkedin />
        </a>
        <a 
          href="mailto:jarr26faa@gmail.com" 
          className="hover:text-cyan-400 transition-colors duration-300"
        >
          <FaEnvelope />
        </a>
      </div>

      <div className="mt-16 text-sm text-gray-600 font-mono">
        <p>© {new Date().getFullYear()} Fajar Iannur. Crafted with React & Tailwind.</p>
      </div>
    </section>
  );
};

export default Contact;