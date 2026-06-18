import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center border-t border-sky-200 mt-20">
      
      {/* Warna cyan diganti ke sky-600 agar solid di atas background terang */}
      <h3 className="text-sky-600 font-mono mb-4 tracking-[0.3em] uppercase text-sm font-bold">
        / What's Next?
      </h3>
      
      {/* Teks "Let's Build Something Great" diselamatkan dari warna putih menjadi Slate-900 */}
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
        Let's Build Something Great.
      </h2>
      
      {/* Paragraf diubah ke Slate-600 agar mudah dibaca */}
      <p className="text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
        I'm always open to discussing new project opportunities, collaborations, or simply exchanging ideas about software development and systems management. Feel free to say hello!
      </p>

      {/* Tombol Email Utama - Hover effect diubah ke Sky Blue dengan soft shadow */}
      <a 
        href="mailto:fajar@jarr-iannur.web.id" 
        className="inline-block px-10 py-4 bg-transparent border-2 border-sky-600 text-sky-600 font-bold tracking-wider rounded-full hover:bg-sky-600 hover:text-white hover:shadow-[0_10px_20px_rgba(2,132,199,0.2)] transition-all duration-300 mb-16"
      >
        SAY HELLO
      </a>

      {/* Social Links Bawah - Hover diubah membesar (scale-110) dengan warna Sky Blue */}
      <div className="flex justify-center gap-8 text-2xl text-slate-400">
        <a 
          href="https://github.com/Fajar-Iannur" 
          target="_blank" 
          rel="noreferrer"
          className="hover:text-sky-600 hover:scale-110 transition-all duration-300"
        >
          <FaGithub />
        </a>
        <a 
          href="https://www.linkedin.com/in/fajar-iannur-b30bb7327/" 
          target="_blank"
          rel="noreferrer"
          className="hover:text-sky-600 hover:scale-110 transition-all duration-300"
        >
          <FaLinkedin />
        </a>
        <a 
          href="mailto:fajar@jarr-iannur.web.id" 
          className="hover:text-sky-600 hover:scale-110 transition-all duration-300"
        >
          <FaEnvelope />
        </a>
      </div>

      {/* Footer copyright text */}
      <div className="mt-16 text-sm text-slate-500 font-mono">
        <p>© {new Date().getFullYear()} Fajar Iannur. Crafted with React & Tailwind.</p>
      </div>
      
    </section>
  );
};

export default Contact;