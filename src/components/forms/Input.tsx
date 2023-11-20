import { twMerge } from 'tailwind-merge';
import { Field, useField } from 'formik';
import { HTMLAttributes } from 'react';

type inputFieldProps = {
  name: string;
  className?: string;
  disabled?: boolean;
} & HTMLAttributes<HTMLInputElement>;

const Input = (props: inputFieldProps) => {
  const { name, className, disabled, ...rest } = props;

  const [{}, {}, helper] = useField(name);

  const onFocus = () => helper.setTouched(true);
  const onBlur = () => helper.setTouched(false);

  return (
    <Field
      name={name}
      className={twMerge(
        'px-2 h-9 bg-transparent outline-none text-sm font-medium flex-1 placeholder:font-normal placeholder:text-zinc-500 w-full',
        disabled && 'cursor-not-allowed',
        className
      )}
      {...rest}
      onFocus={onFocus}
      onBlur={onBlur}
      autoComplete={name}
      disabled={disabled}
    />
  );
};

export default Input;
