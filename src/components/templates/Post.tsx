import Heading from '../ui/typo/Heading';
import {
  RiHeart3Fill,
  RiBookmarkLine,
  RiAttachment2,
  RiPriceTag3Line,
} from 'react-icons/ri';
import Badge from '../ui/Badge';
import { Avatar, AvatarFallback } from '../ui/Avatar';
import Button from '../ui/Button';

export const Post = () => {
  return (
    <div className='flex flex-col w-full col-span-4 p-3 bg-white border rounded-lg shadow-sm border-zinc-200 gap-y-5'>
      <Heading className='text-base font-bold md:text-lg'>
        Building a SaaS project using MERN stack
      </Heading>

      <div className='inline-flex justify-between w-full'>
        <Badge
          variant='success'
          isVisible
        >
          <RiHeart3Fill className='w-3.5 h-3.5' />
          Programming
        </Badge>

        <Badge
          variant='outline'
          isVisible
        >
          <RiPriceTag3Line className='w-3.5 h-3.5' />
          $150
        </Badge>
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
            <RiBookmarkLine className='w-3.5 h-3.5' />
            <span>5</span>
          </Button>

          <Button
            size='xs'
            type='button'
            variant='outline'
            className='rounded-full'
          >
            <RiAttachment2 className='w-3.5 h-3.5' />
            <span>2</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
