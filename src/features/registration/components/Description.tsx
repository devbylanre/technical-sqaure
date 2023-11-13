import Heading from '../../../components/ui/typo/Heading';
import FieldControl from '../../../components/forms/FieldControl';

const Description = () => {
  return (
    <div className='flex flex-col gap-y-10'>
      <Heading className='text-2xl font-bold'>
        What would you do as a <br />
        Community?
      </Heading>
      <FieldControl
        control='textarea'
        name='description'
        label='Community Description'
        limit={256}
        placeholder='E.g A hub to learn all about UI, UX and Interaction design'
      />
    </div>
  );
};

export default Description;
