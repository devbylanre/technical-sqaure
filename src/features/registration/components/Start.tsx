import Heading from '../../../components/ui/Heading';
import Paragraph from '../../../components/ui/Paragraph';
import { RiFundsLine, RiShiningLine } from 'react-icons/ri';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';
import Navigator from './Navigator';

// component props type
type StartPropsType = {
  setValue: (e: string, v: any) => void;
  value: string;
  switchToComponent: (e: string) => void;
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

const Start = (props: StartPropsType) => {
  const { value, setValue, switchToComponent } = props;

  const handleNext = () => {
    if (!value) return;
    switchToComponent('name');
  };

  return (
    <>
      <div>
        <Heading className='text-2xl font-bold'>
          Sign up within 60 seconds
        </Heading>
        <Paragraph className='mt-1'>
          Join Square today and become a professional creative. Create your
          community and connect with digital experts.
        </Paragraph>
      </div>

      {/* renders all available plan */}
      <div className='grid gap-3 lg:grid-cols-2'>
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={twMerge(
              'flex flex-col px-3 h-32 md:h-40 md:text-center md:items-center justify-center rounded-lg cursor-pointer gap-y-2 border border-zinc-200 shadow shadow-zinc-200/20 transition-all duration-200 ease-in-out',
              value === plan.name
                ? 'border-zinc-900 fill-zinc-900'
                : 'fill-zinc-400 hover:border-zinc-300'
            )}
            onClick={() => setValue('plan', plan.name)}
          >
            {plan.icon}
            <Heading className='text-base font-medium'>{plan.name}</Heading>
            <Paragraph className='text-sm text-zinc-600'>{plan.desc}</Paragraph>
          </div>
        ))}
      </div>

      {/* renders a button used to navigate to name if the plan has a value with animation */}
      {value && (
        <motion.span animate={{ y: [8, 0], opacity: [0, 1] }}>
          <Navigator
            next={`Continue with ${value} plan`}
            onNext={handleNext}
          />
        </motion.span>
      )}
    </>
  );
};

export default Start;
