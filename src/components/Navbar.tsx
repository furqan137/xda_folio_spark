import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../images/logo.svg";
import StarBorder from "./StarBorder";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const [isTransparent, setIsTransparent] = useState(false);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(false);
    const timeout = setTimeout(() => setReady(true), 150);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  // Combined effect for scroll shrink and transparency
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsShrunk(scrolled);

      // If the menu is open, force frosty nav and preserve shrunken height
      if (isOpen) {
        setIsTransparent(false);
        return;
      }

      if (location.pathname === "/" || location.pathname === "/home") {
        setIsTransparent(!scrolled);
      } else {
        setIsTransparent(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname, isOpen]);

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

  // 🔧 Close menu immediately on ANY window resize (width or height)
  useEffect(() => {
    const handleResize = () => {
      if (isOpen) {
        setIsOpen(false);
        document.body.style.overflow = "";
        document.body.style.touchAction = "";
      }
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
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
  duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]
  ${
    ready
      ? isOpen
        ? "backdrop-blur-xl bg-background/80 border-b border-white/10 shadow-sm py-[0.3rem] md:py-2"
        : isTransparent
        ? "bg-transparent backdrop-blur-0 border-transparent shadow-none py-[0.6rem] md:py-3"
        : isShrunk
        ? "backdrop-blur-xl bg-background/80 border-b border-white/10 shadow-sm py-[0.3rem] md:py-1"
        : "bg-background/95 py-[0.6rem] md:py-2 border-b border-transparent"
      : "bg-transparent backdrop-blur-0 border-transparent shadow-none py-[0.6rem] md:py-3"
  }`}
        style={{ willChange: "backdrop-filter, border-color, background-color, transform, opacity" }}
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
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`hidden md:block ${
              isShrunk ? "-translate-x-3 md:-translate-x-6 translate-y-[2px]" : "translate-x-0 translate-y-0"
            }
      transform-gpu transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] relative group`}
          >
            <div
              className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-all duration-500 blur-[20px] pointer-events-none"
              style={{
                background: "rgba(34,211,238,0.25)",
                boxShadow:
                  "0 0 4px 1px rgba(34,211,238,0.3), 0 0 12px 3px rgba(34,211,238,0.25), 0 0 20px 6px rgba(34,211,238,0.1)"
              }}
            />
            <Link to="/contact">
              <StarBorder
                as="button"
                className="px-6 py-2 text-sm font-semibold rounded-lg transition-all duration-300 border border-cyan-400/40 group-hover:border-cyan-400/80"
              >
                CONTACT
              </StarBorder>
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
                isShrunk ? "pt-[4rem]" : "pt-[5rem]"
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
                    <StarBorder
                      as={Link}
                      to="/contact"
                      onClick={() => {
                        setIsOpen(false);
                        document.body.style.overflow = "";
                        document.body.style.touchAction = "";
                      }}
                      className="w-full text-center text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_4px_1px_#22d3ee,0_0_12px_3px_rgba(34,211,238,0.25),0_0_20px_6px_rgba(34,211,238,0.1)]"
                    >
                      CONTACT
                    </StarBorder>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default Navbar;
