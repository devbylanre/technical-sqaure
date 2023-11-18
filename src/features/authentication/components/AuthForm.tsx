import Heading from '../../../components/ui/typo/Heading';
import Paragraph from '../../../components/ui/typo/Paragraph';
import { RiFacebookCircleFill, RiGoogleFill } from 'react-icons/ri';
import Button from '../../../components/ui/Button';
import FieldControl from '../../../components/forms/FieldControl';
import { Link } from 'react-router-dom';

export const AuthForm = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full p-3 lg:w-3/5 md:w-4/5'>
      <div className='flex flex-col w-full p-5 bg-white border rounded-lg shadow-sm gap-y-8 border-zinc-200'>
        <div>
          <Heading className='text-xl font-bold'>Welcome back</Heading>
          <Paragraph className='mt-1'>
            Discover articles e.g Ways to optimize your react app, How to setup
            Firebase, how to configure Cloudinary, e.t.c
          </Paragraph>
        </div>
        <div className='grid gap-4 md:grid-cols-2'>
          <Button variant='outline'>
            <RiGoogleFill className='w-5 h-5 fill-zinc-900' />
            Sign in with Google
          </Button>
          <Button variant='outline'>
            <RiFacebookCircleFill className='w-5 h-5 fill-zinc-900' />
            Sign in with Facebook
          </Button>
        </div>

        <Paragraph className='text-center'>
          or sign in with your email account
        </Paragraph>

        <div className='flex flex-col gap-y-4'>
          <FieldControl
            control='input'
            label='Email Address'
            name='email'
            placeholder='Enter your email address'
          />

          <FieldControl
            control='input'
            label='Password'
            name='password'
            placeholder='Enter your pass code?'
          />

          <Button>Sign in</Button>

          <Paragraph className='text-sm'>
            Don't have an account{' '}
            <Link to='/signup'>
              <Button
                size='xs'
                variant='outline'
                className='ml-1'
              >
                Sign up
              </Button>
            </Link>
          </Paragraph>
        </div>
      </div>
    </div>
  );
};
