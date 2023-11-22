import Heading from '../ui/Heading';
import {
  RiBookmarkLine,
  RiAttachment2,
  RiPriceTag3Line,
  RiStarLine,
} from 'react-icons/ri';
import Badge from '../ui/Badge';
import { Avatar, AvatarFallback } from '../ui/Avatar';
import Button from '../ui/Button';
import Paragraph from '../ui/Paragraph';

export const PostCard = () => {
  return (
    <div className='flex flex-col w-full col-span-4 px-3 py-2 bg-white border rounded-xl shadow-sm border-zinc-200 gap-y-4'>
      <PostCardHeader />
      <PostCardBody />
      <PostCardFooter />
    </div>
  );
};

const PostCardHeader = () => {
  return (
    <div>
      <div className='inline-flex justify-between w-full mt-2'>
        <Badge
          variant='success'
          isVisible
        >
          <RiStarLine className='w-3.5 h-3.5' />
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
    </div>
  );
};

const PostCardBody = () => {
  return (
    <div className='flex flex-col gap-y-0.5'>
      <PostCardTitle />
      <PostCardDescription />
    </div>
  );
};

const PostCardTitle = () => {
  return (
    <Heading className='text-base font-bold md:text-base'>
      How to get started with Shadcn UI library
    </Heading>
  );
};

const PostCardDescription = () => {
  return (
    <Paragraph className='text-sm'>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, eos
      asperiores error quaerat aperiam iure...
    </Paragraph>
  );
};

const PostCardAuthor = () => {
  return (
    <div className='inline-flex items-center gap-x-2'>
      <Avatar
        className='w-7 h-7'
        src='/assets/images/user.png'
        alt='user'
      >
        <AvatarFallback>MN</AvatarFallback>
      </Avatar>
      <Heading className='text-sm font-bold capitalize'>Maria Singh</Heading>
    </div>
  );
};

const PostCardFooter = () => {
  return (
    <div className='inline-flex justify-between items-center'>
      <PostCardAuthor />

      <div className='inline-flex'>
        <div className='inline-flex gap-x-1 items-center px-2 border-r border-r-zinc-200'>
          <RiBookmarkLine className='w-3.5' />
          <Paragraph className='font-bold text-xs'>12</Paragraph>
        </div>

        <div className='inline-flex gap-x-1 items-center px-2'>
          <RiStarLine className='w-3.5' />
          <Paragraph className='font-bold text-xs'>4+</Paragraph>
        </div>
      </div>
    </div>
  );
};
