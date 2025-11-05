import React from "react";
import { motion, easeOut } from "framer-motion";
import { Link } from "react-router-dom";
import EmptyState from "./EmptyState";

import {
  worksProjects,
  pastWorksProjects,
  playgroundProjects,
} from "../data/projects";

interface PortfolioGridProps {
  type?: "works" | "pastworks" | "playground"; // source type
  limit?: number;
  accent?: string;
  projects?: any[]; // optional custom projects (for filters)
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
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: easeOut },
  },
};

const PortfolioGrid: React.FC<PortfolioGridProps> = ({
  type = "pastworks",
  limit = 9,
  accent = "#22d3ee",
  projects,
}) => {
  // Select project list dynamically if no external list is provided
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
        <EmptyState reason="No projects found." />
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
      viewport={{ once: true, amount: 0.05, margin: "0px 0px -10% 0px" }}
    >
      {items.slice(0, limit).map((project) => (
        <motion.article
          key={project.id}
          layout
          variants={cardVariants}
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
                  transition: "transform 700ms cubic-bezier(0.22,1,0.36,1) 420ms",
                }}
              />
            </div>

            {/* Title + View Project */}
            <div className="p-5 sm:p-6 md:p-8">
              <h3 className="font-semibold text-text-secondary text-base sm:text-lg md:text-xl mb-2">
                {project.title}
              </h3>
              <p
                className="text-text-secondary text-xs sm:text-sm group-hover:text-[color:var(--accent)] transition-colors duration-300"
                style={{ "--accent": accent } as React.CSSProperties}
              >
                {project.description || project.subtitle || "View Project"}
              </p>
            </div>
          </Link>
        </motion.article>
      ))}
    </motion.div>
  );
};

export default PortfolioGrid;
