import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type ParagraphProps = {
  className?: string;
  children: React.ReactNode;
} & HTMLAttributes<HTMLParagraphElement>;

const Paragraph = (props: ParagraphProps) => {
  const { className, children, ...rest } = props;
  return (
    <p
      className={twMerge('text-base text-zinc-900', className)}
      {...rest}
    >
      {children}
    </p>
  );
};

export default Paragraph;
