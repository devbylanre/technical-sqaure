import Button from '../../../components/ui/Button';

type NavigatorProps = {
  prev?: string;
  next?: string;
  onPrev?: (e: any) => void;
  onNext?: (e: any) => void;
};

const Navigator = (props: NavigatorProps) => {
  const { prev, next, onNext, onPrev } = props;

  return (
    <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
      {prev && (
        <Button
          state='secondary'
          type='button'
          className='px-4 py-2'
          onClick={onPrev}
        >
          {prev}
        </Button>
      )}

      {next && (
        <Button
          state='primary'
          type='button'
          className='px-4 py-2'
          onClick={onNext}
        >
          {next}
        </Button>
      )}
    </div>
  );
};

export default Navigator;
