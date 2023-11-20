import React from 'react';
import Button from '../../../components/ui/Button';
import {
  RiGoogleFill,
  RiFacebookCircleFill,
  RiTwitterFill,
  RiAppleFill,
} from 'react-icons/ri';

const iconClassName = 'w-4 h-4';

export const SocialButtons = () => {
  return (
    <div className='flex flex-row flex-wrap w-full gap-2'>
      <Button
        size='sm'
        variant='outline'
      >
        <RiGoogleFill className={iconClassName} />
        <span>Google</span>
      </Button>

      <Button
        size='sm'
        variant='outline'
      >
        <RiAppleFill className={iconClassName} />
        <span>Apple</span>
      </Button>

      <Button
        size='sm'
        variant='outline'
      >
        <RiFacebookCircleFill className={iconClassName} />
        <span>Facebook</span>
      </Button>

      <Button
        size='sm'
        variant='outline'
      >
        <RiTwitterFill className={iconClassName} />
        <span>Twitter</span>
      </Button>
    </div>
  );
};
