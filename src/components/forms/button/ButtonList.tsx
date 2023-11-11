import { twMerge } from 'tailwind-merge';
import Button from '../../ui/Button';
import { OptionProps } from './Button';

type ButtonListProps = {
  options: OptionProps[];
  valueExists: (e: any) => boolean;
  setValue: (value: any) => void;
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
              'ring-1 ring-zinc-300 text-zinc-600 sm:text-sm font-normal capitalize px-2 py-1 rounded-lg hover:bg-zinc-50 bg-white transition-all duration-300 ease-in-out',
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
