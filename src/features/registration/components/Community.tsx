import { Field } from '../../../components/forms/Field';
import { FieldGroup } from '../../../components/forms/FieldGroup';
import Input from '../../../components/forms/Input';
import Label from '../../../components/forms/Label';
import { Message } from '../../../components/forms/Message';
import Heading from '../../../components/ui/typo/Heading';
import Navigator from './Navigator';

type CommunityPropsType = {
  switchToComponent: (e: any) => void;
  error?: string;
  touched: () => void;
};

const Community = (props: CommunityPropsType) => {
  const { error, touched, switchToComponent } = props;

  const handleNext = () => {
    // check if field(s) has an error message
    if (error) {
      touched(); //set field(s) to touched
      return;
    }
    switchToComponent('description'); //switch the form component
  };

  return (
    <>
      <Heading className='text-2xl font-bold'>
        What would you call your <br />
        Community?
      </Heading>
      <FieldGroup>
        <Label name='community'>Community</Label>
        <Field name='community'>
          <Input name='community' />
        </Field>
        <Message name='community' />
      </FieldGroup>

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
