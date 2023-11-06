import FieldControl from '../../../components/forms/FieldControl';
import Select from '../../../components/forms/Select';
import Paragraph from '../../../components/ui/typo/Paragraph';

const roleOptions = [
  { title: 'manager', value: 'manager' },
  { title: 'HR manager', value: 'HR manager' },
  { title: 'Co-founder', value: 'Co-founder' },
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
        disabled
      />
      <FieldControl
        control='input'
        type='number'
        name='lastName'
        label='Last name'
      />
      <Select
        name='role'
        placeholder='Select your role'
        options={roleOptions}
      />
    </div>
  );
};

export default Start;
