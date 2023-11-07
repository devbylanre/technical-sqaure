import Paragraph from '../ui/typo/Paragraph';

interface ErrorMessageProps {
  touched: boolean;
  error: any;
}

const ErrorMessage = (props: ErrorMessageProps) => {
  const { touched, error } = props;

  if (!touched) return null;

  return (
    <Paragraph className='text-red-600 first-letter:uppercase'>
      {error}
    </Paragraph>
  );
};

export default ErrorMessage;
