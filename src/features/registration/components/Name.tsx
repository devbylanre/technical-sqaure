import { Field } from '../../../components/forms/Field';
import Input from '../../../components/forms/Input';
import Heading from '../../../components/ui/typo/Heading';
import Navigator from './Navigator';
import { Message } from '../../../components/forms/Message';
import { FieldGroup } from '../../../components/forms/FieldGroup';
import Label from '../../../components/forms/Label';

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
        {/* field name field group */}
        <FieldGroup>
          <Label name='firstName'>First Name</Label>
          <Field name='firstName'>
            <Input name='firstName' />
          </Field>
          <Message name='firstName' />
        </FieldGroup>
        {/* last name field group */}
        <FieldGroup>
          <Label name='lastName'>Last Name</Label>
          <Field name='lastName'>
            <Input name='lastName' />
          </Field>
          <Message name='lastName' />
        </FieldGroup>
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
