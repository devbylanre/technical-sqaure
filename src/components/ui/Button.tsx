import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  type?: 'button' | 'reset' | 'submit';
  clickEvent?: (e: any) => any;
  mouseOverEvent?: (e: any) => any;
}

const Button = (props: ButtonProps) => {
  const { className, type, children, clickEvent, mouseOverEvent } = props;

  return (
    <button
      className={twMerge(
        'inline-flex gap-x-1.5 items-center justify-center font-medium transition-all duration-300 ease-in-out',
        className
      )}
      type={type}
      onClick={clickEvent}
      onMouseOver={mouseOverEvent}
    >
      {children}
    </button>
  );
};

export default Button;
