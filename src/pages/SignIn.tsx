import { Helmet } from 'react-helmet-async';
import AuthContainer from '../features/authentication/Container';

const SignIn = () => {
  return (
    <>
      <Helmet>
        <title>Sign in to your account</title>
        <meta
          name='keyword'
          content='Sign in to your Square account'
        />
      </Helmet>
      <AuthContainer />
    </>
  );
};

export default SignIn;
