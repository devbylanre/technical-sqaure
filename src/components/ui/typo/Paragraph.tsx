import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ParagraphProps {
  className?: string;
  children: React.ReactNode;
}

const Paragraph = (props: ParagraphProps) => {
  const { className, children } = props;
  return (
    <p className={twMerge('text-base text-zinc-900', className)}>{children}</p>
  );
};

export default Paragraph;
