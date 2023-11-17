import { twMerge } from 'tailwind-merge';
import { OptionProps } from './Button';
import Button from '../../ui/Button';

type ButtonListProps = {
  options: OptionProps[];
  valueExists: (e: any) => boolean;
  setValue: (value: any) => void;
};

const ButtonList = (props: ButtonListProps) => {
  const { options, valueExists, setValue } = props;

  return (
    <div className='flex flex-wrap items-start gap-1.5'>
      {/* map through the option */}
      {options &&
        options.map((option) => (
          <Button
            key={option.title}
            variant='outline'
            size='sm'
            type='button'
            className={twMerge(
              'capitalize px-2 py-1 text-zinc-500 border border-zinc-200 shadow-sm hover:bg-zinc-50 rounded-md',
              valueExists(option.value) &&
                'border-zinc-900 text-zinc-900 font-bold'
            )}
            onClick={() => setValue(option.value)}
          >
            {option.title}
          </Button>
        ))}
    </div>
  );
};

export default ButtonList;
