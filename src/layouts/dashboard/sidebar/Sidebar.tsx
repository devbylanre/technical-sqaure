import Heading from '../../../components/ui/typo/Heading';
import Logo from '../../../components/ui/Logo';
import { SidebarGroup } from './SidebarGroup';
import { RiCloseLine, RiMenu4Fill, RiUserForbidLine } from 'react-icons/ri';
import { Avatar, AvatarFallback } from '../../../components/ui/Avatar';
import { useState } from 'react';
import Button from '../../../components/ui/Button';
import Dropdown from '../../../components/ui/Dropdown';
import { AnimatePresence } from 'framer-motion';

export const Sidebar = () => {
  return (
    <div className='fixed bottom-0 flex flex-col justify-between w-full bg-white md:border-r md:border-r-zinc-200 md:w-2/5 lg:w-1/5 gap-y-5 md:static border-t border-t-zinc-200 md:border-t-0'>
      {/* sidebar header */}
      <div className='hidden md:inline-flex items-end gap-x-1.5 p-4'>
        <Logo className='w-3 h-3 mb-[1.5px]' />
        <Heading className='text-xl leading-none'>Square</Heading>
      </div>

      {/* sidebar menu */}
      <SidebarGroup />

      {/* user avatar */}
      <SidebarAvatar />
    </div>
  );
};

const SidebarAvatar = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  return (
    <div className='items-center hidden px-3 py-2 border-t md:inline-flex border-t-zinc-200 gap-x-2 relative'>
      <Avatar
        src='/assets/images/user.png'
        alt='user'
      >
        <AvatarFallback>MN</AvatarFallback>
      </Avatar>
      <Heading className='flex-1 text-sm font-semibold'>Maria Singh</Heading>
      {
        <AnimatePresence>
          {!showDropdown ? (
            <RiMenu4Fill
              className='w-5 h-5 cursor-pointer fill-zinc-500 hover:fill-zinc-900'
              onClick={() => setShowDropdown(true)}
            />
          ) : (
            <RiCloseLine
              className='w-5 h-5 cursor-pointer fill-zinc-500 hover:fill-zinc-900'
              onClick={() => setShowDropdown(false)}
            />
          )}
        </AnimatePresence>
      }

      <SidebarDropdown isVisible={showDropdown} />
    </div>
  );
};

const SidebarDropdown = ({ isVisible }: any) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <Dropdown
          isVisible={isVisible}
          animate={{ opacity: [0, 1] }}
          exit={{ opacity: [1, 0] }}
          className='bottom-16 p-1.5 left-6'
        >
          <Button
            variant='danger'
            size='sm'
            className='w-full justify-start'
          >
            <RiUserForbidLine />
            Sign out
          </Button>
        </Dropdown>
      )}
    </AnimatePresence>
  );
};
