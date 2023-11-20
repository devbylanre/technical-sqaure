import { useState } from 'react';
import Heading from '../../../components/ui/Heading';
import { RiLockLine, RiLockUnlockLine } from 'react-icons/ri';
import Navigator from './Navigator';
import Input from '../../../components/forms/Input';
import { Field } from '../../../components/forms/Field';
import { FieldGroup } from '../../../components/forms/FieldGroup';
import Label from '../../../components/forms/Label';
import { Message } from '../../../components/forms/Message';
import Checkbox from '../../../components/forms/Checkbox';
import Paragraph from '../../../components/ui/Paragraph';

type AuthPropsType = {
  errors: {
    email?: string;
    password?: string;
    accept?: string;
  };
  switchToComponent: (e: any) => void;
  touched: () => void;
};

const Auth = ({ errors, touched, switchToComponent }: AuthPropsType) => {
  const [passwordType, setPasswordType] = useState<string>('password');

  const handleSubmit = () => {
    if (errors.email || errors.password || errors.accept) {
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

        <FieldGroup>
          <div className='inline-flex gap-x-2 items-center'>
            <Checkbox name='accept' />
            <Paragraph className='text-sm'>
              By registering you agree to our Terms and Conditions
            </Paragraph>
          </div>
          <Message name='accept' />
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
