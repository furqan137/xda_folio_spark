// src/components/Footer.tsx
import { motion } from "framer-motion";
import stampu from "../images/stampu.png";

const EASE_SMOOTH: [number, number, number, number] = [0.4, 0, 0.2, 1];

const Footer = (): JSX.Element => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: EASE_SMOOTH }}
      className="relative py-14 sm:py-10 px-6 sm:px-8 md:px-12 border-t border-gray-900 flex flex-col items-center justify-center"
    >
      <div className="max-w-6xl mx-auto text-center text-text-muted text-sm max-sm:text-xs flex flex-col items-center gap-3">
        <p>
          a
          <a
            href="https://xzadik.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 hover:underline transition-colors duration-300"
          >
            |02|Xzadik
          </a>{" "}
          site。
        </p>
        <p>© {new Date().getFullYear()} NiTTiN. All rights reserved.</p>
      </div>
      <div
        className="absolute right-6 sm:right-10 md:right-12 bottom-4 sm:bottom-8 md:bottom-10 flex items-end justify-end"
        style={
          window.innerWidth <= 640
            ? { insetInlineEnd: "2rem", insetBlockEnd: "3rem" }
            : { insetInlineEnd: "2rem", insetBlockEnd: "2rem" }
        }
      >
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="block w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 hover:scale-105 transition-transform duration-300"
        >
          <img
            src={stampu}
            alt="nittin-stampu"
            className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
        </a>
      </div>
    </motion.footer>
  );
};

export default Footer;
