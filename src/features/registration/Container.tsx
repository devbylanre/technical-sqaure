import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Start from './components/Start';

const Container = () => {
  // form initial values
  const initialValues = {};
  const validationSchema = Yup.object().shape({});

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
