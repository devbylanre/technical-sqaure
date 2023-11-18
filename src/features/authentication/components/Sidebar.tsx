import React from 'react';
import Heading from '../../../components/ui/typo/Heading';

export const Sidebar = () => {
  return (
    <div className='grid min-h-screen grid-cols-3 grid-rows-6 bg-white'>
      <div className='col-span-2 row-span-2 bg-zinc-100'></div>
      <div className='col-span-1 row-span-2 bg-zinc-200'></div>
      <div className='col-span-1 row-span-2 bg-zinc-200'></div>
      <div className='self-center col-span-1 row-span-2'>
        <Heading className='text-3xl font-bold'>
          Connect with digital creatives and build up your community
        </Heading>
      </div>
      <div className='col-span-1 row-span-2 bg-zinc-200'></div>
      <div className='col-span-2 row-span-2 bg-zinc-100'></div>
      <div className='col-span-1 row-span-2 bg-zinc-300'></div>
    </div>
  );
};
