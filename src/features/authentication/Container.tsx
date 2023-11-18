import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Sidebar } from './components/Sidebar';
import { AuthForm } from './components/AuthForm';

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
    <div className='grid bg-zinc-100 md:grid-cols-2'>
      <Sidebar />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={() => {}}
      >
        <Form className='flex items-center justify-center min-h-screen'>
          <AuthForm />
        </Form>
      </Formik>
    </div>
  );
};

export default AuthContainer;
