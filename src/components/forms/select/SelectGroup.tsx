import { AnimatePresence, motion } from 'framer-motion';
import { SelectOption } from './SelectOption';

type SelectGroupProps = {
  touched: boolean;
  options: any;
  handleSelect: (e: any) => void;
};

export const SelectGroup = (props: SelectGroupProps) => {
  const { touched, options, handleSelect } = props;

  return (
    <AnimatePresence>
      {touched && options && options.length >= 1 && (
        <motion.ul
          className='absolute top-0 left-0 w-full p-1 mt-[70px] bg-white border rounded-md shadow border-zinc-200'
          animate={{ y: [8, 0] }}
          exit={{ y: [0, 8], opacity: 0 }}
        >
          {options.map((option: any, index: number) => (
            <SelectOption
              key={index}
              option={option}
              handleSelectValue={() => handleSelect(option.value)}
            />
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  );
};
