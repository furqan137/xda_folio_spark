<<<<<<< HEAD
// src/pages/Home.tsx
import React, { useEffect, useState } from "react";
import { motion, Variants, Transition } from "framer-motion";
import { Helmet } from "react-helmet-async";

// Components
import SocialLinks from "../components/SocialLinks";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import ProjectGrid from "../components/PortfolioGrid";

// Data
import { skills } from "../data/skills";

// Icons & Images
import profileImg from "../images/profile.svg";
import mapIcon from "../icons/map-pin.svg";
import graduateIcon from "../icons/palette.svg";
import aboutIcon from "../icons/aboutme.svg";
import skillsIcon from "../icons/skills.svg";

const Home: React.FC = () => {
  // ---- Animation variants ----
=======
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

>>>>>>> a4084e00452dc66727786b7f875a41ff8bbfc7e0
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
<<<<<<< HEAD
      transition: { duration: 0.45, ease: "easeOut" } as Transition,
=======
      transition: { duration: 0.5, ease: "easeOut" } as Transition,
>>>>>>> a4084e00452dc66727786b7f875a41ff8bbfc7e0
    },
  };

  const staggerContainer: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } as Transition },
  };

<<<<<<< HEAD
  // ---- Responsive viewport trigger ----
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 640px)");
    const handler = (e: MediaQueryListEvent | MediaQueryList) => {
      // @ts-ignore
      setIsMobile("matches" in e ? e.matches : e.matches);
    };

    setIsMobile(mql.matches);

    // @ts-ignore
    if (mql.addEventListener) mql.addEventListener("change", handler);
    else mql.addListener(handler);

    return () => {
      // @ts-ignore
      if (mql.removeEventListener) mql.removeEventListener("change", handler);
      else mql.removeListener(handler);
    };
  }, []);

  const vpMobile = { once: true, amount: 0.05 };
  const vpDesktop = { once: true, amount: 0.2 as const };

  return (
    <>
      <Helmet>
        <title>NITTIN | Home</title>
        <meta
          name="description"
          content="Art. Logic. Identity. — Visual systems and motion design by NITTIN."
        />
      </Helmet>

      <div className="min-h-screen bg-background text-white overflow-hidden">
        {/* ---------------- HERO SECTION ---------------- */}
        <section className="pt-36 sm:pt-48 md:pt-56 pb-10 px-0">
          <div className="max-w-6xl mx-auto text-center px-7 sm:px-6 md:px-8">
            {/* Profile Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              className="w-28 h-28 mx-auto mb-5 rounded-full overflow-hidden ring-4 ring-accent/30 shadow-lg
                         max-sm:w-24 max-sm:h-24 max-sm:mb-4"
            >
              <img
                src={profileImg}
                alt="Profile"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Intro Text */}
=======
  return (
    <div className="min-h-screen bg-background text-white overflow-hidden">
      {/* ---------------- HERO SECTION ---------------- */}
      <section className="py-10 md:py-14 px-6 sm:px-8 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="w-28 h-28 mx-auto mb-5 rounded-full overflow-hidden ring-4 ring-accent/30 shadow-lg
                       max-sm:w-24 max-sm:h-24 max-sm:mb-4"
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
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-3xl mx-auto px-2"
          >
            <h1 className="font-mono text-3xl md:text-5xl font-bold mb-3 leading-snug max-sm:text-2xl">
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
            <p className="text-text-secondary text-lg md:text-xl mb-5 max-w-2xl mx-auto max-sm:text-base">
              Welcome to my digital canvas! I’m a designer who blends
              creativity, technology, and emotion to craft impactful experiences
              and visuals.
            </p>

            {/* Location and Education */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-wrap justify-center items-center gap-5 mb-5 text-sm text-text-secondary
                         max-sm:flex-col max-sm:gap-2"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-2">
                <img src={graduateIcon} alt="Graduate" className="w-4 h-4" />
                <span>Fine Arts Student</span>
              </motion.div>
              <motion.div variants={fadeUp} className="flex items-center gap-2">
                <img src={mapIcon} alt="Location" className="w-4 h-4" />
                <span>Paris, France</span>
              </motion.div>
            </motion.div>

            {/* Social Media Links */}
>>>>>>> a4084e00452dc66727786b7f875a41ff8bbfc7e0
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
<<<<<<< HEAD
              className="max-w-3xl mx-auto px-2"
            >
              <h1 className="font-mono text-3xl md:text-5xl font-bold mb-3 leading-snug max-sm:text-2xl">
                Hi, I'm{" "}
                <motion.span
                  className="text-accent"
                  animate={{ color: ["#22d3ee", "#e879f9", "#22d3ee"] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                >
                  Nitinfiny
                </motion.span>
                .<br />
              </h1>
              <h2 className="font-mono text-lg md:text-2xl font-medium leading-snug max-sm:text-base mb-6 md:mb-8 text-text-secondary">
                Designer, Artist, Creator.
              </h2>

              {/* Location and Education */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-wrap justify-center items-center gap-5 mb-5 text-sm text-text-secondary
                           max-sm:flex-col max-sm:gap-2"
              >
                <motion.div
                  variants={fadeUp}
                  className="flex items-center gap-2"
                >
                  <img
                    src={graduateIcon}
                    alt="CG Artist Icon"
                    className="w-4 h-4"
                  />
                  <span>Visual CG Artist</span>
                </motion.div>
                <motion.div
                  variants={fadeUp}
                  className="flex items-center gap-2"
                >
                  <img src={mapIcon} alt="Location" className="w-4 h-4" />
                  <span>Remote</span>
                </motion.div>
              </motion.div>

              {/* Social Media Links */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <SocialLinks />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ---------------- ABOUT & SKILLS ---------------- */}
        <section className="py-10 px-0">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 max-sm:grid-cols-1 max-sm:gap-5 px-7 sm:px-7 md:px-9">
            {/* About Me Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="bg-secondary/30 p-7 rounded-2xl border border-gray-700 shadow-md hover:shadow-accent/20 transition-shadow
                         max-sm:p-5"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <img src={aboutIcon} alt="About Me" className="w-6 h-6" />
                <h3 className="text-xl font-mono font-semibold max-sm:text-lg">
                  About Me
                </h3>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.3, duration: 0.45, ease: "easeOut" }}
                className="text-text-secondary leading-relaxed text-base max-sm:text-sm"
              >
                I’m a visual CG artist focused on design, motion, and
                illustration — blending structure with creativity to build
                visuals that feel deliberate and expressive.
              </motion.p>
            </motion.div>

            {/* Tools & Skills Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="bg-secondary/30 p-7 rounded-2xl border border-gray-700 shadow-md hover:shadow-accent/20 transition-shadow
                         max-sm:p-5"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <img
                  src={skillsIcon}
                  alt="Tools & Skills"
                  className="w-6 h-6"
                />
                <h3 className="text-xl font-mono font-semibold max-sm:text-lg">
                  Tools & Skills
                </h3>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.3, duration: 0.45, ease: "easeOut" }}
                className="grid grid-cols-2 gap-3 max-sm:gap-2"
                style={{ pointerEvents: "none" }}
              >
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 text-sm text-text-secondary transition-colors max-sm:text-xs max-sm:gap-2 group"
                    style={{ pointerEvents: "none" }}
                  >
                    <span
                      className="icon"
                      style={{
                        display: "inline-block",
                        verticalAlign: "middle",
                        pointerEvents: "auto",
                      }}
                    >
                      <motion.img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-5 h-5 object-contain max-sm:w-4 max-sm:h-4"
                        whileHover={{ rotate: [0, -10, 10, -10, 10, 0] }}
                        transition={{ duration: 0.6 }}
                      />
                    </span>
                    <span
                      className="label group-hover:text-text-primary transition-colors"
                      style={{
                        display: "inline-block",
                        minWidth:
                          skill.name === "Premiere Pro" ? "6.2em" : "4.8em",
                        pointerEvents: "auto",
                        verticalAlign: "middle",
                      }}
                    >
                      {skill.name}
                    </span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ---------------- PAST WORK ---------------- */}
        <section className="py-10 px-0">
          <div className="max-w-6xl mx-auto px-7 sm:px-7 md:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={isMobile ? vpMobile : vpDesktop}
              className="text-center mb-8 max-sm:mb-5"
            >
              <h2 className="font-mono text-3xl font-bold mb-2 max-sm:text-2xl">
                Past Work
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={isMobile ? vpMobile : vpDesktop}
              className="px-0"
            >
              <div className="transition-transform">
                <ProjectGrid limit={9} accent="#22d3ee" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ---------------- FOOTER ---------------- */}
        <BackToTop />
        <Footer />
      </div>
    </>
  );
};

export default Home;
=======
            >
              <SocialLinks />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- ABOUT & SKILLS ---------------- */}
      <section className="py-10 px-6 sm:px-8 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 max-sm:grid-cols-1 max-sm:gap-5">
          {/* About Me Card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-secondary/30 p-7 rounded-2xl border border-gray-700 shadow-md hover:shadow-accent/20 transition-shadow
                       max-sm:p-5"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <img src={aboutIcon} alt="About Me" className="w-6 h-6" />
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
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-secondary/30 p-7 rounded-2xl border border-gray-700 shadow-md hover:shadow-accent/20 transition-shadow
                       max-sm:p-5"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <img src={skillsIcon} alt="Tools & Skills" className="w-6 h-6" />
              <h3 className="text-xl font-mono font-semibold max-sm:text-lg">
                Tools & Skills
              </h3>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="grid grid-cols-2 gap-3 max-sm:gap-2"
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
                    className="w-5 h-5 object-contain max-sm:w-4 max-sm:h-4"
                  />
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- PAST WORK ---------------- */}
      <section className="py-10 px-6 sm:px-8 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-8 max-sm:mb-5"
          >
            <h2 className="font-mono text-3xl font-bold mb-2 max-sm:text-2xl">
              Past Work
            </h2>
          </motion.div>

          {/* Consistent grid */}
          <PortfolioGrid />
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="py-8 px-6 sm:px-8 md:px-12 border-t border-gray-800"
      >
        <div className="max-w-6xl mx-auto text-center text-text-muted text-sm max-sm:text-xs">
          © Elara Vance 2025. All rights reserved.
        </div>
      </motion.footer>
    </div>
  );
};

export default Home;
>>>>>>> a4084e00452dc66727786b7f875a41ff8bbfc7e0
