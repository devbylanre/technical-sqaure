import { twMerge } from 'tailwind-merge';
import { HTMLAttributes } from 'react';
import { useField } from 'formik';

type FieldProps = {
  name: string;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

export const Field = (props: FieldProps) => {
  const { name, className, children, ...rest } = props;
  const [{}, meta, {}] = useField(name);
  return (
    <div
      className={twMerge(
        'border border-zinc-200 shadow-sm outline-none rounded transition-all duration-300 ease-in-out',
        meta.touched && !meta.error
          ? 'border-zinc-900'
          : meta.touched && meta.error && 'border-red-600 text-red-700',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};