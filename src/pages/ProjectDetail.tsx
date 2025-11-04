<<<<<<< HEAD
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import { worksProjects, playgroundProjects } from "../data/projects";
import EmptyState from "../components/EmptyState";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom?: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: (custom ?? 0) * 0.15,
      duration: 0.6,
      ease: "easeOut" as const
    }
  })
};
const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (custom?: number) => ({
    opacity: 1,
    transition: {
      delay: (custom ?? 0) * 0.1,
      duration: 0.5,
      ease: "easeInOut" as const
    }
  })
};

const ProjectDetail: React.FC = () => {
  const { section, id } = useParams<{ section: string; id: string }>();
  // Pick dataset and back link
  let dataset: any[] = [];
  let backLink = "/";
  if (section === "works") {
    dataset = worksProjects;
    backLink = "/works";
  } else if (section === "playground") {
    dataset = playgroundProjects;
    backLink = "/playground";
  }
  // Find project
  const project = dataset.find((p) => String(p.id) === String(id));
  // Index for navigation
  const idx = dataset.findIndex((p) => String(p.id) === String(id));
  const prevIdx = idx > 0 ? idx - 1 : null;
  const nextIdx = idx < dataset.length - 1 ? idx + 1 : null;
  const prevProject = prevIdx !== null ? dataset[prevIdx] : null;
  const nextProject = nextIdx !== null ? dataset[nextIdx] : null;

  // Tab state
  const [activeTab, setActiveTab] = useState(
    project && project.tabs && project.tabs.length > 0 ? project.tabs[0].label : ""
  );
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  // Download helper
  const handleDownload = (src: string, fileName: string) => {
    const link = document.createElement("a");
    link.href = src;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!project) {
    return (
      <div className="bg-[#0b0c10] text-white min-h-screen flex flex-col justify-center items-center pt-36 sm:pt-40 px-6 text-center">
        <div className="relative w-full flex flex-col items-center justify-center emptystate-scope">
          <EmptyState
            title="Project not found."
            description={
              <span>
                Looks like this project doesn’t exist or has been removed.
                <br />
                Double-check the link — or go{" "}
                <Link
                  to="/"
                  className="font-bold hover:underline hover:text-blue-400 transition-colors"
                >
                  HOME
                </Link>
                .
              </span>
            }
          />
          <style>
            {`
              /* Hide only the EmptyState’s default italic footer text */
              .emptystate-scope > div .text-gray-500.italic.pt-2.text-center {
                display: none !important;
              }
            `}
          </style>
          <p className="text-xs text-gray-500 italic pt-6 sm:pt-8 text-center">You’ve reached the end of this path.</p>
        </div>
      </div>
    );
  }

  // Helper for info cards
  const infoFields = [
    { label: "SERVICES", value: project.services },
    { label: "CLIENT", value: project.client },
    { label: "DURATION", value: project.duration },
    { label: "YEAR", value: project.year }
  ];

  // Get current tab object
  const currentTab =
    project.tabs && project.tabs.length > 0
      ? project.tabs.find((t: any) => t.label === activeTab) || project.tabs[0]
      : null;

  return (
    <div className="bg-[#0b0c10] text-white min-h-screen pt-36 sm:pt-48 md:pt-56 pb-0">
      <div className="max-w-6xl mx-auto px-7 sm:px-7 md:px-8 relative">
        {/* HERO */}
        <header className="flex flex-col md:flex-row md:justify-between md:items-start mb-16 md:mb-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
            className="max-w-2xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 whitespace-nowrap">{project.title}</h1>
            <p className="text-gray-400 leading-relaxed text-base sm:text-lg">{project.description}</p>
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
            {infoFields.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx}
                className="bg-[#1a1c23] px-4 py-3 rounded-lg text-xs sm:text-sm md:text-base hover:scale-105 transition-transform duration-300"
              >
                <p className="text-gray-400 mb-1 text-[11px] sm:text-xs md:text-sm">{item.label}</p>
                <p className="font-semibold text-white text-[11px] sm:text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </header>

        {/* TABS */}
        {project.tabs && project.tabs.length > 0 && (
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
              className="bg-secondary/30 p-1.5 sm:p-2 rounded-full border border-gray-700/50 flex gap-1 sm:gap-2 w-full max-w-md md:max-w-xl lg:max-w-2xl justify-between overflow-x-auto"
            >
              {project.tabs.map((tab: any) => (
                <motion.button
                  key={tab.label}
                  onClick={() => setActiveTab(tab.label)}
                  whileTap={{ scale: 0.95 }}
                  className={`flex-1 text-center px-2 sm:px-3 py-1.5 sm:py-2 rounded-full font-medium text-xs sm:text-sm md:text-base lg:text-base transition-all relative z-10 whitespace-nowrap ${
                    activeTab === tab.label ? "text-white" : "text-text-secondary hover:text-blue-400"
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.label && (
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
        )}

        {/* TAB CONTENT */}
        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="relative overflow-hidden will-change-transform"
        >
          <motion.div
            key={activeTab}
            layout
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
          >
            {currentTab && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeUp}
                custom={3}
                className="mb-12 sm:mb-16"
              >
                {/* Tab heading/desc */}
                <div className="text-center mb-8 sm:mb-12">
                  {currentTab.heading && <h2 className="text-2xl sm:text-3xl font-bold mb-3">{currentTab.heading}</h2>}
                  {currentTab.description && (
                    <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">{currentTab.description}</p>
                  )}
                </div>
                {/* Tab images grid */}
                {currentTab.images && currentTab.images.length > 0 && (
                  <>
                    {/* Mobile */}
                    <div className="grid gap-4 sm:hidden">
                      {currentTab.images.map((img: any, idx: number) => (
                        <motion.div
                          key={idx}
                          className="relative group cursor-pointer rounded-xl overflow-hidden shadow-md flex items-center justify-center bg-[#111]"
                          onMouseEnter={() => setHoveredImage(idx)}
                          onMouseLeave={() => setHoveredImage(null)}
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.img
                            src={img.src}
                            alt={img.title}
                            className="w-full h-auto object-contain"
                          />
                          {/* HOVER OVERLAY */}
                          {hoveredImage === idx && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="absolute inset-0 bg-black/60 flex flex-col justify-end p-3"
                            >
                              {img.title && (
                                <motion.h3 className="text-sm font-semibold text-white mb-1">{img.title}</motion.h3>
                              )}
                              {img.desc && <motion.p className="text-gray-200 text-xs mb-2">{img.desc}</motion.p>}
                              {img.download && (
                                <motion.button
                                  whileTap={{ scale: 0.95 }}
                                  onClick={() => handleDownload(img.src, img.download)}
                                  className="bg-accent hover:bg-accent-light px-2 py-1 rounded-md font-medium flex items-center gap-1 text-[10px] w-fit"
                                >
                                  <Download className="w-3 h-3" />
                                  Download
                                </motion.button>
                              )}
                            </motion.div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                    {/* Desktop */}
                    <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-9">
                      {currentTab.images.map((img: any, idx: number) => (
                        <motion.div
                          key={idx}
                          className="relative group cursor-pointer rounded-xl overflow-hidden shadow-md sm:shadow-lg flex items-center justify-center bg-[#111]"
                          onMouseEnter={() => setHoveredImage(idx)}
                          onMouseLeave={() => setHoveredImage(null)}
                        >
                          <motion.img
                            src={img.src}
                            alt={img.title}
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
                              {img.title && (
                                <motion.h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2 truncate">
                                  {img.title}
                                </motion.h3>
                              )}
                              {img.desc && (
                                <motion.p className="text-gray-200 text-xs sm:text-sm md:text-base mb-3 sm:mb-4">
                                  {img.desc}
                                </motion.p>
                              )}
                              {img.download && (
                                <motion.button
                                  whileTap={{ scale: 0.95 }}
                                  onClick={() => handleDownload(img.src, img.download)}
                                  className="bg-accent hover:bg-accent-light px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium flex items-center gap-1.5 text-xs sm:text-sm md:text-base w-fit"
                                >
                                  <Download className="w-4 h-4 md:w-5 md:h-5" />
                                  Download
                                </motion.button>
                              )}
                            </motion.div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </>
                )}
                {/* If no images/content */}
                {!currentTab.images && (
                  <div className="flex flex-col items-center justify-center text-center text-gray-500 min-h-[45vh]">
                    <p className="text-base sm:text-lg md:text-xl font-medium mb-2">Nothing here yet</p>
                    <p className="text-sm sm:text-base text-gray-600">
                      Content will appear here once this section is ready.
                    </p>
                  </div>
                )}
              </motion.div>
            )}
            {!currentTab && (
              <div className="flex flex-col items-center justify-center text-center text-gray-500 min-h-[45vh]">
                <p className="text-base sm:text-lg md:text-xl font-medium mb-2">Nothing here yet</p>
                <p className="text-sm sm:text-base text-gray-600">
                  Content will appear here once this section is ready.
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>

        {/* TOOLS & CREDITS */}
        {project.tools && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-secondary/30 rounded-2xl p-6 sm:p-8 border border-gray-700/50 mb-12 sm:mb-16 relative overflow-hidden"
          >
            <p className="text-text-muted text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-6">TOOLS & CREDITS</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {project.tools.map((tool: any, i: number) => (
                <div key={i}>
                  <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 whitespace-nowrap">{tool.title}</h3>
                  <p className="text-text-secondary text-xs sm:text-sm whitespace-nowrap truncate">{tool.desc}</p>
                </div>
              ))}
            </div>
            <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-purple-500/40 via-pink-400/30 to-transparent blur-2xl pointer-events-none"></div>
          </motion.div>
        )}

        {/* FOOTER NAVIGATION */}
        <BackToTop />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-between items-center text-xs sm:text-sm border-t border-gray-800 mb-0 pt-6 pb-6 w-full px-0"
        >
          {prevProject ? (
            <Link
              to={`/${section}/${prevProject.id}`}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-1.5 sm:gap-2 text-text-secondary hover:text-blue-400 transition-colors whitespace-nowrap"
            >
              <ArrowLeft className="w-4 sm:w-5 h-4 sm:h-5" />
              Previous
            </Link>
          ) : (
            <span className="text-text-muted flex items-center gap-1.5 sm:gap-2 opacity-60">
              <ArrowLeft className="w-4 sm:w-5 h-4 sm:h-5" />
              Previous
            </span>
          )}
          {/* Centered */}
          <div className="absolute left-1/2 -translate-x-1/2 text-center">
            <p className="text-text-muted text-xs sm:text-sm mb-0.5">
              Project {idx + 1} of {dataset.length}
            </p>
            <Link
              to={backLink}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-baseline gap-1 text-text-secondary hover:text-blue-400 transition-colors text-xs sm:text-sm"
            >
              <ArrowLeft className="relative top-[2px] w-3 h-3" />
              Back to {section === "works" ? "Works" : "Playground"}
            </Link>
          </div>
          {nextProject ? (
            <Link
              to={`/${section}/${nextProject.id}`}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-1.5 sm:gap-2 text-text-secondary hover:text-blue-400 transition-colors whitespace-nowrap"
            >
              Next
              <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
            </Link>
          ) : (
            <span className="text-text-muted flex items-center gap-1.5 sm:gap-2 opacity-60">
              Next
              <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
            </span>
          )}
        </motion.div>
      </div>
      <Footer />
=======
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../utils/constants';

const ProjectDetail = () => {
  const [activeTab, setActiveTab] = useState('Logo Concepts');
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const tabs = ['Logo Concepts', 'Merch Designs', 'Process'];

  const logoImages = [
    {
      id: 1,
      type: 'primary',
      title: 'Primary Concept',
      description: 'Main crystalline direction with light refraction exploring depth and luminosity',
      image: 'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-purple-300 to-purple-500',
      size: 'large'
    },
    {
      id: 2,
      type: 'concept',
      title: 'Concept A',
      description: 'Crystalline transparency with geometric precision',
      image: 'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-purple-600 to-purple-800',
      size: 'medium'
    },
    {
      id: 3,
      type: 'sphere',
      title: 'Sphere Concept',
      description: 'Reflective surface exploration',
      image: 'https://images.pexels.com/photos/2034892/pexels-photo-2034892.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-gray-300 to-gray-500',
      size: 'medium'
    },
    {
      id: 4,
      type: 'rings',
      title: 'Ring Formation',
      description: 'Interconnected crystal structures',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-gray-800 to-black',
      size: 'medium'
    }
  ];

  return (
    <div className="min-h-screen py-16 px-8 bg-primary">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-12">
          <div className="flex-1">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Crystal<span className="text-accent">Vision</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-text-secondary text-lg max-w-2xl mb-8"
            >
              A comprehensive branding project exploring the intersection of crystalline structures and modern digital aesthetics. From initial concept to final execution across multiple touchpoints.
            </motion.p>
          </div>

          {/* Project Info Cards */}
          <div className="flex gap-4 ml-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-secondary/50 p-6 rounded-xl border border-gray-700/50 min-w-[200px]"
            >
              <div className="mb-4">
                <p className="text-text-muted text-sm uppercase tracking-wider mb-2">SERVICES</p>
                <p className="text-text-primary font-medium">3D Modeling</p>
                <p className="text-text-primary font-medium">Brand Identity</p>
              </div>
              <div className="mb-4">
                <p className="text-text-muted text-sm uppercase tracking-wider mb-2">CLIENT</p>
                <p className="text-text-primary font-medium">FlatTheme</p>
              </div>
              <div className="mb-4">
                <p className="text-text-muted text-sm uppercase tracking-wider mb-2">DURATION</p>
                <p className="text-text-primary font-medium">8 Weeks</p>
              </div>
              <div>
                <p className="text-text-muted text-sm uppercase tracking-wider mb-2">YEAR</p>
                <p className="text-text-primary font-medium">2024</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Tab Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-secondary/30 p-2 rounded-full border border-gray-700/50">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-accent text-white'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Logo Explorations Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Logo Explorations</h2>
          <p className="text-text-secondary max-w-3xl mx-auto">
            Three distinct approaches to the crystal theme, each exploring different aspects of light, form, and dimensional depth.
          </p>
        </motion.div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 gap-6 mb-16">
          {/* Primary Concept - Large */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="col-span-1 row-span-2 relative group cursor-pointer"
            onMouseEnter={() => setHoveredImage(1)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <div className={`relative h-full rounded-2xl overflow-hidden bg-gradient-to-br ${logoImages[0].gradient} p-8 min-h-[500px] flex items-center justify-center`}>
              {/* Crystal Logo Placeholder */}
              <div className="relative">
                <div className="w-64 h-64 relative">
                  {/* Main Crystal Shape */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-300 via-blue-400 to-purple-500 rounded-full opacity-80 blur-sm"></div>
                  <div className="absolute inset-4 bg-gradient-to-br from-cyan-200 via-blue-300 to-purple-400 transform rotate-45" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}}></div>
                  <div className="absolute inset-8 bg-gradient-to-br from-cyan-100 via-blue-200 to-purple-300 transform rotate-12" style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'}}></div>
                  <div className="absolute inset-12 bg-gradient-to-br from-white via-cyan-100 to-blue-200 rounded-full"></div>
                </div>
              </div>
              
              {/* Hover Overlay */}
              {hoveredImage === 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/60 flex flex-col justify-end p-8"
                >
                  <h3 className="text-2xl font-bold text-white mb-2">Primary Concept</h3>
                  <p className="text-gray-200 mb-4">Main crystalline direction with light refraction exploring depth and luminosity</p>
                  <button className="bg-accent hover:bg-accent-light px-6 py-3 rounded-xl font-medium transition-colors flex items-center gap-2 w-fit">
                    <Download className="w-5 h-5" />
                    Download Asset
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Concept A */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="relative group cursor-pointer"
            onMouseEnter={() => setHoveredImage(2)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <div className={`relative h-64 rounded-2xl overflow-hidden bg-gradient-to-br ${logoImages[1].gradient} p-8 flex items-center justify-center`}>
              {/* Crystal Shape */}
              <div className="relative">
                <div className="w-32 h-40 relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-purple-300 via-purple-400 to-purple-600 transform" style={{clipPath: 'polygon(50% 0%, 80% 30%, 80% 70%, 50% 100%, 20% 70%, 20% 30%)'}}></div>
                  <div className="absolute inset-2 bg-gradient-to-b from-purple-200 via-purple-300 to-purple-500 transform" style={{clipPath: 'polygon(50% 10%, 70% 35%, 70% 65%, 50% 90%, 30% 65%, 30% 35%)'}}></div>
                  <div className="absolute inset-4 bg-gradient-to-b from-white via-purple-100 to-purple-300 transform" style={{clipPath: 'polygon(50% 20%, 60% 40%, 60% 60%, 50% 80%, 40% 60%, 40% 40%)'}}></div>
                </div>
              </div>
              
              {hoveredImage === 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6"
                >
                  <h3 className="text-xl font-bold text-white mb-2">Concept A</h3>
                  <p className="text-gray-200 text-sm mb-4">Crystalline transparency with geometric precision</p>
                  <button className="bg-accent hover:bg-accent-light px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 w-fit text-sm">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Sphere Concept */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="relative group cursor-pointer"
            onMouseEnter={() => setHoveredImage(3)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <div className={`relative h-64 rounded-2xl overflow-hidden bg-gradient-to-br ${logoImages[2].gradient} p-8 flex items-center justify-center`}>
              {/* Sphere Shape */}
              <div className="relative">
                <div className="w-32 h-32 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-300 via-purple-400 to-blue-500 rounded-full"></div>
                  <div className="absolute inset-2 bg-gradient-to-br from-pink-200 via-purple-300 to-blue-400 rounded-full"></div>
                  <div className="absolute inset-4 bg-gradient-to-br from-white via-pink-100 to-purple-200 rounded-full"></div>
                  <div className="absolute top-6 left-6 w-8 h-8 bg-white rounded-full opacity-60"></div>
                </div>
              </div>
              
              {hoveredImage === 3 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6"
                >
                  <h3 className="text-xl font-bold text-white mb-2">Sphere Concept</h3>
                  <p className="text-gray-200 text-sm mb-4">Reflective surface exploration</p>
                  <button className="bg-accent hover:bg-accent-light px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 w-fit text-sm">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Tools & Credits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-secondary/30 rounded-2xl p-8 border border-gray-700/50 mb-16"
        >
          <p className="text-text-muted text-sm uppercase tracking-wider mb-6">TOOLS & CREDITS</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">3D & Rendering</h3>
              <p className="text-text-secondary text-sm">Cinema 4D, Octane Render, KeyShot</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Design & UI</h3>
              <p className="text-text-secondary text-sm">Figma, Adobe Illustrator, Photoshop</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Collaboration</h3>
              <p className="text-text-secondary text-sm">Art Direction: Sarah Chen<br />Photography: Marcus Liu</p>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            to="/works"
            className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Previous
          </Link>
          
          <div className="text-center">
            <p className="text-text-muted text-sm">Project 2 of 12</p>
            <Link to="/works" className="text-text-secondary hover:text-accent transition-colors text-sm">
              ← Back to Works
            </Link>
          </div>
          
          <Link 
            to="/works"
            className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
          >
            Next
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 mt-16 text-text-muted text-sm border-t border-gray-800">
        © {SITE_CONFIG.name} 2025. All rights reserved.
      </footer>
>>>>>>> a4084e00452dc66727786b7f875a41ff8bbfc7e0
    </div>
  );
};

<<<<<<< HEAD
export default ProjectDetail;
=======
export default ProjectDetail;
>>>>>>> a4084e00452dc66727786b7f875a41ff8bbfc7e0
