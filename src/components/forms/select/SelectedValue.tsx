import { RiCloseLine } from 'react-icons/ri';
import Button from '../../ui/Button';
import Paragraph from '../../ui/typo/Paragraph';
import { twMerge } from 'tailwind-merge';

type SelectedValueProps = {
  value: any; // the value to display
  removeOption: (e: string | number) => any; // removes an option
  placeholder?: string; //an optional placeholder text
  error: any; // field error message
  touched: boolean; // a boolean flag indicating whether the field is touched
};

const SelectedValue = (props: SelectedValueProps) => {
  const { value, touched, removeOption, placeholder, error } = props;

  return (
    <div className='inline-flex p-1 gap-x-1.5'>
      {/* check if value exists and has a length greater than 0 */}
      {value && value.length > 0 ? (
        Array.isArray(value) ? ( // check if value is an array
          value.map((val, i) => (
            <Button
              key={i}
              type='button'
              className='p-1.5 px-1 text-sm font-medium capitalize rounded gap-x-1 bg-zinc-100 ring-1 ring-zinc-200'
            >
              {val} {/* displays the value */}
              <RiCloseLine
                className='w-4 h-4 fill-zinc-500 hover:fill-red-700 hover:bg-red-100 hover:rounded-full'
                onClick={() => removeOption(val)}
              />
              {/* display icon for removing the option */}
            </Button>
          ))
        ) : (
          //displays a paragraph with the value
          <Paragraph className='p-1 text-sm font-medium capitalize text-zinc-900'>
            {value}
          </Paragraph>
        )
      ) : (
        // displays a paragraph with the error message or placeholder text
        <Paragraph
          className={twMerge(
            'text-zinc-600 leading-tight p-1 text-sm',
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
