import FieldControl from '../../../components/forms/FieldControl';
import Heading from '../../../components/ui/typo/Heading';

const Community = () => {
  return (
    <>
      <Heading className='text-2xl font-bold'>
        What would you call your <br />
        Community?
      </Heading>
      <FieldControl
        control='input'
        name='community'
        label='Community Name'
        placeholder='E.g John community, Digital LaPlace, The spice of UI design'
      />
    </>
  );
};

export default Community;
