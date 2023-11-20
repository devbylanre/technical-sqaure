import Heading from '../../../components/ui/Heading';
import { RiCheckLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
import Paragraph from '../../../components/ui/Paragraph';
import Button from '../../../components/ui/Button';

const Success = () => {
  return (
    <>
      <div className='flex flex-col md:items-center md:text-center'>
        <motion.span
          animate={{ opacity: [0, 1], y: [20, 0] }}
          transition={{ duration: 1, type: 'spring' }}
        >
          <RiCheckLine className='w-10 h-10 p-1.5 bg-green-100 rounded-full fill-green-700' />
        </motion.span>

        <Heading className='mt-2 text-lg font-bold'>
          Registration Successful
        </Heading>

        <Paragraph className='mt-1'>
          A verification link has been sent to your email address{' '}
          <span className='font-medium'>devbylanre@gmail.com.</span> Verify your
          account to continue.
        </Paragraph>
      </div>

      {/* proceed to the sign in page to complete the sign up verification */}
      <Button
        type='button'
        variant='success'
        className='w-full p-2.5'
      >
        Continue to Sign In
      </Button>
    </>
  );
};

export default Success;
