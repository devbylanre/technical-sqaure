import Heading from '../../../components/ui/Heading';
import Paragraph from '../../../components/ui/Paragraph';
import Button from '../../../components/ui/Button';
import { SocialButtons } from './SocialButtons';
import { Field } from '../../../components/forms/Field';
import Input from '../../../components/forms/Input';

export const Auth = () => {
  return (
    <div className='flex flex-col h-full min-h-screen md:justify-center gap-y-8'>
      <div>
        <Heading className='text-xl font-bold'>
          Sign in to your Square account
        </Heading>
        <Paragraph className='mt-1 text-sm'>
          Browse courses from industry-leading digital creatives
        </Paragraph>
      </div>
      <div className='flex flex-col gap-y-4'>
        <Field name='email'>
          <Input name='email' />
        </Field>

        <Field name='password'>
          <Input name='password' />
        </Field>

        <Button>Sign in</Button>
      </div>

      <div>
        <Heading className='mb-2 text-sm'>Sign in with other account</Heading>
        <SocialButtons />
      </div>
    </div>
  );
};
