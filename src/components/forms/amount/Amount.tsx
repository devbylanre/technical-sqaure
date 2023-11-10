import { Field, useField } from 'formik';
import { motion } from 'framer-motion';
import Label from '../Label';
import { RiAddFill, RiSubtractFill } from 'react-icons/ri';
import { twMerge } from 'tailwind-merge';

export type AmountProps = {
  name: string;
  prefix?: string;
  suffix?: string;
  label?: string;
  min: number;
  max: number;
};

const Amount = (props: AmountProps) => {
  const { name, label, prefix, suffix, min, max } = props;
  const [field, meta, helper] = useField(name);

  const iconClassName =
    'w-6 h-6 transition-all duration-300 rounded z-10 duration-200 cursor-pointer fill-zinc-400 hover:fill-zinc-900';

  const incrementValue = () => {
    let number = Number(field.value);
    if (number < max) {
      helper.setValue(number + 1);
    }
  };

  const decrementValue = () => {
    let number = Number(field.value);
    if (number > min) {
      helper.setValue(number - 1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!Number(value)) return;

    const newValue = Math.min(Math.max(Number(value), min), max);
    helper.setValue(newValue);
  };

  return (
    <div className='flex flex-col gap-y-1.5'>
      <Label
        name={name}
        label={label}
      />

      <div
        className={twMerge(
          'relative inline-flex items-center transition-all duration-300 justify-between w-full p-1 overflow-hidden bg-zinc-100 rounded-lg ring-1 ring-zinc-300',
          meta.touched && !meta.error
            ? 'ring-zinc-900'
            : meta.touched && meta.error && 'ring-red-600'
        )}
      >
        <motion.div
          className='absolute top-0 left-0 z-0 h-full bg-white'
          animate={
            field.value > 0
              ? { width: (field.value / max) * 100 + '%' }
              : { width: 0 }
          }
        ></motion.div>
        <RiAddFill
          className={iconClassName}
          onClick={incrementValue}
        />
        <div className='z-10 inline-flex justify-center text-lg font-medium'>
          {prefix}
          <Field
            name={name}
            className={twMerge(
              'bg-transparent outline-none hover:bg-zinc-100 rounded-lg',
              field.value <= 9
                ? 'w-1/12'
                : field.value <= 99
                ? 'w-2/12'
                : 'w-3/12'
            )}
            onChange={handleChange}
            onFocus={() => helper.setTouched(true)}
            onBlur={() => helper.setTouched(false)}
          />
          {suffix}
        </div>
        <RiSubtractFill
          className={iconClassName}
          onClick={decrementValue}
        />
      </div>
    </div>
  );
};

export default Amount;
