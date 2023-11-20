import { twMerge } from 'tailwind-merge';

interface HeadingProps {
  className?: string;
  children: React.ReactNode;
}

const Heading = (props: HeadingProps) => {
  const { children, className } = props;

  return (
    <h3 className={twMerge('text-lg text-zinc-900 font-medium', className)}>
      {children}
    </h3>
  );
};

export default Heading;
