import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className="max-w-6xl mx-auto px-6 py-24">
      <div className="grid lg:grid-cols-2 gap-24 items-start border-t border-white/10 pt-24">
        
        <div className="space-y-12">
          <h2 className="text-7xl font-black tracking-tighter text-white uppercase leading-none">
            Get In <br /> <span className="text-amber-500 italic">Touch</span>
          </h2>
          
          <div className="space-y-10">
            <div>
              <p className="text-[10px] font-bold tracking-[0.3em] text-slate-500 uppercase mb-4">
                Email
              </p>
              <a
                href="mailto:adilajaleel831@gmail.com"
                className="text-3xl font-light text-white hover:text-amber-500 transition-colors border-b border-white/10 pb-2"
              >
                adilajaleel831@gmail.com
              </a>
            </div>

            <div>
              <p className="text-[10px] font-bold tracking-[0.3em] text-slate-500 uppercase mb-2">
                Social Links
              </p>
              <div className="flex gap-6">
                <a
                 href="https://www.linkedin.com/in/adila-jaleel-22051a341"
                  className="text-sm font-bold text-white hover:text-amber-500 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/A-adilajaleel"
                  className="text-sm font-bold text-white hover:text-amber-500 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        <form className="space-y-10">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="group">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 group-focus-within:text-amber-500 transition-colors">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-amber-500 transition-colors text-white"
              />
            </div>

            <div className="group">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 group-focus-within:text-amber-500 transition-colors">
                Email
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-amber-500 transition-colors text-white"
              />
            </div>
          </div>
          
          <div className="group">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 group-focus-within:text-amber-500 transition-colors">
              Message
            </label>
            <textarea
              rows="3"
              placeholder="Write your message here"
              className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-amber-500 transition-colors text-white resize-none"
            ></textarea>
          </div>

          <button className="bg-white px-12 py-5 text-black font-black uppercase tracking-widest text-xs hover:bg-amber-500 transition-all">
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
