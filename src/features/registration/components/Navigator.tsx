import SecondaryButton from '../../../components/ui/buttons/SecondaryButton';
import PrimaryButton from '../../../components/ui/buttons/PrimaryButton';

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
        <SecondaryButton
          type='button'
          className='px-4 py-2'
          onClick={onPrev}
        >
          {prev}
        </SecondaryButton>
      )}

      {next && (
        <PrimaryButton
          type='button'
          className='px-4 py-2'
          onClick={onNext}
        >
          {next}
        </PrimaryButton>
      )}
    </div>
  );
};

export default Navigator;
