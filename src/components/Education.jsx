import { motion } from "framer-motion";
import { GraduationCap, CalendarDays } from "lucide-react";
import { EDUCATION } from "../data/education";

export default function Education() {
  return (
    <section id="education" className="max-w-7xl mx-auto px-8 py-20 sm:py-24">

      <div className="mb-14">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Background</span>
        <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
          Education
          <span className="block w-12 h-1 bg-gray-900 rounded-full mt-3" />
        </h2>
        <p className="mt-3 text-gray-500">My academic background.</p>
      </div>

      <div className="relative ml-6">

        {/* Animated vertical line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{ originY: 0 }}
          className="absolute left-0 top-2 bottom-2 w-0.5 bg-gradient-to-b from-gray-400 via-gray-300 to-gray-200"
        />

        <div className="flex flex-col gap-10">
          {EDUCATION.map((edu, i) => (
            <div key={edu.school} className="relative flex items-start gap-8 pl-10">

              {/* Dot */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.35, ease: "easeOut" }}
                className="absolute left-0 -translate-x-1/2 top-8 z-10 flex items-center justify-center"
              >
                <span className="w-4 h-4 rounded-full bg-gray-900 shadow-lg block" />
                <motion.span
                  animate={{ scale: [1, 2], opacity: [0.4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut", delay: i * 0.3 }}
                  className="absolute w-4 h-4 rounded-full bg-gray-500"
                />
              </motion.div>

              {/* Card */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: 0.25 + i * 0.15, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group w-full bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                {/* Accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-400 to-gray-600 rounded-l-2xl" />

                {/* Logo + header */}
                <div className="flex items-center gap-6 px-8 pt-8 pb-6 border-b border-gray-50">
                  <div className="w-32 h-32 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center p-2 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <img src={edu.logo} alt={edu.school} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-xl leading-tight">{edu.school}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <GraduationCap className="w-5 h-5 text-gray-500 flex-shrink-0" strokeWidth={2} />
                      <p className="text-gray-700 text-base font-semibold">{edu.degree}</p>
                    </div>
                  </div>

                  <div className="ml-auto flex items-center gap-2 bg-gray-100 text-gray-700 text-sm font-semibold px-4 py-2 rounded-full self-start flex-shrink-0">
                    <CalendarDays className="w-4 h-4" strokeWidth={2} />
                    {edu.years}
                  </div>
                </div>

                {/* Body */}
                <div className="px-8 py-5">
                  <p className="text-base text-gray-500 leading-relaxed">{edu.detail}</p>
                </div>
              </motion.div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
