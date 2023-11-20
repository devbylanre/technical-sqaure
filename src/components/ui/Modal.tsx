import { twMerge } from 'tailwind-merge';

type ModalProps = {
  children: React.ReactNode;
  className?: string;
  isVisible: boolean;
};

export const Modal = ({ children, className, isVisible }: ModalProps) => {
  if (!isVisible) return null;

  return (
    <div
      className={twMerge(
        'fixed top-0 left-0 bg-zinc-900 w-full h-full z-50 bg-opacity-10 items-center justify-center flex',
        className
      )}
    >
      {children}
    </div>
  );
};
