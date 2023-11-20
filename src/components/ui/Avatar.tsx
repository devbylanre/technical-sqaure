import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

type AvatarFallbackProps = {
  children: React.ReactNode;
};

export const AvatarFallback = ({ children }: AvatarFallbackProps) => {
  return (
    <div className='flex items-center justify-center h-full text-sm font-bold uppercase bg-gradient-to-br from-zinc-100 to-zinc-200 text-zinc-500'>
      {children}
    </div>
  );
};

type AvatarProps = {
  src: string;
  alt: string;
  className?: string;
  fallback: React.ReactNode;
};

export const Avatar = ({ src, fallback, alt, className }: AvatarProps) => {
  const [imageError, setImageError] = useState(false);

  const onImageError = () => setImageError(true);

  return (
    <div className={twMerge('w-9 rounded-full overflow-clip', className)}>
      {!imageError ? (
        <img
          src={src}
          alt={alt}
          onError={onImageError}
        />
      ) : (
        fallback
      )}
    </div>
  );
};
