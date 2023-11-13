import { useState } from 'react';
import FieldControl from '../../../components/forms/FieldControl';
import Heading from '../../../components/ui/typo/Heading';
import Navigator from './Navigator';
import Alert from '../../../components/ui/Alert';

type CommunityPropsType = {
  switchToComponent: (e: any) => void;
  error?: string;
};

const Community = ({ error, switchToComponent }: CommunityPropsType) => {
  const [hasError, setHasError] = useState(false);

  const handleNext = () => {
    if (error) {
      setHasError(true);
      return;
    }

    switchToComponent('description');
  };

  return (
    <>
      <Heading className='text-2xl font-bold'>
        What would you call your <br />
        Community?
      </Heading>
      <FieldControl
        control='input'
        name='community'
        label='Community Name'
        placeholder='E.g John community, Digital LaPlace, The spice of UI design'
      />

      <Navigator
        prev='Names'
        next='Description'
        onNext={handleNext}
        onPrev={() => switchToComponent('name')}
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

export default Community;
