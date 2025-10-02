import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";

// Import images
import cube1 from "../images/cube1.png";
import cube2 from "../images/cube2.png";
import cube3 from "../images/cube3.png";
import cube4 from "../images/cube4.png";

// Reusable Variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom?: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: (custom ?? 0) * 0.15,
      duration: 0.6,
      ease: "easeOut" as const,
    },
  }),
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (custom?: number) => ({
    opacity: 1,
    transition: {
      delay: (custom ?? 0) * 0.1,
      duration: 0.5,
      ease: "easeInOut" as const,
    },
  }),
};

const CrystalVision: React.FC = () => {
  const tabs = ["Logo Concepts", "Merch Designs", "Process"];
  const [activeTab, setActiveTab] = useState("Logo Concepts");
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const logoImages = [
    {
      src: cube1,
      title: "Primary Concept",
      desc: "Main crystalline direction with light refraction exploring depth and luminosity",
      fileName: "primary-concept.png",
    },
    {
      src: cube2,
      title: "Concept A",
      desc: "Crystalline transparency with geometric precision",
      fileName: "concept-a.png",
    },
    {
      src: cube3,
      title: "Sphere Concept",
      desc: "Reflective surface exploration",
      fileName: "sphere-concept.png",
    },
    {
      src: cube4,
      title: "Minimal Line Concept",
      desc: "Simplistic and clean geometric design",
      fileName: "minimal-line-concept.png",
    },
  ];

  // Download function
  const handleDownload = (src: string, fileName: string) => {
    const link = document.createElement("a");
    link.href = src;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-[#0b0c10] text-white min-h-screen py-12 sm:py-16">
      {/* Uniform Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 relative">
        {/* ---------- HERO SECTION ---------- */}
        <header className="flex flex-col md:flex-row md:justify-between md:items-start mb-16 md:mb-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
            className="max-w-2xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 whitespace-nowrap">
              Crystal<span className="text-purple-400">Vision</span>
            </h1>
            <p className="text-gray-400 leading-relaxed text-base sm:text-lg">
              A comprehensive branding project exploring crystalline structures
              and modern digital aesthetics, from initial concept to polished
              execution across multiple touchpoints.
            </p>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="grid grid-cols-2 gap-3 mt-8 md:mt-0 md:ml-12 w-full max-w-md lg:max-w-lg"
          >
            {[
              { label: "SERVICES", value: "3D Modeling, Brand Identity" },
              { label: "CLIENT", value: "FlaTheme" },
              { label: "DURATION", value: "8 Weeks" },
              { label: "YEAR", value: "2024" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx}
                className="bg-[#1a1c23] px-4 py-3 rounded-lg text-xs sm:text-sm md:text-base hover:scale-105 transition-transform duration-300"
              >
                <p className="text-gray-400 mb-1 text-[11px] sm:text-xs md:text-sm">
                  {item.label}
                </p>
                <p className="font-semibold text-white text-[11px] sm:text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </header>

        {/* ---------- TAB NAVIGATION ---------- */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          className="flex justify-center mb-10 sm:mb-12"
        >
          <motion.div
            layout
            className="bg-secondary/30 p-1.5 sm:p-2 rounded-full border border-gray-700/50 flex gap-2 w-full max-w-md md:max-w-xl lg:max-w-2xl justify-between"
          >
            {tabs.map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                whileTap={{ scale: 0.95 }}
                className={`flex-1 text-center px-3 sm:px-4 py-2 rounded-full font-medium text-sm md:text-base lg:text-lg transition-all relative z-10 ${
                  activeTab === tab
                    ? "text-white"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="highlight"
                    className="absolute inset-0 bg-accent rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* ---------- LOGO GRID ---------- */}
        {activeTab === "Logo Concepts" && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            custom={3}
            className="mb-12 sm:mb-16"
          >
            {/* Heading + Description */}
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                Logo Explorations
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
                Three distinct approaches to the crystal theme, each exploring
                different aspects of light, form, and dimensional depth.
              </p>
            </div>

            {/* Mobile layout */}
            <div className="grid gap-4 sm:hidden">
              {/* Top big cube */}
              <motion.div
                className="relative group cursor-pointer rounded-xl overflow-hidden shadow-md flex items-center justify-center bg-[#111]"
                onMouseEnter={() => setHoveredImage(0)}
                onMouseLeave={() => setHoveredImage(null)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src={logoImages[0].src}
                  alt={logoImages[0].title}
                  className="w-full h-auto object-contain"
                />
                {/* HOVER OVERLAY */}
                {hoveredImage === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/60 flex flex-col justify-end p-3"
                  >
                    <motion.h3 className="text-sm font-semibold text-white mb-1">
                      {logoImages[0].title}
                    </motion.h3>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() =>
                        handleDownload(
                          logoImages[0].src,
                          logoImages[0].fileName
                        )
                      }
                      className="bg-accent hover:bg-accent-light px-2 py-1 rounded-md font-medium flex items-center gap-1 text-[10px] w-fit"
                    >
                      <Download className="w-3 h-3" />
                      Download
                    </motion.button>
                  </motion.div>
                )}
              </motion.div>

              {/* Bottom section */}
              <div className="grid grid-cols-2 gap-4">
                {logoImages.slice(1, 4).map((logo, idx) => (
                  <motion.div
                    key={idx + 1}
                    className={`relative group cursor-pointer rounded-xl overflow-hidden shadow-md flex items-center justify-center bg-[#111] ${
                      idx === 0 ? "row-span-2" : ""
                    }`}
                    onMouseEnter={() => setHoveredImage(idx + 1)}
                    onMouseLeave={() => setHoveredImage(null)}
                  >
                    <motion.img
                      src={logo.src}
                      alt={logo.title}
                      className="w-full h-full object-contain"
                    />
                    {/* HOVER OVERLAY */}
                    {hoveredImage === idx + 1 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/60 flex flex-col justify-end p-3"
                      >
                        <motion.h3 className="text-sm font-semibold text-white mb-1">
                          {logo.title}
                        </motion.h3>
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          onClick={() =>
                            handleDownload(logo.src, logo.fileName)
                          }
                          className="bg-accent hover:bg-accent-light px-2 py-1 rounded-md font-medium flex items-center gap-1 text-[10px] w-fit"
                        >
                          <Download className="w-3 h-3" />
                          Download
                        </motion.button>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Desktop layout */}
            <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-9">
              {logoImages.map((logo, idx) => (
                <motion.div
                  key={idx}
                  className={`relative group cursor-pointer rounded-xl overflow-hidden shadow-md sm:shadow-lg flex items-center justify-center bg-[#111] 
                    ${idx === 0 ? "md:col-span-2 md:row-span-2" : ""} 
                    ${idx === 1 ? "md:row-span-2" : ""}`}
                  onMouseEnter={() => setHoveredImage(idx)}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <motion.img
                    src={logo.src}
                    alt={logo.title}
                    className="w-full h-full object-contain"
                  />
                  {/* HOVER OVERLAY */}
                  {hoveredImage === idx && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-black/60 flex flex-col justify-end p-4 sm:p-6"
                    > 
                      <motion.h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2 truncate">
                        {logo.title}
                      </motion.h3>
                      <motion.p className="text-gray-200 text-xs sm:text-sm md:text-base mb-3 sm:mb-4">
                        {logo.desc}
                      </motion.p>
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>
                          handleDownload(logo.src, logo.fileName)
                        }
                        className="bg-accent hover:bg-accent-light px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium flex items-center gap-1.5 text-xs sm:text-sm md:text-base w-fit"
                      >
                        <Download className="w-4 h-4 md:w-5 md:h-5" />
                        Download
                      </motion.button>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* ---------- TOOLS & CREDITS ---------- */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={4}
          className="bg-secondary/30 rounded-2xl p-6 sm:p-8 border border-gray-700/50 mb-12 sm:mb-16 relative overflow-hidden"
        >
          <p className="text-text-muted text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-6">
            TOOLS & CREDITS
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 whitespace-nowrap">
                3D & Rendering
              </h3>
              <p className="text-text-secondary text-xs sm:text-sm whitespace-nowrap truncate">
                Cinema 4D, Octane Render, KeyShot
              </p>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 whitespace-nowrap">
                Design & UI
              </h3>
              <p className="text-text-secondary text-xs sm:text-sm whitespace-nowrap truncate">
                Figma, Adobe Illustrator, Photoshop
              </p>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 whitespace-nowrap">
                Collaboration
              </h3>
              <p className="text-text-secondary text-xs sm:text-sm whitespace-nowrap truncate">
                Art Direction: Sarah Chen • Photography: Marcus Liu
              </p>
            </div>
          </div>

          {/* Glow Effect */}
          <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-purple-500/40 via-pink-400/30 to-transparent blur-2xl pointer-events-none"></div>
        </motion.div>

        {/* ---------- FOOTER NAVIGATION ---------- */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={5}
          className="flex justify-between items-center text-xs sm:text-sm"
        >
          <Link
            to="/crystalvision"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-1.5 sm:gap-2 text-text-secondary hover:text-accent transition-colors whitespace-nowrap"
          >
            <ArrowLeft className="w-4 sm:w-5 h-4 sm:h-5" />
            Previous
          </Link>

          <div className="text-center whitespace-nowrap">
            <p className="text-text-muted text-xs sm:text-sm">Project 2 of 12</p>
            <Link
              to="/works"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-text-secondary hover:text-accent transition-colors text-xs sm:text-sm"
            >
              ← Back to Works
            </Link>
          </div>

          <Link
            to="/crystalvision"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-1.5 sm:gap-2 text-text-secondary hover:text-accent transition-colors whitespace-nowrap"
          >
            Next
            <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
          </Link>
        </motion.div>

        {/* ---------------- FOOTER ---------------- */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="py-10 px-6 sm:px-8 md:px-12 border-t border-gray-800"
        >
          <div className="max-w-6xl mx-auto text-center text-text-muted text-sm max-sm:text-xs">
            © Elara Vance 2025. All rights reserved.
          </div>
        </motion.footer>
      </div>
    </div>
  );
};

export default CrystalVision;
