import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FieldControl from '../../components/forms/FieldControl';
import { RiArchive2Line, RiSmartphoneLine } from 'react-icons/ri';

// initial value props
type BasicFormInitialValuesProps = {
  name: string;
  team: string;
};

// formik initial values
const basicFormInitialValues: BasicFormInitialValuesProps = {
  name: '',
  team: '',
};

// formik validation schema using yup
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Your full name is required'),
  team: Yup.string().required('Your team name is required'),
});

// component for rendering basic form fields
export const BasicFormTheme = () => {
  return (
    <Formik
      initialValues={basicFormInitialValues}
      validationSchema={validationSchema}
      onSubmit={() => alert('Submission completed successfully')}
    >
      <Form className='flex flex-col gap-y-3'>
        <FieldControl
          control='input'
          name='name'
          label='Full Name'
          placeholder='What is your full name?'
        />

        <FieldControl
          control='input'
          name='team'
          label='Team Name'
          placeholder='What is your team name?'
        />
      </Form>
    </Formik>
  );
};

// type of form with suffix initial values props
type SuffixFormInitialValuesProps = {
  school: '';
  department: '';
};

// suffix form formik initial values
const suffixFormInitialValues: SuffixFormInitialValuesProps = {
  school: '',
  department: '',
};

// suffix form formik validation schema using yup
const suffixFormValidationSchema = Yup.object().shape({
  school: Yup.string().required('What is the name of your school?'),
  department: Yup.string().required('What is the name of your department?'),
});

// component of rendering form fields with suffix
export const SuffixFormTheme = () => {
  return (
    <Formik
      initialValues={suffixFormInitialValues}
      validationSchema={suffixFormValidationSchema}
      onSubmit={() => alert('Form with suffix submitted successfully')}
    >
      <Form className='flex flex-col gap-y-3'>
        <FieldControl
          control='input'
          name='school'
          label='School'
          placeholder='What is the name of of your school?'
          suffix={
            <span className='mx-2 text-sm font-semibold'>School name</span>
          }
        />

        <FieldControl
          control='input'
          name='department'
          label='Department'
          placeholder='What is the name of your department?'
          suffix={<RiArchive2Line className='mx-2' />}
        />
      </Form>
    </Formik>
  );
};

// type of form with prefix initial values props
type PrefixFormInitialValuesProps = {
  brand: '';
  deviceName: '';
};

// prefix form formik initial values
const prefixFormInitialValues: PrefixFormInitialValuesProps = {
  brand: '',
  deviceName: '',
};

// prefix form formik validation schema using yup
const prefixFormValidationSchema = Yup.object().shape({
  brand: Yup.string().required('What is the name of your smartphone brand?'),
  deviceName: Yup.string().required('What is your device name?'),
});

// component of rendering form fields with prefix
export const PrefixFormTheme = () => {
  return (
    <Formik
      initialValues={prefixFormInitialValues}
      validationSchema={prefixFormValidationSchema}
      onSubmit={() => alert('Form with prefix submitted successfully')}
    >
      <Form className='flex flex-col gap-y-3'>
        <FieldControl
          control='input'
          name='brand'
          label='Smartphone Brand'
          placeholder='Smartphone brand?'
          prefix={<span className='mx-2 text-sm font-semibold'>Brand</span>}
        />

        <FieldControl
          control='input'
          name='deviceName'
          label='Device Name'
          placeholder='What is your device name?'
          prefix={<RiSmartphoneLine className='mx-2' />}
        />
      </Form>
    </Formik>
  );
};

// type of form initial values props for a form field with helper messages
type HelperFormInitialValuesProps = {
  password: string;
};

// form initial values for the helper form component
const helperFormInitialValues: HelperFormInitialValuesProps = {
  password: '',
};

const helperFormValidationSchema = Yup.object().shape({
  password: Yup.string()
    .required('Enter your password to sign in')
    .min(8, 'Password must be at least 8 characters'),
});

// component for rendering a password field with helper message or text
export const HelperFormTheme = () => {
  return (
    <Formik
      initialValues={helperFormInitialValues}
      validationSchema={helperFormValidationSchema}
      onSubmit={() => alert('Authentication completed successfully')}
    >
      <Form>
        <FieldControl
          control='input'
          type='password'
          name='password'
          label='Password'
          placeholder='Enter your password'
          message='Password must be a set of alphanumeric characters containing at least one number, uppercase and lowercase letters'
        />
      </Form>
    </Formik>
  );
};
