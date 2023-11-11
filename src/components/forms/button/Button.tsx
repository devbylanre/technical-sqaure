import { useField } from 'formik';
import Helper from '../Message';
import Label from '../Label';
import ButtonList from './ButtonList';

// Define the properties for each option within the button group
export type OptionProps = {
  title: string;
  value: string | number;
};

// Define the properties for the button group
export type ButtonProps = {
  name: string;
  label?: string;
  multiple?: boolean;
  options: OptionProps[];
  message?: string;
};

const Button = (props: ButtonProps) => {
  const { name, label, multiple, options, message } = props;
  const [field, meta, helper] = useField(name);

  // Set the value of the button group based on selection
  const setValue = (value: string | number) => {
    if (multiple) {
      const values = field.value;

      // Toggle selection for multiple choice
      if (values.includes(value)) {
        const updatedValues = values.filter((v: any) => v !== value);
        return helper.setValue(updatedValues);
      } else {
        return helper.setValue([...field.value, value]);
      }
    }

    // For single choice, set the value directly
    helper.setValue(value);
  };

  // Check if a value exists in the current selection
  const valueExists = (value: string | number) => {
    const values = field.value;

    if (multiple) {
      return Array.isArray(values) && values.includes(value);
    }

    return values === value;
  };

  return (
    <div className='flex flex-col gap-y-1.5'>
      {/* Display the label block */}
      <Label
        name={field.name}
        label={label}
      />

      {/* Render the button list component */}
      <ButtonList
        options={options}
        valueExists={valueExists}
        setValue={setValue}
      />

      {/* Display additional helper information */}
      <Helper
        touched={meta.touched}
        error={meta.error}
        message={message}
      />
    </div>
  );
};

export default Button;
