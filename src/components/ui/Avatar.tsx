import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

type AvatarProps = {
  src: string;
  alt: string;
  className?: string;
  children?: React.ReactNode;
};

export const Avatar = ({ src, children, alt, className }: AvatarProps) => {
  const [imageError, setImageError] = useState(false);

  const onImageError = () => setImageError(true);

  return (
    <div className={twMerge('w-9 h-9 rounded-full overflow-clip', className)}>
      {!imageError ? (
        <img
          src={src}
          alt={alt}
          onError={onImageError}
        />
      ) : (
        children
      )}
    </div>
  );
};

type AvatarFallbackProps = {
  children: React.ReactNode;
};

export const AvatarFallback = ({ children }: AvatarFallbackProps) => {
  return (
    <div className='flex items-center justify-center w-full h-full text-sm font-bold uppercase bg-gradient-to-br from-zinc-100 to-zinc-200 text-zinc-500'>
      {children}
    </div>
  );
};
