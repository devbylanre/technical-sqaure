import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const Dashboard = () => {
  return (
    <div className='flex flex-row min-h-screen bg-zinc-50'>
      <Sidebar />
      <div className='flex flex-col w-full bg-white overflow-clip gap-y-5 md:gap-y-8'>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
