import { MotionProps, motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

type DropdownProps = {
  children: React.ReactNode;
  className?: string;
  isVisible: boolean;
} & MotionProps;

const Dropdown = ({
  isVisible,
  children,
  className,
  ...rest
}: DropdownProps) => {
  if (!isVisible) return null;

  return (
    <motion.div
      className={twMerge(
        className,
        'w-[240px] rounded-lg p-2.5 absolute bg-white border-zinc-200 border shadow-sm'
      )}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default Dropdown;
