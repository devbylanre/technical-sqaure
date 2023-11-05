import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const Dashboard = () => {
  return (
    <div className='flex flex-row min-h-screen bg-zinc-50'>
      <div className='fixed bottom-0 left-0 w-full h-fit md:min-h-screen md:w-2/5 lg:w-1/5 bg-zinc-100 md:static'>
        <Sidebar />
      </div>
      <div className='flex flex-col w-full gap-y-5 md:gap-y-8'>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
