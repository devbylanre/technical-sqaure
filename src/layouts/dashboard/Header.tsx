import Heading from '../../components/ui/typo/Heading';
import Paragraph from '../../components/ui/typo/Paragraph';
import {
  RiFlashlightFill,
  RiEmotion2Fill,
  RiSearchLine,
  RiSparkling2Fill,
} from 'react-icons/ri';

const Header = () => {
  return (
    <div className='inline-flex items-center justify-between w-full px-3 py-2 bg-white border-b md:px-5 border-b-zinc-200'>
      <div className='inline-flex items-center gap-x-1.5'>
        <img
          className='object-cover w-8 bg-white rounded-full md:w-9 ring-1 ring-zinc-200'
          src='./assets/images/user.png'
          alt='user'
        />
        <Heading className='text-base md:text-lg'>Andrew Tate</Heading>
        <Paragraph className='text-xs font-semibold px-1.5 py-0.5 text-blue-800 rounded-lg bg-blue-100 inline-flex gap-x-1 items-center'>
          <RiSparkling2Fill />
          Pro: Team
        </Paragraph>
      </div>

      {/* search bar */}
      <div className='items-center hidden h-10 bg-white lg:inline-flex rounded-xl overflow-clip ring-1 ring-zinc-300 lg:w-80 xl:w-96'>
        <RiSearchLine className='w-5 h-5 mx-2.5 fill-zinc-500' />
        <input
          type='text'
          className='w-full h-full leading-tight outline-none bg-inherit placeholder:text-zinc-500'
          placeholder='Search courses, authors and members'
        />
      </div>

      {/* right section */}
      <div className='inline-flex items-center gap-x-5'>
        <RiFlashlightFill className='w-8 h-8 p-1.5 bg-zinc-200 rounded-full fill-gray-500 hover:bg-white hover:ring-1 hover:ring-zinc-300 cursor-pointer transition-all duration-300 hover:fill-zinc-600' />
        <RiEmotion2Fill className='w-8 h-8 p-1.5 bg-zinc-200 rounded-full fill-gray-500 hover:bg-white hover:ring-1 hover:ring-zinc-300 cursor-pointer transition-all duration-300 hover:fill-zinc-600' />
      </div>
    </div>
  );
};

export default Header;
