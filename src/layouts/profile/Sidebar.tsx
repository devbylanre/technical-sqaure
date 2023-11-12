import Heading from '../../components/ui/typo/Heading';
import {
  RiSketching,
  RiDoorLockLine,
  RiSparkling2Line,
  RiGitRepositoryPrivateLine,
  RiQuestionLine,
  RiGroupLine,
  RiBarChart2Line,
  RiSettingsLine,
} from 'react-icons/ri';
import Paragraph from '../../components/ui/typo/Paragraph';
import MenuItems from './MenuItem';

// item children type
export type ChildrenType = {
  name: string;
  icon: React.ReactElement;
};
// items interface
export type Items = {
  group: string;
  children: ChildrenType[];
};

const iconClassName: string = 'w-5 h-5 fill-zinc-500'; //icon class names

// array containing menu items
const items: Items[] = [
  {
    group: 'general',
    children: [
      { name: 'Information', icon: <RiSketching className={iconClassName} /> },
      { name: 'Security', icon: <RiDoorLockLine className={iconClassName} /> },
      { name: 'Premium', icon: <RiSparkling2Line className={iconClassName} /> },
      {
        name: 'Privacy and Safety',
        icon: <RiGitRepositoryPrivateLine className={iconClassName} />,
      },
      {
        name: 'Help and Support',
        icon: <RiQuestionLine className={iconClassName} />,
      },
    ],
  },

  {
    group: 'square',
    children: [
      { name: 'Community', icon: <RiGroupLine className={iconClassName} /> },
      {
        name: 'Analytics',
        icon: <RiBarChart2Line className={iconClassName} />,
      },
      { name: 'Settings', icon: <RiSettingsLine className={iconClassName} /> },
    ],
  },
];

// square items
const squareItems: ChildrenType[] =
  items.find((items) => items.group === 'square')?.children || [];

// general items
const generalItems: ChildrenType[] =
  items.find((items) => items.group === 'general')?.children || [];

const sidebar = () => {
  return (
    <div className='flex flex-col w-full px-4 py-3 border-r md:w-2/5 xl:w-1/5 gap-y-5 border-r-zinc-200'>
      {/* header */}
      <div>
        <div className='inline-flex items-center mt-3 gap-x-3'>
          <img
            src='/assets/images/user.png'
            alt='user.png'
            className='object-cover w-10 rounded-full ring-1 ring-zinc-100'
          />
          <div>
            <Heading className='text-sm font-bold leading-tight'>
              Maria Singh
            </Heading>
            <Paragraph className='text-sm'>Subscribed to Team plan</Paragraph>
          </div>
        </div>
      </div>

      {/* general menu */}
      <MenuItems
        items={generalItems}
        group='General'
      />

      {/* square items */}
      <MenuItems
        items={squareItems}
        group='Square'
      />
    </div>
  );
};

export default sidebar;
