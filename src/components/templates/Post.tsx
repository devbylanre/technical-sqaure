import Button from '../../components/ui/Button';
import Heading from '../../components/ui/typo/Heading';
import Paragraph from '../../components/ui/typo/Paragraph';
import {
  RiMoreLine,
  RiTimer2Line,
  RiThumbUpLine,
  RiLoopRightLine,
  RiChat1Line,
  RiBarChartLine,
} from 'react-icons/ri';

const Post = () => {
  const iconClassName = 'w-4 h-5 fill-zinc-500';

  return (
    <div className='flex flex-col bg-white shadow shadow-zinc-200 col-span-full lg:col-span-4 xl:col-span-4 rounded-xl'>
      {/* post header */}
      <div className='inline-flex items-center justify-between px-3 py-2 border-b'>
        {/* post author image, author name, and post date */}
        <div className='inline-flex items-center gap-x-2'>
          {/* author profile picture */}
          <img
            src='/assets/images/user.png'
            alt='user'
            className='w-8 rounded-full'
          />
          {/* author name */}
          <Heading className='text-sm font-bold'>Maria Singh</Heading>
          {/* post time */}
          <span className='inline-flex items-center gap-x-1'>
            <RiTimer2Line className='w-3 h-3 fill-zinc-500' />
            <Paragraph className='inline-flex items-center text-xs font-medium gap-x-1'>
              5 hours ago
            </Paragraph>
          </span>
        </div>
        {/* options icon */}
        <RiMoreLine className='w-5 h-5 fill-zinc-500' />
      </div>

      {/* post content */}
      <div className='px-3 my-3'>
        {/* post title */}
        <Heading className='text-base font-medium'>
          How to design great UI buttons
        </Heading>
        {/* post excerpt */}
        <Paragraph className='text-sm mt-0.5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          mollitia dolore laborum porro reiciendis inventore blanditiis veniam,
          est natus...
        </Paragraph>
      </div>

      {/* post image */}
      <img
        src='/assets/images/buttons.png'
        alt='post-img'
        className='object-cover border border-zinc-100 w-full h-[240px] rounded mt-2'
      />

      {/* post footer */}
      <div className='inline-flex items-center justify-between px-3 py-2 border-t border-t-zinc-200'>
        <Button
          type='button'
          className='items-center'
        >
          <RiThumbUpLine className={iconClassName} />
          <span className='text-xs font-bold text-zinc-600'>1.2K</span>
        </Button>
        <Button
          type='button'
          className='items-center'
        >
          <RiLoopRightLine className={iconClassName} />
          <span className='text-xs font-bold text-zinc-600'>545</span>
        </Button>
        <Button
          type='button'
          className='items-center'
        >
          <RiChat1Line className={iconClassName} />
          <span className='text-xs font-bold text-zinc-600'>4K</span>
        </Button>
        <Button
          type='button'
          className='items-center'
        >
          <RiBarChartLine className={iconClassName} />
          <span className='text-xs font-bold text-zinc-600'>2.2K</span>
        </Button>
      </div>
    </div>
  );
};

export default Post;
