import { Formik, Form, FormikProps } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import Start from './components/Start';
import Sidebar from './components/Sidebar';
import Name from './components/Name';
import Community from './components/Community';
import Description from './components/Description';
import Interest from './components/Interest';
import Auth from './components/Auth';
import Success from './components/Success';

type InitialValuesType = {
  plan: string;
  firstName: string;
  lastName: string;
  community: string;
  description: string;
  interest: [];
  email: string;
  password: string;
};

const initialValues: InitialValuesType = {
  plan: '',
  firstName: '',
  lastName: '',
  community: '',
  description: '',
  interest: [],
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({});

const Container = () => {
  const [component, setComponent] = useState<string>('auth');

  const renderComponent = (
    component: string,
    formik: FormikProps<InitialValuesType>
  ) => {
    switch (component) {
      case 'start':
        return (
          <Start
            setValue={formik.setFieldValue}
            setComponent={setComponent}
            value={formik.values.plan}
          />
        );
      case 'name':
        return <Name />;
      case 'community':
        return <Community />;
      case 'description':
        return <Description />;
      case 'interest':
        return <Interest />;
      case 'auth':
        return <Auth />;
      case 'success':
        return <Success />;
      default:
        return null;
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={() => {}}
    >
      {(formik) => (
        <Form className='flex flex-col min-h-screen md:flex-row'>
          {/* renders a form component based on the value of the value of the use state hook - component */}
          <div className='flex flex-col items-center justify-center basis-1/2'>
            <div className='flex flex-col w-full p-3 gap-y-12 md:p-0 md:w-4/5 xl:w-3/5'>
              {renderComponent(component, formik)}
            </div>
          </div>

          {/* this section renders an heading tag with font size of 4xl and an animated word that changes content every 3 seconds. Hidden on mobile but visible on devices with screen size >= 1024 */}
          <Sidebar />
        </Form>
      )}
    </Formik>
  );
};

export default Container;
