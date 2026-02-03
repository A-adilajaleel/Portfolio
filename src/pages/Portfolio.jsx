import React from 'react'
import Projects from './Projects'
import Contact from './Contact'

const Portfolio = () => {
  return (
    <div className="bg-[#0a0a0a] text-slate-200 font-sans selection:bg-amber-500 selection:text-black">
      
      <section id="intro" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          
          <div className="inline-block px-4 py-1 border border-amber-500/20 rounded-sm mb-8">
            <span className="text-amber-500 text-[10px] font-bold uppercase tracking-[0.4em]">
              Frontend Developer
            </span>
          </div>
          
          <h1 className="text-7xl lg:text-9xl font-black tracking-tighter mb-8 leading-none text-white uppercase">
            Adila <span className="text-amber-500">Jaleel</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-slate-400 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
            I build <span className="text-white font-medium">responsive and user-friendly</span> web interfaces
            using modern frontend technologies with a strong focus on clean UI and usability.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#projects">
              <button className="bg-white text-black px-12 py-5 rounded-sm font-black hover:bg-amber-500 transition-all uppercase tracking-widest text-xs">
                View Projects
              </button>
            </a> 
            <a 
            href="/Adila.pdf"
            download
            className="border border-white/20 text-white px-12 py-5 rounded-sm font-black hover:bg-white hover:text-black transition-all uppercase tracking-widest text-xs">
              Download CV
            </a>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white text-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            
            <div>
              <h2 className="text-5xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
                Frontend <br />Focus
              </h2>
              <div className="h-1 w-20 bg-amber-500"></div>
            </div>

            <div className="space-y-8">
              <p className="text-xl text-slate-600 font-light leading-relaxed">
                As a frontend developer, I enjoy converting designs into functional websites.
                I focus on writing clean HTML, well-structured CSS, and interactive JavaScript
                using React.
              </p>

              <div className="grid grid-cols-2 gap-12">
                <div>
                  <h4 className="font-bold text-amber-600 mb-3 uppercase tracking-widest text-xs">
                    Core Skills
                  </h4>
                  <ul className="text-sm text-slate-800 space-y-2 font-medium">
                    <li>• Responsive Website Design</li>
                    <li>• React Components & Props</li>
                    <li>• Basic State & API Handling</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-amber-600 mb-3 uppercase tracking-widest text-xs">
                    Career Goal
                  </h4>
                  <p className="text-sm text-slate-500 italic">
                    To grow as a frontend developer by building real-world projects
                    and strengthening my fundamentals.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-24 bg-[#050505] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[10px] font-bold tracking-[0.5em] text-slate-500 uppercase mb-16 text-center">
            Technical Skills
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              'HTML5',
              'CSS3',
              'JavaScript',
              'React.js',
              'Tailwind CSS',
              'Bootstrap',
              'Git & GitHub'
            ].map((skill) => (
              <div
                key={skill}
                className="py-6 border border-white/5 text-center hover:border-amber-500 transition-all font-bold text-[10px] uppercase tracking-widest text-slate-400 hover:text-white"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-4xl font-black uppercase tracking-tighter text-black italic">
              Frontend Projects
            </h2>
          </div>
          <Projects />
        </div>
      </section>

      <section className="py-24 bg-black">
        <Contact />
      </section>
    </div>
  )
}

export default Portfolio
