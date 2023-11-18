import { useState } from 'react';
import { RiFlashlightLine, RiSearchLine, RiMenu4Line } from 'react-icons/ri';
import Heading from '../../components/ui/typo/Heading';
import { UserDropdown } from './dropdown/UserDropdown';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const iconClassName: string =
    'w-5 h-5 transition-all duration-200 ease-in-out cursor-pointer fill-zinc-500 hover:fill-zinc-900';

  return (
    <div className='inline-flex items-center justify-between px-3 py-4 md:px-8 gap-x-5'>
      <div className='inline-flex gap-x-5'>
        <RiFlashlightLine className={iconClassName} />
        <RiSearchLine className={iconClassName} />
      </div>

      <div className='relative'>
        <div className='inline-flex items-center gap-x-2'>
          <Heading className='text-sm font-bold'>Maria Singh</Heading>
          <img
            src='/assets/images/user.png'
            alt='user'
            className='w-8 rounded-full'
          />
          <RiMenu4Line
            className={iconClassName}
            onClick={() => setShowDropdown(!showDropdown)}
          />
        </div>

        <UserDropdown showDropdown={showDropdown} />
      </div>
    </div>
  );
};

export default Header;
