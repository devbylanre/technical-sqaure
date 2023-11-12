import {
  RiHomeWifiLine,
  RiDatabase2Line,
  RiFolder5Line,
  RiTeamLine,
  RiFundsLine,
} from 'react-icons/ri';
import Paragraph from '../../components/ui/typo/Paragraph';
import { twMerge } from 'tailwind-merge';
import { NavLink } from 'react-router-dom';

const iconClassName: string = 'w-5 h-5 fill-inherit';

const items = {
  general: [
    {
      name: 'Home',
      url: '',
      icon: <RiHomeWifiLine className={iconClassName} />,
    },
    {
      name: 'Courses',
      url: 'courses',
      icon: <RiDatabase2Line className={iconClassName} />,
    },
    {
      name: 'Docs',
      url: 'docs',
      icon: <RiFolder5Line className={iconClassName} />,
    },
    {
      name: 'Square',
      url: 'square',
      icon: <RiTeamLine className={iconClassName} />,
    },
    {
      name: 'Earnings',
      url: 'profile',
      icon: <RiFundsLine className={iconClassName} />,
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
          className={({ isActive }) =>
            twMerge(
              'flex w-full md:py-2 hover:bg-zinc-100 flex-col md:flex-row items-center gap-1 md:gap-4 px-4 transition-all duration-300 ease-in-out py-0',
              isActive && 'bg-zinc-100'
            )
          }
        >
          {({ isActive }) => (
            <>
              {/* item icon */}
              <span className={isActive ? 'fill-zinc-900' : 'fill-zinc-600'}>
                {item.icon}
              </span>
              {/* item name or title */}
              <Paragraph
                className={twMerge(
                  'text-zinc-600 text-sm font-medium',
                  isActive && 'font-bold text-zinc-900'
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
