import { motion, Variants } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import SpotlightCard from "../components/SpotlightCard";

// Local icons
import InspirationIcon from "../icons/about/inspire.svg";
import GrowthIcon from "../icons/about/growth.svg";
import CommunityIcon from "../icons/about/community.svg";
import ExperienceIcon from "../icons/about/experience.svg";
import SatisfactionIcon from "../icons/about/craft.svg";
import CoffeeIcon from "../icons/about/coffee.svg";
import LearningIcon from "../icons/about/learning.svg";

// Local images
import CreativeImage from "../images/creative.png";
import ProfileImage from "../images/profile.svg";

// ------------------ Variants ------------------
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

// ------------------ Component ------------------
const About = () => {
  const values = [
    {
      icon: InspirationIcon,
      title: "Inspiration Sources",
      description:
        "Most of what I make starts from curiosity — learning, failing, fixing, and redoing until something finally clicks. Every piece teaches me something new.",
      color: "bg-indigo-700/25" // soft blue
    },
    {
      icon: GrowthIcon,
      title: "Personal Growth",
      description:
        "I’ve never had formal training or big clients — just a long trail of experiments, redesigns, and personal projects that pushed me to get better.",
      color: "bg-indigo-600/25" // purple for creativity
    },
    {
      icon: CommunityIcon,
      title: "Community",
      description:
        "Everything I've learned came from others sharing their work. I try to give that back — whether through collaborations, remakes, or helping others improve.",
      color: "bg-pink-700/25" // warm magenta tone
    }
  ];

  const stats = [
    { key: "exploration", value: "8+", label: "Years of Exploration", icon: ExperienceIcon },
    { key: "pride", value: "95%", label: "Work I'm Proud Of", icon: SatisfactionIcon },
    {
      key: "coffee",
      value: (
        <>
          <span className="block sm:hidden text-[2.2rem] leading-[1] mb-[5px]">∞</span>
          <span className="hidden sm:block text-[3rem] leading-[1] mb-[-4px]">∞</span>
        </>
      ),
      label: <span className="md:text-[0.95rem]">Cups of Coffee</span>,
      icon: CoffeeIcon
    },
    { key: "learning", value: "24/7", label: "Learning Mode", icon: LearningIcon }
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Helmet>
        <title>NITTIN | About</title>
        <meta
          name="description"
          content="Learn more about NITTIN — a visual designer blending art, logic, and motion to craft meaningful design systems and experiences."
        />
      </Helmet>
      <div className="max-w-6xl mx-auto px-7 sm:px-7 md:px-8 pt-36 sm:pt-48 md:pt-56 pb-12">
        {/* ------------------ Header ------------------ */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-text-muted text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">About</p>
          <h1 className="font-mono text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">Design that Inspires</h1>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto mb-6 sm:mb-8">
            I’m a visual designer focused on motion, identity, and UI/UX. My work blends precision and emotion — design
            that feels deliberate and built to last.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              to="/works"
              className="inline-flex items-center justify-center bg-secondary border border-gray-600 px-4.5 py-2.5 sm:px-5 sm:py-3
      rounded-lg font-medium text-sm sm:text-base
      hover:bg-accent hover:text-white hover:border-blue-400
      transition-all duration-300 shadow-md hover:shadow-lg"
            >
              View My Work
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center border border-gray-600 px-5 py-2.5 sm:px-6 sm:py-3
      rounded-lg font-medium text-sm sm:text-base
      hover:border-blue-400 hover:text-blue-400
      transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>

        {/* ------------------ Blend of Art & Logic ------------------ */}
        <section className="mb-16 md:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              <h2 className="font-mono text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">A blend of art & logic.</h2>
              <p className="text-text-secondary mb-4 sm:mb-6 text-sm sm:text-base">
                Good design isn’t just what you see — it’s how it feels and functions. Every project starts with intent,
                balancing clarity and impact.
              </p>
              <p className="text-text-secondary text-sm sm:text-base">
                From motion graphics to intuitive interfaces, I focus on work that’s both practical and expressive.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="p-6 sm:p-8 max-w-sm mx-auto"
            >
              <SpotlightCard
                spotlightColor="rgba(99, 102, 241, 0.2)"
                className="p-6 sm:p-8 max-w-sm mx-auto"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                  <motion.img
                    src={ProfileImage}
                    alt="Aria Lane"
                    loading="lazy"
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">Nitinfiny</h3>
                    <p className="text-text-muted text-xs sm:text-sm">Visual Artist & Designer</p>
                  </div>
                </div>
                <p className="text-text-secondary text-xs sm:text-sm">
                  Focused on motion, identity, and UI/UX. I design visuals that work — clear, consistent, and crafted
                  with intent.
                </p>
              </SpotlightCard>
            </motion.div>
          </div>
        </section>

        {/* ------------------ My Creative Journey ------------------ */}
        <section className="mb-16 md:mb-20">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="font-mono text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">My Creative Journey</h2>
            <p className="text-text-secondary text-sm sm:text-base">From early experiments to digital design systems</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="space-y-4 sm:space-y-6"
            >
              <p className="text-text-secondary text-sm sm:text-base">
                I started with simple drawings and motion tests — learning how light, color, and movement shape
                attention. Over time, that curiosity turned into a skillset focused on digital design, motion, and
                interface clarity.
              </p>
              <p className="text-text-secondary text-sm sm:text-base">
                Now, I combine visual design with structured problem-solving — creating work that’s clean, deliberate,
                and built to connect.
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="relative"
            >
              <motion.img
                src={CreativeImage}
                alt="Creative workspace"
                loading="lazy"
                className="w-full h-56 sm:h-72 md:h-80 object-cover rounded-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </section>

        {/* ------------------ Beyond the Canvas ------------------ */}
        <section className="mb-16 md:mb-20">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="font-mono text-2xl sm:text-3xl font-bold">Beyond the Canvas</h2>
          </motion.div>

          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Left Values */}
              <div className="space-y-6 sm:space-y-8">
                {values.map((value) => (
                  <div
                    key={value.title}
                    className="relative overflow-hidden transition-transform duration-300 flex gap-3 sm:gap-4 items-start p-4 sm:p-6"
                  >
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <div
                        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center shadow-inner shadow-accent/10 aspect-square ${value.color}`}
                      >
                        <img
                          src={value.icon}
                          alt={value.title}
                          loading="lazy"
                          className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
                        />
                      </div>
                    </motion.div>
                    <div>
                      <h3
                        className="text-base sm:text-lg mb-2"
                        style={{
                          fontFamily: "'Handjet', 'JetBrains Mono', monospace",
                          fontWeight: 600,
                          letterSpacing: "0.15em",
                          lineHeight: "1.4"
                        }}
                      >
                        {value.title}
                      </h3>
                      <p
                        className="text-text-secondary text-sm sm:text-base"
                        style={{
                          fontFamily: "'Handjet', 'JetBrains Mono', monospace",
                          letterSpacing: "0.05em",
                          lineHeight: "1.6"
                        }}
                      >
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Stats */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {stats.map((stat) => (
                  <SpotlightCard
                    key={stat.key}
                    spotlightColor="rgba(139, 92, 246, 0.15)"
                    className="relative overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(139,92,246,0.25)] p-4 sm:p-6 text-center"
                  >
                    <div
                      className="text-2xl sm:text-3xl font-bold text-accent mb-1 sm:mb-2"
                      style={{
                        fontFamily: "'Handjet', 'JetBrains Mono', monospace",
                        letterSpacing: "0.07em",
                        lineHeight: "1.5"
                      }}
                    >
                      {stat.value}
                    </div>
                    <p
                      className="text-text-secondary text-sm sm:text-base"
                      style={{
                        fontFamily: "'Handjet', 'JetBrains Mono', monospace",
                        letterSpacing: "0.09em",
                        lineHeight: "1.5"
                      }}
                    >
                      {stat.label}
                    </p>
                  </SpotlightCard>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ------------------ CTA Section ------------------ */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <SpotlightCard
            spotlightColor="rgba(139, 92, 246, 0.15)"
            className="relative overflow-hidden text-center py-14 sm:py-20 px-6 sm:px-10 bg-secondary/20 rounded-2xl border border-gray-700/50"
          >
            <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl font-bold mb-5 sm:mb-6 leading-snug">
              It's your time to shine.
            </h2>
            <p className="text-text-secondary mb-8 sm:mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Have a project in mind or just want to say hello? I’d love to hear from you. Let’s create something
              amazing together.
            </p>
            <motion.div
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-gradient-to-r from-accent to-accent-light
        px-7 sm:px-10 py-3.5 sm:py-4.5 rounded-xl
        font-medium text-base sm:text-lg text-white
        shadow-md hover:shadow-lg transition-all duration-300"
              >
                Start a Conversation
              </Link>
            </motion.div>
          </SpotlightCard>
        </motion.section>
      </div>

      {/* ---------------- FOOTER ---------------- */}
      <BackToTop />
      <Footer />
    </div>
  );
};

export default About;
