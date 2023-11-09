import { Options } from './Select';
import Paragraph from '../../ui/typo/Paragraph';
import { twMerge } from 'tailwind-merge';

type DropdownProps = {
  touched: boolean;
  options?: Options[];
  setValue: (e: any) => any;
  valueExists: (value: string | number) => boolean;
};

const Dropdown = (props: DropdownProps) => {
  const { valueExists, touched, options, setValue } = props;

  if (!touched) return null;

  return (
    <div className='absolute left-0 w-full p-1.5 bg-white rounded-lg ring-1 ring-zinc-300 top-[4.25rem] flex flex-col gap-y-1'>
      {options &&
        options.map((option) => (
          <Paragraph
            key={option.title}
            clickEvent={() => setValue(option.value)}
            className={twMerge(
              'px-1.5 py-1 hover:bg-zinc-100 rounded cursor-pointer first-letter:uppercase sm:text-sm',
              valueExists(option.value) && 'font-medium'
            )}
          >
            {option.title}
          </Paragraph>
        ))}
    </div>
  );
};

export default Dropdown;
