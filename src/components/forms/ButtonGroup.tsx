import { twMerge } from 'tailwind-merge';
import Button from '../ui/Button';
import { useField } from 'formik';
import Paragraph from '../ui/typo/Paragraph';

export interface Option {
  title: string;
  value: string | number;
}

export interface ButtonGroupProps {
  name: string;
  label?: string;
  multiple?: boolean;
  options: Option[];
}

const ButtonGroup = (props: ButtonGroupProps) => {
  const { name, label, multiple, options } = props;
  const [field, meta, helper] = useField(name);

  const setValue = (value: string | number) => {
    if (multiple) {
      const values = field.value;

      if (values.includes(value)) {
        const updatedValues = values.filter((v: any) => v !== value);
        return helper.setValue(updatedValues);
      } else {
        return helper.setValue([...field.value, value]);
      }
    }

    helper.setValue(value);
  };

  const valueExists = (value: string | number) => {
    const values = field.value;

    if (multiple) {
      return Array.isArray(values) && values.includes(value);
    }

    return values === value;
  };

  return (
    <div className='flex flex-col gap-y-1.5'>
      {/* label block */}
      {label ? (
        <label
          htmlFor={name}
          className='font-medium text-zinc-900'
        >
          {label}
        </label>
      ) : null}

      <div className='flex flex-wrap items-start gap-2'>
        {options &&
          options.map((option) => (
            <Button
              key={option.title}
              type='button'
              className={twMerge(
                'ring-1 ring-zinc-300 text-zinc-600 font-normal capitalize px-2 py-1 rounded-lg hover:bg-zinc-50 bg-white transition-all duration-300 ease-in-out leading-tight',
                valueExists(option.value) &&
                  'ring-zinc-900 text-zinc-900 font-medium'
              )}
              clickEvent={() => setValue(option.value)}
            >
              {option.title}
            </Button>
          ))}
      </div>

      {/* error block */}
      {meta.touched && meta.error ? (
        <Paragraph className='text-red-600'>{meta.error}</Paragraph>
      ) : null}
    </div>
  );
};

export default ButtonGroup;
