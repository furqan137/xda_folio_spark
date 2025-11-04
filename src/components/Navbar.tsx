<<<<<<< HEAD
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../images/logo.svg";
=======
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../images/logo.png";
>>>>>>> a4084e00452dc66727786b7f875a41ff8bbfc7e0

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

<<<<<<< HEAD
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isOpen]);

  const navItems = [
    { name: "Home", path: "/home" },
    { name: "Works", path: "/works" },
    { name: "Playground", path: "/playground" },
    { name: "About", path: "/about" }
  ];

  return (
    <>
      <header
        className={`w-full z-[60] fixed top-0 left-0 right-0
  transition-[padding,background-color,backdrop-filter,border-color,box-shadow]
  duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
  ${
    isShrunk
      ? "backdrop-blur-xl bg-background/80 border-b border-white/10 shadow-sm py-1"
      : isOpen
      ? "backdrop-blur-xl bg-background/80 border-b border-white/10 shadow-sm py-2 md:py-3"
      : "bg-background/95 py-2 md:py-3 border-b border-transparent"
  }`}
        style={{ willChange: "backdrop-filter, border-color, background-color" }}
      >
        {/* Navbar */}
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 transition-all duration-300">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link
              to={location.pathname === "/" || location.pathname === "/home" ? "#top" : "/"}
              onClick={(e) => {
                if (location.pathname === "/" || location.pathname === "/home") {
                  e.preventDefault();
                  window.history.pushState(null, "", "/#");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="flex items-center space-x-2"
            >
              <motion.img
                src={logo}
                alt="Logo"
                className={`object-contain transition-[width,height] duration-300 md:duration-500 ease-out delay-100 ${
                  isShrunk ? "w-12 h-12 md:w-14 md:h-14" : "w-16 h-16 md:w-20 md:h-20"
                }`}
                whileHover={{ rotate: 6 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-3">
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.4 }}
              >
                <Link
                  to={item.path}
                  className={`px-3 py-1.5 rounded-full text-base font-semibold transition-colors duration-200
                  ${location.pathname === item.path ? "text-[#a855f7]" : "text-text-secondary hover:text-blue-400"}`}
=======
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Works", path: "/works" },
    { name: "Playground", path: "/playground" },
    { name: "About", path: "/about" },
  ];

  return (
    <header
      className={`w-full bg-background z-50 sticky top-0 shadow-md transition-all duration-300 ${
        isShrunk ? "py-1" : "py-2 md:py-3"
      }`}
    >
      {/* Navbar */}
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 transition-all duration-300">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0, duration: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          <Link to="/" className="flex items-center space-x-2">
            <motion.img
              src={logo}
              alt="Logo"
              className={`object-contain transition-all duration-300 ${
                isShrunk
                  ? "w-10 h-10 md:w-12 md:h-12"
                  : "w-12 h-12 md:w-14 md:h-14"
              }`}
              whileHover={{ rotate: 6 }}
              transition={{ duration: 0.3 }}
            />
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-3">
          {navItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.4 }}
            >
              <Link
                to={item.path}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200
                ${
                  location.pathname === item.path
                    ? "bg-accent text-white shadow-md"
                    : "text-text-secondary hover:bg-secondary/40 hover:text-text-primary"
                }`}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Desktop CTA */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: navItems.length * 0.1 + 0.4,
            duration: 0.4,
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/contact"
            className="hidden md:block bg-accent text-white px-6 py-2 
                       rounded-full text-sm font-medium shadow-md
                       hover:bg-accent/80 transition-all duration-200"
          >
            LET&apos;S TALK
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col space-y-1 focus:outline-none z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
            className="block w-6 h-0.5 bg-text-primary"
          ></motion.span>
          <motion.span
            animate={{ opacity: isOpen ? 0 : 1 }}
            className="block w-6 h-0.5 bg-text-primary"
          ></motion.span>
          <motion.span
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
            className="block w-6 h-0.5 bg-text-primary"
          ></motion.span>
        </button>
      </nav>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-lg flex flex-col justify-center items-center space-y-6 z-40"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
              >
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl font-bold transition-all duration-200 ${
                    location.pathname === item.path
                      ? "text-accent"
                      : "text-text-primary hover:text-accent"
                  }`}
>>>>>>> a4084e00452dc66727786b7f875a41ff8bbfc7e0
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
<<<<<<< HEAD
          </div>

          {/* Desktop CTA */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${
              isShrunk ? "-translate-x-3 md:-translate-x-6 translate-y-[2px]" : "translate-x-0 translate-y-0"
            } transform-gpu transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]`}
          >
            <Link
              to="/contact"
              className="hidden md:block bg-transparent text-text-secondary px-6 py-2 rounded-lg text-sm font-medium shadow-md
                         border-2 border-text-secondary/40 hover:border-[#22d3ee]/60
                         hover:text-white hover:bg-accent/80
                         hover:shadow-[0_0_10px_rgba(34,211,238,0.4)]
                         hover:scale-105 transition-all duration-300 relative overflow-hidden
                         before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-[#22d3ee]/0
                         before:transition-all before:duration-500 before:blur-sm before:opacity-0
                         hover:before:opacity-100 hover:before:border-[#22d3ee]/50 hover:before:blur-md"
            >
              CONTACT
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col space-y-1 focus:outline-none z-50 relative"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.span
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
              className="block w-6 h-0.5 bg-text-primary"
            ></motion.span>
            <motion.span
              animate={{ opacity: isOpen ? 0 : 1 }}
              className="block w-6 h-0.5 bg-text-primary"
            ></motion.span>
            <motion.span
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
              className="block w-6 h-0.5 bg-text-primary"
            ></motion.span>
          </button>
        </nav>
      </header>

      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <div
              className={`fixed inset-0 z-[40] flex items-start justify-center ${
                isShrunk ? "pt-[3.8rem]" : "pt-[5.5rem]"
              } md:pt-[7rem] bg-transparent`}
              onClick={() => setIsOpen(false)}
            >
              <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                exit={{ y: -100 }}
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                className="w-full h-full flex items-start justify-center"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                  onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
                  className="rounded-2xl border border-white/10 shadow-sm w-[90%] max-w-sm p-6 space-y-4 backdrop-blur-xl bg-background/70"
                  style={{ willChange: "backdrop-filter" }}
                >
                  {navItems.map((item) => (
                    <motion.div key={item.name}>
                      <Link
                        to={item.path}
                        onClick={() => {
                          setIsOpen(false);
                          document.body.style.overflow = "";
                          document.body.style.touchAction = "";
                        }}
                        className={`text-lg font-medium transition-colors duration-200 block
                          ${location.pathname === item.path ? "text-accent" : "text-text-primary hover:text-blue-400"}`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}

                  <div className="border-t border-white/10 my-2" />

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: navItems.length * 0.05 + 0.1,
                      duration: 0.3
                    }}
                  >
                    <Link
                      to="/contact"
                      onClick={() => {
                        setIsOpen(false);
                        document.body.style.overflow = "";
                        document.body.style.touchAction = "";
                      }}
                      className="block bg-transparent text-text-secondary px-6 py-2 rounded-lg text-sm font-medium shadow-md
                                 border-2 border-text-secondary/40 hover:border-[#22d3ee]/60
                                 hover:text-white hover:bg-accent/80
                                 hover:shadow-[0_0_10px_rgba(34,211,238,0.4)]
                                 hover:scale-105 transition-all duration-300 relative overflow-hidden
                                 before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-[#22d3ee]/0
                                 before:transition-all before:duration-500 before:blur-sm before:opacity-0
                                 hover:before:opacity-100 hover:before:border-[#22d3ee]/50 hover:before:blur-md text-center w-full"
                    >
                      CONTACT
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
=======

            {/* Mobile CTA */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: navItems.length * 0.15 + 0.2,
                duration: 0.4,
              }}
              className="mt-12" // ✅ more margin top to separate from other nav links
            >
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-accent text-white px-12 py-4 rounded-full text-2xl font-bold 
               shadow-lg hover:bg-accent/80 transition-all duration-200"
              >
                LET&apos;S TALK
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
>>>>>>> a4084e00452dc66727786b7f875a41ff8bbfc7e0
  );
};

export default Navbar;
