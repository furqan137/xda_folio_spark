import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { easeOut, easeInOut } from "framer-motion";

import pastwork1 from "../images/pastworks/pastwork1.png";
import pastwork2 from "../images/pastworks/pastwork2.png";
import pastwork3 from "../images/pastworks/pastwork3.png";
import pastwork4 from "../images/pastworks/pastwork4.png";
import pastwork5 from "../images/pastworks/pastwork5.png";
import pastwork6 from "../images/pastworks/pastwork6.png";

const projects = [
  {
    id: 1,
    title: "Whispering Woods",
    description: "See Details",
    image: pastwork1,
    link: "/crystalvision",
  },
  {
    id: 2,
    title: "Neon Dystopia",
    description: "See Details",
    image: pastwork2,
    link: "/crystalvision",
  },
  {
    id: 3,
    title: "Geometric Harmony",
    description: "See Details",
    image: pastwork3,
    link: "/crystalvision",
  },
  {
    id: 4,
    title: "Android Soul",
    description: "See Details",
    image: pastwork4,
    link: "/crystalvision",
  },
  {
    id: 5,
    title: "Zen Garden",
    description: "See Details",
    image: pastwork5,
    link: "/crystalvision",
  },
  {
    id: 6,
    title: "Pixel Perk Cafe",
    description: "See Details",
    image: pastwork6,
    link: "/crystalvision",
  },
];

// Parent container animation for staggered reveal
const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

// Card entrance animation
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: easeOut },
  },
};

const PortfolioGrid = () => {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
      variants={gridVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} 
    >
      {projects.map((project) => (
        <motion.article
          key={project.id}
          variants={cardVariants} 
          whileHover={{
            y: -6,
            scale: 1.02,
            transition: { duration: 0.22, ease: easeOut },
          }}
          whileTap={{ scale: 0.98 }}
          className="group rounded-2xl overflow-hidden bg-secondary/40 border border-gray-700/30 hover:shadow-lg hover:shadow-accent/20 transition-all"
        >
          <Link to={project.link} className="block">
            {/* Image with lazy loading */}
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
              <h3 className="font-semibold text-text-muted text-base sm:text-lg md:text-xl mb-2 transition-colors duration-300">
                {project.title}
              </h3>
              <motion.p
                className="text-text-secondary text-xs sm:text-sm transition-colors duration-300"
                whileHover={{
                  color: "var(--accent-color)",
                  textShadow: "0px 0px 6px var(--accent-color)",
                }}
                transition={{ duration: 0.3, ease: easeInOut }}
              >
                {project.description}
              </motion.p>
            </div>
          </Link>
        </motion.article>
      ))}
    </motion.div>
  );
};

export default PortfolioGrid;
