import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
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

// === Framer Motion Variants ===
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const Playground: React.FC = () => {
  // default both to "everything"
  const [activeCategory, setActiveCategory] = useState<string>("everything");
  const [activeFilter, setActiveFilter] = useState<string>("everything");

  // key to force remount/refresh of the grid (fixes the "click once then nothing" issue)
  const [gridKey, setGridKey] = useState<number>(0);

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

  // === Projects ===
  const projects = [
    { id: 1, title: "ERROR_404.exe", subtitle: "When reality.exe stops working", category: "experimental", filter: ["glitch"], image: img1 },
    { id: 2, title: "NEON DREAMS", subtitle: "Typography Chaos", category: "unconventional", filter: ["type"], image: img2 },
    { id: 3, title: "Impossible Geometries", subtitle: "Physics left the chat", category: "weird", filter: ["3d"], image: img3 },
    { id: 4, title: "Broken.Reality", subtitle: "System.malfunction.beautiful", category: "experimental", filter: ["chaos"], image: img4 },
    { id: 5, title: "Data Dreams", subtitle: "What AI sees when it sleeps", category: "unconventional", filter: ["type"], image: img5 },
    { id: 6, title: "WILD & FREE", subtitle: "Rebellious Letters", category: "weird", filter: ["type"], image: img6 },
    { id: 7, title: "Dreamscape Architecture", subtitle: "Building in the impossible", category: "experimental", filter: ["3d"], image: img7 },
    { id: 8, title: "Liquid Thoughts", subtitle: "Consciousness in motion", category: "unconventional", filter: ["chaos"], image: img8 },
  ].map((p) => ({ ...p, filter: [...p.filter, "everything"] })); // ensure "everything" always matches

  // Click handlers (they also bump gridKey to force a remount/refresh)
  const handleCategoryClick = (id: string) => {
    // if clicking same category, still force a refresh (gridKey++) so animations / layout re-run
    if (id === activeCategory) {
      setGridKey((k) => k + 1);
      return;
    }
    setActiveCategory(id);
    setGridKey((k) => k + 1);
  };

  const handleFilterClick = (id: string) => {
    // if clicking same filter, force refresh so the grid re-animates
    if (id === activeFilter) {
      setGridKey((k) => k + 1);
      return;
    }
    setActiveFilter(id);
    setGridKey((k) => k + 1);
  };

  // === Filtering logic
  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === "everything" || project.category === activeCategory;
    const matchesFilter = activeFilter === "everything" || project.filter.includes(activeFilter);
    return matchesCategory && matchesFilter;
  });

  return (
    <div className="min-h-screen py-10 sm:py-12 px-3 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="text-center mb-10 sm:mb-14"
        >
          <motion.p variants={fadeUp} className="text-text-muted text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
            Playground
          </motion.p>

          <motion.h1 variants={fadeUp} className="font-mono text-2xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-5">
            Welcome to the <br />
            <span className="text-accent-green">Playground</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-text-secondary text-sm sm:text-lg max-w-2xl mx-auto mb-5 sm:mb-7 px-2">
            This is where I let my creativity run wild. Experimental art, weird concepts,{" "}
            <span className="font-mono text-accent-green">digital chaos</span>, and everything that doesn't fit in a neat category.
          </motion.p>

          {/* Category Buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCategoryClick(cat.id)}
                aria-pressed={activeCategory === cat.id}
                className={`group flex items-center gap-2 px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? `${cat.color} text-white shadow-lg`
                    : "bg-secondary text-text-secondary border border-gray-700 hover:border-accent hover:text-accent"
                }`}
              >
                <img
                  src={cat.icon}
                  alt={cat.label}
                  loading="lazy"
                  decoding="async"
                  className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ease-out group-hover:scale-125 group-hover:rotate-6 ${
                    activeCategory === cat.id ? "filter invert brightness-0" : ""
                  }`}
                />
                {cat.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Filters */}
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {filters.map((f) => (
              <motion.button
                key={f.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleFilterClick(f.id)}
                aria-pressed={activeFilter === f.id}
                className={`group flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm transition-all ${
                  activeFilter === f.id
                    ? "bg-accent text-white shadow-md"
                    : "bg-secondary/50 border border-gray-700 text-text-secondary hover:border-accent hover:text-accent"
                }`}
              >
                <img
                  src={f.icon}
                  alt={f.label}
                  loading="lazy"
                  decoding="async"
                  className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 ease-out group-hover:scale-125 group-hover:rotate-6 ${
                    activeFilter === f.id ? "filter invert brightness-0" : ""
                  }`}
                />
                {f.label}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid (keyed by gridKey to force remount on clicks) */}
        <motion.div
          key={gridKey}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-7"
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeUp}
                whileHover={{
                  y: -4,
                  scale: 1.02,
                  boxShadow: "0px 6px 20px rgba(0,0,0,0.2)",
                }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="rounded-2xl overflow-hidden bg-secondary/40 border border-gray-700/50 cursor-pointer"
              >
                <Link to="/crystalvision">
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover will-change-transform"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3 className="font-mono text-sm sm:text-lg font-bold mb-1 sm:mb-2">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary text-xs sm:text-sm">{project.subtitle}</p>
                  </div>
                </Link>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-text-secondary col-span-full">No projects found.</p>
          )}
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center py-5 sm:py-8 mt-10 sm:mt-14 text-text-muted text-xs sm:text-sm border-t border-gray-800"
      >
        © Elara Vance 2025. All rights reserved.
      </motion.footer>
    </div>
  );
};

export default Playground;
