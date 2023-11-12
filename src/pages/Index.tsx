import { Helmet } from 'react-helmet-async';
import Post from '../components/templates/Post';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Welcome to Square</title>
        <meta
          name='keyword'
          content='Square, Technical, Blog'
        />
        <meta
          name='description'
          content=''
        />
      </Helmet>

      <div className='grid w-full grid-cols-12 px-3 md:px-8'>
        <Post />
      </div>
    </>
  );
};

export default Home;
