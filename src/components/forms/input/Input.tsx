import { useField } from 'formik';
import Label from '../Label';
import Helper from '../Helper';
import InputField from './InputField';

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
      <Label
        name={name}
        label={label}
      />
      {/* field */}
      <InputField
        name={name}
        onFocus={() => helper.setTouched(true)}
        onBlur={() => helper.setTouched(false)}
        disabled={disabled}
        error={meta.error}
        touched={meta.touched}
        children={children}
        {...rest}
      />
      {/* field helper / error */}
      <Helper
        touched={meta.touched}
        error={meta.error}
      />
    </div>
  );
};

export default Input;
