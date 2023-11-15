import { twMerge } from 'tailwind-merge';

type LightWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

const LightWrapper = ({ children, className }: LightWrapperProps) => {
  return (
    <div
      className={twMerge(
        className,
        'p-4 bg-white border shadow-sm border-zinc-200 rounded-lg'
      )}
    >
      {children}
    </div>
  );
};

export default LightWrapper;
