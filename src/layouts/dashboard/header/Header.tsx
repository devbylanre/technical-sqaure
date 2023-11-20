import { useState } from 'react';
import {
  RiFlashlightLine,
  RiSearchLine,
  RiMenu4Line,
  RiCloseLine,
} from 'react-icons/ri';
import Heading from '../../../components/ui/typo/Heading';
import { HeaderDropdown } from './HeaderDropdown';
import { Avatar, AvatarFallback } from '../../../components/ui/Avatar';
import { AnimatePresence } from 'framer-motion';
import { HeaderSearchModal } from './HeaderSearchModal';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [showSearchModal, setShowSearchModal] = useState<boolean>(false);

  const iconClassName: string =
    'w-5 h-5 transition-all duration-200 ease-in-out cursor-pointer fill-zinc-500 hover:fill-zinc-900';

  return (
    <div className='inline-flex items-center justify-between px-3 py-4 md:px-8 gap-x-5'>
      <div className='inline-flex gap-x-5'>
        <RiFlashlightLine className={iconClassName} />
        <RiSearchLine
          className={iconClassName}
          onClick={() => setShowSearchModal(true)}
        />
        <HeaderSearchModal isVisible={showSearchModal} />
      </div>

      <div className='relative'>
        <div className='inline-flex items-center gap-x-2'>
          <Heading className='text-sm font-bold'>Maria Singh</Heading>
          <Avatar
            src='/assets/images/user.png'
            alt='user'
            fallback={<AvatarFallback>MN</AvatarFallback>}
          />
          <AnimatePresence>
            {!showDropdown ? (
              <RiMenu4Line
                className={iconClassName}
                onClick={() => setShowDropdown(true)}
              />
            ) : (
              <RiCloseLine
                className={iconClassName}
                onClick={() => setShowDropdown(false)}
              />
            )}
          </AnimatePresence>
        </div>

        <HeaderDropdown showDropdown={showDropdown} />
      </div>
    </div>
  );
};

export default Header;
