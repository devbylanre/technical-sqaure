import { MotionProps } from 'framer-motion';
import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

// component props type
export type ButtonProps = {
  className?: string;
  state?: 'success' | 'warning' | 'danger' | 'secondary' | 'primary';
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  MotionProps;

const Button = (props: ButtonProps) => {
  const { className, state, children, ...rest } = props; //props

  return (
    <button
      className={twMerge(
        className,
        'inline-flex gap-x-1 items-center justify-center font-semibold text-sm transition-all duration-300 ease-in-out rounded',
        state === 'primary' && 'bg-zinc-900 text-white hover:bg-zinc-700',
        state === 'secondary' &&
          'border border-zinc-200 shadow-sm text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900',
        state === 'success' && 'bg-green-600 text-white hover:bg-green-800',
        state === 'warning' && 'bg-amber-600 text-white hover:bg-amber-800',
        state === 'danger' && 'bg-red-600 text-white hover:bg-red-800'
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
