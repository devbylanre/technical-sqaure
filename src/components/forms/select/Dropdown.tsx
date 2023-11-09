import { Option } from './Select';
import { twMerge } from 'tailwind-merge';
import { motion, AnimatePresence } from 'framer-motion';

type DropdownProps = {
  touched: boolean; //check if dropdown has been touched
  options: Option[]; // field options array
  setValue: (e: any) => any; // set field value
  valueExists: (value: string | number) => boolean; //check if value exists
};

const Dropdown = (props: DropdownProps) => {
  const { valueExists, touched, options, setValue } = props;

  return (
    <AnimatePresence>
      {touched && options && options.length > 0 && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: [12, 0], opacity: 1 }}
          exit={{ y: 12, opacity: 0 }}
          className='absolute left-0 w-full p-1.5 bg-white rounded-lg ring-1 ring-zinc-300 top-[4.25rem] flex flex-col gap-y-1'
        >
          {options.map((option) => (
            <p
              key={option.title}
              onClick={() => setValue(option.value)}
              className={twMerge(
                'px-1.5 py-1 hover:bg-zinc-100 rounded cursor-pointer first-letter:uppercase sm:text-sm',
                valueExists(option.value) && 'font-medium'
              )}
            >
              {option.title}
            </p>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Dropdown;
