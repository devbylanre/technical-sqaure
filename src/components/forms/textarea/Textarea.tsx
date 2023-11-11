import { useField } from 'formik';
import Helper from '../Message';
import Label from '../Label';
import { useEffect } from 'react';
import TextareaField from './TextareaField';

export interface TextareaProps extends Partial<HTMLTextAreaElement> {
  name: string;
  label: string;
  limit?: number;
  message?: string;
}

const Textarea = (props: TextareaProps) => {
  const { name, label, limit, message } = props;
  const [field, meta, helper] = useField(name);

  const element = document.querySelector(`#${name}`) as HTMLTextAreaElement;

  useEffect(() => {
    // check if the element exists
    if (element) {
      element.style.height = 'fit-content'; // height of the element by default

      // check if the element value length is greater than zero '0'
      if (element.value.length > 0) {
        element.style.height = `${element.scrollHeight}px`;
      }

      // check if limit exists and limit is greater than element value length
      if (limit && limit <= element.value.length) {
        const newValue = element.value.slice(0, limit); // slice the field value starting from 0
        helper.setValue(newValue);
      }
    }
  }, [element, element?.value, limit, helper]);

  return (
    <div className='flex flex-col gap-y-1.5'>
      {/* render field label */}
      <Label
        name={name}
        label={label}
      />

      {/* render textarea field */}
      <TextareaField
        name={name}
        value={field.value}
        touched={meta.touched}
        error={meta.error}
        limit={limit}
        setTouched={helper.setTouched}
      />

      {/* error message */}
      <Helper
        touched={meta.touched}
        error={meta.error}
        message={message}
      />
    </div>
  );
};

export default Textarea;
