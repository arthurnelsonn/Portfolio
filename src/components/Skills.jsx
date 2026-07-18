import { motion } from "framer-motion";
import { SKILLS } from "../data/skills";

const cardVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.45, ease: "easeOut" } }),
};

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-950">
      <div className="max-w-7xl mx-auto px-8 py-20 sm:py-24">

<div className="mb-14 border-l-4 border-white pl-8">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500">Expertise</span>
          <h2 className="mt-2 text-4xl sm:text-5xl font-black text-white tracking-tight">Skills</h2>
          <p className="mt-3 text-lg text-gray-400">What I bring to a team.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {SKILLS.map(({ category, icon: Icon, items }, i) => (
            <motion.div
              key={category}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={cardVariants}
              className="group bg-gray-900 border border-gray-800 hover:border-white transition-all duration-300 p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-gray-900" strokeWidth={1.75} />
                </div>
                <h3 className="font-bold text-white text-base uppercase tracking-wide">{category}</h3>
              </div>

              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-base text-gray-400">
                    <span className="w-1.5 h-1.5 bg-white flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
