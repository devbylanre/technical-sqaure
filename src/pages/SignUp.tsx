import { Helmet } from 'react-helmet-async';
import Container from '../features/registration/AuthContainer';

const SignUp = () => {
  return (
    <>
      <Helmet>
        <title>Sign up</title>
      </Helmet>

      <Container />
    </>
  );
};

export default SignUp;
