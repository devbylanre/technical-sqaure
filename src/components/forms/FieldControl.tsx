import Input, { InputProps } from './input/Input';
import Textarea, { TextareaProps } from './textarea/Textarea';
import Button, { ButtonProps } from './button/Button';

type CommonFieldProps = {
  control: 'input' | 'textarea' | 'btn';
};

// new field props type
type NewInputProps = CommonFieldProps & InputProps;
type NewTextareaProps = CommonFieldProps & TextareaProps;
type NewButtonProps = CommonFieldProps & ButtonProps;

// combined field props
type FieldProps = NewInputProps | NewTextareaProps | NewButtonProps;

const FieldControl = (props: FieldProps) => {
  switch (props.control) {
    case 'input':
      const { ...inputProps } = props as NewInputProps;
      return <Input {...inputProps} />;
    case 'textarea':
      const { ...textareaProps } = props as NewTextareaProps;
      return <Textarea {...textareaProps} />;
    case 'btn':
      const { ...btnProps } = props as NewButtonProps;
      return <Button {...btnProps} />;
    default:
      return null;
  }
};

export default FieldControl;
