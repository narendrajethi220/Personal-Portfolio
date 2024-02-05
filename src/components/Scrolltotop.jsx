// ScrollToTop.jsx

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);

    // If you want to scroll to the top on route changes, uncomment the line below
    // window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
