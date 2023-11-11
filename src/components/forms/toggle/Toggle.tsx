import { useField } from 'formik';
import { motion } from 'framer-motion';
import Label from '../Label';
import { twMerge } from 'tailwind-merge';
import Helper from '../Message';

type ToggleProps = {
  name: string; // name of the field
  label?: string; //optional label for the field
};

const Toggle = (props: ToggleProps) => {
  const { name, label } = props;
  const [field, meta, helper] = useField(name);

  //conditional set the value of field value to it's negative value
  const handleToggleBar = () => helper.setValue(!field.value);

  return (
    <div className='inline-flex gap-y-1.5 items-center justify-between gap-x-8'>
      <div>
        {/* render the label field */}
        <Label
          name={name}
          label={label}
        />
        {/* render error block */}
        <Helper
          error={meta.error}
          touched={meta.touched}
        />
      </div>

      {/* render the field block */}
      <div className='relative w-10 h-5 overflow-hidden rounded-full ring-1 ring-zinc-300'>
        <motion.div
          className='absolute top-0 left-0 w-full h-full bg-zinc-300'
          initial={{ width: '0%' }}
          animate={field.value ? { width: '100%' } : { width: '0%' }}
        ></motion.div>
        <div
          className={twMerge(
            'absolute top-0 w-5 h-5 rounded-full transition-all duration-300 cursor-pointer bg-zinc-300',
            field.value ? 'right-0 bg-zinc-600' : 'left-0'
          )}
          onClick={handleToggleBar}
        ></div>
      </div>
    </div>
  );
};

export default Toggle;
