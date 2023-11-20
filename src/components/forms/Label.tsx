import { twMerge } from 'tailwind-merge';

type LabelProps = {
  children: React.ReactNode;
  className?: string;
  name: string;
};

const Label = (props: LabelProps) => {
  const { children, className, name } = props;

  if (!children) return null;

  return (
    <label
      htmlFor={name}
      className={twMerge(
        'text-sm font-medium leading-tight text-zinc-500',
        className
      )}
    >
      {children}
    </label>
  );
};

export default Label;
