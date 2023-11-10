import { useField } from 'formik';
import Label from '../Label';
import Helper from '../Helper';
import InputField from './InputField';

export interface InputProps extends Partial<HTMLInputElement> {
  name: string; // The name of the input field
  label?: string; // Optional label of the input field
  prefix?: any; // Optional prefix of the input field
  disabled?: boolean; // Optional check if the input field is disabled
}

const Input = (props: InputProps) => {
  const { name, label, disabled, prefix, ...rest } = props;
  const [field, meta, helper] = useField(name); // formik useField hook

  return (
    <div className='flex flex-col gap-y-1.5'>
      {/* Render the label component */}
      <Label
        name={name}
        label={label}
      />
      {/* Render the input field component */}
      <InputField
        name={field.name}
        onFocus={() => helper.setTouched(true)}
        onBlur={() => helper.setTouched(false)}
        disabled={disabled}
        error={meta.error}
        touched={meta.touched}
        prefix={prefix}
        {...rest}
      />
      {/* render the field helper component*/}
      <Helper
        touched={meta.touched}
        error={meta.error}
      />
    </div>
  );
};

export default Input;
