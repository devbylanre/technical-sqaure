import { RiCloseLine } from 'react-icons/ri';
import Button from '../../ui/Button';
import Paragraph from '../../ui/typo/Paragraph';
import { twMerge } from 'tailwind-merge';

interface SelectedValueProps {
  value: any;
  removeOption: (e: string | number) => any;
  placeholder?: string;
  error: any;
  touched: boolean;
}

const SelectedValue = (props: SelectedValueProps) => {
  const { value, touched, removeOption, placeholder, error } = props;

  return (
    <div className='inline-flex gap-x-1.5'>
      {value && value.length > 0 ? (
        Array.isArray(value) ? (
          value.map((val, i) => (
            <Button
              key={i}
              type='button'
              className='gap-x-0.5 ring-1 ring-zinc-300 px-1 rounded capitalize font-normal'
            >
              {val}
              <RiCloseLine onClick={() => removeOption(val)} />
            </Button>
          ))
        ) : (
          <Paragraph className='capitalize text-zinc-900'>{value}</Paragraph>
        )
      ) : (
        <Paragraph
          className={twMerge(
            'text-zinc-600',
            error && touched && 'text-red-600'
          )}
        >
          {error && touched ? error : placeholder}
        </Paragraph>
      )}
    </div>
  );
};

export default SelectedValue;
