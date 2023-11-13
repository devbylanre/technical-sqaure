import Heading from '../../../components/ui/typo/Heading';
import FieldControl from '../../../components/forms/FieldControl';
import Navigator from './Navigator';
import Alert from '../../../components/ui/Alert';
import { useState } from 'react';

type DescriptionPropsType = {
  switchToComponent: (e: any) => void;
  error?: string;
};

const Description = ({ error, switchToComponent }: DescriptionPropsType) => {
  const [hasError, setHasError] = useState(false);

  const handleNext = () => {
    if (error) {
      setHasError(true);
      return;
    }

    switchToComponent('interest');
  };

  return (
    <>
      <Heading className='text-2xl font-bold'>
        What would you do as a <br />
        Community?
      </Heading>
      <FieldControl
        control='textarea'
        name='description'
        label='Community Description'
        limit={256}
        placeholder='E.g A hub to learn all about UI, UX and Interaction design'
      />

      <Navigator
        prev='Community'
        next='Interests'
        onNext={handleNext}
        onPrev={() => switchToComponent('community')}
      />

      <Alert
        isVisible={hasError}
        state='warning'
        dismissible
        onDismiss={() => setHasError(false)}
        timeout={5000}
      >
        <span>What's your community name?</span>
      </Alert>
    </>
  );
};

export default Description;
