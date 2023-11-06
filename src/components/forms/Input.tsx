import { Field, useField } from 'formik';
import Paragraph from '../ui/typo/Paragraph';
import { twMerge } from 'tailwind-merge';

export interface InputProps extends Partial<HTMLInputElement> {
  name: string;
  label?: string;
  children?: any;
  disabled?: boolean;
}

const Input = (props: InputProps) => {
  const { name, label, disabled, children, ...rest } = props;
  const [field, meta, helper] = useField(name);

  return (
    <div className='flex flex-col gap-y-1.5'>
      {/* field label */}
      {label ? (
        <label
          htmlFor={name}
          className='font-medium text-zinc-900'
        >
          {label}
        </label>
      ) : null}
      {/* field */}
      <div
        className={twMerge(
          'inline-flex ring-1 ring-zinc-300 items-center outline-none rounded-lg bg-white transition-all duration-300 ease-in-out',
          disabled && 'bg-zinc-50 opacity-70 cursor-not-allowed',
          meta.touched && !meta.error
            ? 'ring-zinc-900'
            : meta.touched && meta.error && 'ring-red-600'
        )}
      >
        {/* child */}
        {children ? children : null}
        {/* the field */}
        <Field
          name={name}
          className={twMerge(
            'flex-1 py-1.5 px-2 bg-transparent outline-none',
            disabled && 'cursor-not-allowed'
          )}
          {...rest}
          onFocus={() => helper.setTouched(true)}
          onBlur={() => helper.setTouched(false)}
          autoComplete={field.name}
          disabled={disabled}
        />
      </div>

      {/* field error */}
      {meta.touched && meta.error ? (
        <Paragraph className='text-red-600 first-letter:uppercase'>
          {meta.error}
        </Paragraph>
      ) : null}
    </div>
  );
};

export default Input;
