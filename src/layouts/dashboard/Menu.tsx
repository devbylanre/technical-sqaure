import {
  RiHome6Fill,
  RiShakeHandsFill,
  RiFolder5Fill,
  RiUser6Fill,
  RiTeamFill,
} from 'react-icons/ri';
import Paragraph from '../../components/ui/typo/Paragraph';
import { twMerge } from 'tailwind-merge';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const iconClassName: string = 'w-5 h-5 fill-inherit';

const items = {
  general: [
    {
      name: 'Home',
      url: '',
      icon: <RiHome6Fill className={iconClassName} />,
    },
    {
      name: 'Courses',
      url: 'courses',
      icon: <RiShakeHandsFill className={iconClassName} />,
    },
    {
      name: 'Docs',
      url: 'docs',
      icon: <RiFolder5Fill className={iconClassName} />,
    },
    {
      name: 'Square',
      url: 'square',
      icon: <RiTeamFill className={iconClassName} />,
    },
    {
      name: 'Profile',
      url: 'profile',
      icon: <RiUser6Fill className={iconClassName} />,
    },
  ],
};

const Menu = () => {
  return (
    <div className='flex flex-row justify-between w-full h-full py-2 md:flex-col gap-x-5 gap-y-2 md:justify-start md:py-0'>
      {/* items list */}
      {items.general.map((item) => (
        <NavLink
          key={item.name}
          to={`/app/${item.url}`}
          className={twMerge(
            'flex w-full md:py-1.5 flex-col md:flex-row items-center gap-1 md:gap-2.5 px-2 transition-all duration-200 ease-in-out py-0'
          )}
        >
          {({ isActive }) => (
            <>
              {/* item icon */}
              <motion.span
                className={isActive ? 'fill-zinc-900' : 'fill-zinc-400'}
                animate={
                  isActive
                    ? {
                        y: [-12, 0],
                        fillOpacity: [0.5, 1],
                      }
                    : { y: 0, fillOpacity: 1 }
                }
                transition={{
                  duration: 0.5,
                  ease: 'easeOut',
                  type: 'spring',
                }}
              >
                {item.icon}
              </motion.span>
              {/* item name or title */}
              <Paragraph
                className={twMerge(
                  'text-zinc-500 font-medium text-sm md:text-base',
                  isActive ? 'font-bold text-zinc-900' : ''
                )}
              >
                {item.name}
              </Paragraph>
            </>
          )}
        </NavLink>
      ))}
    </div>
  );
};

export default Menu;
