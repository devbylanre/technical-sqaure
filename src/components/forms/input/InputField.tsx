import { twMerge } from 'tailwind-merge';
import { Field } from 'formik';

type inputFieldProps = {
  name: string; // The name of the field
  disabled?: boolean; // Optional check if the field is disabled
  error?: string; // Optional error message
  touched?: boolean; // Optional check if the field is touched
  prefix?: React.ReactElement; // Optional prefix
  onFocus: (event: any) => void; //Set the fields focus
  onBlur: (event: any) => void; //Set the fields blur
};

const InputField = (props: inputFieldProps) => {
  const { name, prefix, disabled, touched, onBlur, onFocus, error, ...rest } =
    props;

  return (
    <div
      className={twMerge(
        'inline-flex ring-1 ring-zinc-300 items-center outline-none rounded-lg bg-white transition-all duration-300 ease-in-out',
        disabled && 'bg-zinc-50 opacity-90 cursor-not-allowed',
        touched && !error
          ? 'ring-zinc-900'
          : touched && error && 'ring-red-600 text-red-800'
      )}
    >
      {/* render the prefix */}
      {prefix ? prefix : null}

      {/* render the field */}
      <Field
        name={name}
        className={twMerge(
          'p-2 bg-transparent outline-none sm:text-sm font-medium',
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
