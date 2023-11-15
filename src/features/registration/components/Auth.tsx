import { useState } from 'react';
import FieldControl from '../../../components/forms/FieldControl';
import Heading from '../../../components/ui/typo/Heading';
import { RiLockLine, RiLockUnlockLine } from 'react-icons/ri';
import Navigator from './Navigator';

type AuthPropsTpe = {
  errors: {
    email?: string;
    password?: string;
  };
  switchToComponent: (e: any) => void;
  touched: () => void;
};

type AuthPasswordProps = {
  type: string;
  setType: (e: string) => void;
};

export const AuthPassword = ({ type, setType }: AuthPasswordProps) => {
  const iconClassName: string =
    'w-4 h-4 mr-2 cursor-pointer fill-zinc-500 hover:fill-zinc-900';

  return (
    <>
      {type === 'password' ? (
        <RiLockUnlockLine
          className={iconClassName}
          onClick={() => setType('text')}
        />
      ) : (
        <RiLockLine
          className={iconClassName}
          onClick={() => setType('password')}
        />
      )}
    </>
  );
};

const Auth = ({ errors, touched, switchToComponent }: AuthPropsTpe) => {
  const [passwordType, setPasswordType] = useState<string>('password');

  const handleSubmit = () => {
    if (errors.email || errors.password) {
      touched();
      return;
    }
    switchToComponent('success');
  };

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
            <AuthPassword
              type={passwordType}
              setType={setPasswordType}
            />
          }
          placeholder='Use a combination of letters and numbers'
          message='Minimum of 8 characters containing at least one uppercase, lowercase, number, special characters, and no spaces'
        />
      </div>

      {/* button group for navigating through form component */}
      <Navigator
        next='Account Setup'
        prev='Interest'
        onNext={handleSubmit}
        onPrev={() => switchToComponent('interest')}
      />
    </>
  );
};

export default Auth;