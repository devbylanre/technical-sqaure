import React from 'react';
import Button from '../../../components/ui/Button';
import {
  RiGoogleFill,
  RiFacebookCircleFill,
  RiAppleFill,
  RiTwitterXFill,
} from 'react-icons/ri';

const iconClassName = 'w-4 h-4';

const buttons: { provider: string; icon: React.ReactNode }[] = [
  {
    provider: 'Google',
    icon: <RiGoogleFill className={iconClassName} />,
  },
  {
    provider: 'Apple',
    icon: <RiAppleFill className={iconClassName} />,
  },
  {
    provider: 'Facebook',
    icon: <RiFacebookCircleFill className={iconClassName} />,
  },
  {
    provider: 'Twitter',
    icon: <RiTwitterXFill className={iconClassName} />,
  },
];

export const SocialButtons = () => {
  return (
    <div className='flex md:flex-row gap-2 flex-wrap '>
      {buttons.map((button, i: number) => (
        <Button
          key={i}
          type='button'
          variant='soft'
        >
          <span>{button.icon}</span>
          {button.provider}
        </Button>
      ))}
    </div>
  );
};
