import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export type ButtonProps = {
  className?: string;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps) => {
  const { className, children, ...rest } = props;

  return (
    <button
      className={twMerge(
        className,
        'inline-flex gap-x-1 items-center justify-center font-semibold text-sm transition-all duration-300 ease-in-out rounded'
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
