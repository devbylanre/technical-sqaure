import Heading from '../../../components/ui/typo/Heading';
import FieldControl from '../../../components/forms/FieldControl';
import Navigator from './Navigator';

type DescriptionPropsType = {
  switchToComponent: (e: any) => void;
  error?: string;
  touched: () => void;
};

const Description = (props: DescriptionPropsType) => {
  const { error, touched, switchToComponent } = props;

  const handleNext = () => {
    if (error) {
      touched();
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
    </>
  );
};

export default Description;
