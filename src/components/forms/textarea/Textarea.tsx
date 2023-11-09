import { Field, useField } from 'formik';
import Helper from '../Helper';
import Label from '../Label';
import { twMerge } from 'tailwind-merge';
import { useEffect } from 'react';
import Paragraph from '../../ui/typo/Paragraph';

export type TextareaProps = {
  name: string;
  label: string;
  limit?: number;
  helperText?: string;
};

const Textarea = (props: TextareaProps) => {
  const { name, label, limit, helperText } = props;
  const [field, meta, helper] = useField(name);

  const element = document.querySelector(`#${name}`) as HTMLTextAreaElement;

  useEffect(() => {
    if (element) {
      element.style.height = 'fit-content';
      if (element.value.length > 1) {
        element.style.height = `${element.scrollHeight}px`;
      }

      if (limit && limit <= element.value.length) {
        const value = element.value.slice(0, limit);
        helper.setValue(value);
      }
    }
  }, [element, element?.value, limit]);

  return (
    <div className='flex flex-col gap-y-1.5'>
      {/* field label */}
      <Label
        name={name}
        label={label}
      />

      <div
        className={twMerge(
          'rounded-lg ring-1 flex flex-col ring-zinc-300 transition-all duration-300 ease-in-out',
          meta.touched && !meta.error
            ? 'ring-zinc-900'
            : meta.error && meta.touched && 'ring-red-600 text-red-800'
        )}
      >
        {/* textarea field */}
        <Field
          as='textarea'
          name={name}
          id={name}
          rows={1}
          className='w-full h-full leading-tight sm:text-sm bg-transparent outline-none resize-none py-1.5 px-2 text-inherit'
          onFocus={() => helper.setTouched(true)}
          onBlur={() => helper.setTouched(false)}
        />
        {field.value && (
          <Paragraph className='self-end py-0.5 px-1.5 text-xs font-medium'>
            {limit && field.value
              ? limit > field.value.length
                ? field.value.length + '/' + limit
                : field.value.length >= limit && 'Limit reached'
              : null}
          </Paragraph>
        )}
      </div>

      {/* error message */}
      <Helper
        touched={meta.touched}
        error={meta.error}
        helper={helperText}
      />
    </div>
  );
};

export default Textarea;
