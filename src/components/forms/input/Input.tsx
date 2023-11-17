import { useField } from 'formik';
import Label from '../Label';
import InputField from './InputField';
import Message from '../Message';
import FieldWrapper from '../FieldWrapper';

// component interface partially extending input element
export interface InputProps extends Partial<HTMLInputElement> {
  name: string;
  label?: string;
  prefix?: any;
  suffix?: any;
  disabled?: boolean;
  message?: string;
}

const Input = (props: InputProps) => {
  const { name, label, message, disabled, prefix, suffix, ...rest } = props;
  const [field, meta, helper] = useField(name); // formik useField hook

  return (
    <div className='flex flex-col gap-y-1.5'>
      {/* Render the label component */}
      <Label name={name}> {label} </Label>

      {/* Render the input field component */}
      <FieldWrapper
        className='inline-flex items-center'
        touched={meta.touched}
        error={meta.error}
        disabled={disabled}
      >
        {/* render the sender conditionally */}
        {prefix ? prefix : null}
        {/* renders the field */}
        <InputField
          name={field.name}
          disabled={disabled}
          onFocus={() => helper.setTouched(true)}
          onBlur={() => helper.setTouched(false)}
          {...rest}
        />
        {/* render the sender conditionally */}
        {suffix ? suffix : null}
      </FieldWrapper>

      {/* render the field helper component*/}
      <Message
        touched={meta.touched}
        error={meta.error}
        message={message}
      />
    </div>
  );
};

export default Input;
