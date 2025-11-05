import { useEffect, useState, useRef, CSSProperties } from "react";
import { ChevronUp, LifeBuoy } from "lucide-react";

interface BackToTopProps {
  inline?: boolean;
}

const BackToTop: React.FC<BackToTopProps> = ({ inline = false }) => {
  const [visible, setVisible] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [footerTop, setFooterTop] = useState<number | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const dockZoneRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (inline) return;

    const isProjectPage = window.location.pathname.startsWith("/works/");
    const footer = isProjectPage
      ? (document.querySelector("#project-nav") as HTMLElement | null)
      : (document.querySelector("footer") as HTMLElement | null);
    const dockZone = dockZoneRef.current;

    const handleScroll = () => {
      if (!footer || !dockZone) return;

      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const docHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      const scrollable = docHeight - viewportHeight;

      const isMobile = window.innerWidth <= 768;
      const DOCK_GAP_PX = isMobile ? 16 : 25;

      // Determine if the page is short
      const isShortPage = scrollable < viewportHeight * 0.5 || docHeight <= viewportHeight + 100;

      if (isShortPage) {
        if (visible) setVisible(false);
      } else {
        // Calculate scroll progress percentage
        const scrollProgress = (scrollY / scrollable) * 100;

        if (scrollProgress >= 60) {
          if (!visible) setVisible(true);
        } else {
          if (visible) setVisible(false);
        }
      }

      // Calculate footer top position relative to dockZone container
      const footerRect = footer.getBoundingClientRect();
      const dockZoneRect = dockZone.getBoundingClientRect();
      const footerTopRelativeToDockZone = footerRect.top - dockZoneRect.top;

      // Determine if button should be fixed or absolute
      if (isMobile) {
        if (footerRect.top >= window.innerHeight - DOCK_GAP_PX * 0.5) {
          if (!isFixed) setIsFixed(true);
        } else {
          if (isFixed) setIsFixed(false);
        }
      } else {
        if (footerRect.top >= window.innerHeight) {
          if (!isFixed) setIsFixed(true);
        } else {
          if (isFixed) setIsFixed(false);
        }
      }

      // Store footerTop for initial use
      if (footerTop === null) {
        setFooterTop(footerTopRelativeToDockZone);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [visible, isFixed, footerTop, inline]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const isMobile = window.innerWidth <= 768;
  const DOCK_GAP_PX = isMobile ? 16 : 25;

  const basePosition = isFixed ? "fixed" : "absolute";
  const baseBottom = 0;
  const baseLeft = "50%";
  const baseTranslateX = "-50%";

  const translateYOffset = isFixed ? DOCK_GAP_PX : DOCK_GAP_PX + 5;

  // Use relative positioning container when absolute
  const style: CSSProperties = inline
    ? {
        position: "relative",
        margin: "2rem auto",
        transform: "none",
        opacity: 1,
        pointerEvents: "auto",
        width: "fit-content"
      }
    : {
        position: basePosition,
        bottom: baseBottom,
        left: baseLeft,
        transform: `translateX(${baseTranslateX}) translateY(-${translateYOffset}px)`,
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition: "transform 0.3s ease, opacity 0.3s ease",
        width: "fit-content"
      };

  return (
    <>
      <div
        className="relative"
        ref={dockZoneRef}
        id="dock-zone"
      >
        <div className="relative">
          <div className="h-32" />
          <div
            ref={buttonRef}
            className="bottom-[25px] left-1/2 z-50 transition-transform duration-300 ease-out"
            style={style}
          >
            <div
              className="relative inline-flex items-center z-10 rounded-full border border-white/10 bg-black/40 backdrop-blur-sm
                         px-2 py-1 sm:px-2.5 sm:py-1.5 md:px-3 md:py-2
                         gap-1.5 sm:gap-2"
            >
              <a
                href="https://links.xzadik.com/nitinfiny"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit the NITTIN Link Hub"
                className="flex items-center justify-center shrink-0 rounded-full text-white border-[3px] border-zinc-500 hover:border-blue-400 hover:text-blue-400 transition-all duration-300
                           w-10 h-10 sm:w-11 sm:h-11 md:w-11 md:h-11"
              >
                <LifeBuoy className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] md:w-[22px] md:h-[22px]" />
              </a>
              <button
                onClick={scrollToTop}
                className="flex items-center justify-center shrink-0 gap-1.5 sm:gap-2
                           px-4 py-1.5 sm:px-5 sm:py-2 md:px-6 md:py-2.5
                           rounded-full bg-zinc-800 border-[2px] border-zinc-700 text-white font-medium
                           text-xs sm:text-[13px] md:text-sm whitespace-nowrap
                           transition-all duration-300 hover:bg-zinc-700 hover:border-blue-400 hover:shadow-[0_0_12px_rgba(59,130,246,0.5)]"
              >
                <ChevronUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4 md:h-4" />
                <span>To the top</span>
              </button>
            </div>
          </div>
          <div className="h-16" />
        </div>
      </div>
    </>
  );
};

export default BackToTop;
