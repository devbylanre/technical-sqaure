import FieldControl from '../../../components/forms/FieldControl';
import Heading from '../../../components/ui/typo/Heading';
import Navigator from './Navigator';

// define the name form component props type
type NamePropsType = {
  errors: {
    firstName?: string;
    lastName?: string;
  };
  switchToComponent: (e: string) => void;
  touched: () => void;
};

const Name = ({ switchToComponent, errors, touched }: NamePropsType) => {
  // handle the next form component
  const handleNext = () => {
    // check if first name or last name field has a value
    if (errors.firstName || errors.lastName) {
      touched();
      return null;
    }

    switchToComponent('community'); // switch form component to community
  };

  return (
    <>
      {/* render heading tag */}
      <Heading className='text-2xl font-bold'>What's your name?</Heading>

      {/* render first name and last name field */}
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

      {/* render button used to navigate between form components */}
      <Navigator
        next='Community'
        prev='Start'
        onNext={handleNext}
        onPrev={() => switchToComponent('start')}
      />
    </>
  );
};

export default Name;
