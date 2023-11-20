import Heading from '../../../components/ui/typo/Heading';

export const Sidebar = () => {
  return (
    <div className='hidden min-h-screen grid-cols-12 col-span-6 lg:col-span-8 bg-zinc-100 md:grid'>
      <div className='self-end col-span-9 p-8 lg:col-span-5'>
        <Heading className='col-span-4 text-3xl font-bold '>
          Connect with digital creatives and build up your community
        </Heading>
      </div>
    </div>
  );
};
