import FieldControl from '../../../components/forms/FieldControl';
import Alert from '../../../components/ui/Alert';
import Heading from '../../../components/ui/typo/Heading';
import Paragraph from '../../../components/ui/typo/Paragraph';
import Navigator from './Navigator';

type NamePropsType = {
  errors: {
    firstName?: string;
    lastName?: string;
  };
  switchToComponent: (e: string) => void;
};

const Name = ({ switchToComponent, errors }: NamePropsType) => {
  const handleNext = () => {
    if (errors.firstName && errors.lastName) return null;

    switchToComponent('community');
  };

  return (
    <>
      <Heading className='text-2xl font-bold'>What's your name?</Heading>
      <div className='flex flex-col gap-y-5'>
        <FieldControl
          control='input'
          name='firstName'
          label='First Name'
          placeholder='Enter your first name'
        />
        <FieldControl
          control='input'
          name='lastName'
          label='Last Name'
          placeholder='Enter your last name'
        />
      </div>

      <Navigator
        next='Community'
        prev='Start'
        onNext={handleNext}
        onPrev={() => switchToComponent('start')}
      />

      <Alert isVisible>
        <Paragraph className='text-sm font-medium text-amber-900'>
          Fill in your names correctly to continue to the next step
        </Paragraph>
      </Alert>
    </>
  );
};

export default Name;
