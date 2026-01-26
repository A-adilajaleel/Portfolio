import React from 'react'
import { ArrowUpRight, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      image: "/images/moviedashboard.png",
      title: "Movie Dashboard",
      subtitle: "Frontend Project",
      desc: "A movie browsing website built using React and TMDB API. Users can explore movies, view details, and browse different categories.",
      tech: ["HTML", "CSS", "JavaScript", "React", "API"],
      live: "https://movie-dashboard-gkfg.vercel.app/",
      repo: "https://github.com/A-adilajaleel/Movie-Dashboard"
    },
    {
      image: "/images/laurevelle.png",
      title: "Laurevelle Florals",
      subtitle: "E-commerce Website",
      desc: "A responsive flower shop website with product listings and basic cart functionality. Built with a focus on layout, UI design, and responsiveness.",
      tech: ["HTML", "CSS", "JavaScript", "React"],
      live: "https://laurevelle-florals-ecommerce.vercel.app/", 
      repo: "https://github.com/A-adilajaleel/laurevelle-florals-ecommerce"
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      {projects.map((project, idx) => (
        <div key={idx}>
          
          <div className="overflow-hidden bg-[#111] border border-slate-200 mb-6">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-1">
                {project.subtitle}
              </p>
              <h3 className="text-3xl font-black text-black tracking-tighter uppercase">
                {project.title}
              </h3>
            </div>
            
            <p className="text-slate-500 text-sm leading-relaxed">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-[10px] font-bold uppercase tracking-widest bg-slate-100 text-black px-3 py-1"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-8 pt-6">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest border-b-2 border-amber-500 pb-1 hover:text-amber-600 transition-colors"
              >
                Live Demo <ArrowUpRight size={14} />
              </a>

              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-black transition-colors"
              >
                Source Code <Github size={14} />
              </a>
            </div>

          </div>
        </div>
      ))}
    </div>
  )
}

export default Projects
