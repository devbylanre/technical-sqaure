import Heading from '../../components/ui/typo/Heading';
import Logo from '../../components/ui/Logo';
import Menu from './Menu';

const Sidebar = () => {
  return (
    <div className='fixed bottom-0 flex flex-col justify-between w-full p-0 border-r-0 md:border-r border-l-zinc-100 md:w-2/5 lg:w-1/5 md:p-4 gap-y-8 md:static'>
      {/* sidebar header */}
      <div className='hidden md:inline-flex items-end gap-x-1.5'>
        <Logo className='w-3 h-3 mb-[1.5px]' />
        <Heading className='text-xl leading-none'>Square</Heading>
      </div>

      {/* sidebar menu */}
      <Menu />
    </div>
  );
};

export default Sidebar;
