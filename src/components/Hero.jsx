import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useEffect, useState } from "react";

function Typewriter({ words }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];
    let timeout;
    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIndex, words]);

  return (
    <span className="text-gray-900">
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-0.5 h-[1em] bg-gray-900 ml-1 align-middle"
      />
    </span>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const SOCIALS = [
  { href: "https://www.linkedin.com/in/arthur-nelson-kings-pranoto-041765274/", icon: LinkedInIcon, label: "LinkedIn" },
  { href: "https://github.com/arthurnelsonn",                                   icon: GitHubIcon,   label: "GitHub"   },
  { href: "https://www.instagram.com/arthurrnelson/",                           icon: InstagramIcon,label: "Instagram"},
  { href: "mailto:arthurnkp1805@gmail.com",                                     icon: Mail,         label: "Email"    },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" },
});

export default function Hero() {
  return (
    <section id="hero" className="max-w-7xl mx-auto px-8 py-20 sm:py-28">

      {/* Section number */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">

        {/* Text */}
        <div className="flex-1 text-center md:text-left border-l-4 border-gray-900 pl-8">
          <motion.p {...fadeUp(0)} className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-4">
            Hello, I'm Arthur Nelson
          </motion.p>

          <motion.h1 {...fadeUp(0.1)} className="text-5xl sm:text-6xl font-black text-gray-900 leading-tight tracking-tight">
            I am into{" "}
            <Typewriter words={["Software Engineering", "Building Websites", "Problem Solving", "Design"]} />
          </motion.h1>

          <motion.div {...fadeUp(0.2)} className="mt-6 space-y-3">
            <p className="text-gray-500 text-lg leading-relaxed">
              Computer Science undergraduate at BINUS University, focused on system analysis.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed">
              I build dynamic websites as a hobby and thrive in collaborative environments — driven to architect efficient systems and bring creative web projects to life.
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.3)} className="mt-10 flex items-center justify-center md:justify-start gap-3 flex-wrap">
            {SOCIALS.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 flex items-center justify-center border-2 border-gray-200 text-gray-500 hover:border-gray-900 hover:text-gray-900 hover:bg-gray-50 transition-all"
              >
                <Icon className="w-5 h-5" strokeWidth={1.75} />
              </a>
            ))}

            <a
              href="/CV_Arthur Nelson Kings Pranoto.pdf"
              download
              className="ml-1 px-6 py-3 bg-gray-900 text-white text-sm font-bold uppercase tracking-widest hover:bg-black transition-colors"
            >
              Resume ↗
            </a>
          </motion.div>
        </div>

        {/* Avatar — stacked offset frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex-shrink-0 relative"
        >
          <div className="absolute inset-0 translate-x-4 translate-y-4 border-2 border-gray-300" />
          <div className="absolute inset-0 translate-x-2 translate-y-2 bg-gray-100" />
          <img
            src="/Arthur_Profile.jpg"
            alt="Arthur Nelson"
            className="relative w-64 h-64 sm:w-80 sm:h-80 object-cover border-2 border-gray-900"
          />
        </motion.div>

      </div>
    </section>
  );
}
