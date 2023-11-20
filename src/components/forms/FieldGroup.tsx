import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type FieldGroupProps = {
  children: React.ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

export const FieldGroup = ({ children, className }: FieldGroupProps) => {
  return (
    <div className={twMerge('flex flex-col gap-y-1.5', className)}>
      {children}
    </div>
  );
};
