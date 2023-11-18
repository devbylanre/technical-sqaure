import Heading from '../../components/ui/typo/Heading';
import Logo from '../../components/ui/Logo';
import Menu from './Menu';
import { RiMenu4Fill } from 'react-icons/ri';
import { Avatar, AvatarFallback } from '../../components/ui/Avatar';

const Sidebar = () => {
  return (
    <div className='fixed bottom-0 flex flex-col justify-between w-full bg-white shadow md:shadow-none md:border-r md:border-r-zinc-200 md:w-2/5 lg:w-1/5 gap-y-5 md:static backdrop-blur'>
      {/* sidebar header */}
      <div className='hidden md:inline-flex items-end gap-x-1.5 p-4'>
        <Logo className='w-3 h-3 mb-[1.5px]' />
        <Heading className='text-xl leading-none'>Square</Heading>
      </div>

      {/* sidebar menu */}
      <Menu />

      {/* user profile */}
      <div className='items-center hidden px-3 py-2 border-t md:inline-flex border-t-zinc-200 gap-x-2'>
        <Avatar
          src='/assets/images/user.png'
          alt='user'
          fallback={<AvatarFallback>MN</AvatarFallback>}
        />
        <Heading className='flex-1 text-sm font-semibold'>Maria Singh</Heading>
        <RiMenu4Fill className='w-5 h-5 cursor-pointer fill-zinc-500 hover:fill-zinc-900' />
      </div>
    </div>
  );
};

export default Sidebar;
