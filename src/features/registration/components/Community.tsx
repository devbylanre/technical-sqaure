import { Field } from '../../../components/forms/Field';
import { FieldGroup } from '../../../components/forms/FieldGroup';
import Input from '../../../components/forms/Input';
import { Textarea } from '../../../components/forms/Textarea';
import Label from '../../../components/forms/Label';
import { Message } from '../../../components/forms/Message';
import Heading from '../../../components/ui/Heading';
import Paragraph from '../../../components/ui/Paragraph';
import Button from '../../../components/ui/Button';

type CommunityPropsType = {
  switchToComponent: (e: any) => void;
  errors: {
    communityName?: string;
    communityDescription?: string;
  };
  touched: () => void;
};

const Community = (props: CommunityPropsType) => {
  const { errors, touched, switchToComponent } = props;

  const handleNext = () => {
    // check if field(s) has an error message
    if (errors.communityName || errors.communityDescription) return touched();

    switchToComponent('interest'); //switch the form component
  };

  return (
    <>
      <div>
        <Heading className='sm:text-2xl font-bold'>
          Setup your Community?
        </Heading>
        <Paragraph className='mt-1'>
          What would you call your community?
        </Paragraph>
      </div>

      <div className='flex flex-col gap-y-4'>
        <FieldGroup>
          <Label name='communityName'>Community</Label>
          <Field name='communityName'>
            <Input name='communityName' />
          </Field>
          <Message name='communityName' />
        </FieldGroup>

        <FieldGroup>
          <Label name='communityDescription'>Description</Label>
          <Field name='communityDescription'>
            <Textarea
              name='communityDescription'
              limit={250}
            />
          </Field>
          <Message name='communityDescription'>
            Describe what your community does e.g A hub for learning about
            programming algorithms
          </Message>
        </FieldGroup>
      </div>
      <Button
        type='button'
        onClick={handleNext}
      >
        Follow your interests
      </Button>
    </>
  );
};

export default Community;
