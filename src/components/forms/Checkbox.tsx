import { useField } from 'formik';
import { RiCheckFill } from 'react-icons/ri';
import { twMerge } from 'tailwind-merge';
import Label from './Label';

// component props types
export type CheckboxProps = {
  name: string;
};

const Checkbox = ({ name }: CheckboxProps) => {
  const [field, meta, helper] = useField(name);

  return (
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
  );
};

export default Checkbox;
