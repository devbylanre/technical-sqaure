import FieldControl from '../../../components/forms/FieldControl';
import Amount from '../../../components/forms/amount/Amount';
import Checkbox from '../../../components/forms/checkbox/Checkbox';
import Toggle from '../../../components/forms/toggle/Toggle';
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
    <div className='flex flex-col justify-center min-h-screen gap-y-5 w-[480px] py-56'>
      <FieldControl
        control='input'
        name='firstName'
        label='First name'
        placeholder='Enter your first name'
        prefix={
          <Paragraph className='pl-1.5 text-zinc-600 text-sm'>
            Square.com/
          </Paragraph>
        }
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
        message='hey'
        placeholder='Hello world!'
      />
      <Amount
        name='amount'
        label='Select the amount'
        prefix='$'
        min={0}
        max={1500}
      />
      <Toggle
        name='notify'
        label='Would you like to get notified about these authors post?'
      />
      <Checkbox
        name='comment'
        label='Enable comment'
        message='Click on the checkbox to enable post comment'
      />
    </div>
  );
};

export default Start;
