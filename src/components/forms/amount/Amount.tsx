import { Field, useField } from 'formik';
import { motion } from 'framer-motion';
import Label from '../Label';
import { RiAddFill, RiSubtractFill } from 'react-icons/ri';
import { twMerge } from 'tailwind-merge';

export type AmountProps = {
  name: string; //name of the field
  prefix?: string; //optional values appended before the field value
  suffix?: string; //optional values prepended to the field value
  label?: string; //optional label to indicate what field is used for
  min: number; // minimum value allowed
  max: number; // maximum value allowed
};

const Amount = (props: AmountProps) => {
  const { name, label, prefix, suffix, min, max } = props;
  const [field, meta, helper] = useField(name);

  // icon class rules
  const iconClassName =
    'w-5 h-5 transition-all duration-300 rounded z-10 duration-200 cursor-pointer fill-zinc-400 hover:fill-zinc-900';

  // increment the value of the field by 1
  const incrementValue = () => {
    let number = Number(field.value);
    if (number < max) {
      helper.setValue(number + 1);
    }
  };

  // decrement the value of the field by 1
  const decrementValue = () => {
    let number = Number(field.value);
    if (number > min) {
      helper.setValue(number - 1);
    }
  };

  // handles the field change event
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!Number(value)) return;

    const newValue = Math.min(Math.max(Number(value), min), max);
    helper.setValue(newValue);
  };

  return (
    <div className='flex flex-col gap-y-1.5'>
      {/* renders the label */}
      <Label
        name={name}
        label={label}
      />

      {/* renders the field with prefix and/or suffix */}
      <div
        className={twMerge(
          'relative inline-flex items-center transition-all duration-300 justify-between w-full p-2 overflow-hidden rounded-lg ring-1 ring-zinc-300',
          meta.touched && !meta.error
            ? 'ring-zinc-900'
            : meta.touched && meta.error && 'ring-red-600'
        )}
      >
        {/* animated background indicating percentage of value */}
        <motion.div
          className='absolute top-0 left-0 z-0 h-full bg-zinc-100'
          animate={
            field.value > 0
              ? { width: (field.value / max) * 100 + '%' }
              : { width: 0 }
          }
        ></motion.div>

        {/* icon for incrementing the value */}
        <RiAddFill
          className={iconClassName}
          onClick={incrementValue}
        />

        {/* render the field block */}
        <div className='z-10 inline-flex justify-center font-medium sm:text-sm'>
          {/* render the prefix */}
          {prefix}
          {/* render the field block */}
          <Field
            name={name}
            className={twMerge(
              'bg-transparent outline-none hover:bg-zinc-200 rounded-lg',
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
          {/* render the suffix */}
          {suffix}
        </div>
        {/* icon for decrementing the value */}
        <RiSubtractFill
          className={iconClassName}
          onClick={decrementValue}
        />
      </div>
    </div>
  );
};

export default Amount;
