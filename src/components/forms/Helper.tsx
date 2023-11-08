import { twMerge } from 'tailwind-merge';
import Paragraph from '../ui/typo/Paragraph';

interface HelperProps {
  touched: boolean;
  error: any;
  helper?: string;
}

const Helper = (props: HelperProps) => {
  const { touched, error, helper } = props;

  if (!touched && !helper) return null;

  return (
    <Paragraph
      className={twMerge(
        'text-zinc-600 first-letter:uppercase leading-tight',
        error && 'text-red-600'
      )}
    >
      {error ? error : helper}
    </Paragraph>
  );
};

export default Helper;
