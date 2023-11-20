import Paragraph from '../../ui/typo/Paragraph';
import { RiArrowDownSLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
import { useField } from 'formik';
import { SelectGroup } from './SelectGroup';
import { twMerge } from 'tailwind-merge';

type SelectFieldProps = {
  name: string;
  label?: string;
  placeholder?: string;
  onSelect: (e: any) => any;
  message?: string;
  options: any;
};

export const SelectField = (props: SelectFieldProps) => {
  const { name, placeholder, options, onSelect } = props;

  const [field, meta, helper] = useField(name);

  const handleSelect = (option: any) => {
    helper.setValue(option);
    onSelect(option);
  };

  return (
    <div className='relative flex flex-col gap-y-1.5'>
      <Paragraph className='text-sm font-medium first-letter:uppercase'>
        {field.value || placeholder}
      </Paragraph>
      <motion.span animate={meta.touched ? { rotate: 180 } : { rotate: 0 }}>
        <RiArrowDownSLine
          className={twMerge(
            'w-5 h-5 fill-zinc-400',
            meta.touched && 'fill-zinc-900'
          )}
        />
      </motion.span>

      <SelectGroup
        touched={meta.touched}
        options={options}
        handleSelect={handleSelect}
      />
    </div>
  );
};
