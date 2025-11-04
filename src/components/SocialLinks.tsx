import { motion } from "framer-motion";
import { easeOut, easeInOut } from "framer-motion";
import { socialLinks } from "../data/socialLinks"; 

const SocialLinks = () => {
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
      boxShadow: "0px 6px 18px rgba(168, 85, 247, 0.25)",
      transition: { duration: 0.15, ease: easeOut },
    },
    tap: { scale: 0.92 },
  };

  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.18,
      rotate: 6,
      transition: { delay: 0.15, duration: 0.4, ease: easeInOut },
    },
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
                     bg-secondary/50 rounded-xl border-2 flex items-center justify-center
                     text-text-secondary shadow-md hover:shadow-[0_0_15px_rgba(168,85,247,0.45)]
                     hover:text-blue-400 hover:bg-blue-500/10
                     border border-gray-700 hover:border-blue-400
                     transition-all duration-300 group"
        >
          <motion.img
            src={link.icon}
            alt={link.label}
            className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
            variants={iconVariants}
            initial="initial"
          />
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;
