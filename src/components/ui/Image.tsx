import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

function Image({ src, alt, width, height, className }: ImageProps) {
  return (
    <img
      src={src || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading="lazy" // This enables lazy loading in modern browsers
    />
  );
}

export default Image;