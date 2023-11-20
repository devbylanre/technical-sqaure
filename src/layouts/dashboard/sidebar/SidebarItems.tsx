import {
  RiCompass4Line,
  RiParentLine,
  RiFundsLine,
  RiPlanetLine,
} from 'react-icons/ri';

const iconClassName: string = 'w-5 h-5 fill-inherit';

export const items = {
  general: [
    {
      name: 'Home',
      url: '',
      icon: <RiPlanetLine className={iconClassName} />,
    },
    {
      name: 'Courses',
      url: 'courses',
      icon: <RiCompass4Line className={iconClassName} />,
    },
    {
      name: 'Community',
      url: 'square',
      icon: <RiParentLine className={iconClassName} />,
    },
    {
      name: 'Analytics',
      url: 'profile',
      icon: <RiFundsLine className={iconClassName} />,
    },
  ],
};
