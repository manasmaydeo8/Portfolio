import { useState, useEffect } from 'react';

/**
 * Custom hook to track active section based on window scroll position
 * @param {string[]} sectionIds - Array of section DOM element IDs
 * @param {number} offset - Pixel offset from top for detection threshold (default 180px)
 * @returns {string} activeSectionId
 */
export function useActiveSection(sectionIds = ['hero', 'about', 'skills', 'projects', 'resume', 'contact'], offset = 180) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || 'hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
}

export default useActiveSection;
