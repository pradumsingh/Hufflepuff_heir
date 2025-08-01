"use client";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Code2,
} from "lucide-react";

export default function AboutPage() {
  const cards = [
    {
      icon: <Briefcase className="text-green-400 w-6 h-6 drop-shadow-glow" />,
      title: "Experience",
      content: (
        <div className="space-y-6 text-white/90 text-base leading-relaxed">
          <div>
            <h4 className="text-green-300 font-semibold text-lg">
              Capgemini Engineering · Associate Software Engineer
            </h4>
            <p className="text-white/70 text-sm italic">Mar 2024 – Present</p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Built scalable REST APIs in Golang for LTE procedures.</li>
              <li>Developed GTP-U (UDP) system over S11 interface.</li>
              <li>Modular Diameter handler with TCP failover logic.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-green-300 font-semibold text-lg">
              Hexaware Technologies · Software Engineer Trainee
            </h4>
            <p className="text-white/70 text-sm italic">Nov 2023 – Feb 2024</p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Processed large datasets using PySpark & Databricks.</li>
              <li>Built backend logic in Python for telecom clients.</li>
              <li>Optimized SQL workflows for reporting pipelines.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-green-300 font-semibold text-lg">
              Capgemini · Software Engineering Intern
            </h4>
            <p className="text-white/70 text-sm italic">Feb 2023 – May 2023</p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Delivered production-grade Golang modules.</li>
              <li>Worked in agile teams on bug triage and release testing.</li>
              <li>Contributed to memory and concurrency optimization.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      icon: <GraduationCap className="text-blue-400 w-6 h-6 drop-shadow-glow" />,
      title: "Education",
      content: (
        <div className="text-white/90 text-base leading-relaxed space-y-3">
          <div>
            <h4 className="text-blue-300 font-semibold text-lg">
              B.Tech · Electronics and Communication
            </h4>
            <p className="text-white/70 text-sm italic">
              AKTU · 2019 – 2023
            </p>
            <p>Graduated with distinction, 8.3 CGPA</p>
          </div>
          <div>
            <h4 className="text-blue-300 font-semibold text-lg">
              High School · PCM
            </h4>
            <p className="text-white/70 text-sm italic">
              K.V. School · 2017 – 2019
            </p>
            <p>Scored 88.4% in CBSE Board Exams</p>
          </div>
        </div>
      ),
    },
    {
      icon: <Code2 className="text-yellow-400 w-6 h-6 drop-shadow-glow" />,
      title: "Tech Stack",
      content: (
        <ul className="list-disc list-inside text-white/90 text-base space-y-1">
          <li>Languages: Golang, Python, JavaScript, SQL, C++</li>
          <li>Frameworks: React, Node.js, Express</li>
          <li>Tools: Docker, Kubernetes, Jenkins, Git</li>
          <li>Cloud: Azure Databricks, GCP (basic)</li>
          <li>Telecom: LTE MME, Diameter, GTP-U, NAS, S1/X2/NB-IoT</li>
        </ul>
      ),
    },
  ];

  return (
    <main className="relative w-screen min-h-screen text-white font-sans overflow-x-hidden overflow-y-auto">
      {/* Background gradient only (no canvas) */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-black/80 via-indigo-900/70 to-blue-900/80" />

      {/* Content */}
      <div className="relative z-10 w-full min-h-screen px-6 sm:px-12 py-24 flex flex-col items-center justify-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text drop-shadow-lg">
            Pradum Singh
          </h1>
          <p className="text-white/70 italic mt-3 text-base sm:text-lg font-mono">
            Software Engineer · LTE & 5G Core · Golang · Cloud-Native Telecom
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
              className="relative p-6 border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-cyan-500/40 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                {card.icon}
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {card.title}
                </h3>
              </div>
              <div>{card.content}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
