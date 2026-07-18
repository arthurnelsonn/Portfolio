import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageIcon, X, ChevronLeft, ChevronRight, GitFork, ExternalLink } from "lucide-react";
import { PROJECTS } from "../data/projects";

const TECH_LOGOS = {
  "React":        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Node.js":      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg",
  "PostgreSQL":   "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg",
  "Python":       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg",
  "TensorFlow":   "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  "Pandas":       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg",
  "Next.js":      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-plain.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "Supabase":     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-plain.svg",
  "JavaScript":   "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
  "TypeScript":   "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg",
  "HTML":         "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
  "CSS":          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
  "Java":         "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain.svg",
  "MySQL":        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  "Laravel":      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
  "MongoDB":      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
  "Docker":       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg",
  "Git":          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
};

const cardVariants = {
  hidden:  { opacity: 0, y: 32 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.45, ease: "easeOut" } }),
};

function ImageCarousel({ images, title, height = "h-48", contain = false }) {
  const [idx, setIdx] = useState(0);
  const hasImages = images?.length > 0;
  const multi = images?.length > 1;

  const prev = (e) => { e.stopPropagation(); setIdx((i) => (i - 1 + images.length) % images.length); };
  const next = (e) => { e.stopPropagation(); setIdx((i) => (i + 1) % images.length); };

  return (
    <div className={`relative ${height} bg-gray-900 flex items-center justify-center overflow-hidden`}>
      {hasImages ? (
        <AnimatePresence mode="wait">
          <motion.img
            key={idx}
            src={images[idx]}
            alt={`${title} ${idx + 1}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.25 }}
            className={`w-full h-full absolute inset-0 ${contain ? "object-contain" : "object-cover"}`}
          />
        </AnimatePresence>
      ) : (
        <ImageIcon className="w-12 h-12 text-gray-600" strokeWidth={1.5} />
      )}

      {multi && (
        <>
          <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white flex items-center justify-center transition-colors z-10">
            <ChevronLeft className="w-4 h-4 text-gray-900" />
          </button>
          <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white flex items-center justify-center transition-colors z-10">
            <ChevronRight className="w-4 h-4 text-gray-900" />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <button key={i} onClick={(e) => { e.stopPropagation(); setIdx(i); }}
                className={`w-1.5 h-1.5 transition-colors ${i === idx ? "bg-white" : "bg-white/40"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="bg-gray-950">
      <div className="max-w-7xl mx-auto px-8 py-20 sm:py-24">

<div className="mb-14 border-l-4 border-white pl-8">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500">Portfolio</span>
          <h2 className="mt-2 text-4xl sm:text-5xl font-black text-white tracking-tight">Projects</h2>
          <p className="mt-3 text-lg text-gray-400">Here are the projects that I have built.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={cardVariants}
            >
              <ProjectCard project={project} onClick={() => setSelected(project)} />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({ project, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group h-full flex flex-col bg-gray-900 border border-gray-800 hover:border-white transition-all duration-300 overflow-hidden cursor-pointer"
    >
      <div className="relative">
        <ImageCarousel images={project.thumbnail ? [project.thumbnail] : project.images} title={project.title} height="h-48" />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center pointer-events-none">
          <span className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-white text-sm font-bold uppercase tracking-widest border border-white px-5 py-2">
            View Details
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-6 border-l-4 border-transparent group-hover:border-white transition-all duration-300">
        <h3 className="font-black text-white text-xl leading-snug tracking-tight">{project.title}</h3>
        <p className="mt-2 text-sm text-gray-400 leading-relaxed flex-1">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-3">
          {project.tech.map((t) =>
            TECH_LOGOS[t] ? (
              <img
                key={t} src={TECH_LOGOS[t]} alt={t} title={t}
                className="w-6 h-6 object-contain opacity-40 hover:opacity-80 transition-opacity"
                style={{ filter: "grayscale(100%) invert(1)" }}
              />
            ) : (
              <span key={t} className="text-xs font-medium text-gray-500 border border-gray-700 px-2.5 py-1">{t}</span>
            )
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto"
      >
        <div className="relative">
          <ImageCarousel images={project.images} title={project.title} height="h-[500px]" contain />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 bg-gray-900 flex items-center justify-center hover:bg-black transition-colors z-20"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>

        <div className="p-10 border-l-4 border-gray-900">
          <h2 className="text-3xl font-black text-gray-900 tracking-tight">{project.title}</h2>
          <p className="mt-4 text-gray-500 text-base leading-relaxed">{project.fullDescription}</p>

          <div className="mt-8">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">Tech Stack</h4>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((t) => (
                <div key={t} className="flex items-center gap-2.5 border-2 border-gray-200 px-4 py-2.5 hover:border-gray-900 transition-colors">
                  {TECH_LOGOS[t] && (
                    <img src={TECH_LOGOS[t]} alt={t} className="w-5 h-5 object-contain" style={{ filter: "grayscale(100%) contrast(0.8)" }} />
                  )}
                  <span className="text-sm font-semibold text-gray-700">{t}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex items-center gap-3">
            {project.repo && (
              <a
                href={project.repo} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 text-sm font-bold uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-colors"
              >
                <GitFork className="w-4 h-4" /> GitHub Repo
              </a>
            )}
            {project.link && project.link !== "#" && (
              <a
                href={project.link} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white text-sm font-bold uppercase tracking-widest hover:bg-black transition-colors"
              >
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
