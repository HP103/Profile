/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Download, 
  Code2, 
  Database, 
  Layout, 
  MapPin, 
  GraduationCap,
  ChevronRight,
  Menu,
  X,
  Gamepad2,
  Trophy,
  Heart
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface Project {
  id: number;
  title: string;
  year: string;
  description: string;
  tags: string[];
  color: string;
  link: string;
}

// --- Constants ---
const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Cinema Management System",
    year: "2025",
    description: "Developed a desktop application for managing movies, screening schedules, and cinema rooms using Java Swing and MySQL.",
    tags: ["Java", "OOP", "MySQL", "Swing"],
    color: "bg-blue-500",
    link: "https://github.com/HP103"
  },
  {
    id: 2,
    title: "Mini Supermarket",
    year: "2026",
    description: "Inventory and sales tracking system for retail environments with real-time stock management.",
    tags: ["C#", "Spring Boot", "MySQL"],
    color: "bg-purple-500",
    link: "https://github.com/tongthanhdat009/dotnet-backend.git"
  },
  {
    id: 3,
    title: "Long-distance Bus Ticket Management System",
    year: "2024",
    description: "A system for managing bus tickets for long-distance routes with real-time availability and booking features.",
    tags: ["Java", "Spring Boot", "MySQL", "IntelliJ"],
    color: "bg-emerald-500",
    link: "https://github.com/thankhanh/bus-backend.git"
  }
];

const SKILLS = [
  {
    title: "Backend",
    icon: <Code2 className="w-6 h-6 text-blue-500" />,
    items: "Java, Spring Boot, .NET Core, Node.js, C/C++"
  },
  {
    title: "Frontend",
    icon: <Layout className="w-6 h-6 text-purple-500" />,
    items: "React, TypeScript, Tailwind CSS, Vue.js"
  },
  {
    title: "Database",
    icon: <Database className="w-6 h-6 text-emerald-500" />,
    items: "MySQL, PostgreSQL, MongoDB"
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-600">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg shadow-black/[0.03] rounded-2xl px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">N</div>
              <span className="font-bold text-xl tracking-tight text-slate-800">NTP<span className="text-blue-600">.</span></span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors"
                >
                  {item}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-slate-900 text-white text-sm font-semibold px-5 py-2 rounded-xl hover:bg-slate-800 transition-all active:scale-95"
              >
                Hire Me
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden p-2 text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-2xl font-bold text-slate-800 text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10 pt-32 pb-20">
        {/* Hero Section */}
        <section className="max-w-5xl mx-auto px-6 text-center mb-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative inline-block mb-8"
          >
            <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-blue-500 via-purple-500 to-emerald-500">
              <div className="w-full h-full rounded-full bg-white p-1 overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/phuc/200/200" 
                  alt="Nguyen Van Hoang Phuc" 
                  className="w-full h-full object-cover rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 bg-white p-1.5 rounded-full shadow-md">
              <div className="bg-blue-50 p-1 rounded-full">
                <Code2 className="w-4 h-4 text-blue-600" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
              Software Engineering Student
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
              Nguyễn Văn Hoàng Phúc 
              
            </h1>
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
              I bridge the gap between complex backend logic and seamless user experiences. 
              Currently studying at <span className="text-slate-900 font-semibold">Saigon University</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="/Profile/HoangPhuc_s_Resume_.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-white border border-slate-200 px-8 py-4 rounded-2xl font-bold text-slate-800 hover:border-blue-500 hover:text-blue-600 transition-all shadow-sm active:scale-95"
              >
                View CV
                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
              </a>
              <div className="flex items-center gap-3">
                <a href="https://github.com/HP103" target="_blank" className="p-4 bg-white border border-slate-200 rounded-2xl text-slate-600 hover:text-blue-600 hover:border-blue-500 transition-all shadow-sm active:scale-95">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/HP103" target="_blank" className="p-4 bg-white border border-slate-200 rounded-2xl text-slate-600 hover:text-blue-600 hover:border-blue-500 transition-all shadow-sm active:scale-95">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* About & Stats */}
        <section id="about" className="max-w-5xl mx-auto px-6 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-white p-8 md:p-10 rounded-[32px] border border-slate-100 shadow-sm flex flex-col md:flex-row gap-8 items-start"
            >
              <div className="w-full md:w-48 h-48 rounded-2xl overflow-hidden flex-shrink-0 bg-slate-50">
                <img src="https://picsum.photos/seed/tech/400/400" alt="About" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div>
                <h2 className="text-3xl font-black text-slate-900 mb-4">About Me</h2>
                <p className="text-slate-500 leading-relaxed mb-6">
                  I'm a Software Engineering student (2022-2027) with a passion for building scalable backend systems. 
                  I love turning complex requirements into clean, maintainable code. 
                  My goal is to become a proficient Full-stack Developer.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl text-sm font-medium text-slate-600 border border-slate-100">
                    <MapPin className="w-4 h-4 text-red-500" />
                    Ho Chi Minh City
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl text-sm font-medium text-slate-600 border border-slate-100">
                    <GraduationCap className="w-4 h-4 text-blue-500" />
                    Saigon University
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 md:p-10 rounded-[32px] border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center"
            >
              <span className="text-7xl font-black text-blue-600 mb-2">4+</span>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Major Projects</span>
              <div className="mt-8 w-full space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">GPA</span>
                  <span className="font-bold text-slate-900">3.2 / 4.0</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[80%]" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="max-w-5xl mx-auto px-6 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SKILLS.map((skill, idx) => (
              <motion.div 
                key={skill.title}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{skill.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{skill.items}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="max-w-5xl mx-auto px-6 mb-32">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-2">Selected Work</h2>
              <p className="text-slate-500">Pushing the boundaries of what's possible.</p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">
              View All Projects <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECTS.map((project, idx) => (
              <motion.div 
                key={project.id}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden hover:shadow-xl transition-all"
              >
                <div className={`h-48 ${project.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-32 h-16 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 flex items-center justify-center">
                    <Code2 className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{project.year}</span>
                    <a href={project.link} target="_blank" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-wider rounded-lg border border-slate-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience & Hobbies */}
        <section className="max-w-5xl mx-auto px-6 mb-32 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-3">
              <Trophy className="w-8 h-8 text-yellow-500" />
              Experience
            </h2>
            <div className="space-y-8">
              {[
                { title: "Competitive Programming Club", role: "Member", date: "Sept. 2023 – Present" },
                { title: "Peer Tutoring", role: "Tutor", date: "2019 – Present" },
                { title: "University Volunteer Activities", role: "Volunteer", date: "2018 – Present" }
              ].map((exp, idx) => (
                <div key={idx} className="relative pl-8 border-l-2 border-slate-100">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-blue-500" />
                  <h4 className="font-bold text-slate-900">{exp.title}</h4>
                  <p className="text-sm text-blue-600 font-medium mb-1">{exp.role}</p>
                  <p className="text-xs text-slate-400">{exp.date}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-3">
              <Heart className="w-8 h-8 text-red-500" />
              Hobbies
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: <Gamepad2 className="w-5 h-5" />, title: "Gaming", desc: "Strategy games like Rise of Kingdoms." },
                { icon: <Trophy className="w-5 h-5" />, title: "Sports", desc: "Tennis, basketball, and volleyball." },
                { icon: <Layout className="w-5 h-5" />, title: "Movies & Reading", desc: "Watching movies and reading novels." }
              ].map((hobby, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <div className="p-3 bg-slate-50 rounded-xl text-slate-600">{hobby.icon}</div>
                  <div>
                    <h4 className="font-bold text-slate-900">{hobby.title}</h4>
                    <p className="text-sm text-slate-500">{hobby.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-5xl mx-auto px-6">
          <div className="bg-slate-900 rounded-[48px] p-12 md:p-20 text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 blur-[100px] -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 blur-[100px] translate-x-1/2 translate-y-1/2" />
            
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight relative z-10">
              Let's work <span className="text-blue-400">together</span>.
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto relative z-10">
              I'm currently looking for internship opportunities. If you have a project in mind, feel free to reach out!
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative z-10">
              <a href="mailto:phucrok103@gmail.com" className="w-full md:w-auto flex items-center justify-center gap-2 bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold hover:bg-blue-500 transition-all active:scale-95 shadow-xl shadow-blue-600/20">
                <Mail className="w-5 h-5" />
                Email Me
              </a>
              <div className="flex items-center gap-4">
                <a href="https://linkedin.com/in/HP103" target="_blank" className="p-5 bg-white/5 border border-white/10 rounded-2xl text-white hover:bg-white/10 transition-all">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://github.com/HP103" target="_blank" className="p-5 bg-white/5 border border-white/10 rounded-2xl text-white hover:bg-white/10 transition-all">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 py-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white font-bold text-xs">N</div>
          <span className="font-bold text-slate-800">NTP.</span>
        </div>
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Nguyen Van Hoang Phuc. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="#" className="text-xs font-bold text-slate-400 hover:text-slate-900 uppercase tracking-widest">Privacy</a>
          <a href="#" className="text-xs font-bold text-slate-400 hover:text-slate-900 uppercase tracking-widest">Terms</a>
        </div>
      </footer>
    </div>
  );
}
