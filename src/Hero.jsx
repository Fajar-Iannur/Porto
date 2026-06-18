import React from 'react';
import Profilepict from './assets/irl.jpg';

const Hero = () => {
    return (
        <section id="home" className="pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between min-h-screen relative">

            {/* Text Area */}
            <div className="flex-1 text-center md:text-left z-10">
                <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-linear-to-r from-sky-600 to-blue-800 mb-6 tracking-tight">
                    JARR IANNUR
                </h1>
                <h2 className="text-xl md:text-2xl text-slate-700 font-medium mb-8 max-w-2xl leading-relaxed">
                    Software Engineer with a Managerial Mindset. <br className="hidden md:block" />
                    Building scalable systems and elegant digital solutions.
                </h2>
                <div className="flex justify-center md:justify-start gap-4">
                    <a 
                        href="#projects"
                        className="px-8 py-3 bg-transparent border-2 border-sky-600 text-sky-600 font-bold rounded-full hover:bg-sky-600 hover:text-white hover:shadow-[0_10px_25px_rgba(2,132,199,0.2)] transition-all duration-300"
                    >
                        SEE MY PROJECTS
                    </a>
                </div>
            </div>

            {/* Image Area */}
            <div className="flex-1 mt-16 md:mt-0 flex justify-center z-10">
                <div className="relative w-72 h-72 md:w-96 md:h-96">
                    <div className="absolute inset-0 bg-sky-300 rounded-full blur-[80px] opacity-30"></div>

                    {/* photos container */}
                    <div className="relative w-full h-full rounded-full border-2 border-sky-200 shadow-[0_20px_50px_rgba(2,132,199,0.15)] overflow-hidden bg-slate-100 flex items-center justify-center">
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