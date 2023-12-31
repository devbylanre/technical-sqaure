import { Formik, Form, FormikProps } from 'formik';
import * as Yup from 'yup';
import Start from './components/Start';
import Sidebar from './components/Sidebar';
import Name from './components/Name';
import Community from './components/Community';
import Interest from './components/Interest';
import Auth from './components/Auth';
import Success from './components/Success';
import useComponentSwitch from './hooks/useComponentSwitch';
import { motion } from 'framer-motion';
import { About } from './components/About';

type InitialValuesProps = {
  plan: string;
  firstName: string;
  lastName: string;
  communityName: string;
  communityDescription: string;
  interest: string[];
  email: string;
  password: string;
  accept: boolean;
  profession: '';
  addProfession: '';
  about: '';
};

const initialValues: InitialValuesProps = {
  plan: '',
  firstName: '',
  lastName: '',
  communityName: '',
  communityDescription: '',
  interest: [],
  profession: '',
  addProfession: '',
  about: '',
  email: '',
  password: '',
  accept: false,
};

const validationSchema = Yup.object().shape({
  plan: Yup.string().required('Select a plan to continue'),
  firstName: Yup.string().required('What is your first name?'),
  lastName: Yup.string().required('What is your last name?'),
  communityName: Yup.string().required(
    'What would you like to name your community?'
  ),
  profession: Yup.string().required('What is your profession?'),
  about: Yup.string().required(
    'Write a short story about you and your profession.'
  ),
  communityDescription: Yup.string().required(
    'Describe what your community would do or its scope of operation'
  ),
  interest: Yup.array().min(5, 'Select at least five interest'),
  email: Yup.string().required('What is your email address?'),
  password: Yup.string()
    .required('Password is required for account authentication')
    .min(8, 'Password must be at least 8 characters'),
  accept: Yup.boolean().isTrue(
    'To complete registration, you have to accept our Terms and Conditions'
  ),
});

export const Container = () => {
  const { currentComponent, switchToComponent } = useComponentSwitch();

  const HandleRenderComponent = (
    component: string | undefined,
    formik: FormikProps<InitialValuesProps>
  ) => {
    // switch between form component to render based on the parameter component value
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
            touched={() =>
              formik.setTouched({ firstName: true, lastName: true })
            }
            errors={{
              firstName: formik.errors.firstName,
              lastName: formik.errors.lastName,
            }}
          />
        );
      case 'about':
        return (
          <About
            switchTo={switchToComponent}
            touched={() => formik.setTouched({ profession: true, about: true })}
            errors={{
              profession: formik.errors.profession,
              about: formik.errors.about,
            }}
          />
        );
      case 'community':
        return (
          <Community
            switchToComponent={switchToComponent}
            touched={() =>
              formik.setTouched({
                communityName: true,
                communityDescription: true,
              })
            }
            errors={{
              communityName: formik.errors.communityName,
              communityDescription: formik.errors.communityDescription,
            }}
          />
        );
      case 'interest':
        return (
          <Interest
            error={formik.errors.interest}
            touched={() => formik.setTouched({ interest: true })}
            switchToComponent={switchToComponent}
          />
        );
      case 'auth':
        return (
          <Auth
            errors={{
              email: formik.errors.email,
              password: formik.errors.password,
              accept: formik.errors.accept,
            }}
            touched={() =>
              formik.setTouched({ email: true, password: true, accept: true })
            }
            switchToComponent={switchToComponent}
          />
        );
      case 'success':
        return <Success email={formik.values.email} />;
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
            <motion.div
              className='flex flex-col w-full p-3 gap-y-8 md:p-0 md:w-4/5 xl:w-3/5'
              animate={{ opacity: [0, 1] }}
              key={currentComponent}
            >
              {HandleRenderComponent(currentComponent, formik)}
            </motion.div>
          </div>

          {/* this section renders an heading tag with font size of 4xl and an animated word that changes content every 3 seconds. Hidden on mobile but visible on devices with screen size >= 1024 */}
          <Sidebar />
        </Form>
      )}
    </Formik>
  );
};
