import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, Variants } from "framer-motion";

import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import PortfolioGrid from "../components/PortfolioGrid";
import EmptyState from "../components/EmptyState";
import { playgroundProjects } from "../data/projects";

// === Icons ===
import ExperimentalIcon from "../icons/playgrounds/experimental.svg";
import UnconventionalIcon from "../icons/playgrounds/unconventional.svg";
import WeirdIcon from "../icons/playgrounds/weird.svg";
import AllIcon from "../icons/playgrounds/all.svg";
import GlitchIcon from "../icons/playgrounds/glitch.svg";
import Weird3DIcon from "../icons/playgrounds/3d.svg";
import TypeIcon from "../icons/playgrounds/type.svg";
import ChaosIcon from "../icons/playgrounds/chaos.svg";

// ---- Easing ----
const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EASE_SMOOTH: [number, number, number, number] = [0.4, 0, 0.2, 1];

// ---- Animations ----
const fadePage: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: EASE_OUT } },
  exit: { opacity: 0, transition: { duration: 0.3, ease: EASE_OUT } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: EASE_OUT } },
};

const parentStagger: Variants = {
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
};

const Playground = (): JSX.Element => {
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [filterLock, setFilterLock] = useState(false);

  const handleFilterChange = (filterId: string) => {
    if (filterLock) return;
    setFilterLock(true);
    setActiveFilter(filterId);
    setTimeout(() => setFilterLock(false), 700);
  };

  // === Categories ===
  const categories = [
    { id: "experimental", label: "Experimental", icon: ExperimentalIcon, color: "bg-pink-600" },
    { id: "unconventional", label: "Unconventional", icon: UnconventionalIcon, color: "bg-purple-600" },
    { id: "weird", label: "Weird", icon: WeirdIcon, color: "bg-green-600" },
  ];

  // === Filters ===
  const filters = [
    { id: "all", label: "All", icon: AllIcon },
    { id: "glitch", label: "Glitch Art", icon: GlitchIcon },
    { id: "3d", label: "3D Weird", icon: Weird3DIcon },
    { id: "type", label: "Type Experiments", icon: TypeIcon },
    { id: "chaos", label: "Abstract Chaos", icon: ChaosIcon },
  ];

  // === Filtered projects ===
  const filteredProjects = playgroundProjects.filter((p) => {
    const matchCat = !activeCategory || p.category === activeCategory;
    const matchFilter = activeFilter === "all" || p.tags?.includes(activeFilter);
    return matchCat && matchFilter;
  });

  return (
    <motion.div
      className="min-h-screen flex flex-col bg-background text-white"
      variants={fadePage}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Helmet>
        <title>NITTIN | Playground</title>
        <meta
          name="description"
          content="Art. Logic. Identity. — Visual systems and motion design by NITTIN."
        />
      </Helmet>

      <main className="flex-1 pt-36 sm:pt-48 md:pt-56 pb-10 sm:pb-12">
        <div className="max-w-6xl mx-auto px-7 sm:px-7 md:px-8">
          {/* === HEADER === */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-10 sm:mb-14"
          >
            <motion.p variants={fadeUp} className="text-text-muted text-xs uppercase tracking-wider mb-3 sm:mb-4">
              Playground
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-mono text-3xl sm:text-4xl md:text-6xl font-bold mb-5 sm:mb-7"
            >
              Creative Playground
            </motion.h1>

            <motion.div
              variants={fadeUp}
              className="relative bg-transparent py-2 mb-8 max-w-3xl mx-auto text-center shadow-[0_30px_25px_-25px_rgba(147,51,234,0.5)] rounded-xl"
            >
              <motion.p
                variants={fadeUp}
                className="text-text-secondary text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-6 sm:mb-9"
              >
                This is where I let my creativity run wild. Experimental, weird concepts,{" "}
                <span className="font-mono text-accent-green">digital chaos</span>, and everything that doesn't fit in a
                neat category.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* === CATEGORY BUTTONS === */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-5 sm:mb-7"
            variants={parentStagger}
            initial="hidden"
            animate="visible"
          >
            {categories.map((cat, i) => {
              const active = activeCategory === cat.id;
              return (
                <motion.button
                  key={cat.id}
                  onClick={() => {
                    if (activeCategory === cat.id) {
                      setActiveCategory("");
                    } else {
                      setActiveCategory(cat.id);
                      setActiveFilter("all");
                    }
                  }}
                  className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[10px] sm:text-xs md:text-sm transition-all ${
                    active
                      ? `${cat.color} border-accent text-white shadow-md`
                      : "border-gray-600 text-text-secondary hover:border-blue-400 hover:text-blue-400"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.22, ease: EASE_SMOOTH }}
                >
                  <img
                    src={cat.icon}
                    alt={cat.label}
                    loading="lazy"
                    className={`w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${
                      active ? "brightness-0 invert-[.93]" : "brightness-100"
                    }`}
                  />
                  {cat.label}
                </motion.button>
              );
            })}
          </motion.div>

          {/* === FILTER BUTTONS === */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16"
            variants={parentStagger}
            initial="hidden"
            animate="visible"
          >
            {filters.map((f, i) => {
              const active = activeFilter === f.id;
              return (
                <motion.button
                  key={f.id}
                  onClick={() => handleFilterChange(active ? "all" : f.id)}
                  disabled={filterLock}
                  className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[10px] sm:text-xs md:text-sm transition-all ${
                    active
                      ? "bg-accent border-accent text-white shadow-md shadow-accent/40"
                      : "border-gray-600 text-text-secondary hover:border-blue-400"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.22, ease: EASE_SMOOTH }}
                >
                  <img
                    src={f.icon}
                    alt={f.label}
                    loading="lazy"
                    className={`w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${
                      active
                        ? "brightness-0 invert-[.93]"
                        : "brightness-100 group-hover:invert-[65%] group-hover:sepia-[59%] group-hover:saturate-[604%] group-hover:hue-rotate-[182deg] group-hover:brightness-[96%] group-hover:contrast-[90%]"
                    }`}
                  />
                  {f.label}
                </motion.button>
              );
            })}
          </motion.div>

          {/* === REUSABLE GRID === */}
          {filteredProjects.length > 0 ? (
            <PortfolioGrid
              type="playground"
              projects={filteredProjects}
              limit={filteredProjects.length}
              accent="#22d3ee"
            />
          ) : (
            <div className="flex justify-center py-20 sm:py-28">
              <EmptyState reason="No projects match your selected filters." />
            </div>
          )}
        </div>
      </main>

      <BackToTop />
      <Footer />
    </motion.div>
  );
};

export default Playground;
