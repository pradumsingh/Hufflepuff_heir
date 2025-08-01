"use client";
import { motion } from "framer-motion";
import { Code, ExternalLink } from "lucide-react";
import { useEffect, useRef } from "react";

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
    title: "MME Simulator - LTE Core",
    description:
      "Worked on telecom LTE MME Node (Golang). Implemented Diameter/UDP interfaces with 2K+ session support, <500ms response time.",
    link: "https://github.com/pradumsingh17",
    color: "text-rose-400",
    image: "/images/mmep.png",
    imageClass: "rotate-1",
  },
];

export default function ProjectPage() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let stars = [];

    const createStars = () => {
      stars = Array.from({ length: 100 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.5,
        alpha: Math.random(),
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.globalAlpha = star.alpha;
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
      });
    };

    const animate = () => {
      stars.forEach((star) => {
        star.y += 0.3;
        if (star.y > window.innerHeight) {
          star.y = 0;
          star.x = Math.random() * window.innerWidth;
        }
      });
      draw();
      requestAnimationFrame(animate);
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createStars();
    };

    resize();
    window.addEventListener("resize", resize);
    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ width: "100%", height: "100%", background: "black" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-indigo-900/60 to-zinc-900/80 z-0" />
      <motion.section
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="max-w-6xl mx-auto w-full px-6 py-24 relative z-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold mb-20 text-center tracking-tight text-neutral-100"
        >
          <Code className="inline-block w-6 h-6 mr-3 text-blue-400" />
          <span className="bg-gradient-to-r from-blue-400 via-white/80 to-indigo-400 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </motion.h2>

        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group mb-20 flex flex-col md:flex-row items-center gap-10 bg-white/5 border border-white/10 rounded-3xl shadow-lg hover:shadow-blue-500/20 p-6 md:p-10 transition-all duration-300 relative overflow-hidden"
          >
            {/* glow border pulse */}
            <div className="absolute inset-0 z-0 rounded-3xl bg-gradient-to-r from-indigo-500 to-blue-500 opacity-10 group-hover:opacity-30 blur-2xl transition duration-500" />

            {/* Text content */}
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

            {/* Image preview */}
            <motion.div className="md:w-1/2 flex justify-center relative z-10">
              <motion.img
                src={project.image}
                alt={`${project.title} screenshot`}
                className={`w-full max-w-xs sm:max-w-sm rounded-xl shadow-md transition-all duration-500 ease-in-out transform ${project.imageClass}`}
                style={{ objectFit: "cover" }}
                whileHover={{
                  scale: 1.08,
                  rotateY: 5,
                  rotateX: 2,
                  boxShadow: "0 25px 40px rgba(0,0,0,0.35)",
                }}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.section>
    </main>
  );
}
