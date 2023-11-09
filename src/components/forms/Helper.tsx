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
      {touched && error ? (
        <Paragraph className='text-red-600 first-letter:uppercase sm:text-sm'>
          {error}
        </Paragraph>
      ) : helper ? (
        <Paragraph className='text-sm first-letter:uppercase text-zinc-600'>
          {helper}
        </Paragraph>
      ) : null}
    </>
  );
};

export default Helper;
