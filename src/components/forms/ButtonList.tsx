import { useField } from 'formik';
import Button from '../ui/Button';
import { twMerge } from 'tailwind-merge';

// Define the properties for the button group
export type ButtonProps = {
  name: string;
  multiple?: boolean;
  options: any[];
};

export const ButtonList = (props: ButtonProps) => {
  const { name, multiple, options } = props;
  const [field, {}, helper] = useField(name);

  const setValue = (v: string | number) => {
    if (multiple) {
      const values = field.value;

      if (values.includes(v)) {
        const filter = values.filter((value: string | number) => value !== v);
        return helper.setValue(filter);
      } else {
        const newValue = [...values, v];
        return helper.setValue(newValue);
      }
    }

    helper.setValue(v);
  };

  const valueExist = (v: string | number) => {
    if (multiple) {
      const values = field.value;
      const existInArray = values.includes(v);

      return existInArray;
    }

    return field.value === v;
  };

  return (
    <div className='flex flex-col gap-y-1.5'>
      {/* Render the button list component */}
      <ul className='flex flex-wrap items-start gap-1'>
        {/* map through the option */}
        {options &&
          options.map((option, i) => (
            <li key={i}>
              <Button
                size='sm'
                type='button'
                variant='outline'
                className={twMerge(
                  'capitalize text-zinc-600 font-normal h-7',
                  valueExist(option.value) &&
                    'border-zinc-900 font-medium text-zinc-900'
                )}
                onClick={() => setValue(option.value)}
              >
                {option.title}
              </Button>
            </li>
          ))}
      </ul>
    </div>
  );
};
