import { useField } from 'formik';
import Paragraph from '../ui/Paragraph';
import { twMerge } from 'tailwind-merge';

type MessageProps = {
  name: string;
  children?: React.ReactNode;
  className?: string;
};

export const Message = (props: MessageProps) => {
  const { name, className, children } = props;

  const [, meta] = useField(name);

  return (
    <>
      {meta.touched && meta.error ? (
        <Error className={className}>{meta.error}</Error>
      ) : (
        <Helper className={className}>{children}</Helper>
      )}
    </>
  );
};

type ErrorProps = {
  children: React.ReactNode;
  className?: string;
};

export const Error = ({ children, className }: ErrorProps) => {
  if (!children) return null;

  return (
    <Paragraph
      className={twMerge(
        'text-red-600 first-letter:uppercase text-sm',
        className
      )}
    >
      {' '}
      {children}
    </Paragraph>
  );
};

type HelperProps = {
  children: React.ReactNode;
  className?: string;
};

export const Helper = ({ children, className }: HelperProps) => {
  if (!children) return null;
  return (
    <Paragraph
      className={twMerge(
        'text-zinc-600 first-letter:uppercase text-sm',
        className
      )}
    >
      {children}
    </Paragraph>
  );
};
