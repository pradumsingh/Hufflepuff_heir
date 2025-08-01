"use client";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { motion } from "framer-motion";

import Link from "next/link";

export default function Home() {
  const MotionLink = motion(Link);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className="fixed inset-0 -z-10 w-full h-full top-0 left-0">
        <ParticlesBackground />
      </div>



 {/* hero section */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  className="relative text-center w-full min-h-screen py-50 bg-gradient-to-r from-black/10 via-zinc-900 to-blue-900/60 overflow-hidden"
>
  {/* Background Image Layer */}
<img
  src="/telecom.png"
  alt="Telecom Background"
  className="mx-auto mt-8 w-[300px] h-[200px] object-contain opacity-90"
/>


  {/* Content Layer */}
  <div className="relative z-10 px-4">
    <motion.h1
      className="text-4xl sm:text-6xl font-bold tracking-tight text-white"
      animate={{
        y: [0, -9, 0],
        scale: [1, 1.05, 1],
        transition: {
          duration: 1.2,
          ease: "easeInOut",
          repeat: Infinity,
        },
      }}
    >
      I Build Systems Where <br />
      <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
        Networks Meet Code
      </span>
    </motion.h1>

    <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-mono">
      Software Engineer @ Capgemini | Golang, LTE, Diameter, GTP-U, K8s. <br />
      Backend enthusiast crafting real-time telecom systems. <br />
      Ex-Full Stack @ Hexaware · PySpark | SQL | Azure. <br />
      Clean code, sharp protocols, blazing performance.
    </p>

    <p className="mt-4 text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
      Code. Connect. Scale. Repeat.
    </p>

    <div className="mt-8 flex justify-center gap-4">
      <MotionLink
        href="/projects"
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        className="relative bg-gradient-to-r from-purple-700 to-cyan-500 hover:from-purple-800 hover:to-cyan-600 text-white font-bold text-xl rounded-2xl px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out overflow-hidden"
      >
        <span className="relative z-10">Explore My Work</span>
        <span className="absolute inset-0 rounded-2xl border-[3px] border-transparent pointer-events-none animate-borderMagic"></span>
      </MotionLink>
    </div>
  </div>
</motion.div>


    
 {/* About Me - Stylish Experience Cards (One-liners) */}
<section className="mt-20 max-w-7xl mx-auto px-6 text-white">
  <motion.h2
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="text-4xl font-bold text-center mb-16"
  >
    <span className="bg-gradient-to-r from-blue-600 via-white/70 to-blue-600 bg-clip-text text-transparent">
      Experience
    </span>
  </motion.h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
    {/* A.S.E. Card */}
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.4 }}
      className="relative bg-gradient-to-br from-white/5 to-white/10 border border-white/20 backdrop-blur-xl p-6 rounded-3xl shadow-xl group"
    >
      <div className="absolute -inset-px z-0 rounded-3xl bg-gradient-to-r from-indigo-500 to-blue-500 opacity-20 group-hover:opacity-40 blur-lg transition-opacity duration-500" />
      <div className="relative z-10 space-y-2">
        <h3 className="text-xl font-bold">Associate Software Engineer</h3>
        <p className="text-sm text-white/70">Capgemini • Mar 2024 – Present</p>
        <p className="text-sm text-white/90">Shaping telecom infra with Golang microservices & 2K+ session Diameter stack.</p>
      </div>
    </motion.div>

    {/* Trainee Card */}
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.4 }}
      className="relative bg-gradient-to-br from-white/5 to-white/10 border border-white/20 backdrop-blur-xl p-6 rounded-3xl shadow-xl group"
    >
      <div className="absolute -inset-px z-0 rounded-3xl bg-gradient-to-r from-emerald-500 to-teal-400 opacity-20 group-hover:opacity-40 blur-lg transition-opacity duration-500" />
      <div className="relative z-10 space-y-2">
        <h3 className="text-xl font-bold">Software Engineer Trainee</h3>
        <p className="text-sm text-white/70">Hexaware • Nov 2023 – Feb 2024</p>
        <p className="text-sm text-white/90">Orchestrated big data pipelines & full-stack apps on Azure with PySpark.</p>
      </div>
    </motion.div>

    {/* Intern Card */}
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.4 }}
      className="relative bg-gradient-to-br from-white/5 to-white/10 border border-white/20 backdrop-blur-xl p-6 rounded-3xl shadow-xl group"
    >
      <div className="absolute -inset-px z-0 rounded-3xl bg-gradient-to-r from-pink-500 to-rose-500 opacity-20 group-hover:opacity-40 blur-lg transition-opacity duration-500" />
      <div className="relative z-10 space-y-2">
        <h3 className="text-xl font-bold">Software Engineer Intern</h3>
        <p className="text-sm text-white/70">Capgemini • Feb 2023 – May 2023</p>
        <p className="text-sm text-white/90">Crafted modular prod-grade modules with clean code under tight deadlines.</p>
      </div>
    </motion.div>
  </div>

  <div className="text-center mt-10">
    <MotionLink
      whileTap={{ scale: 0.95 }}
      href="/about"
      className="inline-block mt-4 bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold text-sm rounded-xl px-6 py-2 transition"
    >
      View Detailed Timeline
    </MotionLink>
  </div>
</section>



  {/* projects preview section */}

<section className="mt-32 max-w-7xl mx-auto px-6 text-white">
  <motion.h2
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="text-5xl font-extrabold text-center mb-20"
  >
    <span className="bg-gradient-to-r from-cyan-400 via-white/80 to-indigo-400 bg-clip-text text-transparent">
      Featured Projects
    </span>
  </motion.h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
    {[
     {
  title: "ChatSphere",
  desc: "A real-time chat app with image sharing, live status, JWT auth, and a responsive theme-toggled UI.",
  tags: ["React.js", "TailwindCSS", "DaisyUI", "Node.js", "MongoDB", "JWT", "Socket.IO"],
  colorFrom: "from-cyan-500",
  colorTo: "to-blue-500",
},
{
  title: "Task Tracker",
  desc: "A full-stack task manager with login, persistent CRUD ops, and a responsive UI built with Go and React.",
  tags: ["React.js", "Go", "MongoDB", "Fiber", "Chakra UI"],
  colorFrom: "from-yellow-500",
  colorTo: "to-orange-500",
},

{
  title: "Upcoming Backend Project",
  desc: "A backend-intensive application leveraging Golang, gRPC, Kubernetes, Docker, and more — focused on scalable microservices.",
  tags: ["Golang", "gRPC", "Kubernetes", "Docker"],
  colorFrom: "from-indigo-500",
  colorTo: "to-blue-500",
}

    ].map((project) => (
      <motion.div
        key={project.title}
        whileHover={{ y: -10, scale: 1.02 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="relative bg-gradient-to-br from-white/5 to-white/10 rounded-3xl border border-white/20 backdrop-blur-xl p-7 shadow-xl hover:shadow-blue-500/30 group overflow-hidden"
      >
        {/* glow ring */}
        <div className={`absolute -inset-px z-0 rounded-3xl bg-gradient-to-r ${project.colorFrom} ${project.colorTo} opacity-20 group-hover:opacity-40 blur-lg transition-opacity duration-500`} />

        <div className="relative z-10">
          <div className={`w-12 h-1 bg-gradient-to-r ${project.colorFrom} ${project.colorTo} rounded mb-5`} />
          <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
          <p className="text-sm text-white/80 mb-6 leading-relaxed">{project.desc}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-semibold text-blue-300 border border-blue-400/30 bg-blue-700/10 rounded-full hover:bg-blue-500/20 transition backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <MotionLink
            whileTap={{ scale: 0.95 }}
            href="/projects"
            className={`inline-block text-sm font-medium px-5 py-2 rounded-full bg-gradient-to-r ${project.colorFrom} ${project.colorTo} hover:brightness-110 transition-all duration-300 shadow-md`}
          >
            View Project
          </MotionLink>
        </div>
      </motion.div>
    ))}
  </div>
</section>


  {/* tech stack section */}
<section className="max-w-7xl mx-auto px-6 py-24 text-white">
  <motion.h2
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="text-4xl sm:text-5xl font-bold text-center mb-20"
  >
    <span className="bg-gradient-to-r from-blue-500 via-white to-blue-500 bg-clip-text text-transparent">
      Tech Stack
    </span>
  </motion.h2>

  <div className="grid md:grid-cols-2 gap-16">
    {[
      {
        title: "Frontend",
        color: "from-cyan-400 to-blue-500",
        icons: [
  
          { src: "/tech-icons/html5.svg", label: "html5" },
         { src: "/tech-icons/css3.svg", label: "CSS3" },
         { src: "/tech-icons/tailwindcss.svg", label: "Tailwind CSS" },
          { src: "/tech-icons/javascript.svg", label: "JavaScript" },
           { src: "/tech-icons/react.svg", label: "React" },
      
        ],
      },
      {
        title: "Backend",
        color: "from-purple-400 to-fuchsia-600",
        icons: [
       
            { src: "/tech-icons/go.svg", label: "GO" },
               { src: "/tech-icons/nodejs.svg", label: "Node.js" },
           { src: "/tech-icons/express.svg", label: "Express.js" },

        ],
      },
      {
        title: "Database",
        color: "from-orange-400 to-pink-500",
        icons: [
       
          { src: "/tech-icons/mysql.svg", label: "MySQL" },
          { src: "/tech-icons/mongodb.svg", label: "MongoDB" },
        ],
      },
      {
        title: "Tools & Platforms",
        color: "from-green-400 to-emerald-600",
        icons: [
          { src: "/tech-icons/docker.svg", label: "Docker" },
          { src: "/tech-icons/kubernetes.svg", label: "Kubernetes" },
          { src: "/tech-icons/azure.svg", label: "Azure" },
          { src: "/tech-icons/git.svg", label: "Git" },
          { src: "/tech-icons/gitlab.svg", label: "Gitlab" },
          { src: "/tech-icons/github.svg", label: "Github" },
        ],
      },
    ].map(({ title, color, icons }) => (
      <motion.div
        key={title}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
        className={`rounded-3xl p-8 shadow-xl backdrop-blur-md bg-white/5 border border-white/10 relative group overflow-hidden`}
      >
        {/* Glow Border */}
        <div
          className={`absolute -inset-px z-0 bg-gradient-to-r ${color} opacity-30 blur-xl group-hover:opacity-60 transition duration-500 rounded-3xl`}
        ></div>

        <div className="relative z-10">
          <h3
            className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${color} mb-8 text-center`}
          >
            {title}
          </h3>
          <div className="grid grid-cols-3 gap-8 justify-items-center">
            {icons.map(({ src, label }) => (
              <motion.div
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
                key={label}
                className="flex flex-col items-center p-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-lg shadow-md transition"
              >
                <img src={src} alt={label} className="w-12 h-12 mb-2" />
                <span className="text-sm font-medium text-white/90">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</section>



    </main>
  );
}
