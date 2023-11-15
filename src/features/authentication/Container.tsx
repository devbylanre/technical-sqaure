import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import Heading from '../../components/ui/typo/Heading';
import Paragraph from '../../components/ui/typo/Paragraph';
import FieldControl from '../../components/forms/FieldControl';
import Button from '../../components/ui/Button';
import { Link } from 'react-router-dom';

type InitialValuesProps = {
  auth: string;
  password: string;
};

const initialValues: InitialValuesProps = {
  auth: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  auth: Yup.string().required('Provide your username or email address'),
  password: Yup.string().required('Provide your password to sign in'),
});

const AuthContainer = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={() => {}}
    >
      <Form className='flex items-center justify-center min-h-screen'>
        <div className='flex flex-col w-full m-3 border rounded-lg shadow-md md:w-4/6 lg:w-2/6 border-zinc-200'>
          <div className='px-5 py-2 border-b border-b-zinc-200'>
            <Heading className='text-xl font-bold'>
              Sign in to your account
            </Heading>
            <Paragraph className='mt-1'>
              Sign in to your square account to continue creating contents for
              your audience and start connecting with digital creatives.
            </Paragraph>
          </div>

          <div className='flex flex-col p-5 gap-y-5'>
            <FieldControl
              control='input'
              label='Email address'
              name='auth'
              placeholder='Enter your email address'
            />

            <FieldControl
              control='input'
              type='password'
              label='Password'
              name='password'
              placeholder='Enter your account password'
            />

            <Button
              state='primary'
              className='p-2.5'
            >
              Sign in
            </Button>
          </div>

          <div className='flex flex-col p-4 border-t gap-y-2 border-t-zinc-200'>
            <Paragraph className='text-sm text-center'>
              Don't have an account
            </Paragraph>
            <div className='inline-flex items-center justify-center rounded-lg gap-x-2 bg-zinc-100'>
              <Button
                type='button'
                className='z-10 shadow-sm w-1/2 text-sm p-1.5 bg-white rounded-lg border border-zinc-200'
              >
                Sign up
              </Button>

              <Button
                type='button'
                className='z-10 w-1/2 text-zinc-500 text-sm p-1.5 rounded'
              >
                Forgot password
              </Button>
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default AuthContainer;
