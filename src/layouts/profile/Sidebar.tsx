import Heading from '../../components/ui/typo/Heading';
import {
  RiAdminFill,
  RiLockFill,
  RiShiningFill,
  RiShieldFlashFill,
  RiQuestionFill,
  RiGroupFill,
  RiBox2Fill,
  RiStackFill,
} from 'react-icons/ri';
import Paragraph from '../../components/ui/typo/Paragraph';

// individual item interface
interface Children {
  name: string;
  icon: React.ReactElement;
}

// items interface
interface Items {
  group: string;
  children: Children[];
}

// menu interface
interface MenuItemsProps {
  items: Children[];
  group: string;
}

const iconClassName: string = 'w-5 h-5 fill-zinc-500';

const items: Items[] = [
  {
    group: 'general',
    children: [
      { name: 'Information', icon: <RiAdminFill className={iconClassName} /> },
      { name: 'Security', icon: <RiLockFill className={iconClassName} /> },
      { name: 'Premium', icon: <RiShiningFill className={iconClassName} /> },
      {
        name: 'Privacy and Safety',
        icon: <RiShieldFlashFill className={iconClassName} />,
      },
      {
        name: 'Help and Support',
        icon: <RiQuestionFill className={iconClassName} />,
      },
    ],
  },

  {
    group: 'square',
    children: [
      { name: 'Community', icon: <RiGroupFill className={iconClassName} /> },
      { name: 'Analytics', icon: <RiBox2Fill className={iconClassName} /> },
      { name: 'Settings', icon: <RiStackFill className={iconClassName} /> },
    ],
  },
];

// general item interface
const generalItems =
  items.find((items) => items.group === 'general')?.children || [];

//   square item interface
const squareItems =
  items.find((items) => items.group === 'square')?.children || [];

const MenuItems = (props: MenuItemsProps) => {
  const { items, group } = props;
  return (
    <div className='flex flex-col gap-y-5'>
      <Heading className='text-sm capitalize text-zinc-500'>{group}</Heading>
      {items.map((item) => (
        <div
          key={item.name}
          className='inline-flex items-center gap-x-2.5 cursor-pointer'
        >
          {item.icon}
          <Paragraph>{item.name}</Paragraph>
        </div>
      ))}
    </div>
  );
};

const sidebar = () => {
  return (
    <div className='flex flex-col w-full px-4 py-3 md:w-2/5 xl:w-1/5 gap-y-8'>
      {/* header */}
      <div>
        <div className='inline-flex items-center mt-3 gap-x-2'>
          <img
            src='/assets/images/user.png'
            alt='user.png'
            className='w-10 rounded-full ring-1 ring-zinc-200'
          />
          <div>
            <Heading className='text-base leading-tight'>Andrew Tate</Heading>
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
