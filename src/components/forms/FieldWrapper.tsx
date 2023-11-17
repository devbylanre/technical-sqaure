import { twMerge } from 'tailwind-merge';
import { HTMLAttributes } from 'react';

type FieldBlockProps = {
  disabled?: boolean;
  className?: string;
  touched: boolean;
  error: any;
  children: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const FieldWrapper = (props: FieldBlockProps) => {
  const { className, disabled, touched, error, children, ...rest } = props;
  return (
    <div
      className={twMerge(
        'border border-zinc-200 shadow-sm h-9 outline-none rounded transition-all duration-300 ease-in-out',
        disabled && 'bg-zinc-50 opacity-70 cursor-not-allowed',
        touched && !error
          ? 'border-zinc-900'
          : touched && error && 'border-red-600 text-red-700',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default FieldWrapper;
