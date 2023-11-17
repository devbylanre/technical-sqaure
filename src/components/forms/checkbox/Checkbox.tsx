import { useField } from 'formik';
import { RiCheckFill } from 'react-icons/ri';
import { twMerge } from 'tailwind-merge';
import Label from '../Label';
import Message from '../Message';

// component props types
export type CheckboxProps = {
  name: string;
  label?: string;
  message?: string;
};

const Checkbox = (props: CheckboxProps) => {
  const { name, label, message } = props;
  const [field, meta, helper] = useField(name);

  return (
    <div className='inline-flex items-center justify-between gap-x-5'>
      {/* render the section/block containing label and message component */}
      <div className='flex flex-col gap-y-0.5'>
        {/* renders label component */}
        <Label name={name}> {label}</Label>
        {/* renders message component */}
        <Message
          error={meta.error}
          touched={meta.touched}
          message={message}
        />
      </div>

      {/* renders checkbox field */}
      <div
        className={twMerge(
          'flex items-center justify-center w-4 h-4 rounded cursor-pointer ring-1 ring-zinc-300 transition-all duration-300',
          field.value ? 'bg-zinc-300' : ''
        )}
        onClick={() => helper.setValue(!field.value)}
      >
        {/* renders icon when field value is true and null when it's opposite */}
        {field.value ? <RiCheckFill /> : null}
      </div>
    </div>
  );
};

export default Checkbox;
