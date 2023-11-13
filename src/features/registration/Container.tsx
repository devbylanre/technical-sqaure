import { Formik, Form, FormikProps } from 'formik';
import * as Yup from 'yup';
import Start from './components/Start';
import Sidebar from './components/Sidebar';
import Name from './components/Name';
import Community from './components/Community';
import Description from './components/Description';
import Interest from './components/Interest';
import Auth from './components/Auth';
import Success from './components/Success';
import useComponentSwitch from './hooks/useComponentSwitch';

type InitialValuesType = {
  plan: string;
  firstName: string;
  lastName: string;
  community: string;
  description: string;
  interest: string[];
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

const validationSchema = Yup.object().shape({
  plan: Yup.string().required('Select a plan to continue'),
  firstName: Yup.string().required('What is your first name?'),
  lastName: Yup.string().required('What is your last name?'),
  email: Yup.string().required('What is your email address?'),
  community: Yup.string().required(
    'What would you like to name your community?'
  ),
  description: Yup.string().required(
    'Describe what your community would do or its scope of operation'
  ),
  interest: Yup.array().min(5, 'Select at least five interest'),
});

const Container = () => {
  const { currentComponent, switchToComponent } = useComponentSwitch();

  const HandleRenderComponent = (
    component: string | undefined,
    formik: FormikProps<InitialValuesType>
  ) => {
    console.log(formik.errors);
    /*
    switch between form component to render based on the parameter component value
    */
    switch (component) {
      case 'start':
        return (
          <Start
            setValue={formik.setFieldValue}
            value={formik.values.plan}
            switchToComponent={switchToComponent}
          />
        );
      case 'name':
        return (
          <Name
            switchToComponent={switchToComponent}
            errors={{
              firstName: formik.errors.firstName,
              lastName: formik.errors.lastName,
            }}
          />
        );
      case 'community':
        return (
          <Community
            switchToComponent={switchToComponent}
            error={formik.errors.community}
          />
        );
      case 'description':
        return (
          <Description
            switchToComponent={switchToComponent}
            error={formik.errors.description}
          />
        );
      case 'interest':
        return (
          <Interest
            value={formik.values.interest}
            switchToComponent={switchToComponent}
          />
        );
      case 'auth':
        return (
          <Auth
            errors={{
              email: formik.errors.email,
              password: formik.errors.password,
            }}
            switchToComponent={switchToComponent}
          />
        );
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
            <div className='flex flex-col w-full p-3 gap-y-8 md:p-0 md:w-4/5 xl:w-3/5'>
              {HandleRenderComponent(currentComponent, formik)}
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
