import { twMerge } from 'tailwind-merge';
import Button, { ButtonProps } from '../Button';

const SecondaryButton = (props: ButtonProps) => {
  const { className, children, ...rest } = props;
  return (
    <Button
      className={twMerge(
        className,
        'border border-zinc-200 shadow-sm hover:bg-zinc-50 text-zinc-600 hover:text-zinc-900'
      )}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default SecondaryButton;
