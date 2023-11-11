import { useField } from 'formik';
import { motion } from 'framer-motion';
import Label from '../Label';
import { twMerge } from 'tailwind-merge';
import Message from '../Message';

// toggle component props type
export type ToggleProps = {
  name: string;
  label?: string;
  message?: string;
};

const Toggle = (props: ToggleProps) => {
  const { name, label, message } = props;
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
        <Message
          error={meta.error}
          touched={meta.touched}
          message={message}
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
