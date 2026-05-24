import React from 'react';

const Header = () => {
  const navLinks = ['HOME', 'ABOUT', 'PROJECTS', 'TECH STACK', 'CONTACT'];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#050a10]/80 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        
<div className="text-2xl font-extrabold tracking-wider text-cyan-400 [text-shadow:0_0_15px_var(--color-cyan-400)] cursor-pointer">
  JARR<span className="text-white">.DEV</span>
</div>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className="text-gray-300 text-sm font-medium tracking-widest hover:text-cyan-400 hover:[text-shadow:0_0_8px_var(--color-cyan-400)] transition-all duration-300"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Hamburger Menu*/}
        <button className="md:hidden text-cyan-400 hover:[text-shadow:0_0_8px_var(--color-cyan-400)]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        
      </div>
    </header>
  );
};

export default Header;