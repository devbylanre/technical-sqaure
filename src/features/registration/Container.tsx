import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Start from './components/Start';

const Container = () => {
  // form initial values
  const initialValues = {
    firstName: '',
    lastName: '',
    role: '',
    interest: '',
    amount: 0,
  };

  //   form validation schema
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required('This field is required')
      .min(10, 'Minimum character length is 10'),
    lastName: Yup.string().required('This field is required'),
    role: Yup.string().required('This field is required'),
    interest: Yup.string().required('This field is required'),
    textarea: Yup.string()
      .required(
        'Textarea field is required. Fill in the required information to continue creating your lovely articles we are waiting.'
      )
      .min(10, 'Please enter up to 10 characters'),
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
