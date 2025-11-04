import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { worksProjects } from "../data/projects";

import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import PortfolioGrid from "../components/PortfolioGrid";

// === Icons ===
import AllIcon from "../icons/svg/all.svg";
import DigitalArtIcon from "../icons/svg/art.svg";
import BrandingIcon from "../icons/svg/brand.svg";
import UiUxIcon from "../icons/svg/ui.svg";
import AbstractIcon from "../icons/svg/abstract.svg";

const Works: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All", icon: AllIcon },
    { id: "digital_art", label: "Digital Art", icon: DigitalArtIcon },
    { id: "branding", label: "Branding", icon: BrandingIcon },
    { id: "ui/ux", label: "UI/UX", icon: UiUxIcon },
    { id: "abstract", label: "Abstract", icon: AbstractIcon },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? worksProjects
      : worksProjects.filter((p) => p.category === activeFilter);

  // ---- Page animation ----
  const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];
  const EASE_SMOOTH: [number, number, number, number] = [0.4, 0, 0.2, 1];

  const fadePage: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, ease: EASE_OUT } },
    exit: { opacity: 0, transition: { duration: 0.3, ease: EASE_SMOOTH } },
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col bg-background"
      variants={fadePage}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Helmet>
        <title>NITTIN | Works</title>
        <meta
          name="description"
          content="Explore NITTIN’s creative works — from digital art to UI/UX, branding, and abstract visuals."
        />
      </Helmet>

      <main className="flex-1 py-10 sm:py-12">
        <div className="max-w-6xl mx-auto px-7 sm:px-7 md:px-8">
          {/* Header */}
          <div className="pt-32 sm:pt-40 md:pt-44 text-center mb-10 sm:mb-14">
            <p className="text-text-muted text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
              Portfolio
            </p>
            <h1 className="font-mono text-3xl sm:text-4xl md:text-6xl font-bold mb-5 sm:mb-7">
              Creative Works
            </h1>

            {/* Code block */}
            <div className="relative bg-transparent p-6 sm:p-8 md:p-10 mb-10 font-mono text-center max-w-3xl mx-auto text-base leading-relaxed overflow-x-auto shadow-[0_30px_25px_-25px_rgba(147,51,234,0.55)]">
              <span className="text-purple-400">const</span>{" "}
              <span className="text-pink-400">portfolio</span> = {"{"}{" "}
              <span className="text-blue-400">passion</span> :{" "}
              <span className="text-green-400">"design"</span> ,{" "}
              <span className="text-blue-400">medium</span> :{" "}
              <span className="text-green-400">"digital art"</span> ,{" "}
              <span className="text-blue-400">status</span> :{" "}
              <span className="text-green-400">"always creating"</span> {"};"}
            </div>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              {filters.map((filter) => {
                const active = activeFilter === filter.id;
                return (
                  <motion.button
                    key={filter.id}
                    onClick={() =>
                      setActiveFilter(active ? "all" : filter.id)
                    }
                    className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[11px] sm:text-xs md:text-sm transition-all ${
                      active
                        ? "bg-accent border-accent text-white shadow-md shadow-accent/40"
                        : "border-gray-600 text-text-secondary hover:border-blue-400"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.22, ease: EASE_SMOOTH }}
                  >
                    <img
                      src={filter.icon}
                      alt={filter.label}
                      loading="lazy"
                      className={`w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${
                        active
                          ? "brightness-0 invert-[.93]"
                          : "brightness-100 group-hover:invert-[65%] group-hover:sepia-[59%] group-hover:saturate-[604%] group-hover:hue-rotate-[182deg] group-hover:brightness-[96%] group-hover:contrast-[90%]"
                      }`}
                    />
                    {filter.label}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Projects Grid (Animated Filter Transition) */}
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: EASE_SMOOTH }}
          >
            {filteredProjects.length === 0 ? (
              <div className="py-20 flex flex-col items-center text-center">
                <p className="text-text-muted text-sm sm:text-base">
                  No works found.
                </p>
              </div>
            ) : (
              <PortfolioGrid
                type="works"
                accent="#22d3ee"
                limit={9}
                projects={filteredProjects} // ✅ pass filtered projects
              />
            )}
          </motion.div>
        </div>
      </main>

      <BackToTop />
      <Footer />
    </motion.div>
  );
};

export default Works;
