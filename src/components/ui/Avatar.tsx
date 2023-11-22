import React, { useState, HTMLAttributes } from 'react';
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
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

export const AvatarFallback = ({
  children,
  className,
  ...rest
}: AvatarFallbackProps) => {
  return (
    <div
      className={twMerge(
        'flex items-center justify-center w-full h-full text-sm font-bold uppercase bg-gradient-to-l from-zinc-200 to-zinc-100 text-zinc-700',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
