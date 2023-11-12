import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Heading from '../../../components/ui/typo/Heading';

// an array of words containing list of digital experts
const array: string[] = ['developers', 'writers', 'designers', 'marketers'];

const Sidebar = () => {
  const [word, setWord] = useState<string>(array[0]);

  // create a use effect hook for changing the word value every 3 second
  useEffect(() => {
    // check if word contains a value
    if (word) {
      const timer = setTimeout(() => {
        const currentIndex = array.indexOf(word);
        const nextIndex = (currentIndex + 1) % array.length;
        setWord(array[nextIndex]);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [word]);

  return (
    <div className='flex-col justify-center hidden px-12 lg:px-20 md:flex basis-1/2 bg-zinc-100'>
      <Heading className='w-full text-3xl font-bold lg:w-9/12 lg:text-4xl text text-zinc-400'>
        Connect with{' '}
        <motion.span
          className='text-zinc-900'
          key={word}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75 }}
        >
          {word}
        </motion.span>{' '}
        across the globe and share articles with your audiences.
      </Heading>
    </div>
  );
};

export default Sidebar;
