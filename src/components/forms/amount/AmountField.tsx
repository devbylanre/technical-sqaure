import { twMerge } from 'tailwind-merge';
import { Field } from 'formik';

// component props type
type AmountFieldProps = {
  name: string;
  value: any;
  handleChange: (value: any) => any;
  handleBlur: (value: any) => any;
  handleFocus: (value: any) => any;
};

const AmountField = (props: AmountFieldProps) => {
  const { name, value, handleChange, handleBlur, handleFocus } = props;

  return (
    <Field
      name={name}
      className={twMerge(
        'bg-transparent outline-none hover:bg-zinc-200 rounded-lg',
        value <= 9 ? 'w-1/12' : value <= 99 ? 'w-2/12' : 'w-3/12'
      )}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};

export default AmountField;
