import { Field } from '../../../components/forms/Field';
import Input from '../../../components/forms/Input';
import Heading from '../../../components/ui/Heading';
import { Message } from '../../../components/forms/Message';
import { FieldGroup } from '../../../components/forms/FieldGroup';
import Label from '../../../components/forms/Label';
import Paragraph from '../../../components/ui/Paragraph';
import Button from '../../../components/ui/Button';

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
  const handleNext = () => {
    // check if first name or last name field has a value
    if (errors.firstName || errors.lastName) return touched();

    switchToComponent('about'); // switch form component to community
  };

  return (
    <>
      <div>
        <Heading className='sm:text-2xl font-bold'>
          You've just took the first step
        </Heading>
        <Paragraph className='mt-1'>
          What are your names? These are the names by which you will be
          recognized and identified within various communities.
        </Paragraph>
      </div>

      {/* render first name and last name field */}
      <div className='flex flex-col md:flex-row gap-4'>
        {/* field name field group */}
        <FieldGroup>
          <Label name='firstName'>First Name</Label>
          <Field name='firstName'>
            <Input
              name='firstName'
              placeholder='Provide your first name'
            />
          </Field>
          <Message name='firstName' />
        </FieldGroup>
        {/* last name field group */}
        <FieldGroup>
          <Label name='lastName'>Last Name</Label>
          <Field name='lastName'>
            <Input
              name='lastName'
              placeholder='Provide your last name'
            />
          </Field>
          <Message name='lastName' />
        </FieldGroup>
      </div>

      {/* render button used to navigate between form components */}
      <Button
        type='button'
        onClick={handleNext}
      >
        Tell us about yourself
      </Button>
    </>
  );
};

export default Name;
