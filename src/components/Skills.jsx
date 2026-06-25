import { motion } from "framer-motion";
import { SKILLS } from "../data/skills";

const cardVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.45, ease: "easeOut" } }),
};

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-8 py-20 sm:py-24">

        <div className="mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-400">Expertise</span>
          <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Skills
            <span className="block w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-3" />
          </h2>
          <p className="mt-3 text-lg text-gray-500">What I bring to a team.</p>
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
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-indigo-600" strokeWidth={1.75} />
                </div>
                <h3 className="font-semibold text-gray-900 text-base">{category}</h3>
              </div>

              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-base text-gray-500">
                    <span className="w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0" />
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
