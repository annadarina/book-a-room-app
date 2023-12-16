import React from 'react';

const Image = ({
  src,
  alt,
  className,
  ...rest
}: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return <img src={src} alt={alt} className={className} {...rest} />;
};

export default Image;
