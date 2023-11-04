import Heading from '../components/ui/typo/Heading';
import Paragraph from '../components/ui/typo/Paragraph';

const Home = () => {
  return (
    <div className='p-5 grid grid-cols-5'>
      <div className='bg-white ring-1 ring-zinc-200 p-4 rounded-lg flex flex-col gap-y-4 items-start'>
        <button className='bg-zinc-50 text-sm font-medium border border-zinc-200 px-1.5 py-0.5 rounded-lg'>
          15 Lessons
        </button>
        <div>
          <Heading>Intro to Web design</Heading>
          <Paragraph className='mt-0.5'>
            A complete guide to all you need to know about web design
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default Home;
