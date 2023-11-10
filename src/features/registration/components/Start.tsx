import FieldControl from '../../../components/forms/FieldControl';
import Amount from '../../../components/forms/amount/Amount';
import Paragraph from '../../../components/ui/typo/Paragraph';

const roleOptions = [
  { title: 'manager', value: 'manager' },
  { title: 'HR manager', value: 'HR manager' },
  { title: 'Co-founder', value: 'Co-founder' },
];

const interests = [
  { title: 'sport', value: 'sport' },
  { title: 'yoga', value: 'yoga' },
  { title: 'fitness', value: 'fitness' },
  { title: 'politics', value: 'politics' },
  { title: 'programming', value: 'programming' },
  { title: 'artificial intelligence', value: 'artificial intelligence' },
];

const Start = () => {
  return (
    <div className='flex flex-col justify-center min-h-screen gap-y-5 w-96'>
      <FieldControl
        control='input'
        name='firstName'
        label='First name'
        placeholder='Enter your first name'
        children={
          <Paragraph className='pl-1.5 text-zinc-600 sm:text-sm'>
            square.com/
          </Paragraph>
        }
        disabled
      />
      <FieldControl
        control='input'
        name='lastName'
        label='Last name'
      />
      <FieldControl
        control='select'
        name='role'
        label='What is your role?'
        placeholder='Select your role'
        options={roleOptions}
      />
      <FieldControl
        control='btn'
        name='interest'
        label='Select your interest'
        options={interests}
        multiple
      />
      <FieldControl
        control='textarea'
        name='textarea'
        label='Textarea'
        limit={100}
        helperText='hey'
      />
      <Amount
        name='amount'
        label='Select the amount'
        prefix='$'
        min={0}
        max={1500}
      />
    </div>
  );
};

export default Start;
