import Heading from '../typo/Heading';
import Paragraph from '../typo/Paragraph';
import { motion } from 'framer-motion';
import {
  RiHome6Fill,
  RiShakeHandsFill,
  RiFolder5Fill,
  RiBriefcaseFill,
  RiMapPinTimeFill,
} from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

interface Item {
  name: string;
  url: string;
  icon: React.ReactElement;
}

const iconClassName: string = 'w-5 h-5 fill-inherit';

const items: Item[] = [
  {
    name: 'Home',
    url: '/',
    icon: <RiHome6Fill className={iconClassName} />,
  },
  {
    name: 'Courses',
    url: '/courses',
    icon: <RiShakeHandsFill className={iconClassName} />,
  },
  {
    name: 'Docs',
    url: '/docs',
    icon: <RiFolder5Fill className={iconClassName} />,
  },
  {
    name: 'Certifications',
    url: '/certificate',
    icon: <RiBriefcaseFill className={iconClassName} />,
  },
  {
    name: 'Events',
    url: '/events',
    icon: <RiMapPinTimeFill className={iconClassName} />,
  },
];

const Sidebar = () => {
  return (
    <div className='flex flex-col gap-y-5'>
      {/* user information */}
      <div className='items-center hidden md:inline-flex gap-x-2'>
        <img
          className='w-10 bg-purple-100 rounded-full'
          src='./assets/images/user.png'
          alt='user'
        />
        <Heading className='capitalize'>Andrew .T</Heading>
        <Paragraph className='rounded bg-blue-50 text-blue-800 text-xs font-semibold px-1 py-0.5'>
          Pro
        </Paragraph>
      </div>

      {/* sidebar menu */}
      <div className='flex flex-row md:flex-col gap-x-5 gap-y-2.5 w-full justify-between md:justify-start'>
        {items.map((item, index) => (
          <NavLink
            key={item.name}
            to={item.url}
            className='flex w-full flex-col md:flex-row items-center gap-1.5 md:gap-2.5 px-2 transition-all duration-200 ease-in-out py-0 md:py-1.5'
          >
            {({ isActive, isPending, isTransitioning }) => (
              <>
                <motion.span
                  className={
                    isActive
                      ? 'fill-zinc-900 border-b-zinc-900'
                      : 'fill-zinc-400'
                  }
                  animate={
                    isActive
                      ? {
                          y: [-16, -12, -8, 0],
                        }
                      : {}
                  }
                  transition={{
                    duration: 0.5,
                    ease: 'easeInOut',
                    type: 'spring',
                    stiffness: 200,
                  }}
                >
                  {item.icon}
                </motion.span>
                <Paragraph
                  className={`${
                    isActive && 'text-zinc-900 font-medium'
                  } text-zinc-600 text-sm md:text-base`}
                >
                  {item.name}
                </Paragraph>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
