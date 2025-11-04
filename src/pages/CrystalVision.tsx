import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";

// Local MasonryGrid (animated)
import MasonryGrid from "../components/MasonryGrid";

import cube1 from "../images/cube1.png";
import cube2 from "../images/cube2.png";
import cube3 from "../images/cube3.png";
import cube4 from "../images/cube4.png";

// ---------- Motion Variants ----------
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom?: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: (custom ?? 0) * 0.15,
      duration: 0.6,
      ease: "easeOut",
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
      ease: "easeInOut",
    },
  }),
};

// ---------- Main Component ----------
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

  const handleDownload = (src: string, fileName: string) => {
    const link = document.createElement("a");
    link.href = src;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-[#0b0c10] text-white min-h-screen pt-36 sm:pt-48 md:pt-56 pb-12 sm:pb-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 relative">
        {/* ---------- HERO ---------- */}
        <header className="flex flex-col md:flex-row justify-between items-start mb-16 md:mb-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 whitespace-nowrap">
              Crystal<span className="text-purple-400">Vision</span>
            </h1>
            <p className="text-gray-400 leading-relaxed text-base sm:text-lg">
              A comprehensive branding project exploring crystalline structures
              and digital aesthetics from concept to polished execution.
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
                className="bg-[#1a1c23] px-4 py-3 rounded-lg text-sm hover:scale-105 transition-transform duration-300"
              >
                <p className="text-gray-400 mb-1 text-xs">{item.label}</p>
                <p className="font-semibold text-white truncate">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </header>

        {/* ---------- TAB NAV ---------- */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          className="flex justify-center mb-12"
        >
          <div className="bg-secondary/30 p-1.5 sm:p-2 rounded-full border border-gray-700/50 flex gap-2 max-w-xl justify-between overflow-x-auto">
            {tabs.map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                whileTap={{ scale: 0.95 }}
                className={`flex-1 text-center px-3 py-2 rounded-full font-medium text-sm relative transition-all ${
                  activeTab === tab
                    ? "text-white"
                    : "text-text-secondary hover:text-blue-400"
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
          </div>
        </motion.div>

        {/* ---------- TAB CONTENT ---------- */}
        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {activeTab === "Logo Concepts" ? (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-3">Logo Explorations</h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-base">
                  Distinct crystalline approaches exploring light, form, and
                  dimensional depth.
                </p>
              </div>

              {/* ✅ Animated Masonry Grid */}
              <MasonryGrid defaultColumns={3} tabletColumns={2} mobileColumns={1} gap={20}>
                {logoImages.map((logo, idx) => (
                  <motion.div
                    key={idx}
                    layout
                    whileHover={{ scale: 1.04, zIndex: 10 }}
                    transition={{ type: "spring", stiffness: 250, damping: 25 }}
                    className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg bg-[#111]"
                    onMouseEnter={() => setHoveredImage(idx)}
                    onMouseLeave={() => setHoveredImage(null)}
                  >
                    <motion.img
                      src={logo.src}
                      alt={logo.title}
                      className="w-full h-auto object-contain"
                      initial={{ opacity: 0.8 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    />

                    {hoveredImage === idx && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/60 flex flex-col justify-end p-4"
                      >
                        <h3 className="text-lg font-bold text-white mb-1">
                          {logo.title}
                        </h3>
                        <p className="text-gray-200 text-sm mb-3">
                          {logo.desc}
                        </p>
                        <button
                          onClick={() => handleDownload(logo.src, logo.fileName)}
                          className="bg-accent hover:bg-accent-light px-3 py-2 rounded-lg font-medium flex items-center gap-2 text-sm w-fit"
                        >
                          <Download className="w-4 h-4" />
                          Download
                        </button>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </MasonryGrid>
            </motion.div>
          ) : (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center justify-center text-center text-gray-500 min-h-[50vh]"
            >
              <p className="text-lg font-medium mb-2">Nothing here yet</p>
              <p className="text-sm text-gray-600">
                Content will appear once this section is ready.
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* ---------- TOOLS & CREDITS ---------- */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-secondary/30 rounded-2xl p-8 border border-gray-700/50 mb-16 relative overflow-hidden"
        >
          <p className="text-text-muted text-sm uppercase tracking-wider mb-6">
            TOOLS & CREDITS
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: "3D & Rendering",
                desc: "Cinema 4D, Octane Render, KeyShot",
              },
              {
                title: "Design & UI",
                desc: "Figma, Adobe Illustrator, Photoshop",
              },
              {
                title: "Collaboration",
                desc: "Art Direction: Sarah Chen • Photography: Marcus Liu",
              },
            ].map((tool, i) => (
              <div key={i}>
                <h3 className="text-lg font-semibold mb-3">{tool.title}</h3>
                <p className="text-text-secondary text-sm">{tool.desc}</p>
              </div>
            ))}
          </div>

          <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-purple-500/40 via-pink-400/30 to-transparent blur-2xl pointer-events-none" />
        </motion.div>

        {/* ---------- FOOTER NAV ---------- */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-between items-center text-sm"
        >
          <Link
            to="/crystalvision"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-text-secondary hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Previous
          </Link>

          <div className="text-center">
            <p className="text-text-muted text-sm">Project 2 of 12</p>
            <Link
              to="/works"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-text-secondary hover:text-blue-400 transition-colors"
            >
              ← Back to Works
            </Link>
          </div>

          <Link
            to="/crystalvision"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-text-secondary hover:text-blue-400 transition-colors"
          >
            Next <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* ---------- FOOTER ---------- */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="py-10 border-t border-gray-800 text-center text-text-muted text-sm"
        >
          © NITTIN 2016–{new Date().getFullYear()}. All rights reserved.
        </motion.footer>
      </div>
    </div>
  );
};

export default CrystalVision;
