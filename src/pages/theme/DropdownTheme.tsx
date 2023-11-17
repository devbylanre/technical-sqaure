import { useState } from 'react';
import Button from '../../components/ui/Button';
import Dropdown from '../../components/ui/Dropdown';
import Paragraph from '../../components/ui/typo/Paragraph';
import { AnimatePresence } from 'framer-motion';

const options = [
  'edit data',
  'manage team',
  'subscribe to Pro',
  'delete account',
];

const DropdownTheme = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  return (
    <div className='relative'>
      <Button
        variant='outline'
        type='button'
        className='p-2'
        onClick={() => setShowDropdown(!showDropdown)}
      >
        Open Dropdown
      </Button>

      <AnimatePresence>
        {showDropdown && (
          <Dropdown
            isVisible={showDropdown}
            animate={{ y: [12, 4], opacity: [0, 1] }}
            exit={{ y: [4, 12], opacity: [1, 0] }}
          >
            {options.map((option) => (
              <Paragraph
                key={option}
                className='px-3 py-1.5 rounded-md text-zinc-600 first-letter:uppercase hover:cursor-pointer hover:bg-zinc-100'
              >
                {option}
              </Paragraph>
            ))}
          </Dropdown>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownTheme;
