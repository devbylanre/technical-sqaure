import Heading from '../ui/typo/Heading';
import {
  RiChatHistoryLine,
  RiCursorLine,
  RiChat1Line,
  RiHeart3Line,
  RiAttachment2,
} from 'react-icons/ri';
import Badge from '../ui/Badge';
import { Avatar, AvatarFallback } from '../ui/Avatar';
import Button from '../ui/Button';
import Paragraph from '../ui/typo/Paragraph';

export const Post = () => {
  return (
    <div className='flex flex-col w-full col-span-4 p-3 bg-white border rounded-lg shadow-sm border-zinc-200 gap-y-3'>
      <Heading className='font-bold'>
        Building a Saas project using MERN stack
      </Heading>

      <div className='inline-flex justify-between w-full'>
        <Badge isVisible>
          <RiChatHistoryLine className='w-4 h-4' />
          2h 10m
        </Badge>
        <Badge
          variant='success'
          isVisible
        >
          <RiCursorLine className='w-4 h-4' />
          MERN
        </Badge>
      </div>

      <div>
        <Heading className='text-sm font-semibold'>About this course</Heading>
      </div>

      <div className='inline-flex items-center justify-between'>
        <div className='inline-flex items-center gap-x-2'>
          <Avatar
            src='/assets/images/user.png'
            alt='user'
            fallback={<AvatarFallback>MN</AvatarFallback>}
          />
          <Heading className='text-sm font-bold capitalize'>
            Maria Singh
          </Heading>
        </div>

        <div className='inline-flex gap-x-1'>
          <Button
            size='xs'
            type='button'
            variant='outline'
            className='rounded-full'
          >
            <RiChat1Line className='w-4 h-4' />
            <span>12</span>
          </Button>

          <Button
            size='xs'
            type='button'
            variant='outline'
            className='rounded-full'
          >
            <RiHeart3Line className='w-4 h-4' />
            <span>5</span>
          </Button>

          <Button
            size='xs'
            type='button'
            variant='outline'
            className='rounded-full'
          >
            <RiAttachment2 className='w-4 h-4' />
            <span>2</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
