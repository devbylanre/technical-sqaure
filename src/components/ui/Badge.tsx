import { HTMLAttributes } from 'react';
import { RiCloseLine } from 'react-icons/ri';
import { cn } from '../../utils/utils';
import { MotionProps } from 'framer-motion';

// define the props interface
type BadgeProps = {
  children: React.ReactNode;
  variant?: 'danger' | 'success' | 'warning' | 'outline';
  onDismiss?: (e: any) => void;
  isVisible: boolean;
  dismissible?: boolean;
  className?: string;
} & HTMLAttributes<HTMLDivElement> &
  MotionProps;

const badgeVariants = {
  initialClassName:
    'inline-flex items-center px-2 h-6 rounded-full w-fit gap-x-1 font-semibold text-xs',
  variants: {
    outline: 'bg-white border border-zinc-200 shadow shadow-zinc-200/20',
    success: 'bg-green-100 text-green-700',
    danger: 'bg-red-100 text-red-700',
    warning: 'bg-amber-100 text-amber-700',
  },
};

const badgeIconVariants = {
  initialClassName:
    'w-4 h-4 rounded-full transition-all duration-200 ease-in-out cursor-pointer',
  variants: {
    outline: 'hover:fill-gray-700 hover:bg-gray-200 ',
    danger: 'hover:fill-red-700 hover:bg-red-200',
    warning: 'hover:fill-amber-700 hover:bg-amber-200',
    success: 'hover:fill-green-700 hover:bg-green-200',
  },
};

const Badge = (props: BadgeProps) => {
  const {
    children,
    className,
    variant,
    isVisible,
    dismissible,
    onDismiss,
    ...rest
  } = props;

  if (!isVisible) return null; // hide the component if the isVisible prop is false

  return (
    <div
      className={cn(
        badgeVariants.initialClassName,
        badgeVariants.variants[variant || 'outline'],
        className
      )}
      {...rest}
    >
      {/* render the children props */}
      {children}

      {/* render the sections if the dismissible prop is true while changing some css class name rules based on the state props */}
      {dismissible && (
        <RiCloseLine
          className={cn(
            badgeIconVariants.initialClassName,
            badgeIconVariants.variants[variant || 'outline']
          )}
          onClick={onDismiss}
        />
      )}
    </div>
  );
};

export default Badge;
