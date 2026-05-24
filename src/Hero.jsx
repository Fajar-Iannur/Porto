import React from 'react';
import Profilepict from './assets/irl.jpg';
const Hero = () => {
    return (
        <section id="home" className="pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between min-h-screen relative">

            {/* Text */}
            <div className="flex-1 text-center md:text-left z-10">
                <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500 mb-6 [text-shadow:0_0_20px_var(--color-cyan-400)] tracking-tight">
                    JARR IANNUR
                </h1>
                <h2 className="text-xl md:text-2xl text-gray-300 font-medium mb-8 max-w-2xl leading-relaxed">
                    Software Engineer with a Managerial Mindset. <br className="hidden md:block" />
                    Building scalable systems and elegant digital solutions.
                </h2>
                <div 
                className="flex justify-center md:justify-start gap-4">
                    <a 
                    href="#projects"
                    className="px-8 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold rounded-full hover:bg-cyan-400/10 hover:[box-shadow:0_0_20px_var(--color-cyan-400)] transition-all duration-300">
                        SEE MY PROJECTS
                    </a>
                </div>
            </div>

            <div className="flex-1 mt-16 md:mt-0 flex justify-center z-10">
                <div className="relative w-72 h-72 md:w-96 md:h-96">
                    {/* glow effect */}
                    <div className="absolute inset-0 bg-cyan-400 rounded-full blur-[70px] opacity-20"></div>

                    {/* pict container */}
                    <div className="relative w-full h-full rounded-full border-2 border-cyan-400 shadow-[0_0_30px_var(--color-cyan-400)] overflow-hidden bg-[#0a111a] flex items-center justify-center">

                        <img
                            src={Profilepict}   
                            alt="Fajar Iannur Profil"
                            className="w-full h-full object-cover rounded-full relative z-10"
                        />

                    </div>
                </div>
            </div>

        </section>
    );
};

export default Hero;