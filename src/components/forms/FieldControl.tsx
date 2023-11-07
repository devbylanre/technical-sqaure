import Input, { InputProps } from './input/Input';
import Select, { SelectProps, Options } from './select/Select';

interface FieldInputProps extends InputProps, SelectProps {
  name: string;
  control: 'input' | 'select';
  options?: Options[];
}

// export default Field;
const FieldControl = (props: FieldInputProps) => {
  const { control, name, options, ...rest } = props;

  switch (control) {
    case 'input':
      return (
        <Input
          name={name}
          {...rest}
        />
      );
    case 'select':
      return (
        <Select
          name={name}
          options={options || []}
          {...rest}
        />
      );

    default:
      return null;
  }
};

export default FieldControl;
