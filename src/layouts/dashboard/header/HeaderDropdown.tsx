import Dropdown from '../../../components/ui/Dropdown';
import { AnimatePresence } from 'framer-motion';
import Paragraph from '../../../components/ui/Paragraph';
import Heading from '../../../components/ui/Heading';
import { Avatar, AvatarFallback } from '../../../components/ui/Avatar';
import {
  RiEditCircleLine,
  RiUserFollowLine,
  RiQuestionAnswerLine,
  RiBox1Line,
  RiSettings5Line,
  RiExternalLinkLine,
} from 'react-icons/ri';

export type OptionProps = {
  title: string;
  icon: React.ReactNode;
};

const options: OptionProps[] = [
  {
    title: 'Edit Profile',
    icon: <RiEditCircleLine />,
  },
  {
    title: 'Members',
    icon: <RiUserFollowLine />,
  },
  {
    title: 'My profile',
    icon: <RiExternalLinkLine />,
  },
  {
    title: 'Library',
    icon: <RiBox1Line />,
  },
  {
    title: 'Settings',
    icon: <RiSettings5Line />,
  },
  {
    title: 'Help and Support',
    icon: <RiQuestionAnswerLine />,
  },
];

type UserDropdownProps = { showDropdown: boolean };

export const HeaderDropdown = ({ showDropdown }: UserDropdownProps) => {
  return (
    <AnimatePresence>
      {showDropdown && (
        <Dropdown
          className='flex flex-col w-64'
          initial={{ x: -88, y: 12 }}
          animate={{ scale: [0.9, 1], opacity: [0, 1] }}
          exit={{ y: [12, 24], opacity: [1, 0] }}
          isVisible={showDropdown}
        >
          <HeaderDropdownAvatar />
          <div className='flex flex-col p-0.5'>
            {options.map((option, i: number) => (
              <HeaderDropdownItem
                key={i}
                option={option}
              />
            ))}
          </div>
        </Dropdown>
      )}
    </AnimatePresence>
  );
};

const HeaderDropdownAvatar = () => {
  return (
    <div className='inline-flex items-center p-3 border-b gap-x-3 border-b-zinc-200'>
      <Avatar
        src='/assets/images/user.png'
        alt='User'
      >
        <AvatarFallback>MS</AvatarFallback>
      </Avatar>
      <div>
        <Heading className='text-sm font-bold capitalize leading-tight'>
          maria singh
        </Heading>
        <Paragraph className='text-sm leading-tight'>
          hellomariasingh@gmail.com
        </Paragraph>
      </div>
    </div>
  );
};

const HeaderDropdownItem = ({ option }: any) => {
  return (
    <div className='inline-flex items-center px-2 py-1.5 capitalize hover:bg-zinc-100 rounded-md cursor-pointer gap-x-2 transition-all duration-200 ease-in-out'>
      {option.icon}
      <Paragraph className='text-sm font-medium'>{option.title}</Paragraph>
    </div>
  );
};
