import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Start from './components/Start';

const Container = () => {
  // form initial values
  const initialValues = {
    firstName: '',
    lastName: '',
    role: '',
  };

  //   form validation schema
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('This field is required'),
    lastName: Yup.string().required('This field is required'),
    role: Yup.string().required('This field is required'),
  });

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
