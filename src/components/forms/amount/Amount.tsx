import { useField } from 'formik';
import { motion } from 'framer-motion';
import { RiAddFill, RiSubtractFill } from 'react-icons/ri';
import Label from '../Label';
import Message from '../Message';
import AmountField from './AmountField';
import FieldWrapper from '../FieldWrapper';

// component props type
export type AmountProps = {
  name: string;
  prefix?: string;
  suffix?: string;
  disabled?: boolean;
  label?: string;
  message?: string;
  min: number;
  max: number;
};

const Amount = (props: AmountProps) => {
  const { name, label, disabled, message, prefix, suffix, min, max } = props;
  const [field, meta, helper] = useField(name);

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
  // icon class rules
  const iconClassName =
    'w-5 h-5 transition-all duration-300 rounded z-10 duration-200 cursor-pointer fill-zinc-400 hover:fill-zinc-900';

  return (
    <div className='flex flex-col gap-y-1.5'>
      {/* renders the label */}
      <Label name={name}>{label}</Label>

      {/* renders the field with prefix and/or suffix */}
      <FieldWrapper
        className='relative inline-flex items-center justify-between px-2 overflow-hidden bg-zinc-100'
        touched={meta.touched}
        error={meta.error}
        disabled={disabled}
      >
        {/* animated background indicating percentage of value */}
        <motion.div
          className='absolute top-0 left-0 z-0 h-full bg-white'
          animate={
            field.value > 0
              ? { width: (field.value / max) * 100 + '%' }
              : { width: 0 }
          }
        ></motion.div>
        {/* plus icon for increasing field value */}
        <RiAddFill
          className={iconClassName}
          onClick={incrementValue}
        />
        <div className='z-10 inline-flex justify-center text-sm font-medium'>
          {prefix ? prefix : null}
          <AmountField
            name={field.name}
            value={field.value}
            handleChange={handleChange}
            handleBlur={() => helper.setTouched(false)}
            handleFocus={() => helper.setTouched(true)}
          />
          {suffix ? suffix : null}
        </div>

        {/* icon for decreasing the field value */}
        <RiSubtractFill
          className={iconClassName}
          onClick={decrementValue}
        />
      </FieldWrapper>

      {/* renders the message component */}
      <Message
        error={meta.error}
        touched={meta.touched}
        message={message}
      />
    </div>
  );
};

export default Amount;
