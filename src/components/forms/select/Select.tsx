import { useField } from 'formik';
import Label from '../Label';
import Dropdown from './Dropdown';
import FieldWrapper from '../FieldWrapper';
import { RiArrowDownSLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
import SelectedValue from './SelectedValue';
import Message from '../Message';

// option array item type
export type Option = {
  title: string; // the title of the option
  value: string; // the value type of the option
};

// component props type
export type SelectProps = {
  name: string;
  label?: string;
  multiple?: boolean;
  options: Option[];
  placeholder?: string;
  message?: string;
};

const Select = (props: SelectProps) => {
  const { name, label, multiple, options, placeholder, message } = props;
  const [field, meta, helper] = useField(name);

  // remove the given option from the field array
  const removeOption = (option: string | number) => {
    const array = field.value; //the array
    const updatedArray = array.filter((v: string | number) => v !== option);
    // remove the option from the field and set a new value
    helper.setValue(updatedArray);
  };

  // set field value
  const setValue = (value: string | number) => {
    helper.setTouched(false); //set touched to true
    const values = field.value; //field value

    // check whether the multiple prop is true
    if (multiple) {
      // check if the option already exists with in the field array
      if (values.includes(value)) {
        // if it does remove the option from the field
        return removeOption(value);
      } else {
        return helper.setValue([...values, value]);
      }
    } else {
      // if multiple prop is false just update the value directly
      helper.setValue(value);
    }
  };

  // check if value exists in field
  const valueExists = (value: string | number) => {
    const values = field.value;
    if (multiple) {
      return Array.isArray(values) && values.includes(value);
    }
    return values === value;
  };

  return (
    <div className='relative flex flex-col gap-y-1.5'>
      {/* render label component */}
      <Label
        name={name}
        label={label}
      />

      {/* render select field wrapper component*/}
      <FieldWrapper
        className='inline-flex items-center justify-between cursor-pointer'
        touched={meta.touched}
        error={meta.error}
        onClick={() => helper.setTouched(!meta.touched)}
      >
        {/* render the selected value */}
        <SelectedValue
          value={field.value}
          removeOption={removeOption}
          placeholder={placeholder}
          error={meta.error}
          touched={meta.touched}
        />

        {/* render animated icon */}
        <motion.span
          className='mr-2'
          animate={meta.touched ? { rotate: -180 } : { rotate: 0 }}
        >
          {/* icon indicating the field is a dropdown */}
          <RiArrowDownSLine className='w-5 h-5 fill-zinc-500' />
        </motion.span>
      </FieldWrapper>

      {/* render dropdown field component */}
      <Dropdown
        touched={meta.touched}
        options={options}
        setValue={setValue}
        valueExists={valueExists}
      />

      {/* renders message component */}
      <Message
        touched={meta.touched}
        error={meta.error}
        message={message}
      />
    </div>
  );
};

export default Select;
