import { Outlet } from 'react-router-dom';
import Sidebar from '../components/ui/app/Sidebar';

const Dashboard = () => {
  return (
    <div className='grid min-h-screen grid-cols-12 bg-zinc-50'>
      <div className='col-span-full md:col-span-4 lg:col-span-3 xl:col-span-2 h-fit md:h-full bg-white fixed md:static bottom-0 left-0 w-full border-opacity-[92%] md:border-opacity-0 backdrop-blur-md border-t border-t-zinc-200 p-2.5 md:p-3'>
        <Sidebar />
      </div>
      <div className='h-full col-span-full md:col-span-8 lg:col-span-9 xl:col-span-10'>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
