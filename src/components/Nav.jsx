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
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-100/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-8 h-24 flex items-center justify-between">

        {/* Logo / Name */}
        <button
          onClick={() => handleNav("hero")}
          className="flex items-center gap-2 group"
        >
          <span className="text-xl font-bold text-gray-900">
            Arthur's Portfolio
          </span>
        </button>

        {/* Desktop nav — pill container */}
        <nav className="hidden md:flex items-center bg-gray-50/80 border border-gray-100 rounded-2xl px-2 py-2 gap-1">
          {navItems.map((s) => (
            <button
              key={s.id}
              onClick={() => handleNav(s.id)}
              className="relative px-5 py-2 rounded-xl text-base font-medium transition-colors"
            >
              {activeSection === s.id && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-white rounded-xl shadow-sm border border-gray-100"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className={`relative z-10 transition-colors ${activeSection === s.id ? "text-gray-900 font-semibold" : "text-gray-500 hover:text-gray-900"}`}>
                {s.label}
              </span>
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-1"
          >
            {navItems.map((s) => (
              <button
                key={s.id}
                onClick={() => handleNav(s.id)}
                className={`text-left px-5 py-3 rounded-xl text-base font-medium transition-colors ${
                  activeSection === s.id
                    ? "bg-gray-100 text-gray-900 font-semibold"
                    : "text-gray-600 hover:bg-gray-50"
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
