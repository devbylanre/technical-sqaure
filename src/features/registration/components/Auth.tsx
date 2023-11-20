import { useState } from 'react';
import Heading from '../../../components/ui/typo/Heading';
import { RiLockLine, RiLockUnlockLine } from 'react-icons/ri';
import Navigator from './Navigator';
import Input from '../../../components/forms/Input';
import { Field } from '../../../components/forms/Field';
import { FieldGroup } from '../../../components/forms/FieldGroup';
import Label from '../../../components/forms/Label';
import { Message } from '../../../components/forms/Message';

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
        {/* email address field group */}
        <FieldGroup>
          <Label name='email'>Email Address</Label>
          <Field name='email'>
            <Input
              name='email'
              placeholder='E.g team@sokket.com'
            />
          </Field>
          <Message name='email' />
        </FieldGroup>

        {/* password field group */}
        <FieldGroup>
          <Label name='password'>Pass Code or Authentication</Label>
          <Field
            name='password'
            className='inline-flex items-center pr-2'
          >
            <Input
              name='password'
              type={passwordType}
              placeholder='Usually a combination of letters and numbers'
            />
            {passwordType === 'text' ? (
              <RiLockLine onClick={() => setPasswordType('password')} />
            ) : (
              <RiLockUnlockLine onClick={() => setPasswordType('text')} />
            )}
          </Field>
          <Message name='password'>
            Minimum of 8 characters containing at least one uppercase,
            lowercase, number, special characters, and no spaces
          </Message>
        </FieldGroup>
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
