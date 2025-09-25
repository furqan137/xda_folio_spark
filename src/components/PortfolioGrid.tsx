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
  { id: 1, title: "Whispering Woods", description: "See Details", image: pastwork1, link: "/crystalvision" },
  { id: 2, title: "Neon Dystopia", description: "See Details", image: pastwork2, link: "/crystalvision" },
  { id: 3, title: "Geometric Harmony", description: "See Details", image: pastwork3, link: "/crystalvision" },
  { id: 4, title: "Android Soul", description: "See Details", image: pastwork4, link: "/crystalvision" },
  { id: 5, title: "Zen Garden", description: "See Details", image: pastwork5, link: "/crystalvision" },
  { id: 6, title: "Pixel Perk Cafe", description: "See Details", image: pastwork6, link: "/crystalvision" },
];

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

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
    <div className="text-center px-4 sm:px-6 lg:px-8">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project) => (
          <Link to={project.link} key={project.id}>
            <motion.div
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0px 8px 25px rgba(0, 200, 255, 0.25)",
                rotateX: 2,
                rotateY: -2,
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: easeOut }}
              className="group rounded-xl overflow-hidden bg-secondary/50 border border-gray-700/50 
                         transition-all hover:border-accent/60"
            >
              {/* Image with delayed zoom */}
              <motion.div
                className="relative overflow-hidden"
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: easeOut }}
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ delay: 0.6, duration: 0.6, ease: easeInOut }} // ⏳ Delay zoom
                />
              </motion.div>

              {/* Title + Description */}
              <div className="p-4 text-left">
                <motion.h3
                  className="font-semibold text-white text-base sm:text-lg group-hover:text-cyan-400"
                  whileHover={{ textShadow: "0px 0px 10px #00e0ff" }} // ✨ Glow
                  transition={{ duration: 0.25 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className="text-gray-400 text-sm sm:text-base group-hover:text-cyan-300"
                  whileHover={{ textShadow: "0px 0px 8px #00e0ff" }} // ✨ Glow
                  transition={{ duration: 0.25 }}
                >
                  {project.description}
                </motion.p>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default PortfolioGrid;
