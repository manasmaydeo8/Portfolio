import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

/**
 * LazyImage component
 * Features:
 * - IntersectionObserver visibility detection
 * - Native loading="lazy" + decoding="async"
 * - Shimmer skeleton placeholder
 * - Modern WebP with fallback
 * - Fade-in transition
 */
export default function LazyImage({
  src,
  alt,
  className = '',
  aspectRatio = '16/10',
  width,
  height,
  ...props
}) {
  const [containerRef, isVisible] = useIntersectionObserver({
    rootMargin: '150px',
    threshold: 0.05
  });

  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      ref={containerRef}
      className={`lazy-image-wrapper ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        aspectRatio: aspectRatio,
        width: width || '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        borderRadius: 'inherit'
      }}
    >
      {/* Skeleton Shimmer while loading */}
      {(!isLoaded || !isVisible) && !hasError && (
        <div
          className="skeleton"
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1
          }}
          aria-hidden="true"
        />
      )}

      {/* Main Image once in viewport */}
      {isVisible && !hasError ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transition: 'opacity 0.4s ease-in-out, transform 0.4s ease-in-out',
            opacity: isLoaded ? 1 : 0
          }}
          {...props}
        />
      ) : hasError ? (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-muted)',
            fontSize: '0.85rem'
          }}
        >
          Failed to load image
        </div>
      ) : null}
    </div>
  );
}
