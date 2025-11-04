import { useEffect, useState, useRef } from "react";
import { ChevronUp, LifeBuoy } from "lucide-react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const [positionStyle, setPositionStyle] = useState<"fixed" | "absolute">("fixed");
  const [absoluteTop, setAbsoluteTop] = useState<number | null>(null);
  const [hasExtraPadding, setHasExtraPadding] = useState(true);
  const [shouldAddSpacer, setShouldAddSpacer] = useState(false);
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const locked = useRef(false);

  // Layout constants in rem (no px conversions)
  const DOCK_GAP_REM = 1.5625; // 25px
  const LOCK_ZONE_REM = 6.25; // 100px
  const MOBILE_FOOTER_OFFSET_REM = 6; // 50px
  const DESKTOP_FOOTER_OFFSET_REM = 4.6875; // 75px

  useEffect(() => {
    let resizeTimeout: number | null = null;
    let resizeInProgress = false;

    const recalc = () => {
      requestAnimationFrame(() => {
        const footer = document.querySelector("footer");
        const button = buttonRef.current;
        if (!footer || !button) return;

        const docHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
        const viewportHeight = window.visualViewport?.height || window.innerHeight;

        // Detect short pages (handles Safari dynamic viewports & filtered content)
        const scrollable = docHeight - viewportHeight;
        const isShortPage =
          scrollable < viewportHeight * 0.5 || // less than half viewport scrollable
          docHeight <= viewportHeight + 100 || // page nearly fits viewport
          docHeight <= viewportHeight * 1.1; // Safari viewport fallback

        if (isShortPage) {
          setHasExtraPadding(false);
          setShouldAddSpacer(false);
          setPositionStyle("fixed");
          setAbsoluteTop(null);
          locked.current = false;
          setVisible(false);
          return;
        } else {
          setHasExtraPadding(true);
        }

        const scrollY = window.scrollY;
        const scrollProgress = (scrollY / (docHeight - viewportHeight)) * 100;

        const TRIGGER_SHOW = window.innerWidth < 768 ? 65 : 60;
        const TRIGGER_HIDE = window.innerWidth < 768 ? 62 : 57; // hysteresis buffer to avoid flicker

        // Preserve previous visibility state to stabilize toggling
        setVisible((prevVisible) => {
          const showButton = prevVisible ? scrollProgress > TRIGGER_HIDE : scrollProgress > TRIGGER_SHOW;
          setShouldAddSpacer(showButton);
          return showButton;
        });

        const windowBottom = scrollY + viewportHeight;
        const buttonHeight = button.offsetHeight;

        // mobile vs desktop trigger math:
        // goal: start docking a bit BEFORE the button would overlap footer.
        // logic:
        //   - desktop: use same behavior we already liked
        //   - mobile: trigger *later* (closer to footer), not earlier.
        //
        // we define the "danger zone" as:
        // footer top + LOCK_ZONE + half button height + DOCK_GAP
        // so docking only starts once the bottom of the viewport has
        // entered that zone.

        // Adjust mobile docking trigger (restore padding offset)
        const isMobile = window.innerWidth < 768;

        // Distance from bottom where dock starts
        const stickPoint = isMobile
          ? docHeight -
            (LOCK_ZONE_REM * 16 + // lock zone above footer
              buttonHeight / 2 + // half button
              DOCK_GAP_REM * 16 - // float gap
              25 +
              45) // small buffer + increased offset for mobile
          : docHeight - (LOCK_ZONE_REM * 16 + DOCK_GAP_REM * 16 + buttonHeight / 2);

        // Check if viewport bottom has crossed that stick point
        const nearFooter = windowBottom >= stickPoint;

        // Skip during resize to avoid flicker
        if (resizeInProgress) return;

        if (nearFooter && !locked.current) {
          locked.current = true;
          setPositionStyle("absolute");
          setAbsoluteTop(
            docHeight -
              (LOCK_ZONE_REM +
                buttonHeight / 16 +
                (window.innerWidth < 768 ? MOBILE_FOOTER_OFFSET_REM : DESKTOP_FOOTER_OFFSET_REM)) *
                16
          );
        } else if (!nearFooter && locked.current) {
          locked.current = false;
          setPositionStyle("fixed");
          setAbsoluteTop(null);
        }
      });
    };

    const debouncedRecalc = () => {
      resizeInProgress = true;
      if (resizeTimeout) clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(() => {
        resizeInProgress = false;
        requestAnimationFrame(() => {
          recalc();
          locked.current = false; // force re-check lock state
          setPositionStyle("fixed");
          setAbsoluteTop(null);
        });
      }, 150);
    };

    const bodyObserver = new ResizeObserver(() => debouncedRecalc());
    const footer = document.querySelector("footer");
    const footerObserver = footer ? new ResizeObserver(() => debouncedRecalc()) : null;

    bodyObserver.observe(document.body);
    if (footer && footerObserver) footerObserver.observe(footer);

    window.addEventListener("scroll", recalc, { passive: true });
    window.addEventListener("resize", debouncedRecalc);

    recalc();

    return () => {
      bodyObserver.disconnect();
      footerObserver?.disconnect();
      window.removeEventListener("scroll", recalc);
      window.removeEventListener("resize", debouncedRecalc);
      if (resizeTimeout) clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <>
      <div
        ref={buttonRef}
        className={`left-1/2 z-50 transition-opacity duration-300 ease ${
          visible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{
          position: positionStyle,
          bottom: positionStyle === "fixed" ? `${DOCK_GAP_REM}rem` : "auto",
          top: positionStyle === "absolute" && absoluteTop !== null ? absoluteTop : "auto",
          left: "50%",
          transform: `translateX(-50%) translateY(0px)`,
          transition: "opacity 0.3s ease, transform 0.3s ease"
        }}
      >
        {/* Background effect container */}
        <div className="relative flex items-center gap-1">
          {/* Blurred and shaded background shape */}
          <div
            className={`absolute inset-0 rounded-[9999px] backdrop-blur-xl border border-white/10 bg-[#0f0f0f]/60 shadow-[0_0_25px_rgba(0,0,0,0.5)] transition-opacity duration-300 ease-in-out ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          ></div>

          {/* Foreground content */}
          <div className="relative flex items-center gap-1.5 px-1.5 py-1.5 z-10">
            {/* Link hub icon button */}
            <a
              href="https://links.xzadik.com/nitinfiny"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit the NITTIN Link Hub"
              className="flex items-center justify-center w-10 h-10 rounded-full text-white border-[3px] border-gray-600 hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
            >
              <LifeBuoy className="w-5 h-5 translate-y-[0.5px]" />
            </a>

            {/* Scroll to top button */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 px-4 py-1.5 rounded-[9999px] bg-secondary border border-transparent text-white text-sm font-medium transition-all duration-300 shadow-md hover:bg-accent hover:border-blue-400 hover:shadow-[0_0_12px_rgba(59,130,246,0.5)]"
            >
              <ChevronUp className="w-4 h-4" />
              <span>To the top</span>
            </button>
          </div>
        </div>
      </div>
      {/* Spacer to maintain bottom padding */}
      {shouldAddSpacer && hasExtraPadding && (
        <div
          className="h-32 md:h-40"
          style={{ transition: "none" }}
        />
      )}
    </>
  );
};

export default BackToTop;
