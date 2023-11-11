import { twMerge } from 'tailwind-merge';
import { Field } from 'formik';

type inputFieldProps = {
  name: string;
  disabled?: boolean;
  onFocus: (event: any) => void;
  onBlur: (event: any) => void;
};

const InputField = (props: inputFieldProps) => {
  const { name, disabled, onBlur, onFocus, ...rest } = props;

  return (
    <Field
      name={name}
      className={twMerge(
        'p-2 bg-transparent outline-none text-sm font-medium flex-1 placeholder:font-normal placeholder:text-zinc-500',
        disabled && 'cursor-not-allowed'
      )}
      {...rest}
      onFocus={onFocus}
      onBlur={onBlur}
      autoComplete={name}
      disabled={disabled}
    />
  );
};

export default InputField;
