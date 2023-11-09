import { useField } from 'formik';
import Label from '../Label';
import Dropdown from './Dropdown';
import SelectField from './SelectField';

export type Option = {
  title: string; // the title of the option
  value: string; // the value type of the option
};

export type SelectProps = {
  name: string; // the name of the field
  label?: string; // the label for the field
  multiple?: boolean; //optional check if multiple options are allowed
  options: Option[]; // array of option
  placeholder?: string; // the placeholder for the field
};

const Select = (props: SelectProps) => {
  const { name, label, multiple, options, placeholder } = props;
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
      {/* render select field component*/}
      <SelectField
        touched={meta.touched}
        value={field.value}
        removeOption={removeOption}
        placeholder={placeholder}
        error={meta.error}
        setTouched={() => helper.setTouched(!meta.touched)}
      />

      {/* render dropdown field component */}
      <Dropdown
        touched={meta.touched}
        options={options}
        setValue={setValue}
        valueExists={valueExists}
      />
    </div>
  );
};

export default Select;
