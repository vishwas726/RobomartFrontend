import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();  // Directly get the current route's path

  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to the top of the page whenever the route changes
  }, [pathname]);  // Trigger useEffect when pathname changes

  return null;  // No visual output
};

export default ScrollToTop;
