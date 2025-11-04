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
    </div>
  );
};

export default ProjectDetail;
