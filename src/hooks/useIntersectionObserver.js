import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook to track element intersection visibility via IntersectionObserver
 * @param {Object} options - IntersectionObserverInit options
 * @returns {[React.RefObject, boolean]} [ref, isVisible]
 */
export function useIntersectionObserver(options = { root: null, rootMargin: '100px', threshold: 0.1 }) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(element);
      }
    }, options);

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [options.root, options.rootMargin, options.threshold]);

  return [elementRef, isVisible];
}

export default useIntersectionObserver;
