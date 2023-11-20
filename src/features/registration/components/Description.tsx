import { Field } from '../../../components/forms/Field';
import { FieldGroup } from '../../../components/forms/FieldGroup';
import Label from '../../../components/forms/Label';
import { Message } from '../../../components/forms/Message';
import { Textarea } from '../../../components/forms/Textarea';
import Heading from '../../../components/ui/Heading';
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
      <FieldGroup>
        <Label name='description'>Description</Label>
        <Field name='description'>
          <Textarea
            name='description'
            limit={250}
          />
        </Field>
        <Message name='description'>
          Describe what your community does e.g A hub for learning about
          programming algorithms
        </Message>
      </FieldGroup>

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
