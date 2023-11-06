import Input, { InputProps } from './Input';

interface FieldInputProps extends InputProps {
  name: string;
  control: string;
}

// export default Field;
const FieldControl = (props: FieldInputProps) => {
  const { control, name, ...rest } = props;

  switch (control) {
    case 'input':
      return (
        <Input
          name={name}
          {...rest}
        />
      );

    default:
      return null;
  }
};

export default FieldControl;
