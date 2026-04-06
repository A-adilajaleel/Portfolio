import React from 'react'
import { Github, Linkedin, Mail, FileText, User, Globe, Layout, Palette, MapPin, Download } from 'lucide-react'

const Portfolio = () => {
  const resumePath = "/Frontend_Developer.pdf"
  const profileImagePath = "https://i.pinimg.com/736x/ae/b1/7f/aeb17fe0919cda15cf48f4702e4692fe.jpg"

  const projects = [
    {
      title: "Laurevelle Florals",
      desc: "Responsive e-commerce frontend with modern UI.",
      tech: ["React.js", "Tailwind CSS", "Context API"],
      image: "/images/laurevelle.png",
      live: "https://laurevelle-florals-ecommerce.vercel.app/",
      git: "https://github.com/A-adilajaleel/laurevelle-florals-ecommerce"
    },
    {
      title: "Finance Dashboard UI",
      desc: "Built a professional finance dashboard with charts and analytics.",
      tech: ["React.js", "Tailwind CSS", "Recharts"],
      image: "/images/finance.png",
      live: "https://finance-dashboard-flax-psi-42.vercel.app/",
      git: "https://github.com/A-adilajaleel/Finance-Dashboard"
    },
    {
      title: "Movie Discovery Dashboard",
      desc: "Interactive dashboard for discovering movies using API.",
      tech: ["React.js", "REST API", "Vite"],
      image: "/images/moviedashboard.png",
      live: "https://movie-dashboard-gkfg.vercel.app/",
      git: "https://github.com/A-adilajaleel/Movie-Dashboard"
    }
  ]

  return (
    <div className="bg-[#0d0e12] min-h-screen font-sans text-slate-300 scroll-smooth selection:bg-orange-500/30">
      
      <div className="fixed right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 bg-[#1a1c23] p-4 rounded-full border border-white/5 z-50 shadow-2xl">
        <a href="#home" className="text-slate-500 hover:text-orange-500 transition-colors duration-300"><Layout size={20} /></a>
        <a href="#about" className="text-slate-500 hover:text-orange-500 transition-colors duration-300"><User size={20} /></a>
        <a href="#portfolio" className="text-slate-500 hover:text-orange-500 transition-colors duration-300"><Globe size={20} /></a>
        <a href="#contact" className="text-slate-500 hover:text-orange-500 transition-colors duration-300"><Mail size={20} /></a>
      </div>

      <nav className="fixed top-0 w-full bg-[#0d0e12]/80 backdrop-blur-md z-40 px-8 py-6 flex justify-between items-center border-b border-white/5">
        <h1 className="text-2xl font-black tracking-tighter text-white">
          <span className="text-orange-500 italic">ADILA JALEEL</span>
        </h1>
        <div className="hidden md:flex gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 items-center">
          <a href="#home" className="hover:text-orange-500 transition-colors duration-300">Home</a>
          <a href="#about" className="hover:text-orange-500 transition-colors duration-300">About Me</a>
          <a href="#portfolio" className="hover:text-orange-500 transition-colors duration-300">Portfolio</a>
          <a href={resumePath} download className="flex items-center gap-2 hover:text-orange-500 transition-colors">
            <Download size={14} /> Resume
          </a>
          <a href="#contact" className="bg-orange-500/10 text-orange-500 border border-orange-500/20 px-4 py-2 rounded-md hover:bg-orange-500 hover:text-black transition-all duration-300 uppercase">
            Contact Me
          </a>
        </div>
      </nav>

      <section id="home" className="pt-48 pb-32 px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        <div className="flex-1 space-y-6">
          <p className="text-orange-500 font-bold tracking-widest text-sm uppercase">Hi, My Name Is</p>
          <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">Adila Jaleel</h2>
          <div className="inline-block bg-orange-500/10 text-orange-400 px-4 py-1 rounded text-xs font-bold uppercase tracking-widest border border-orange-500/20">
            Frontend Developer / React.js Developer
          </div>
          <p className="text-slate-400 max-w-lg leading-relaxed text-sm">
            Skills: Frontend Development, React.js Specialist, Web Designing, Responsive UI Solutions, and State Management.
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
              <MapPin size={14} className="text-orange-500" /> Kerala, India
            </div>
            <a href={resumePath} download className="flex items-center gap-3 bg-orange-500 text-black px-6 py-3 rounded-lg font-black uppercase text-[10px] tracking-widest hover:bg-orange-600 transition-all w-fit shadow-lg shadow-orange-500/20">
              <FileText size={16} /> Download CV
            </a>
          </div>
        </div>

        <div className="relative group">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-[10px] border-[#1a1c23] shadow-orange-500/5 shadow-2xl overflow-hidden z-10 relative">
            <img src={profileImagePath} alt="Adila Jaleel" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
          </div>
          <div className="absolute inset-0 rounded-full border border-orange-500/20 scale-110 pointer-events-none animate-pulse"></div>
          <div className="absolute inset-0 rounded-full border border-orange-500/10 scale-125 pointer-events-none"></div>
        </div>
      </section>

      <section id="about" className="py-32 bg-[#12141a] px-8 border-y border-white/5">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <h3 className="text-4xl font-black text-white uppercase tracking-tighter italic">About Me</h3>
          <p className="text-slate-400 max-w-3xl mx-auto text-sm leading-loose font-medium">
            Frontend Developer specialized in building responsive and scalable web applications using React.js and JavaScript.
            Focused on creating clean, user-friendly UI aligned with business requirements.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["React.js", "JavaScript (ES6+)", "Tailwind CSS", "State Management", "HTML","CSS", "Git/GitHub", "Vercel"].map((skill, i) => (
              <div key={i} className="bg-[#1a1c23] p-4 rounded-lg border border-white/5 flex items-center gap-3 hover:border-orange-500/40 transition-all duration-300 group">
                <Palette size={16} className="text-orange-500 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-32 px-8 max-w-7xl mx-auto">
        <h3 className="text-4xl font-black text-white mb-20 text-center uppercase italic">Portfolio</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="group bg-[#1a1c23] rounded-xl overflow-hidden border border-white/5 hover:border-orange-500/40 transition-all duration-500">
              <div className="aspect-square bg-[#0d0e12] relative overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12] to-transparent pointer-events-none"></div>
              </div>
              <div className="p-6">
                <h4 className="text-white font-bold mb-4 italic tracking-tight">{p.title}</h4>
                <div className="flex gap-6 pt-4 border-t border-white/5 text-[10px] font-black uppercase tracking-widest">
                  <a href={p.live} target="_blank" rel="noreferrer" className="text-orange-500 hover:text-orange-400 transition-colors">Live View</a>
                  <a href={p.git} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="py-32 bg-[#12141a] px-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-black text-orange-500 text-center mb-20 uppercase tracking-widest italic">Contact Me</h3>
          <div className="grid md:grid-cols-2 gap-16 bg-[#0d0e12] p-10 md:p-16 rounded-[2rem] border border-white/5 shadow-2xl relative overflow-hidden">
            <div className="space-y-12 relative z-10">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white uppercase italic">Contact Info</h4>
                <div className="flex items-center gap-4 text-sm text-slate-400 font-medium">
                  <Mail size={18} className="text-orange-500" /> adilajaleel831@gmail.com
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white uppercase italic">Social Handles</h4>
                <div className="flex gap-6">
                  <a href="https://www.linkedin.com/in/adila-jaleel" target="_blank" rel="noreferrer" className="p-3 bg-[#1a1c23] rounded-full text-slate-400 hover:text-white hover:bg-orange-500 transition-all duration-300">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://github.com/A-adilajaleel" target="_blank" rel="noreferrer" className="p-3 bg-[#1a1c23] rounded-full text-slate-400 hover:text-white hover:bg-orange-500 transition-all duration-300">
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center bg-[#0d0e12]">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-700 italic">
          © 2026 Adila Jaleel. All Rights Reserved.
        </p>
      </footer>
    </div>
  )
}

export default Portfolio