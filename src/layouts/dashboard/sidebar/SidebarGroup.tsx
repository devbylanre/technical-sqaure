import Paragraph from '../../../components/ui/Paragraph';
import { twMerge } from 'tailwind-merge';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { items } from './SidebarItems';

export const SidebarGroup = () => {
  return (
    <div className='flex flex-row justify-between w-full h-full px-2 md:flex-col gap-x-5 gap-y-1 md:justify-start'>
      {/* items list */}
      {items.general.map((item) => (
        <NavLink
          key={item.name}
          to={`/app/${item.url}`}
          className={({ isActive }) =>
            twMerge(
              'flex w-full hover:bg-zinc-100 flex-col md:flex-row items-center gap-1 md:gap-3 p-2 transition-all duration-300 ease-in-out rounded-md',
              isActive && ''
            )
          }
        >
          {({ isActive }) => (
            <>
              {/* item icon */}
              <motion.span
                className={isActive ? 'fill-zinc-900' : 'fill-zinc-500'}
                animate={isActive ? { scale: 1.05 } : { scale: 1 }}
              >
                {item.icon}
              </motion.span>

              {/* item name or title */}
              <Paragraph
                className={twMerge(
                  'text-zinc-500 text-xs md:text-sm font-medium',
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
