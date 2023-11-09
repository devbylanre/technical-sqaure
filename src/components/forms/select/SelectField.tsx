import { RiArrowDownSLine } from 'react-icons/ri';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';
import SelectedValue from './SelectedValue';

type SelectFieldProps = {
  touched: boolean; //a boolean flag to indicate whether the field is touched
  value: any; // the field value
  setTouched: (e: any) => void; // function for setting whether the field is touched or not
  placeholder?: string; // an optional placeholder text
  error: any; // field error message
  removeOption: (e: any) => void; // function for removing option
};

const SelectField = (props: SelectFieldProps) => {
  const { touched, value, placeholder, error, removeOption, setTouched } =
    props;

  return (
    <div
      className={twMerge(
        'p-1.5 rounded-lg bg-white ring-1 ring-zinc-300 inline-flex items-center justify-between transition-all duration-300 ease-in-out cursor-pointer',
        touched && !error ? 'ring-zinc-900' : touched && 'ring-red-600'
      )}
      onClick={setTouched}
    >
      {/* render selected field value */}
      <SelectedValue
        value={value}
        removeOption={removeOption}
        placeholder={placeholder}
        error={error}
        touched={touched}
      />
      {/* render animated icon */}
      <motion.span animate={touched ? { rotate: -180 } : { rotate: 0 }}>
        {/* icon indicating the field is a dropdown */}
        <RiArrowDownSLine className='w-5 h-5 fill-zinc-500' />
      </motion.span>
    </div>
  );
};

export default SelectField;
