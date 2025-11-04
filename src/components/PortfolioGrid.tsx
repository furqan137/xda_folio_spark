import React from "react";
import { motion, AnimatePresence, easeOut } from "framer-motion";
import { Link } from "react-router-dom";
import {
  worksProjects,
  pastWorksProjects,
  playgroundProjects,
} from "../data/projects";
import EmptyState from "./EmptyState";

interface PortfolioGridProps {
  type?: "works" | "pastworks" | "playground"; // grid source type
  limit?: number;
  accent?: string;
  projects?: any[]; // for dynamic filter results
  isFiltering?: boolean; // optional flag to control animation refresh
}

// --- Parent container animation ---
const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

// --- Card animation ---
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: easeOut },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.97,
    transition: { duration: 0.3, ease: easeOut },
  },
};

const PortfolioGrid: React.FC<PortfolioGridProps> = ({
  type = "pastworks",
  limit = 9,
  accent = "#22d3ee",
  projects,
  isFiltering = false,
}) => {
  // Dynamically pick which list to show
  const getProjects = () => {
    if (projects && projects.length > 0) return projects;
    switch (type) {
      case "works":
        return worksProjects;
      case "playground":
        return playgroundProjects;
      default:
        return pastWorksProjects;
    }
  };

  const items = getProjects();

  if (!items || items.length === 0) {
    return (
      <div className="w-full flex justify-center items-center py-20">
        <EmptyState />
      </div>
    );
  }

  return (
    <motion.div
      layout
      className="px-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
      variants={gridVariants}
      initial="hidden"
      whileInView="visible"
      animate="visible"
      viewport={{ once: true, amount: 0.05, margin: "0px 0px -10% 0px" }}
    >
      <AnimatePresence mode="wait">
        {items.slice(0, limit).map((project) => (
          <motion.article
            key={project.id}
            layout
            variants={cardVariants}
            initial={isFiltering ? "hidden" : false}
            animate="visible"
            exit="exit"
            whileHover={{
              y: -6,
              scale: 1.02,
              transition: { duration: 0.22, ease: easeOut },
            }}
            whileTap={{ scale: 0.98 }}
            className="group rounded-2xl overflow-hidden bg-secondary/40 border border-gray-700/30 hover:shadow-lg hover:shadow-accent/20 transition-all"
          >
            <Link to={project.link ?? "#"} className="block">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-110"
                  style={{
                    transition:
                      "transform 700ms cubic-bezier(0.22,1,0.36,1) 420ms",
                  }}
                />
              </div>

              {/* Title + Description */}
              <div className="p-5 sm:p-6 md:p-8">
                <h3 className="font-semibold text-text-secondary text-base sm:text-lg md:text-xl mb-2">
                  {project.title}
                </h3>

                {(project.description || project.subtitle) && (
                  <p
                    className="text-text-secondary text-xs sm:text-sm transition-colors duration-300"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span
                      className="group-hover:text-[color:var(--accent)]"
                      style={{ "--accent": accent } as React.CSSProperties}
                    >
                      {project.description || project.subtitle}
                    </span>
                  </p>
                )}
              </div>
            </Link>
          </motion.article>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default PortfolioGrid;
