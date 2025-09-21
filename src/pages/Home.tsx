import React from "react";
import { motion, Variants, Transition } from "framer-motion";
import SocialLinks from "../components/SocialLinks";

// Profile & Info Icons
import profileImg from "../images/profile.png";
import mapIcon from "../icons/map.png";
import graduateIcon from "../icons/graduate.png";

// Section Icons
import aboutIcon from "../icons/aboutme.png";
import skillsIcon from "../icons/skills.png";

// Skills Icons
import figmaIcon from "../icons/figma.png";
import illustratorIcon from "../icons/illustrator.png";
import photoshopIcon from "../icons/photoshop.png";
import afterEffectsIcon from "../icons/aftereffects.png";
import blenderIcon from "../icons/blender.png";
import htmlIcon from "../icons/html.png";
import cssIcon from "../icons/css.png";
import colorTheoryIcon from "../icons/color.png";

import PortfolioGrid from "../components/PortfolioGrid";

const Home: React.FC = () => {
  const skills = [
    { name: "Figma", icon: figmaIcon },
    { name: "Illustrator", icon: illustratorIcon },
    { name: "Photoshop", icon: photoshopIcon },
    { name: "After Effects", icon: afterEffectsIcon },
    { name: "Blender", icon: blenderIcon },
    { name: "HTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    { name: "Color Theory", icon: colorTheoryIcon },
  ];

  // ✅ Variants optimized for smoother mobile
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      } as Transition,
    },
  };

  const staggerContainer: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 } as Transition,
    },
  };

  return (
    <div className="min-h-screen bg-background text-white overflow-hidden">
      {/* ---------------- HERO SECTION ---------------- */}
      <section className="text-center py-20 px-6 md:px-8">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden ring-4 ring-accent/30 shadow-lg
                     max-sm:w-24 max-sm:h-24 max-sm:mb-6"
        >
          <img
            src={profileImg}
            alt="Profile"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Intro Text */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto px-2"
        >
          <h1 className="font-mono text-3xl md:text-5xl font-bold mb-4 leading-snug max-sm:text-2xl">
            Hi, I'm{" "}
            <motion.span
              className="text-accent"
              animate={{ color: ["#22d3ee", "#e879f9", "#22d3ee"] }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            >
              Elara Vance
            </motion.span>
            .<br />
            Designer, Artist, Creator.
          </h1>
          <p className="text-text-secondary text-lg md:text-xl mb-8 max-w-2xl mx-auto max-sm:text-base max-sm:mb-6">
            Welcome to my digital canvas! I’m a designer who blends creativity,
            technology, and emotion to craft impactful experiences and visuals.
          </p>

          {/* Location and Education */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center items-center gap-6 mb-10 text-sm text-text-secondary
                          max-sm:flex-col max-sm:gap-3 max-sm:mb-6"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-2">
              <img
                src={graduateIcon}
                alt="Graduate"
                loading="lazy"
                className="w-4 h-4"
              />
              <span>Fine Arts Student</span>
            </motion.div>
            <motion.div variants={fadeUp} className="flex items-center gap-2">
              <img
                src={mapIcon}
                alt="Location"
                loading="lazy"
                className="w-4 h-4"
              />
              <span>Paris, France</span>
            </motion.div>
          </motion.div>

          {/* Social Media Links */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <SocialLinks />
          </motion.div>
        </motion.div>
      </section>

      {/* ---------------- ABOUT & SKILLS ---------------- */}
      <section className="px-6 md:px-8 py-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 max-sm:grid-cols-1 max-sm:gap-6"
        >
          {/* About Me Card */}
          <motion.div
            variants={fadeUp}
            className="bg-secondary/30 p-8 rounded-2xl border border-gray-700 shadow-md hover:shadow-accent/20 transition-shadow
                       max-sm:p-6"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <img
                src={aboutIcon}
                alt="About Me"
                loading="lazy"
                className="w-6 h-6"
              />
              <h3 className="text-xl font-mono font-semibold max-sm:text-lg">
                About Me
              </h3>
            </div>
            <p className="text-text-secondary leading-relaxed text-base max-sm:text-sm">
              From a young age, I’ve been fascinated by visual storytelling. My
              journey into design has taught me the importance of balance,
              clarity, and emotion. Whether working on branding, UI, or 3D
              design, I approach each project with passion and precision.
            </p>
          </motion.div>

          {/* Tools & Skills Card */}
          <motion.div
            variants={fadeUp}
            className="bg-secondary/30 p-8 rounded-2xl border border-gray-700 shadow-md hover:shadow-accent/20 transition-shadow
                       max-sm:p-6"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <img
                src={skillsIcon}
                alt="Tools & Skills"
                loading="lazy"
                className="w-6 h-6"
              />
              <h3 className="text-xl font-mono font-semibold max-sm:text-lg">
                Tools & Skills
              </h3>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-2 gap-4 max-sm:gap-3"
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={fadeUp}
                  className="flex items-center gap-3 text-sm text-text-secondary hover:text-text-primary transition-colors
                             max-sm:text-xs max-sm:gap-2"
                  whileHover={{ scale: 1.05, x: 3 }}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    loading="lazy"
                    className="w-5 h-5 object-contain max-sm:w-4 max-sm:h-4"
                  />
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ---------------- PAST WORK ---------------- */}
      <section className="px-6 md:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-12 max-sm:mb-8"
          >
            <h2 className="font-mono text-3xl font-bold mb-2 max-sm:text-2xl">
              Past Work
            </h2>
          </motion.div>

          <PortfolioGrid />
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center py-6 text-text-muted text-sm border-t border-gray-800
                         max-sm:text-xs max-sm:py-4"
      >
        © Elara Vance 2025. All rights reserved.
      </motion.footer>
    </div>
  );
};

export default Home;
