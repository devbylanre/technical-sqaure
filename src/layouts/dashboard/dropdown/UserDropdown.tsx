import Dropdown from '../../../components/ui/Dropdown';
import { AnimatePresence } from 'framer-motion';
import {
  RiEditCircleLine,
  RiUserFollowLine,
  RiQuestionAnswerLine,
  RiBox1Line,
  RiSettings5Line,
  RiExternalLinkLine,
} from 'react-icons/ri';
import { DropdownOption } from './DropdownOption';
import { DropdownDetails } from './DropdownDetails';

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
    title: 'Followers',
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

export const UserDropdown = ({ showDropdown }: UserDropdownProps) => {
  return (
    <AnimatePresence>
      {showDropdown && (
        <Dropdown
          className='flex flex-col w-72'
          animate={{ y: [0, 12], x: -120, opacity: [0, 1] }}
          exit={{ y: [12, 24], opacity: [1, 0] }}
          isVisible={showDropdown}
        >
          <DropdownDetails />
          <div className='flex flex-col p-1.5'>
            {options.map((option, i: number) => (
              <DropdownOption
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
