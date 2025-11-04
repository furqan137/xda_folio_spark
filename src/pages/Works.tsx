import React, { useState } from "react";
<<<<<<< HEAD
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
=======
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Link } from "react-router-dom";

// === Icons ===
import AllIcon from "../icons/svg/all.png";
import DigitalArtIcon from "../icons/svg/art.png";
import BrandingIcon from "../icons/svg/brand.png";
import UiUxIcon from "../icons/svg/ui.png";
import AbstractIcon from "../icons/svg/abstract.png";

// === Project Images ===
import work1 from "../images/Works/Project1.png";
import work2 from "../images/Works/Project2.png";
import work3 from "../images/Works/Project3.png";
import work4 from "../images/Works/Project4.png";
import work5 from "../images/Works/Project5.png";
import work6 from "../images/Works/Project6.png";
import work7 from "../images/Works/Project7.png";
import work8 from "../images/Works/Project8.png";
import work9 from "../images/Works/Project9.png";
>>>>>>> a4084e00452dc66727786b7f875a41ff8bbfc7e0

const Works: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
<<<<<<< HEAD
    { id: "all", label: "All", icon: AllIcon },
    { id: "digital_art", label: "Digital Art", icon: DigitalArtIcon },
    { id: "branding", label: "Branding", icon: BrandingIcon },
    { id: "ui/ux", label: "UI/UX", icon: UiUxIcon },
    { id: "abstract", label: "Abstract", icon: AbstractIcon },
=======
    { id: "all", label: "all", icon: AllIcon },
    { id: "digital_art", label: "digital art", icon: DigitalArtIcon },
    { id: "branding", label: "branding", icon: BrandingIcon },
    { id: "ui/ux", label: "ui/ux", icon: UiUxIcon },
    { id: "abstract", label: "abstract", icon: AbstractIcon },
  ];

  const projects = [
    { id: 1, title: "Whispering Woods", category: "digital_art", image: work1 },
    { id: 2, title: "Aura Music App", category: "ui/ux", image: work2 },
    { id: 3, title: "Neon Dystopia", category: "digital_art", image: work3 },
    { id: 4, title: "Terra Coffee", category: "branding", image: work4 },
    { id: 5, title: "Geometric Harmony", category: "abstract", image: work5 },
    { id: 6, title: "Android Soul", category: "digital_art", image: work6 },
    { id: 7, title: "Zen Garden", category: "digital_art", image: work7 },
    { id: 8, title: "Pixel Perk Cafe", category: "branding", image: work8 },
    { id: 9, title: "Etherea Skincare", category: "branding", image: work9 },
>>>>>>> a4084e00452dc66727786b7f875a41ff8bbfc7e0
  ];

  const filteredProjects =
    activeFilter === "all"
<<<<<<< HEAD
      ? worksProjects
      : worksProjects.filter((p) => p.category === activeFilter);

  // ---- Page animation ----
  const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];
  const EASE_SMOOTH: [number, number, number, number] = [0.4, 0, 0.2, 1];

  const fadePage: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, ease: EASE_OUT } },
    exit: { opacity: 0, transition: { duration: 0.3, ease: EASE_SMOOTH } },
=======
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  // ---- Easing / timing ----
  const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];
  const EASE_SOFT: [number, number, number, number] = [0.22, 1, 0.36, 1];
  const EASE_SMOOTH: [number, number, number, number] = [0.4, 0, 0.2, 1];

  // ---- Variants ----
  const fadePage: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, ease: EASE_OUT } },
    exit: { opacity: 0, transition: { duration: 0.3, ease: EASE_SOFT } },
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
    hidden: { opacity: 0, y: 14, scale: 0.97 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.45,
        ease: EASE_SMOOTH,
      },
    }),
    exit: {
      opacity: 0,
      y: 12,
      scale: 0.96,
      transition: { duration: 0.36, ease: EASE_SMOOTH },
    },
>>>>>>> a4084e00452dc66727786b7f875a41ff8bbfc7e0
  };

  return (
    <motion.div
<<<<<<< HEAD
      className="min-h-screen flex flex-col bg-background"
=======
      className="min-h-screen flex flex-col"
>>>>>>> a4084e00452dc66727786b7f875a41ff8bbfc7e0
      variants={fadePage}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
<<<<<<< HEAD
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
=======
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
              custom={0}
              className="text-text-muted text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4"
            >
              Portfolio
            </motion.p>

            <motion.h1
              variants={fadeUp}
              custom={0.5}
              className="font-mono text-3xl sm:text-4xl md:text-6xl font-bold mb-5 sm:mb-7"
            >
              Creative Works
            </motion.h1>

            {/* Code block */}
            <motion.div
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-black rounded-xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-12 font-mono text-center max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed overflow-x-auto shadow-lg shadow-accent/20"
            >
>>>>>>> a4084e00452dc66727786b7f875a41ff8bbfc7e0
              <span className="text-purple-400">const</span>{" "}
              <span className="text-pink-400">portfolio</span> = {"{"}{" "}
              <span className="text-blue-400">passion</span> :{" "}
              <span className="text-green-400">"design"</span> ,{" "}
              <span className="text-blue-400">medium</span> :{" "}
              <span className="text-green-400">"digital art"</span> ,{" "}
              <span className="text-blue-400">status</span> :{" "}
              <span className="text-green-400">"always creating"</span> {"};"}
<<<<<<< HEAD
            </div>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              {filters.map((filter) => {
=======
            </motion.div>

            {/* Filters */}
            <motion.div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              {filters.map((filter, i) => {
>>>>>>> a4084e00452dc66727786b7f875a41ff8bbfc7e0
                const active = activeFilter === filter.id;
                return (
                  <motion.button
                    key={filter.id}
<<<<<<< HEAD
                    onClick={() =>
                      setActiveFilter(active ? "all" : filter.id)
                    }
                    className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[11px] sm:text-xs md:text-sm transition-all ${
                      active
                        ? "bg-accent border-accent text-white shadow-md shadow-accent/40"
                        : "border-gray-600 text-text-secondary hover:border-blue-400"
=======
                    onClick={() => setActiveFilter(active ? "all" : filter.id)}
                    className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[11px] sm:text-xs md:text-sm transition-all ${
                      active
                        ? "bg-accent border-accent text-white shadow-md shadow-accent/40"
                        : "border-gray-600 text-text-secondary hover:border-white hover:text-white"
>>>>>>> a4084e00452dc66727786b7f875a41ff8bbfc7e0
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.22, ease: EASE_SMOOTH }}
<<<<<<< HEAD
=======
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    custom={i + 1}
>>>>>>> a4084e00452dc66727786b7f875a41ff8bbfc7e0
                  >
                    <img
                      src={filter.icon}
                      alt={filter.label}
                      loading="lazy"
<<<<<<< HEAD
                      className={`w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${
                        active
                          ? "brightness-0 invert-[.93]"
                          : "brightness-100 group-hover:invert-[65%] group-hover:sepia-[59%] group-hover:saturate-[604%] group-hover:hue-rotate-[182deg] group-hover:brightness-[96%] group-hover:contrast-[90%]"
                      }`}
=======
                      className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
>>>>>>> a4084e00452dc66727786b7f875a41ff8bbfc7e0
                    />
                    {filter.label}
                  </motion.button>
                );
              })}
<<<<<<< HEAD
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
=======
            </motion.div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  custom={index}
                  variants={cardMotion}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
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
                        className="w-full h-full object-cover"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: EASE_SMOOTH }}
                        whileHover={{
                          scale: 1.12, // zoom in on hover
                          transition: {
                            duration: 0.6,
                            ease: EASE_SMOOTH,
                            delay: 0.15, // delay before zoom starts
                          },
                        }}
                        whileTap={{
                          scale: 1.05, // subtle tap effect
                          transition: { duration: 0.3, ease: EASE_SMOOTH },
                        }}
                      />
                    </div>

                    <div className="p-5 sm:p-6 md:p-8">
                      <motion.h3
                        className="font-semibold text-text-muted text-sm sm:text-base md:text-lg mb-2 transition-colors duration-300"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: EASE_SMOOTH }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.p
                        className="text-text-secondary text-xs sm:text-sm group-hover:text-accent transition-colors duration-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, ease: EASE_SMOOTH }}
                      >
                        View Project
                      </motion.p>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </AnimatePresence>
>>>>>>> a4084e00452dc66727786b7f875a41ff8bbfc7e0
          </motion.div>
        </div>
      </main>

<<<<<<< HEAD
      <BackToTop />
      <Footer />
=======
      {/* Footer */}
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
>>>>>>> a4084e00452dc66727786b7f875a41ff8bbfc7e0
    </motion.div>
  );
};

export default Works;
