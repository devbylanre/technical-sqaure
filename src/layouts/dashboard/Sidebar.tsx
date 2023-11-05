import Heading from '../../components/ui/typo/Heading';
import Logo from '../../components/ui/Logo';
import Menu from './Menu';
import Button from '../../components/ui/Button';
import { RiVideoAddFill, RiFlashlightFill } from 'react-icons/ri';

const Sidebar = () => {
  return (
    <div className='flex flex-col justify-between p-0 md:p-4 gap-y-8'>
      {/* sidebar header */}
      <div className='hidden md:inline-flex items-end gap-x-1.5'>
        <Logo className='w-3 h-3 mb-[1.5px]' />
        <Heading className='text-xl leading-none'>Square</Heading>
      </div>

      {/* action bar */}
      <div className='items-center justify-between hidden md:inline-flex gap-x-2'>
        <Button className='bg-white ring-1 ring-zinc-300 rounded-xl text-sm py-1.5 px-4 w-full'>
          <RiVideoAddFill className='w-4 h-4 fill-zinc-600' />
          Create new course
        </Button>

        <Button>
          <RiFlashlightFill className='w-8 h-8 p-1.5 bg-white rounded-xl ring-1 ring-zinc-300 fill-zinc-600' />
        </Button>
      </div>

      {/* sidebar menu */}
      <Menu />
    </div>
  );
};

export default Sidebar;
