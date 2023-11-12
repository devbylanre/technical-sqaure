import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Heading from '../../../components/ui/typo/Heading';
import Paragraph from '../../../components/ui/typo/Paragraph';
import { RiFundsLine, RiShiningLine } from 'react-icons/ri';
import Button from '../../../components/ui/Button';

// an array of words
const array: string[] = ['developers', 'writers', 'designers', 'marketers'];

type PlanType = {
  name: string;
  icon: any;
  desc: string;
};

const iconClassName: string = 'w-5 h-5 fill-zinc-400';

const plans: PlanType[] = [
  {
    name: 'Free',
    icon: <RiFundsLine className={iconClassName} />,
    desc: 'Create a free account and enjoy all the massive resources we have in stock for you.',
  },
  {
    name: 'Premium',
    icon: <RiShiningLine className={iconClassName} />,
    desc: 'Create a free account and enjoy all the massive resources we have in stock for you.',
  },
];

const Start = () => {
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
  });

  return (
    <div className='flex flex-col w-full min-h-screen md:flex-row'>
      <div className='flex flex-col items-center justify-end pb-4 basis-1/2'>
        <div className='flex flex-col justify-between w-full p-3 md:p-0 md:w-4/5 xl:w-3/5 h-2/3'>
          <div>
            <Heading className='text-2xl font-bold'>Create an account</Heading>
            <Paragraph className='mt-1'>
              Join Square today and become a professional creative. Create your
              community and connect with digital experts.
            </Paragraph>

            {/* renders all available plan */}
            <div className='grid gap-3 mt-8 lg:grid-cols-2'>
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className='flex flex-col p-2 rounded-lg cursor-pointer hover:bg-zinc-50 gap-y-2 ring-1 ring-zinc-200'
                >
                  {plan.icon}
                  <Heading className='text-base font-semibold'>
                    {plan.name}
                  </Heading>
                  <Paragraph className='text-sm font-medium text-zinc-500'>
                    {plan.desc}
                  </Paragraph>
                </div>
              ))}
            </div>

            {/* renders the button for going onto the next step */}
            <Button
              type='button'
              className='w-full p-2 mt-8 rounded-lg text-zinc-900 ring-1 ring-zinc-200 hover:bg-zinc-50'
            >
              Continue
            </Button>
          </div>

          <Paragraph className='text-sm'>
            By clicking on 'Continue' you agree to our terms and conditions
          </Paragraph>
        </div>
      </div>

      {/* this section renders an heading tag with font size of 4xl and an animated word that changes content every 3 seconds. Hidden on mobile but visible on devices with screen size >= 1024 */}
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
    </div>
  );
};

export default Start;
