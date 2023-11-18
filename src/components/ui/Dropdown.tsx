import { MotionProps, motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

type DropdownProps = {
  children: React.ReactNode;
  className?: string;
  isVisible: boolean;
} & MotionProps;

const Dropdown = (props: DropdownProps) => {
  const { isVisible, children, className, ...rest } = props;

  if (!isVisible) return null;

  return (
    <motion.div
      className={twMerge(
        'w-[240px] rounded-lg absolute bg-white border-zinc-200 border shadow-sm',
        className
      )}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default Dropdown;
