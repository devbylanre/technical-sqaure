import { Formik, Form } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import Start from './components/Start';

const initialValues = {};
const validationSchema = Yup.object().shape({});

const Container = () => {
  const [comp, setComp] = useState<string>('start');

  const renderComponent = (comp) => {
    switch (comp) {
      case 'start':
        return <Start />;
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
      <Form>
        <Start />
      </Form>
    </Formik>
  );
};

export default Container;
