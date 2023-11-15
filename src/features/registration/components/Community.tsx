import FieldControl from '../../../components/forms/FieldControl';
import Heading from '../../../components/ui/typo/Heading';
import Navigator from './Navigator';

type CommunityPropsType = {
  switchToComponent: (e: any) => void;
  error?: string;
  touched: () => void;
};

const Community = ({
  error,
  touched,
  switchToComponent,
}: CommunityPropsType) => {
  const handleNext = () => {
    if (error) {
      touched();
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
    </>
  );
};

export default Community;
