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
    <div className='grid bg-zinc-100 md:grid-cols-12'>
      <Sidebar />
      <div className='col-span-6 px-3 py-5 bg-white lg:col-span-4 md:px-8 lg:px-12 md:py-0'>
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
