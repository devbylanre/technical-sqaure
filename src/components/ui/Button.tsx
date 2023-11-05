import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  clickEvent?: (e: any) => any;
  mouseOverEvent?: (e: any) => any;
}

const Button = (props: ButtonProps) => {
  const { className, children, clickEvent, mouseOverEvent } = props;

  return (
    <button
      className={twMerge(
        'inline-flex gap-x-1.5 items-center justify-center font-medium transition-all duration-300 ease-in-out',
        className
      )}
      onClick={clickEvent}
      onMouseOver={mouseOverEvent}
    >
      {children}
    </button>
  );
};

export default Button;
