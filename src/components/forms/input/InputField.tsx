import { twMerge } from 'tailwind-merge';
import { Field } from 'formik';

interface inputFieldProps {
  name: string;
  disabled?: boolean;
  error?: string;
  touched?: boolean;
  children?: React.ReactElement;
  onFocus: (event: any) => void;
  onBlur: (event: any) => void;
}

const InputField = (props: inputFieldProps) => {
  const { name, children, disabled, touched, onBlur, onFocus, error, ...rest } =
    props;
  return (
    <div
      className={twMerge(
        'inline-flex ring-1 ring-zinc-300 items-center outline-none rounded-lg bg-white transition-all duration-300 ease-in-out',
        disabled && 'bg-zinc-50 opacity-70 cursor-not-allowed',
        touched && !error ? 'ring-zinc-900' : touched && error && 'ring-red-600'
      )}
    >
      {/* children */}
      {children ? children : null}
      {/* the field */}
      <Field
        name={name}
        className={twMerge(
          'flex-1 py-1.5 px-2 bg-transparent outline-none',
          disabled && 'cursor-not-allowed'
        )}
        {...rest}
        onFocus={onFocus}
        onBlur={onBlur}
        autoComplete={name}
        disabled={disabled}
      />
    </div>
  );
};

export default InputField;
