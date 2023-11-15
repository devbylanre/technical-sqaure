import { useState } from 'react';
import {
  RiFlashlightLine,
  RiSearchLine,
  RiMenu4Line,
  RiPencilLine,
  RiUserShared2Line,
  RiChat2Line,
  RiFolderChartLine,
  RiShieldStarLine,
  RiFile3Line,
} from 'react-icons/ri';
import Heading from '../../components/ui/typo/Heading';
import Dropdown from '../../components/ui/Dropdown';
import Paragraph from '../../components/ui/typo/Paragraph';
import { AnimatePresence } from 'framer-motion';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  type OptionProps = {
    title: string;
    icon: React.ReactNode;
  };

  const options: OptionProps[] = [
    {
      title: 'Edit Profile',
      icon: <RiPencilLine />,
    },
    {
      title: 'Community',
      icon: <RiUserShared2Line />,
    },
    {
      title: 'My profile',
      icon: <RiFile3Line />,
    },
    {
      title: 'Analytics',
      icon: <RiFolderChartLine />,
    },
    {
      title: 'Privacy',
      icon: <RiShieldStarLine />,
    },
    {
      title: 'Chat with us',
      icon: <RiChat2Line />,
    },
  ];

  const iconClassName: string =
    'w-5 h-5 transition-all duration-200 ease-in-out cursor-pointer fill-zinc-500 hover:fill-zinc-900';

  return (
    <div className='inline-flex items-center justify-between px-3 py-4 md:px-8 gap-x-5'>
      <div className='inline-flex gap-x-5'>
        <RiFlashlightLine className={iconClassName} />
        <RiSearchLine className={iconClassName} />
      </div>

      <div className='relative inline-flex items-center gap-x-2'>
        <Heading className='text-sm font-bold'>Maria Singh</Heading>
        <img
          src='/assets/images/user.png'
          alt='user'
          className='w-8 rounded-full'
        />
        <RiMenu4Line
          className={iconClassName}
          onClick={() => setShowDropdown(!showDropdown)}
        />
        <AnimatePresence>
          {showDropdown && (
            <Dropdown
              className='flex flex-col gap-y-1'
              animate={{ y: [120, 136], x: -80, opacity: [0, 1] }}
              exit={{ y: [136, 144], opacity: [1, 0] }}
              isVisible={showDropdown}
            >
              {options.map((option, i) => (
                <div
                  key={i}
                  className='inline-flex items-center py-1.5 px-2 capitalize hover:bg-zinc-100 rounded-md cursor-pointer gap-x-1.5'
                >
                  {option.icon}
                  <Paragraph className='text-sm font-medium'>
                    {option.title}
                  </Paragraph>
                </div>
              ))}
            </Dropdown>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;
