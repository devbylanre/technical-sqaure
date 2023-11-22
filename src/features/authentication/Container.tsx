import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Sidebar } from './components/Sidebar';
import { Auth } from './components/Auth';

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
    <div className='inline-flex w-full'>
      <Sidebar />
      <div className='w-full sm:w-3/6 lg:w-2/6 bg-white px-3 md:px-8 lg:px-12'>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={() => {}}
        >
          <Form>
            <Auth />
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AuthContainer;
