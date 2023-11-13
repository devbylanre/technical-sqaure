import { twMerge } from 'tailwind-merge';
import { OptionProps } from './Button';
import SecondaryButton from '../../ui/buttons/SecondaryButton';

type ButtonListProps = {
  options: OptionProps[];
  valueExists: (e: any) => boolean;
  setValue: (value: any) => void;
};

const ButtonList = (props: ButtonListProps) => {
  const { options, valueExists, setValue } = props;

  return (
    <div className='flex flex-wrap items-start gap-2'>
      {/* map through the option */}
      {options &&
        options.map((option) => (
          <SecondaryButton
            key={option.title}
            type='button'
            className={twMerge(
              'capitalize px-2 py-1 text-zinc-500',
              valueExists(option.value) &&
                'border-zinc-900 text-zinc-900 font-bold'
            )}
            onClick={() => setValue(option.value)}
          >
            {option.title}
          </SecondaryButton>
        ))}
    </div>
  );
};

export default ButtonList;
