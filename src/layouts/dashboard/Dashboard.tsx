import { Outlet } from 'react-router-dom';
import { Sidebar } from './sidebar/Sidebar';
import Header from './header/Header';

const Dashboard = () => {
  return (
    <div className='flex flex-row min-h-screen'>
      <Sidebar />
      <div className='flex flex-col w-full overflow-clip gap-y-5 md:gap-y-8 bg-zinc-100'>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
