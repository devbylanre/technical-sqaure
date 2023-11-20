import Paragraph from '../ui/typo/Paragraph';
import { RiArrowDownSLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
import { useField } from 'formik';
import { twMerge } from 'tailwind-merge';
import { HTMLAttributes } from 'react';

type SelectProps = {
  name: string;
  placeholder?: string;
  children: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export const Select = (props: SelectProps) => {
  const { name, placeholder, children, ...rest } = props;
  const [field, meta, helper] = useField(name);

  const onTouched = () => helper.setTouched(!meta.touched);

  return (
    <div
      className='inline-flex items-center h-9 px-2 cursor-pointer justify-between w-full relative'
      onClick={onTouched}
      {...rest}
    >
      <Paragraph
        className={twMerge(
          'text-sm font-semibold text-zinc-900 first-letter:uppercase',
          !field.value && 'text-zinc-600 font-normal'
        )}
      >
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

      {meta.touched && children}
    </div>
  );
};

type SelectGroupProps = {
  children: React.ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

export const SelectGroup = ({ children, className }: SelectGroupProps) => {
  return (
    <div
      className={twMerge(
        'shadow rounded-lg w-full absolute left-0 top-10 border border-zinc-200 flex flex-col bg-white shadow-zinc-200/20',
        className
      )}
    >
      {children}
    </div>
  );
};

type SelectItemProps = {
  children: React.ReactNode;
  className: string;
  onSelect: (e: any) => void;
} & HTMLAttributes<HTMLDivElement>;

export const SelectItem = (props: SelectItemProps) => {
  const { children, className, onSelect } = props;

  return (
    <div
      className={twMerge('py-1 px-2', className)}
      onClick={onSelect}
    >
      {children}
    </div>
  );
};

export const useSelect = (name: string, multiple?: boolean) => {
  const [field, {}, helper] = useField(name);

  const selectValue = (value: string | number) => {
    if (multiple) {
      const values = field.value;

      if (Array.isArray(values) && values.includes(value)) {
        const filter = values.filter((v) => v !== value);
        return helper.setValue(filter);
      } else {
        const newValues: (string | number)[] = [...values, value];
        return helper.setValue(newValues);
      }
    }

    helper.setValue(value);
  };

  const valueExists = (value: string | number) => {
    if (multiple) {
      if (Array.isArray(value)) {
        const values = field.value;
        const existsInArray = values.includes(value);

        return existsInArray;
      }
    }

    return field.value === value;
  };

  return { selectValue, valueExists };
};
