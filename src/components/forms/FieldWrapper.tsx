import { twMerge } from 'tailwind-merge';

type FieldBlockProps = {
  disabled?: boolean;
  className?: string;
  touched: boolean;
  error: any;
  children: React.ReactNode;
  onClick?: (event: any) => any;
};

const FieldWrapper = (props: FieldBlockProps) => {
  const { className, disabled, touched, error, children, onClick } = props;
  return (
    <div
      className={twMerge(
        className,
        'border border-zinc-200 shadow-sm outline-none rounded transition-all duration-300 ease-in-out',
        disabled && 'bg-zinc-50 opacity-70 cursor-not-allowed',
        touched && !error
          ? 'border-zinc-900'
          : touched && error && 'border-red-600 text-red-700'
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default FieldWrapper;
