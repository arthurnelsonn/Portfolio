import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { SECTIONS } from "../data/sections";

export default function Nav({ activeSection, onNavigate }) {
  const [open, setOpen] = useState(false);

  const handleNav = (id) => {
    onNavigate(id);
    setOpen(false);
  };

  const navItems = SECTIONS.filter((s) => s.id !== "hero");

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b-2 border-gray-900">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

        <button onClick={() => handleNav("hero")} className="group flex items-center gap-2">
          <span className="text-lg font-black tracking-tight text-gray-900 uppercase">
            Arthur Nelson
          </span>
          <span className="w-2 h-2 rounded-full bg-gray-900 group-hover:scale-150 transition-transform" />
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((s) => (
            <button
              key={s.id}
              onClick={() => handleNav(s.id)}
              className="relative px-5 py-2 text-sm font-semibold uppercase tracking-widest transition-colors"
            >
              {activeSection === s.id && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-gray-900 rounded-none"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className={`relative z-10 transition-colors ${activeSection === s.id ? "text-white" : "text-gray-500 hover:text-gray-900"}`}>
                {s.label}
              </span>
            </button>
          ))}
        </nav>

        <button
          className="md:hidden w-10 h-10 flex items-center justify-center border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t-2 border-gray-900 bg-white px-6 py-4 flex flex-col gap-1"
          >
            {navItems.map((s) => (
              <button
                key={s.id}
                onClick={() => handleNav(s.id)}
                className={`text-left px-5 py-3 text-sm font-semibold uppercase tracking-widest transition-colors ${
                  activeSection === s.id
                    ? "bg-gray-900 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {s.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
