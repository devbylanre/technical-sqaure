import { useField } from 'formik';
import { RiCheckFill } from 'react-icons/ri';
import { twMerge } from 'tailwind-merge';

// component props types
export type CheckboxProps = {
  name: string;
  className?: string;
};

const Checkbox = ({ name, className }: CheckboxProps) => {
  const [field, , helper] = useField(name);

  const onChecked = () => {
    helper.setTouched(true);
    helper.setValue(!field.value);
  };

  return (
    <div
      className={twMerge(
        'flex items-center justify-center w-4 h-4 rounded-full cursor-pointer border border-zinc-200 shadow-sm transition-all duration-300 p-[1px]',
        field.value && 'bg-green-500 border-green-500',
        className
      )}
      onClick={onChecked}
    >
      {/* renders icon when field value is true and null when it's opposite */}
      {field.value ? <RiCheckFill className='fill-white' /> : null}
    </div>
  );
};

export default Checkbox;
