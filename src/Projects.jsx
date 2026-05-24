import React from 'react';
import imgCustomBook from './assets/CustomBook.png'; 
import imgSpentApp from './assets/SpentApp.png';
import imgSatayPayment from './assets/SatayPayment.png';
import img26simracing from './assets/26SimRacing.png';

const Projects = () => {
  const projectData = [
    {
      title: "Custom Book",
      description: "Replica of some social media features on the internet.",
      techStack: ["Html", "CSS", "JavaScript"],
      image: imgCustomBook, 
      liveLink: "https://custom-book.vercel.app/", 
      githubLink: "https://github.com/Fajar-Iannur/Custom-Book",
      status: "Completed"
    },
    {
      title: "Spent App",
      description: "A financial expense tracking app. Built with performance and efficiency in mind for daily data recording.",
      techStack: ["JavaScript", "React", "Tailwind CSS"],
      image: imgSpentApp, 
      liveLink: "https://spent-app-kn12.vercel.app/",
      githubLink: "https://github.com/Fajar-Iannur/Spent-App",
      status: "Completed"
    },
    {
      title: "Food Delivery System",
      description: "Full-stack food ordering system. Integrates custom backend and sandbox payment gateway (Midtrans/Xendit) to process dynamic QR codes.",
      techStack: ["React", "Node.js", "Payment API"],
      image: imgSatayPayment, 
      liveLink: "https://satay-payment.vercel.app/",
      githubLink: "https://github.com/Fajar-Iannur/Satay-payment-system",
      status: "Completed"
    },
        {
      title: "26SimRacing",
      description: "Sim racing wheel E-Commerce .",
      techStack: ["Tailwind CSS", "React.js", "Vite", "React Router"],
      image: img26simracing, 
      liveLink: "https://26-sim-racing.vercel.app/",
      githubLink: "https://github.com/Fajar-Iannur/26SimRacing",
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="mb-12 text-center md:text-left">
        <h3 className="text-cyan-400 font-mono mb-2 tracking-[0.3em] uppercase text-sm">
          / Featured Work
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Projects & Case Studies
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <div 
            key={index} 
            className="group bg-[#050a10] border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-500 flex flex-col"
          >
            {/* Thumbnail Area */}
            <div className="h-48 bg-[#0a111a] border-b border-cyan-500/20 relative overflow-hidden flex items-center justify-center">
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-cyan-900/20 via-[#0a111a] to-[#0a111a] z-0"></div>
               
               {project.image ? (
                 <img 
                   src={project.image} 
                   alt={project.title} 
                   className="w-full h-full object-cover relative z-10 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                 />
               ) : (
                 <span className="text-cyan-500/50 font-mono text-sm z-10 group-hover:scale-110 transition-transform duration-500">
                   [ Image Missing ]
                 </span>
               )}
               
               {project.status === "In Development" && (
                 <div className="absolute top-4 right-4 bg-yellow-500/20 text-yellow-400 text-xs font-bold px-3 py-1 rounded-full border border-yellow-500/50 z-20">
                   WIP
                 </div>
               )}
            </div>

            {/* Content Area */}
            <div className="p-6 flex flex-col grow relative z-20 bg-[#050a10]">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-6 grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="text-xs font-mono text-cyan-300 bg-cyan-950/50 px-2 py-1 rounded border border-cyan-500/30">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto">
                {project.status === "In Development" ? (
                  <button disabled className="flex-1 py-2 text-sm font-bold text-gray-500 bg-gray-900 border border-gray-700 rounded-md cursor-not-allowed">
                    IN DEVELOPMENT
                  </button>
                ) : (
                  <a href={project.liveLink} target="_blank" rel="noreferrer" className="flex-1 py-2 text-center text-sm font-bold text-[#01050a] bg-cyan-400 hover:bg-cyan-300 hover:shadow-[0_0_15px_var(--color-cyan-400)] rounded-md transition-all">
                    LIVE DEMO
                  </a>
                )}
                
                <a href={project.githubLink} target="_blank" rel="noreferrer" className="flex-1 py-2 text-center text-sm font-bold text-cyan-400 bg-transparent border border-cyan-400 hover:bg-cyan-400/10 rounded-md transition-all">
                  GITHUB
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;