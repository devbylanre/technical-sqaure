import { useField } from 'formik';
import Paragraph from '../ui/typo/Paragraph';
import { RiArrowDownSLine } from 'react-icons/ri';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

export interface Options {
  title: string;
  value: string;
}

export interface SelectProps {
  name: string;
  label?: string;
  options: Options[];
  placeholder?: string;
}

const Select = (props: SelectProps) => {
  const { name, label, options, placeholder } = props;
  const [field, meta, helper] = useField(name);

  const setValue = (value: string | number) => {
    helper.setTouched(false);
    helper.setValue(value);
  };

  return (
    <div className='relative flex flex-col gap-y-1'>
      {/* label block */}
      {label ? (
        <label
          className='font-medium text-zinc-900'
          htmlFor={name}
        >
          {label}
        </label>
      ) : null}
      {/* field block */}
      <div
        className={twMerge(
          'p-1.5 rounded-lg bg-white ring-1 ring-zinc-300 inline-flex items-center justify-between transition-all duration-300 ease-in-out cursor-pointer',
          meta.touched && !meta.error
            ? 'ring-zinc-900'
            : meta.touched && 'ring-red-600'
        )}
        onClick={() => helper.setTouched(!meta.touched)}
      >
        <Paragraph
          className={twMerge(
            'text-zinc-500 first-letter:uppercase',
            field.value && 'text-zinc-900',
            meta.touched && meta.error && 'text-red-600'
          )}
        >
          {field.value
            ? field.value
            : meta.touched && meta.error
            ? meta.error
            : placeholder}
        </Paragraph>
        {/* animated icon */}
        <motion.span animate={meta.touched ? { rotate: -180 } : { rotate: 0 }}>
          <RiArrowDownSLine className='w-5 h-5 fill-zinc-500' />
        </motion.span>
      </div>

      {/* options */}
      {meta.touched ? (
        <div className='absolute left-0 w-full p-1.5 bg-white rounded-lg ring-1 ring-zinc-300 top-12 flex flex-col gap-y-1'>
          {options.map((option) => (
            <Paragraph
              key={option.title}
              clickEvent={() => setValue(option.value)}
              className='px-1.5 py-1 hover:bg-zinc-100 rounded cursor-pointer first-letter:uppercase'
            >
              {option.title}
            </Paragraph>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Select;
