import Button from '../components/ui/Button';
import Heading from '../components/ui/typo/Heading';
import Paragraph from '../components/ui/typo/Paragraph';
import {
  RiServiceFill,
  RiVerifiedBadgeFill,
  RiMore2Fill,
  RiChatSmile2Fill,
  RiShareFill,
  RiBookmarkFill,
} from 'react-icons/ri';

const Home = () => {
  return (
    <div className='grid w-full grid-cols-12 px-3 md:px-8'>
      <div className='flex flex-col items-start bg-white col-span-full lg:col-span-4 xl:col-span-6 gap-y-2 ring-1 ring-zinc-200 rounded-xl overflow-clip'>
        {/* header */}
        <div className='inline-flex items-center justify-between w-full px-3 py-2 border-b bg-zinc-50 border-b-zinc-100'>
          <div className='inline-flex gap-x-1.5 items-center'>
            <img
              className='w-8 h-8 rounded-full ring-1 ring-zinc-200'
              src='./assets/images/user.png'
              alt='user'
            />
            {/* user name */}
            <div className='inline-flex gap-x-1.5'>
              <Paragraph className='inline-flex items-center text-sm font-medium gap-x-1 text-zinc-900'>
                Technical HQ
                <RiVerifiedBadgeFill className='w-3.5 h-3.5' />
              </Paragraph>
              <Paragraph className='text-sm text-zinc-600'>
                featured in <b className='text-zinc-900'>Typography</b>
              </Paragraph>
            </div>
          </div>
          {/* option icon */}
          <RiMore2Fill className='w-6 h-6 p-1 rounded-full bg-zinc-200 ring-1 ring-zinc-200 fill-zinc-600' />
        </div>

        {/* block content */}
        <div className='p-3'>
          <Heading className='text-2xl lg:text-3xl'>
            Using variable fonts on the web
          </Heading>
          <Paragraph className='mt-2'>
            Variable fonts are now a reality for use in mainstream typography,
            especially on the web. While they are often associated with cutting
            edge experimentation, they also offer many practical benefits.
          </Paragraph>
        </div>

        {/* footer */}
        <div className='inline-flex justify-between w-full p-2.5 border-t border-t-zinc-100'>
          {/* interaction icons */}
          <div className='inline-flex items-center gap-x-5'>
            <div className='inline-flex gap-x-1'>
              <RiServiceFill className='w-4 h-4' />
              <Paragraph className='text-xs font-semibold'>128</Paragraph>
            </div>
            <div className='inline-flex gap-x-1'>
              <RiChatSmile2Fill className='w-4 h-4' />
              <Paragraph className='text-xs font-semibold'>4</Paragraph>
            </div>
          </div>
          {/* other icons */}
          <div className='inline-flex items-center gap-x-5'>
            <Button className='text-xs font-semibold px-2 py-0.5 bg-zinc-100 ring-1 ring-zinc-200 rounded-lg'>
              Share
              <RiShareFill />
            </Button>
            <Button className='text-xs font-semibold px-2 py-0.5 bg-zinc-100 ring-1 ring-zinc-200 rounded-lg'>
              Save
              <RiBookmarkFill />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
