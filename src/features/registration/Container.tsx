import { Formik, Form, FormikProps } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import Start from './components/Start';
import Sidebar from './components/Sidebar';

export type InitialValuesType = {
  plan: string;
};

const initialValues: InitialValuesType = { plan: '' };

const validationSchema = Yup.object().shape({});

const Container = () => {
  const [component, setComponent] = useState<string>('start');

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
            {renderComponent(component, formik)}
          </div>

          {/* this section renders an heading tag with font size of 4xl and an animated word that changes content every 3 seconds. Hidden on mobile but visible on devices with screen size >= 1024 */}
          <Sidebar />
        </Form>
      )}
    </Formik>
  );
};

export default Container;
