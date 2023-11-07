import ButtonGroup from '../../../components/forms/ButtonGroup';
import FieldControl from '../../../components/forms/FieldControl';
import Textarea from '../../../components/forms/textarea/Textarea';
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
        children={
          <Paragraph className='pl-2 text-zinc-600'>square.com/</Paragraph>
        }
      />
      <FieldControl
        control='input'
        type='number'
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
      <ButtonGroup
        name='interest'
        label='Select your interest'
        options={interests}
        multiple
      />
      <Textarea
        name='textarea'
        label='Textarea'
      />
    </div>
  );
};

export default Start;
