import { Option } from './Select';
import { twMerge } from 'tailwind-merge';
import { motion, AnimatePresence } from 'framer-motion';

// component props
type DropdownProps = {
  touched: boolean;
  options: Option[];
  setValue: (e: any) => any;
  valueExists: (value: string | number) => boolean;
};

const Dropdown = (props: DropdownProps) => {
  const { valueExists, touched, options, setValue } = props;

  return (
    <AnimatePresence>
      {/* conditionally display element if field is touched and we have options array and it is greater than 1 */}
      {touched && options && options.length > 0 && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: [12, 0], opacity: 1 }}
          exit={{ y: 12, opacity: 0 }}
          className='absolute left-0 w-full p-1.5 bg-white rounded-lg ring-1 ring-zinc-300 top-[4.25rem] flex flex-col gap-y-0.5'
        >
          {options.map((option) => (
            <p
              key={option.title}
              onClick={() => setValue(option.value)}
              className={twMerge(
                'p-1.5 hover:bg-zinc-100 text-sm rounded cursor-pointer first-letter:uppercase',
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
