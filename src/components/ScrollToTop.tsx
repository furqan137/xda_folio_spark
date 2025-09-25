import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // scrolls to top on route change
  }, [pathname]);

  return <>{children}</>;
};

export default ScrollToTop;
