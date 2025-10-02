import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Link } from "react-router-dom";

// === Icons ===
import ExperimentalIcon from "../icons/playgrounds/experiment.png";
import UnconventionalIcon from "../icons/playgrounds/rocket.png";
import WeirdIcon from "../icons/playgrounds/weird.png";
import EverythingIcon from "../icons/playgrounds/everthing.png";
import GlitchIcon from "../icons/playgrounds/glitch.png";
import Weird3DIcon from "../icons/playgrounds/3d.png";
import TypeIcon from "../icons/playgrounds/type.png";
import ChaosIcon from "../icons/playgrounds/chaos.png";

// === Project Images ===
import img1 from "../images/Playgrounds/Playground1.png";
import img2 from "../images/Playgrounds/Playground2.png";
import img3 from "../images/Playgrounds/Playground3.png";
import img4 from "../images/Playgrounds/Playground4.png";
import img5 from "../images/Playgrounds/Playground5.png";
import img6 from "../images/Playgrounds/Playground6.png";
import img7 from "../images/Playgrounds/Playground7.png";
import img8 from "../images/Playgrounds/Playground9.png";

// ---- Easing / timing ----
const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EASE_SMOOTH: [number, number, number, number] = [0.4, 0, 0.2, 1];

// ---- Variants ----
const fadePage: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: EASE_OUT } },
  exit: { opacity: 0, transition: { duration: 0.3, ease: EASE_OUT } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: EASE_SMOOTH },
  }),
};

const cardMotion: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.95 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.06,
      duration: 0.5,
      ease: EASE_SMOOTH,
    },
  }),
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.9,
    transition: { duration: 0.35, ease: EASE_SMOOTH },
  },
};

const Playground: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("everything");
  const [activeFilter, setActiveFilter] = useState<string>("everything");

  const categories = [
    { id: "everything", label: "Everything", icon: EverythingIcon, color: "bg-accent" },
    { id: "experimental", label: "Experimental", icon: ExperimentalIcon, color: "bg-pink-600" },
    { id: "unconventional", label: "Unconventional", icon: UnconventionalIcon, color: "bg-purple-600" },
    { id: "weird", label: "Weird", icon: WeirdIcon, color: "bg-green-600" },
  ];

  const filters = [
    { id: "everything", label: "Everything", icon: EverythingIcon },
    { id: "glitch", label: "Glitch Art", icon: GlitchIcon },
    { id: "3d", label: "3D Weird", icon: Weird3DIcon },
    { id: "type", label: "Type Experiments", icon: TypeIcon },
    { id: "chaos", label: "Abstract Chaos", icon: ChaosIcon },
  ];

  const projects = [
    { id: 1, title: "ERROR_404.exe", subtitle: "When reality.exe stops working", category: "experimental", filter: ["glitch"], image: img1 },
    { id: 2, title: "NEON DREAMS", subtitle: "Typography Chaos", category: "unconventional", filter: ["type"], image: img2 },
    { id: 3, title: "Impossible Geometries", subtitle: "Physics left the chat", category: "weird", filter: ["3d"], image: img3 },
    { id: 4, title: "Broken.Reality", subtitle: "System.malfunction.beautiful", category: "experimental", filter: ["chaos"], image: img4 },
    { id: 5, title: "Data Dreams", subtitle: "What AI sees when it sleeps", category: "unconventional", filter: ["type"], image: img5 },
    { id: 6, title: "WILD & FREE", subtitle: "Rebellious Letters", category: "weird", filter: ["type"], image: img6 },
    { id: 7, title: "Dreamscape Architecture", subtitle: "Building in the impossible", category: "experimental", filter: ["3d"], image: img7 },
    { id: 8, title: "Liquid Thoughts", subtitle: "Consciousness in motion", category: "unconventional", filter: ["chaos"], image: img8 },
  ].map((p) => ({ ...p, filter: [...p.filter, "everything"] }));

  const filteredProjects = projects.filter((p) => {
    const matchCat = activeCategory === "everything" || p.category === activeCategory;
    const matchFilter = activeFilter === "everything" || p.filter.includes(activeFilter);
    return matchCat && matchFilter;
  });

  return (
    <motion.div
      className="min-h-screen flex flex-col"
      variants={fadePage}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <main className="flex-1 py-10 sm:py-12 px-6 sm:px-8 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-10 sm:mb-14"
          >
            <motion.p
              variants={fadeUp}
              className="text-text-muted text-xs uppercase tracking-wider mb-3 sm:mb-4"
            >
              Playground
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-mono text-3xl sm:text-4xl md:text-6xl font-bold mb-5 sm:mb-7"
            >
              Creative Playground
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-text-secondary text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-6 sm:mb-9"
            >
              This is where I let my creativity run wild. Experimental, weird concepts,{" "}
              <span className="font-mono text-accent-green">digital chaos</span>
              , and everything that doesn't fit in a neat category.
            </motion.p>

            {/* Category Buttons - smaller */}
            <motion.div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-5 sm:mb-7">
              {categories.map((cat, i) => {
                const active = activeCategory === cat.id;
                return (
                  <motion.button
                    key={cat.id}
                    onClick={() => setActiveCategory(active ? "everything" : cat.id)}
                    className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[10px] sm:text-xs md:text-sm transition-all ${
                      active
                        ? `${cat.color} border-accent text-white shadow-md`
                        : "border-gray-600 text-text-secondary hover:border-white hover:text-white"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.22, ease: EASE_SMOOTH }}
                    variants={fadeUp}
                    custom={i}
                  >
                    <img
                      src={cat.icon}
                      alt={cat.label}
                      loading="lazy"
                      className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                    />
                    {cat.label}
                  </motion.button>
                );
              })}
            </motion.div>

            {/* Filters - smaller */}
            <motion.div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              {filters.map((f, i) => {
                const active = activeFilter === f.id;
                return (
                  <motion.button
                    key={f.id}
                    onClick={() => setActiveFilter(active ? "everything" : f.id)}
                    className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[10px] sm:text-xs md:text-sm transition-all ${
                      active
                        ? "bg-accent border-accent text-white shadow-md shadow-accent/40"
                        : "border-gray-600 text-text-secondary hover:border-white hover:text-white"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.22, ease: EASE_SMOOTH }}
                    variants={fadeUp}
                    custom={i + 1}
                  >
                    <img
                      src={f.icon}
                      alt={f.label}
                      loading="lazy"
                      className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                    />
                    {f.label}
                  </motion.button>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, i) => (
                  <motion.article
                    key={project.id}
                    custom={i}
                    variants={cardMotion}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    layout
                    whileHover={{
                      y: -6,
                      scale: 1.02,
                      transition: { duration: 0.22, ease: EASE_SMOOTH },
                    }}
                    className="group rounded-2xl overflow-hidden bg-secondary/40 border border-gray-700/30 hover:shadow-lg hover:shadow-accent/20 transition-all"
                  >
                    <Link to="/crystalvision" className="block">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                          className="w-full h-full object-cover will-change-transform"
                          initial={{ opacity: 0, scale: 1.05 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.6, ease: EASE_SMOOTH }}
                          whileHover={{ scale: 1.08 }}
                        />
                      </div>

                      <div className="p-5 sm:p-6 md:p-8">
                        <motion.h3
                          className="font-semibold text-text-muted text-sm sm:text-base md:text-lg mb-2"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.4, ease: EASE_SMOOTH }}
                        >
                          {project.title}
                        </motion.h3>
                        <motion.p
                          className="text-text-secondary text-xs sm:text-sm group-hover:text-accent transition-colors duration-300"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.4, ease: EASE_SMOOTH }}
                        >
                          {project.subtitle}
                        </motion.p>
                      </div>
                    </Link>
                  </motion.article>
                ))
              ) : (
                <p className="text-center text-text-secondary col-span-full">
                  No projects found.
                </p>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      {/* ---------------- FOOTER ---------------- */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: EASE_SMOOTH }}
        className="py-10 px-6 sm:px-8 md:px-12 border-t border-gray-800"
      >
        <div className="max-w-6xl mx-auto text-center text-text-muted text-sm max-sm:text-xs">
          © Elara Vance 2025. All rights reserved.
        </div>
      </motion.footer>
    </motion.div>
  );
};

export default Playground;
