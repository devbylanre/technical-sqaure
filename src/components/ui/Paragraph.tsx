import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ParagraphProps {
  className?: string;
  children: React.ReactNode;
  clickEvent?: (e: any) => any;
}

const Paragraph = (props: ParagraphProps) => {
  const { className, children, clickEvent } = props;
  return (
    <p
      className={twMerge('text-base text-zinc-900', className)}
      onClick={clickEvent}
    >
      {children}
    </p>
  );
};

export default Paragraph;
