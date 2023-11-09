import Input, { InputProps } from './input/Input';
import Select, { SelectProps } from './select/Select';

type CommonFieldProps = {
  control: 'input' | 'select';
};

// new field props type
type NewInputProps = CommonFieldProps & InputProps & { control: 'input' };
type NewSelectProps = CommonFieldProps & SelectProps & { control: 'select' };

// combined field props
type FieldProps = NewInputProps | NewSelectProps;

const FieldControl = (props: FieldProps) => {
  switch (props.control) {
    case 'input':
      const { ...inputProps } = props as NewInputProps;
      return <Input {...inputProps} />;
    case 'select':
      const { ...selectProps } = props as NewSelectProps;
      return <Select {...selectProps} />;
    default:
      return null;
  }
};

export default FieldControl;
