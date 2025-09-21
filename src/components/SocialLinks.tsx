import React from "react";
import { motion } from "framer-motion";
import { easeOut, easeInOut } from "framer-motion"; // ✅ easing functions

// Import custom icons
import DribbbleIcon from "../icons/dribble.png";
import BehanceIcon from "../icons/behance.png";
import InstagramIcon from "../icons/instagram.png";
import GmailIcon from "../icons/gmail.png";

const SocialLinks = () => {
  const socialLinks = [
    { icon: DribbbleIcon, href: "https://dribbble.com", label: "Dribbble" },
    { icon: BehanceIcon, href: "https://behance.net", label: "Behance" },
    { icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
    { icon: GmailIcon, href: "mailto:yourmail@gmail.com", label: "Gmail" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        ease: easeOut,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: easeOut },
    },
    hover: {
      scale: 1.12,
      y: -4,
      boxShadow: "0px 6px 18px rgba(0, 200, 255, 0.25)",
      transition: { duration: 0.15, ease: easeOut }, // ✅ snappy raise
    },
    tap: { scale: 0.92 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="flex justify-center gap-3 sm:gap-4 flex-wrap"
    >
      {socialLinks.map((link) => (
        <motion.a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
          whileHover="hover"
          whileTap="tap"
          className="w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 
                     bg-secondary/50 rounded-xl flex items-center justify-center 
                     text-text-secondary shadow-md hover:shadow-accent/30
                     hover:text-accent hover:bg-accent/10 
                     border border-gray-700 hover:border-accent
                     transition-all duration-300 group"
        >
          {/* ✅ icon zooms in slightly after parent raise */}
          <motion.img
            src={link.icon}
            alt={link.label}
            className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
            whileHover={{ scale: 1.18, rotate: 6 }}
            transition={{ delay: 0.15, duration: 0.4, ease: easeInOut }} // ✅ delay for smoother zoom
          />
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;
