import Paragraph from '../ui/typo/Paragraph';

interface MessageProps {
  touched: boolean;
  error: any;
  message?: string;
}

const Message = (props: MessageProps) => {
  const { touched, error, message } = props;

  return (
    <>
      {touched && error ? (
        <Paragraph className='text-red-600 first-letter:uppercase sm:text-sm'>
          {error}
        </Paragraph>
      ) : message ? (
        <Paragraph className='text-sm first-letter:uppercase text-zinc-600'>
          {message}
        </Paragraph>
      ) : null}
    </>
  );
};

export default Message;
