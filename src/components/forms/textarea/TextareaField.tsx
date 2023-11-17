import { Field } from 'formik';

// component type props
type TextareaFieldProps = {
  name: string;
  handleFocus: () => any;
  handleBlur: () => any;
};

const TextareaField = (props: TextareaFieldProps) => {
  const { name, handleBlur, handleFocus, ...rest } = props;

  return (
    <Field
      as='textarea'
      name={name}
      id={name}
      rows={1}
      className='w-full h-full text-sm font-medium bg-transparent outline-none resize-none placeholder:font-normal placeholder:text-zinc-500'
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...rest}
    />
  );
};

export default TextareaField;
