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
        'ring-1 ring-zinc-300 outline-none rounded-lg transition-all duration-300 ease-in-out',
        disabled && 'bg-zinc-50 opacity-90 cursor-not-allowed',
        touched && !error
          ? 'ring-zinc-900'
          : touched && error && 'ring-red-600 text-red-800'
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default FieldWrapper;
