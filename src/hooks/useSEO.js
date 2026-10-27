import { useEffect } from 'react';

/**
 * Custom SEO hook to dynamically update document title, meta tags, and structured JSON-LD
 * @param {Object} options
 * @param {string} options.title
 * @param {string} options.description
 * @param {string} [options.canonical]
 * @param {Object} [options.jsonLd]
 */
export function useSEO({ title, description, canonical, jsonLd }) {
  useEffect(() => {
    // 1. Update title
    const formattedTitle = title
      ? `${title} — Manas Maydeo`
      : 'Manas Maydeo — Product Designer & Frontend Engineer';
    document.title = formattedTitle;

    // 2. Update description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    if (description) {
      metaDescription.content = description;
    }

    // 3. Update canonical link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.rel = 'canonical';
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.href = canonical;
    }

    // 4. Update OpenGraph meta
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = formattedTitle;

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && description) ogDesc.content = description;

    // 5. Inject / Update Page Specific JSON-LD Schema
    const scriptId = 'page-jsonld-schema';
    let scriptElement = document.getElementById(scriptId);

    if (jsonLd) {
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.id = scriptId;
        scriptElement.type = 'application/ld+json';
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(jsonLd);
    } else if (scriptElement) {
      scriptElement.remove();
    }

    return () => {
      // Cleanup page script when unmounting if needed
    };
  }, [title, description, canonical, jsonLd]);
}
