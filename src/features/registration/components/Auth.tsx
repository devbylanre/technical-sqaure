import { useState } from 'react';
import FieldControl from '../../../components/forms/FieldControl';
import Heading from '../../../components/ui/typo/Heading';
import { RiLockLine, RiLockUnlockLine } from 'react-icons/ri';
import Navigator from './Navigator';

const Auth = () => {
  const [passwordType, setPasswordType] = useState<string>('password');

  const iconClassName: string =
    'w-4 h-4 mr-2 cursor-pointer fill-zinc-500 hover:fill-zinc-900';

  return (
    <>
      <Heading className='text-2xl font-bold'>
        Finish setting up your <br />
        Account
      </Heading>
      <div className='flex flex-col gap-y-5'>
        <FieldControl
          control='input'
          type='email'
          name='email'
          label='Email Address'
          placeholder='E.g Johndoe@gmail.com'
        />
        <FieldControl
          control='input'
          type={passwordType}
          name='password'
          label='Password'
          suffix={
            passwordType === 'password' ? (
              <RiLockUnlockLine
                className={iconClassName}
                onClick={() => setPasswordType('text')}
              />
            ) : (
              <RiLockLine
                className={iconClassName}
                onClick={() => setPasswordType('password')}
              />
            )
          }
          placeholder='Use a combination of letters and numbers'
          message='Minimum of 8 characters containing at least one uppercase, lowercase, number, special characters, and no spaces'
        />
      </div>

      {/* button group for navigating through form component */}
      <Navigator
        next='Account Setup'
        prev='Interest'
      />
    </>
  );
};

export default Auth;
