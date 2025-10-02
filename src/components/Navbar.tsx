import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../images/logo.png";

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
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}

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
  );
};

export default Navbar;
