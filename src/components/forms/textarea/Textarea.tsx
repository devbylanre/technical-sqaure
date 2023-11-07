import { Field, useField } from 'formik';
import ErrorMessage from '../ErrorMessage';
import Label from '../Label';
import { twMerge } from 'tailwind-merge';
import { useEffect } from 'react';

interface TextareaProps {
  name: string;
  label: string;
  length?: number;
}

const Textarea = (props: TextareaProps) => {
  const { name, label } = props;
  const [field, meta, helper] = useField(name);

  const element = document.querySelector(`#${name}`) as HTMLTextAreaElement;

  useEffect(() => {
    if (element) {
      element.style.height = 'fit-content';
      if (element.value.length > 1) {
        element.style.height = `${element.scrollHeight}px`;
      }
    }
  }, [element, element?.value]);

  return (
    <div className='flex flex-col gap-y-1.5'>
      {/* field label */}
      <Label
        name={name}
        label={label}
      />

      {/* textarea field */}
      <Field
        as='textarea'
        name={name}
        id={name}
        rows={1}
        className={twMerge(
          'rounded-lg outline-none resize-none ring-1 h-fit ring-zinc-300 py-1.5 px-2 transition-all duration-300 ease-in-out',
          meta.touched && !meta.error
            ? 'ring-zinc-900'
            : meta.error && meta.touched && 'ring-red-600'
        )}
        onFocus={() => helper.setTouched(true)}
        onBlur={() => helper.setTouched(false)}
      />

      {/* error message */}
      <ErrorMessage
        touched={meta.touched}
        error={meta.error}
      />
    </div>
  );
};

export default Textarea;
