import { MotionProps } from 'framer-motion';
import { ButtonHTMLAttributes } from 'react';
import { cn } from '../../utils/utils';

// component props type
export type ButtonProps = {
  className?: string;
  variant?: 'default' | 'outline' | 'danger' | 'warning' | 'success';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'icon';
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  MotionProps;

const buttonVariants = {
  initialClassName:
    'inline-flex gap-x-1 px-2 h-8 items-center justify-center font-semibold text-sm transition-all duration-300 ease-in-out rounded leading-tight',
  variants: {
    default: 'bg-zinc-900 text-white hover:bg-zinc-700',
    outline:
      'border border-zinc-200 shadow-sm text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900',
    danger: 'bg-red-600 text-white hover:bg-red-500',
    warning: 'bg-amber-600 text-white hover:bg-amber-800',
    success: 'bg-green-600 text-white hover:bg-green-800',
  },
  sizes: {
    xs: 'text-xs h-6',
    sm: 'h-8',
    md: 'h-9',
    lg: 'h-10',
    xl: 'h-12',
    icon: 'w-8 h-8',
  },
};

const Button = (props: ButtonProps) => {
  const { className, variant, size, children, ...rest } = props; //props

  return (
    <button
      className={cn(
        buttonVariants.initialClassName,
        buttonVariants.variants[variant || 'default'],
        buttonVariants.sizes[size || 'md'],
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
