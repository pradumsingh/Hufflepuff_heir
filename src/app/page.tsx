"use client";

import { ParticlesBackground } from "@/components/ParticlesBackground";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Code, ExternalLink } from "lucide-react";


export default function App() {
  const MotionLink = motion(Link);

  const projects = [
    {
      title: "ChatSphere - Real-time Chat App",
      description:
        "Live chat platform with JWT auth, image sharing, and status updates. Built with MERN, styled with TailwindCSS + DaisyUI, and deployed on Vercel.",
      link: "https://realtime-chat-application-1-htk3.onrender.com/",
      color: "text-blue-400",
      imageClass: "rotate-2",
      image: "/images/chatsphere.png",
    },
    {
      title: "Task Tracker - Go + React",
      description:
        "Full-stack app using Go (Fiber) and React.js for managing personal tasks. Includes MongoDB storage, Chakra UI, and secure auth.",
      link: "https://github.com/pradumsingh17/Task-Tracker",
      color: "text-green-400",
      image: "/images/tasktracker.png",
      imageClass: "-rotate-2",
    },
{
  title: "Movie Dux - Film Explorer",
  description:
    "Built a full-stack movie search and discovery app using React, Redux, and TMDB API. Features include search, filters, trending movies, and responsive UI.",
  link: "https://movie-dux-indol.vercel.app/",
  color: "text-yellow-400",
  image: "/images/moviedux.png",
  imageClass: "rotate-1",
}

  ];

  const techStack = [
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
         { src: "/tech-icons/mysql.svg", label: "MySQL" },
        { src: "/tech-icons/mongodb.svg", label: "MongoDB" },
      ],
    },
    // {
    //   title: "Database",
    //   color: "from-orange-400 to-pink-500",
    //   icons: [
    //     { src: "/tech-icons/mysql.svg", label: "MySQL" },
    //     { src: "/tech-icons/mongodb.svg", label: "MongoDB" },
    //   ],
    // },
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
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      {/* Background Particles */}
      <div className="fixed inset-0 -z-10 w-full h-full top-0 left-0">
     <ParticlesBackground></ParticlesBackground>
      </div>

{/* Hero Section – Text Only */}
<section className="w-full py-24">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="text-5xl font-extrabold text-center mb-20"
  >
    <Code className="inline-block w-6 h-6 mr-3 text-blue-400" />
    <span className="bg-gradient-to-r from-cyan-400 via-white/80 to-indigo-400 bg-clip-text text-transparent">
     Hi , I am Pradum Singh (Backend Engineer)
    </span>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="group flex flex-col items-center gap-10 bg-white/5 border border-white/10 rounded-3xl shadow-lg hover:shadow-blue-500/30 p-6 md:p-10 transition-all duration-300 relative overflow-hidden"
  >
    <div className="absolute inset-0 z-0 rounded-3xl bg-gradient-to-r from-indigo-500 to-blue-500 opacity-10 group-hover:opacity-30 blur-2xl transition duration-500" />

    {/* Text Content Only */}
    <div className="w-full text-center relative z-10">
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

      <p className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed font-mono">
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
          <span className="absolute inset-0 rounded-2xl border-[3px] border-transparent pointer-events-none animate-borderMagic" />
        </MotionLink>
      </div>
    </div>
  </motion.div>
</section>
<section className="max-w-7xl mx-auto px-6 py-24 text-white font-sans">




{/* Experience Section */}
<h2 className="text-5xl sm:text-6xl font-extrabold text-center mb-24 bg-gradient-to-r from-fuchsia-400 via-pink-500 to-yellow-400 text-transparent bg-clip-text drop-shadow-lg">
  Experience
</h2>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
  
  {/* Experience Card 1 - VinGC */}
  <div className="group relative bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-8 rounded-3xl border border-zinc-700 hover:border-blue-500 transition duration-300 hover:scale-[1.03] shadow-xl hover:shadow-blue-500/30 backdrop-blur-md">
    <div className="absolute -top-5 -left-5 w-16 h-16 bg-blue-500/30 blur-2xl rounded-full group-hover:scale-110 transition" />
    <h3 className="text-3xl font-bold text-blue-400 group-hover:text-blue-300 transition">
      Software Engineer Intern – VinGC (5G/4G MME Team)
    </h3>
    <p className="text-sm text-zinc-400 mt-1 italic">May 2024 – Present • Remote</p>
    <ul className="mt-6 space-y-3 text-zinc-200 text-[16px] leading-relaxed tracking-wide">
      <li>🛰️ Built 5G/4G MME simulator in Golang with custom Diameter protocol handling (CLR, ISD, AVP).</li>
      <li>⚙️ Engineered JSON-based UE session automation with <span className="text-blue-400 font-medium">sub-500ms</span> latency response.</li>
      <li>📦 Orchestrated containerized infra with Docker, Jenkins, and K8s on Linux.</li>
      <li className="text-zinc-400 text-sm pt-2">🛠 Tools: Golang, Wireshark, Git, Jenkins, K8s</li>
    </ul>
  </div>

  {/* Experience Card 2 - Data Engineering Intern */}
  <div className="group relative bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-8 rounded-3xl border border-zinc-700 hover:border-green-400 transition duration-300 hover:scale-[1.03] shadow-xl hover:shadow-green-400/30 backdrop-blur-md">
    <div className="absolute -top-5 -right-5 w-16 h-16 bg-green-500/30 blur-2xl rounded-full group-hover:scale-110 transition" />
    <h3 className="text-3xl font-bold text-green-400 group-hover:text-green-300 transition">
      Data Engineering Intern
    </h3>
    <p className="text-sm text-zinc-400 mt-1 italic">Jan 2024 – Apr 2024 • Remote</p>
    <ul className="mt-6 space-y-3 text-zinc-200 text-[16px] leading-relaxed tracking-wide">
      <li>🚀 Developed scalable ETL pipelines in PySpark for multi-million row datasets.</li>
      <li>🔗 Integrated Azure Blob Storage & Data Factory with performance-tuned Delta Lake.</li>
      <li>📊 Built real-time analytics dashboards in Power BI to drive product insights.</li>
      <li className="text-zinc-400 text-sm pt-2">🛠 Tools: PySpark, Azure, SQL, Power BI</li>
    </ul>
  </div>

  {/* Experience Card 3 - Capgemini */}
  <div className="group relative bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-8 rounded-3xl border border-zinc-700 hover:border-yellow-400 transition duration-300 hover:scale-[1.03] shadow-xl hover:shadow-yellow-400/30 backdrop-blur-md lg:col-span-2">
    <div className="absolute -top-5 -left-5 w-16 h-16 bg-yellow-500/30 blur-2xl rounded-full group-hover:scale-110 transition" />
    <h3 className="text-3xl font-bold text-yellow-400 group-hover:text-yellow-300 transition">
      Associate Software Engineer – Capgemini Engineering
    </h3>
    <p className="text-sm text-zinc-400 mt-1 italic">Mar 2024 – Present • Gurgaon, Haryana</p>
    <ul className="mt-6 space-y-3 text-zinc-200 text-[16px] leading-relaxed tracking-wide">
      <li>🧠 Developed scalable REST APIs for LTE MME microservices (Attach, Idle, NB-IoT, X2 Handover, NIDD).</li>
      <li>📡 Designed async UDP GTP-U layer over S11 with Goroutines, buffered channels—28% boost in throughput.</li>
      <li>🔄 Created Diameter TCP framework in Go supporting 2K+ concurrent sessions with <span className="text-yellow-400 font-medium">sub-500ms</span> latency.</li>
      <li>🧪 Boosted test coverage by 22% using functional/unit tests integrated with CI/CD and K8s validation.</li>
      <li>👨‍🏫 Conducted KT sessions on telecom/Golang; mentored juniors via debugging & architecture walkthroughs.</li>
      <li className="text-zinc-400 text-sm pt-2">🛠 Tools: Golang, K8s, Jenkins, Wireshark</li>
    </ul>
  </div>

</div>


</section>

      {/* Projects Section */}
      <section className="mt-32 max-w-7xl mx-auto px-6 text-white relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold text-center mb-20"
        >
          <Code className="inline-block w-6 h-6 mr-3 text-blue-400" />
          <span className="bg-gradient-to-r from-cyan-400 via-white/80 to-indigo-400 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </motion.h2>

        <div className="flex flex-col gap-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group flex flex-col md:flex-row items-center gap-10 bg-white/5 border border-white/10 rounded-3xl shadow-lg hover:shadow-blue-500/30 p-6 md:p-10 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 z-0 rounded-3xl bg-gradient-to-r from-indigo-500 to-blue-500 opacity-10 group-hover:opacity-30 blur-2xl transition duration-500" />

              <div className="md:w-1/2 relative z-10">
                <h3 className={`text-3xl font-semibold ${project.color}`}>
                  {project.title}
                </h3>
                <p className="mt-4 text-neutral-300 leading-relaxed text-[17px]">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className={`mt-6 inline-flex items-center gap-2 ${project.color} font-medium hover:underline`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Deployed Link <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <motion.div className="md:w-1/2 flex justify-center relative z-10">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  width={350}
                  height={200}
                  className={`rounded-xl shadow-md transition-all duration-500 ease-in-out transform ${project.imageClass}`}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>


    <section className="max-w-6xl mx-auto px-4 py-20 text-white">
  <motion.h2
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-4xl sm:text-5xl font-bold text-center mb-16"
  >
    <span className="bg-gradient-to-r from-blue-500 via-white to-blue-500 bg-clip-text text-transparent">
      Tech Stack
    </span>
  </motion.h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
    {techStack.map(({ title, color, icons }) => (
      <motion.div
        key={title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.015 }}
        className="rounded-2xl p-6 shadow-lg backdrop-blur-md bg-white/5 border border-white/10 relative group overflow-hidden"
      >
        <div
          className={`absolute -inset-px z-0 bg-gradient-to-r ${color} opacity-20 blur-lg group-hover:opacity-40 transition duration-400 rounded-2xl`}
        />
        <div className="relative z-10">
          <h3
            className={`text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r ${color} mb-5 text-center`}
          >
            {title}
          </h3>
          <div className="grid grid-cols-3 gap-4 justify-items-center">
            {icons.map(({ src, label }) => (
              <motion.div
                whileHover={{ scale: 1.07 }}
                transition={{ type: "spring", stiffness: 250 }}
                key={label}
                className="flex flex-col items-center p-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-md shadow-md transition"
              >
                <Image
                  src={src}
                  alt={label}
                  width={40}
                  height={40}
                  className="mb-1"
                />
                <span className="text-xs font-medium text-white/90 text-center">
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
