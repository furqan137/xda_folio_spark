// src/pages/Home.tsx
import React, { useEffect, useState } from "react";
import { motion, Variants, Transition } from "framer-motion";
import { Helmet } from "react-helmet-async";

// Components
import SocialLinks from "../components/SocialLinks";
import SplashCursor from "../components/SplashCursor";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import SpotlightCard from "../components/SpotlightCard";
import ProjectGrid from "../components/PortfolioGrid";

// Icons & Images
import profileImg from "../images/profile.svg";
import mapIcon from "../icons/map-pin.svg";
import graduateIcon from "../icons/palette.svg";
import aboutIcon from "../icons/aboutme.svg";
import skillsIcon from "../icons/skills.svg";

// Skills Icons
import photoshopIcon from "../icons/photoshop.svg";
import illustratorIcon from "../icons/illustrator.svg";
import figmaIcon from "../icons/figma.svg";
import xdIcon from "../icons/xd.svg";
import procreateIcon from "../icons/procreate.svg";
import aftereffectsIcon from "../icons/aftereffects.svg";
import premiereproIcon from "../icons/premierepro.svg";
import lightroomIcon from "../icons/lightroom.svg";

// ---- Animation Variants ----
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" } as Transition,
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } as Transition },
};

// Memoized Components
const MemoizedSocialLinks = React.memo(SocialLinks);
const MemoizedFooter = React.memo(Footer);
const MemoizedBackToTop = React.memo(BackToTop);

const Home: React.FC = () => {
  const skills = [
    { name: "Photoshop", icon: photoshopIcon },
    { name: "Illustrator", icon: illustratorIcon },
    { name: "Figma", icon: figmaIcon },
    { name: "XD", icon: xdIcon },
    { name: "Procreate", icon: procreateIcon },
    { name: "After Effects", icon: aftereffectsIcon },
    { name: "Premiere Pro", icon: premiereproIcon },
    { name: "Lightroom", icon: lightroomIcon },
  ];

  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 640px)");

    // Set initial state
    setIsMobile(mql.matches);

    // Define a handler
    const handler = (event: MediaQueryListEvent) => setIsMobile(event.matches);

    // Modern browsers
    if (mql.addEventListener) {
      mql.addEventListener("change", handler);
      return () => mql.removeEventListener("change", handler);
    }

    // Legacy browsers
    if (mql.addListener) {
      mql.addListener(handler);
      return () => mql.removeListener(handler);
    }
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

      <div className="relative z-10 min-h-screen bg-background text-white overflow-hidden">
        <div className="fixed inset-0 z-0 pointer-events-none">
          <SplashCursor />
        </div>

        {/* ---------------- HERO SECTION ---------------- */}
        <section className="relative z-10 pt-36 sm:pt-48 md:pt-56 pb-10 px-0">
          <div className="max-w-6xl mx-auto text-center px-7 sm:px-6 md:px-8">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              className="w-28 h-28 mx-auto mb-5 rounded-full overflow-hidden ring-4 ring-accent/30 shadow-lg max-sm:w-24 max-sm:h-24 max-sm:mb-4"
            >
              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>

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
                  Nitinfiny
                </motion.span>
                .<br />
              </h1>
              <h2 className="font-mono text-lg md:text-2xl font-medium leading-snug max-sm:text-base mb-6 md:mb-8 text-text-secondary">
                Designer, Artist, Creator.
              </h2>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-wrap justify-center items-center gap-5 mb-5 text-sm text-text-secondary max-sm:flex-col max-sm:gap-2"
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

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <MemoizedSocialLinks />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ---------------- ABOUT & SKILLS ---------------- */}
        <section className="relative z-10 py-10 px-0">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 max-sm:grid-cols-1 max-sm:gap-5 px-7 sm:px-7 md:px-9">
            {/* About Me Card */}
            <SpotlightCard className="p-7 rounded-2xl shadow-md hover:shadow-accent/20 transition-shadow max-sm:p-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
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
            </SpotlightCard>

            {/* Tools & Skills Card */}
            <SpotlightCard className="p-7 rounded-2xl shadow-md hover:shadow-accent/20 transition-shadow max-sm:p-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
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
                >
                  {skills.map((skill) => {
                    const isHovered = hoveredSkill === skill.name;
                    return (
                      <div
                        key={skill.name}
                        className="flex items-center gap-3 text-sm text-text-secondary transition-colors max-sm:text-xs max-sm:gap-2 cursor-default select-none"
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <motion.img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-5 h-5 object-contain max-sm:w-4 max-sm:h-4"
                          variants={{
                            rest: { rotate: 0 },
                            hover: { rotate: [0, -10, 10, -10, 10, 0] },
                          }}
                          animate={isHovered ? "hover" : "rest"}
                          transition={{ duration: 0.6 }}
                        />
                        <motion.span
                          className="label transition-colors"
                          variants={{
                            rest: { color: "#9ca3af" },
                            hover: { color: "#ffffff" },
                          }}
                          animate={isHovered ? "hover" : "rest"}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                        >
                          {skill.name}
                        </motion.span>
                      </div>
                    );
                  })}
                </motion.div>
              </motion.div>
            </SpotlightCard>
          </div>
        </section>

        {/* ---------------- PAST WORK ---------------- */}
        <section className="relative z-10 py-10 px-0">
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
        <MemoizedBackToTop />
        <MemoizedFooter />
      </div>
    </>
  );
};

export default Home;
