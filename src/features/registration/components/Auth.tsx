import { useState } from 'react';
import FieldControl from '../../../components/forms/FieldControl';
import Heading from '../../../components/ui/typo/Heading';
import { RiLockLine, RiLockUnlockLine } from 'react-icons/ri';
import Navigator from './Navigator';
import Alert from '../../../components/ui/Alert';

type AuthPropsTpe = {
  errors: {
    email?: string;
    password?: string;
  };
  switchToComponent: (e: any) => void;
};

const Auth = ({ errors, switchToComponent }: AuthPropsTpe) => {
  const [passwordType, setPasswordType] = useState<string>('password');
  const [hasError, setHasError] = useState<boolean>(false);

  const iconClassName: string =
    'w-4 h-4 mr-2 cursor-pointer fill-zinc-500 hover:fill-zinc-900';

  const handleSubmit = () => {
    if (errors.email && errors.password) {
      setHasError(true);
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
        onNext={handleSubmit}
        onPrev={() => switchToComponent('interest')}
      />

      <Alert
        state='warning'
        dismissible
        onDismiss={() => setHasError(false)}
        isVisible={hasError}
      >
        <span>Make sure email and password fields are filled correctly</span>
      </Alert>
    </>
  );
};

export default Auth;
