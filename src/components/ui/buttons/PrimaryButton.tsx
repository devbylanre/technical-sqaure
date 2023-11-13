import { twMerge } from 'tailwind-merge';
import Button, { ButtonProps } from '../Button';

const PrimaryButton = (props: ButtonProps) => {
  const { children, className, ...rest } = props;
  return (
    <Button
      className={twMerge(className, 'text-white bg-zinc-900 hover:bg-zinc-700')}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
