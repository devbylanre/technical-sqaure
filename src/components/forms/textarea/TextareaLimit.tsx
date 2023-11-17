import Paragraph from '../../ui/typo/Paragraph';
type TextareaLimitProps = {
  value: any;
  limit: number | null | undefined;
};

const TextareaLimit = ({ value, limit }: TextareaLimitProps) => {
  if (!value) return null;
  return (
    <Paragraph className='self-end text-xs font-medium'>
      {limit && value
        ? limit > value.length
          ? value.length + '/' + limit
          : value.length >= limit && 'Limit reached'
        : null}
    </Paragraph>
  );
};

export default TextareaLimit;
