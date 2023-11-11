import { Field } from 'formik';
import { twMerge } from 'tailwind-merge';
import Paragraph from '../../ui/typo/Paragraph';

type TextareaFieldProps = {
  name: string;
  touched: boolean;
  error: any;
  value: any;
  limit?: number;
  setTouched: (e: boolean) => void;
};

const TextareaField = (props: TextareaFieldProps) => {
  const { name, touched, error, value, limit, setTouched } = props;

  return (
    <div
      className={twMerge(
        'rounded-lg ring-1 flex flex-col ring-zinc-300 transition-all duration-300 ease-in-out',
        touched && !error
          ? 'ring-zinc-900'
          : error && touched && 'ring-red-600 text-red-800'
      )}
    >
      {/* textarea field */}
      <Field
        as='textarea'
        name={name}
        id={name}
        rows={1}
        className='w-full h-full p-2 text-sm font-medium bg-transparent outline-none resize-none sm:text-sm'
        onFocus={() => setTouched(true)}
        onBlur={() => setTouched(false)}
      />
      {value && (
        <Paragraph className='self-end py-0.5 px-1.5 text-xs font-medium'>
          {limit && value
            ? limit > value.length
              ? value.length + '/' + limit
              : value.length >= limit && 'Limit reached'
            : null}
        </Paragraph>
      )}
    </div>
  );
};

export default TextareaField;
