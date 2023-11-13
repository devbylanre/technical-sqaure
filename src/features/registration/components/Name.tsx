import FieldControl from '../../../components/forms/FieldControl';
import Button from '../../../components/ui/Button';
import Heading from '../../../components/ui/typo/Heading';

const Name = () => {
  return (
    <div className='flex flex-col gap-y-10'>
      <Heading className='text-2xl font-bold'>What's your name?</Heading>
      <div className='flex flex-col gap-y-5'>
        <FieldControl
          control='input'
          name='firstName'
          label='First Name'
          placeholder='Enter your first name'
        />
        <FieldControl
          control='input'
          name='lastName'
          label='Last Name'
          placeholder='Enter your last name'
        />
      </div>

      <div className='inline-flex items-center justify-between'>
        <Button className='text-zinc-500 hover:text-zinc-900'>Go back</Button>
        <Button className='p-2 text-white rounded-lg bg-zinc-900'>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default Name;
