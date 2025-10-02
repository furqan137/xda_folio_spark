import React from "react";
import { motion, Variants } from "framer-motion";

// Local icons
import InspirationIcon from "../icons/about/inspire.png";
import GrowthIcon from "../icons/about/growth.png";
import CommunityIcon from "../icons/about/community.png";
import ExperienceIcon from "../icons/about/experience.png";
import SatisfactionIcon from "../icons/about/satisfaction.png";
import CoffeeIcon from "../icons/about/coffee.png";
import LearningIcon from "../icons/about/learning.png";

// Local images
import CreativeImage from "../images/creative.png";
import ProfileImage from "../images/profile.png";

// ------------------ Variants ------------------
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// ------------------ Component ------------------
const About = () => {
  const values = [
    {
      icon: InspirationIcon,
      title: "Inspiration Sources",
      description:
        "I find inspiration everywhere—from the interplay of light and shadow in Parisian cafés to the geometric patterns in Islamic architecture.",
    },
    {
      icon: GrowthIcon,
      title: "Personal Growth",
      description:
        "Each project teaches me something new. I believe in continuous learning and pushing the boundaries of my creative comfort zone.",
    },
    {
      icon: CommunityIcon,
      title: "Community",
      description:
        "I'm passionate about mentoring emerging artists and contributing to the vibrant creative community that shaped me.",
    },
  ];

  const stats = [
    { value: "8+", label: "Years of Experience", icon: ExperienceIcon },
    { value: "99%", label: "Client Satisfaction", icon: SatisfactionIcon },
    { value: "200+", label: "Cups of Coffee", icon: CoffeeIcon },
    { value: "24/7", label: "Learning Mode", icon: LearningIcon },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 py-12">
        {/* ------------------ Header ------------------ */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-text-muted text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
            About Us
          </p>
          <h1 className="font-mono text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">
            Design that Inspires
          </h1>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto mb-6 sm:mb-8">
            A digital artist crafting unique visual identities and immersive
            experiences that connect and resonate.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center bg-secondary border border-gray-600 px-5 py-2.5 sm:px-6 sm:py-3 
                 rounded-lg font-medium text-sm sm:text-base 
                 hover:bg-accent hover:text-white 
                 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              View My Work
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center border border-gray-600 px-5 py-2.5 sm:px-6 sm:py-3 
                 rounded-lg font-medium text-sm sm:text-base 
                 hover:border-accent hover:text-accent 
                 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Get In Touch
            </motion.button>
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
              <h2 className="font-mono text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                A blend of art & logic.
              </h2>
              <p className="text-text-secondary mb-4 sm:mb-6 text-sm sm:text-base">
                I believe great design is not just about aesthetics, but about
                creating a feeling, telling a story, and solving a problem. My
                work lives at the intersection of creative exploration and
                strategic thinking.
              </p>
              <p className="text-text-secondary text-sm sm:text-base">
                From vibrant illustrations to clean, intuitive user interfaces,
                my goal is to build things that are not only beautiful but also
                meaningful and user-centric.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="bg-secondary/30 p-6 sm:p-8 rounded-xl border border-gray-700/50"
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
                  <h3 className="font-semibold text-sm sm:text-base">
                    Aria Lane
                  </h3>
                  <p className="text-text-muted text-xs sm:text-sm">
                    Visual Artist & Designer
                  </p>
                </div>
              </div>
              <p className="text-text-secondary text-xs sm:text-sm">
                Specializing in digital illustration, branding, and UI/UX.
                Passionate about bringing ideas to life with clarity and
                creativity.
              </p>
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
            <h2 className="font-mono text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">
              My Creative Journey
            </h2>
            <p className="text-text-secondary text-sm sm:text-base">
              From traditional sketches to digital masterpieces
            </p>
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
                Growing up in the artistic heart of Paris, I was immersed in a
                world where creativity wasn’t just encouraged—it was essential.
              </p>
              <p className="text-text-secondary text-sm sm:text-base">
                What began as childhood fascination with colors and forms has
                evolved into a sophisticated understanding of visual
                communication.
              </p>
              <p className="text-text-secondary text-sm sm:text-base">
                Today, I blend traditional artistic principles with digital
                techniques, creating work that resonates.
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
            <h2 className="font-mono text-2xl sm:text-3xl font-bold">
              Beyond the Canvas
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left Values */}
            <div className="space-y-6 sm:space-y-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-3 sm:gap-4 items-start"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/20 rounded-lg flex items-center justify-center"
                  >
                    <img
                      src={value.icon}
                      alt={value.title}
                      loading="lazy"
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base mb-1">
                      {value.title}
                    </h3>
                    <p className="text-text-secondary text-xs sm:text-sm">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-secondary/30 border border-gray-700/50 rounded-xl p-4 sm:p-6 text-center"
                >
                  <div className="font-mono text-2xl sm:text-3xl font-bold text-accent mb-1 sm:mb-2">
                    {stat.value}
                  </div>
                  <p className="text-text-secondary text-xs sm:text-sm">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

 {/* ------------------ CTA Section ------------------ */}
<motion.section
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.15 }}
  className="text-center py-14 sm:py-20 px-6 sm:px-10 bg-secondary/20 rounded-2xl border border-gray-700/50"
>
  <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl font-bold mb-5 sm:mb-6 leading-snug">
    It's your time to shine.
  </h2>
  
  <p className="text-text-secondary mb-8 sm:mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
    Have a project in mind or just want to say hello?  
    I’d love to hear from you. Let’s create something amazing together.
  </p>

  <motion.button
    whileHover={{ scale: 1.06 }}
    whileTap={{ scale: 0.95 }}
    className="inline-flex items-center justify-center bg-gradient-to-r from-accent to-accent-light 
      px-7 sm:px-10 py-3.5 sm:py-4.5 rounded-xl 
      font-medium text-base sm:text-lg text-white 
      shadow-md hover:shadow-lg transition-all duration-300"
  >
    Start a Conversation
  </motion.button>
</motion.section>

      </div>

      {/* ---------------- FOOTER ---------------- */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="py-10 px-6 sm:px-8 md:px-12 border-t border-gray-800"  // 🔥 Increased padding to match sections
      >
        <div className="max-w-6xl mx-auto text-center text-text-muted text-sm max-sm:text-xs">
          © Elara Vance 2025. All rights reserved.
        </div>
      </motion.footer>
    </div>
  );
};

export default About;
