import {
  RiTimeLine,
  RiLineChartLine,
  RiPenNibLine,
  RiUserSharedLine,
} from 'react-icons/ri';
import Badge from '../../components/ui/Badge';

type State = 'danger' | 'success' | 'warning' | 'secondary';

const basicBadges: State[] = ['secondary', 'danger', 'warning', 'success'];

type badgesWithIconProps = {
  title: string;
  icon: React.ReactNode;
  state: State;
};

const iconClassName = 'w-3.5 h-3.5';

const badgesWithIcon: badgesWithIconProps[] = [
  {
    title: '+30% Interest',
    icon: <RiLineChartLine className={iconClassName} />,
    state: 'success',
  },
  {
    title: '3 days left',
    icon: <RiTimeLine className={iconClassName} />,
    state: 'warning',
  },
  {
    title: '-120 Followers',
    icon: <RiUserSharedLine className={iconClassName} />,
    state: 'danger',
  },
  {
    title: '5 Designers',
    icon: <RiPenNibLine className={iconClassName} />,
    state: 'secondary',
  },
];

export const BasicBadges = () => {
  return (
    <div className='flex flex-wrap gap-2'>
      {basicBadges.map((badge) => (
        <Badge
          state={badge}
          key={badge}
          isVisible={true}
        >
          <span>This is a {badge} badge</span>
        </Badge>
      ))}
    </div>
  );
};

export const BadgesWithIcon = () => {
  return (
    <div className='flex flex-wrap gap-2'>
      {badgesWithIcon.map((badge) => (
        <Badge
          key={badge.state}
          state={badge.state}
          isVisible={true}
        >
          {badge.icon}
          <span>{badge.title}</span>
        </Badge>
      ))}
    </div>
  );
};

export const BadgesWithDismiss = () => {
  return (
    <div className='flex flex-wrap gap-2'>
      {badgesWithIcon.map((badge) => (
        <Badge
          key={badge.state}
          state={badge.state}
          isVisible={true}
          dismissible
        >
          {badge.icon}
          <span>{badge.title}</span>
        </Badge>
      ))}
    </div>
  );
};
