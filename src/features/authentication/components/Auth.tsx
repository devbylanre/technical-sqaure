import Heading from '../../../components/ui/Heading';
import Paragraph from '../../../components/ui/Paragraph';
import Button from '../../../components/ui/Button';
import { SocialButtons } from './SocialButtons';
import { Field } from '../../../components/forms/Field';
import Input from '../../../components/forms/Input';
import Label from '../../../components/forms/Label';
import { FieldGroup } from '../../../components/forms/FieldGroup';
import { Message } from '../../../components/forms/Message';

export const Auth = () => {
  return (
    <div className='flex flex-col h-full min-h-screen md:justify-center gap-y-8'>
      <div>
        <Heading className='text-2xl font-bold'>
          Sign in to your Account
        </Heading>
        <Paragraph className='mt-1'>
          Browse courses from industry-leading digital creatives
        </Paragraph>
      </div>
      <div className='flex flex-col gap-y-4'>
        <FieldGroup>
          <Label name='email'>Email address</Label>
          <Field name='email'>
            <Input
              name='email'
              placeholder='Provide your account email address'
            />
          </Field>
          <Message name='email' />
        </FieldGroup>

        <FieldGroup>
          <Label name='password'>Pass Code</Label>
          <Field name='password'>
            <Input
              name='password'
              placeholder='Provide your pass code'
            />
          </Field>
          <Message name='password' />
        </FieldGroup>

        <Button>Sign in</Button>
      </div>

      <div>
        <Heading className='mb-2 text-sm text-center'>
          Sign in with other account
        </Heading>
        <SocialButtons />
      </div>

      <div>
        <Paragraph className='text-xs font-medium'>
          <span>
            To recover your account in case you've lost password, click on the
            forgot password button to verify account ownership.
          </span>
          <Button
            size='xs'
            variant='ghost'
          >
            Forgot Password
          </Button>
        </Paragraph>
      </div>
    </div>
  );
};
