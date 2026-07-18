import { motion } from "framer-motion";
import { GraduationCap, CalendarDays } from "lucide-react";
import { EDUCATION } from "../data/education";

export default function Education() {
  return (
    <section id="education" className="bg-gray-950">
      <div className="max-w-7xl mx-auto px-8 py-20 sm:py-24">

<div className="mb-14 border-l-4 border-white pl-8">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500">Background</span>
        <h2 className="mt-2 text-4xl sm:text-5xl font-black text-white tracking-tight">Education</h2>
        <p className="mt-3 text-gray-400">My academic background.</p>
      </div>

      <div className="relative ml-6 max-w-7xl mx-auto px-8">

        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{ originY: 0 }}
          className="absolute left-0 top-2 bottom-2 w-0.5 bg-gray-600"
        />

        <div className="flex flex-col gap-10">
          {EDUCATION.map((edu, i) => (
            <div key={edu.school} className="relative flex items-start gap-8 pl-10">

              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.35, ease: "easeOut" }}
                className="absolute left-0 -translate-x-1/2 top-8 z-10 flex items-center justify-center"
              >
                <span className="w-4 h-4 bg-white block" />
                <motion.span
                  animate={{ scale: [1, 2.5], opacity: [0.3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut", delay: i * 0.3 }}
                  className="absolute w-4 h-4 bg-gray-500"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: 0.25 + i * 0.15, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group w-full bg-gray-800 border border-gray-700 hover:border-gray-400 transition-all duration-300 overflow-hidden relative"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-white" />

                <div className="flex items-center gap-6 px-8 pt-8 pb-6 border-b border-gray-700">
                  <div className="w-32 h-32 border border-gray-700 group-hover:border-gray-400 transition-colors flex items-center justify-center p-2 flex-shrink-0 bg-white">
                    <img src={edu.logo} alt={edu.school} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="font-black text-white text-xl leading-tight">{edu.school}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <GraduationCap className="w-5 h-5 text-gray-400 flex-shrink-0" strokeWidth={2} />
                      <p className="text-gray-300 text-base font-semibold">{edu.degree}</p>
                    </div>
                  </div>

                  <div className="ml-auto flex items-center gap-2 bg-white text-gray-900 text-sm font-bold px-4 py-2 self-start flex-shrink-0 uppercase tracking-wider">
                    <CalendarDays className="w-4 h-4" strokeWidth={2} />
                    {edu.years}
                  </div>
                </div>

                <div className="px-8 py-5">
                  <p className="text-base text-gray-400 leading-relaxed">{edu.detail}</p>
                </div>
              </motion.div>

            </div>
          ))}
        </div>

      </div>
    </div>
    </section>
  );
}
