import { twMerge } from 'tailwind-merge';
import Paragraph from '../ui/typo/Paragraph';

interface HelperProps {
  touched: boolean;
  error: any;
  helper?: string;
}

const Helper = (props: HelperProps) => {
  const { touched, error, helper } = props;

  return (
    <>
      {(touched && error) || helper ? (
        <Paragraph
          className={twMerge(
            'text-zinc-600 first-letter:uppercase sm:text-sm',
            error && 'text-red-600'
          )}
        >
          {error || helper}
        </Paragraph>
      ) : null}
    </>
  );
};

export default Helper;
