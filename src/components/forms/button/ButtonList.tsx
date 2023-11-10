import { twMerge } from 'tailwind-merge';
import Button from '../../ui/Button';
import { OptionProps } from './Button';

type ButtonListProps = {
  options: OptionProps[]; //List of all available options
  valueExists: (e: any) => boolean; //Check if a value exists within the selected value(s)
  setValue: (value: any) => void; //set the value of the button group field
};

const ButtonList = (props: ButtonListProps) => {
  const { options, valueExists, setValue } = props;

  return (
    <div className='flex flex-wrap items-start gap-2'>
      {options &&
        options.map((option) => (
          <Button
            key={option.title}
            type='button'
            className={twMerge(
              'ring-1 ring-zinc-300 text-zinc-600 font-normal capitalize px-2 py-1 rounded-lg hover:bg-zinc-50 bg-white transition-all duration-300 ease-in-out',
              valueExists(option.value) &&
                'ring-zinc-900 text-zinc-900 font-medium'
            )}
            clickEvent={() => setValue(option.value)}
          >
            {option.title}
          </Button>
        ))}
    </div>
  );
};

export default ButtonList;
