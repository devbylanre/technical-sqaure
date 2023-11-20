import { useField } from 'formik';
import { twMerge } from 'tailwind-merge';

// toggle component props type
export type ToggleProps = {
  name: string;
};

const Toggle = ({ name }: ToggleProps) => {
  const [field, {}, helper] = useField(name);

  //conditional set the value of field value to it's negative value
  const handleToggleBar = () => helper.setValue(!field.value);

  return (
    <div className='inline-flex gap-y-1.5 items-center justify-between gap-x-8'>
      {/* render the field block */}
      <div
        className={twMerge(
          'w-9 rounded-full border border-zinc-200 flex items-center bg-white p-0.5',
          field.value === true && 'bg-green-500 border-green-500'
        )}
      >
        <div
          className={twMerge(
            'w-4 h-4 rounded-full transition-all duration-300 cursor-pointer bg-zinc-300',
            field.value === true && ' translate-x-[14px] shadow-xl bg-white'
          )}
          onClick={handleToggleBar}
        ></div>
      </div>
    </div>
  );
};

export default Toggle;
