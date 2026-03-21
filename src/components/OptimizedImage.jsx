import { useState, useEffect, useRef } from 'react';

/**
 * OptimizedImage - Performance-optimized image component with lazy loading
 * and responsive srcset support for modern browsers
 */
const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  fetchPriority,
  sizes = '100vw',
  onError,
  placeholder = true,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  // Generate srcset for Unsplash images
  const generateSrcSet = (baseUrl) => {
    if (!baseUrl.includes('unsplash.com')) return undefined;

    // Extract base URL without size params
    const urlParts = baseUrl.split('?')[0];
    const widths = [400, 600, 800, 1200, 1600, 2000];

    return widths
      .map((w) => {
        const aspectRatio = height && width ? height / width : 0.67;
        const h = Math.round(w * aspectRatio);
        return `${urlParts}?w=${w}&h=${h}&fit=crop&auto=format&q=75 ${w}w`;
      })
      .join(', ');
  };

  // Generate WebP source URL for Unsplash
  const getWebPUrl = (baseUrl) => {
    if (!baseUrl.includes('unsplash.com')) return baseUrl;
    const separator = baseUrl.includes('?') ? '&' : '?';
    return `${baseUrl}${separator}fm=webp&q=80`;
  };

  useEffect(() => {
    // Use Intersection Observer for lazy loading if native lazy load isn't supported
    if ('loading' in HTMLImageElement.prototype || loading !== 'lazy') {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && imgRef.current) {
            imgRef.current.src = src;
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [src, loading]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = (event) => {
    setHasError(true);
    if (onError) {
      onError(event);
    }
  };

  const srcSet = generateSrcSet(src);
  const webpSrc = getWebPUrl(src);

  return (
    <picture>
      {/* WebP source for modern browsers */}
      {srcSet && (
        <source
          type="image/webp"
          srcSet={srcSet.replace(/&q=\d+/g, '&fm=webp&q=80')}
          sizes={sizes}
        />
      )}
      {/* Fallback JPEG/PNG */}
      <img
        ref={imgRef}
        src={hasError ? '/placeholder.svg' : (loading === 'lazy' ? src : webpSrc)}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        fetchpriority={fetchPriority}
        decoding="async"
        className={`${className} ${placeholder && !isLoaded ? 'img-loading' : 'img-loaded'}`}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          opacity: isLoaded || !placeholder ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
        }}
      />
    </picture>
  );
};

export default OptimizedImage;
