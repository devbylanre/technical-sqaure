import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const ProfileLayout = () => {
  return (
    <div className='flex min-h-screen bg-zinc-50'>
      <Sidebar />
      <div className='hidden w-full min-h-screen bg-white md:block'>
        <div className='p-5'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
