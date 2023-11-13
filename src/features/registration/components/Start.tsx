import { AnimatePresence, motion } from 'framer-motion';
import Heading from '../../../components/ui/typo/Heading';
import Paragraph from '../../../components/ui/typo/Paragraph';
import { RiFundsLine, RiShiningLine } from 'react-icons/ri';
import Button from '../../../components/ui/Button';
import { twMerge } from 'tailwind-merge';

// component props type
type StartType = {
  setValue: (e: string, v: any) => void;
  setComponent: (e: any) => void;
  value: string;
};
// plan type
type PlanType = {
  name: string;
  icon: any;
  desc: string;
};

const iconClassName: string = 'w-5 h-5 fill-inherit'; //icon class names

// array of plans available for new users
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

const Start = (props: StartType) => {
  const { value, setValue, setComponent } = props;

  // handles the requirement for going to next form component
  const handleNext = () => {
    if (!value) return null;
    setComponent('name');
  };

  return (
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
            className={twMerge(
              'flex flex-col p-2 rounded-lg cursor-pointer hover:bg-zinc-50 gap-y-2 ring-1 ring-zinc-200 transition-all duration-200 ease-in-out',
              value === plan.name
                ? 'ring-zinc-900 fill-zinc-900'
                : 'fill-zinc-400'
            )}
            onClick={() => setValue('plan', plan.name)}
          >
            {plan.icon}
            <Heading className='text-base font-semibold'>{plan.name}</Heading>
            <Paragraph className='text-sm font-medium text-zinc-500'>
              {plan.desc}
            </Paragraph>
          </div>
        ))}
      </div>

      {/* conditionally renders the button for going onto the next step if value prop contains a value  */}
      {value && (
        <AnimatePresence>
          <motion.div
            animate={{ opacity: [0, 1], y: [4, 0] }}
            transition={{ duration: 0.4, type: 'spring', stiffness: 400 }}
          >
            <Button
              type='button'
              className='w-full p-2 mt-8 text-white rounded-lg bg-zinc-900 hover:bg-opacity-90'
              onClick={handleNext}
            >
              Continue
            </Button>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default Start;
