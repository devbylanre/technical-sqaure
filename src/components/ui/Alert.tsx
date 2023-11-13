import { RiCloseLine } from 'react-icons/ri';

type AlertProps = {
  children: React.ReactNode;
  state?: 'success' | 'danger' | 'warning' | 'secondary';
  onDismiss?: (e: any) => void;
  dismissible?: boolean;
  isVisible: boolean;
};

const Alert = (props: AlertProps) => {
  const { children, state, onDismiss, dismissible, isVisible } = props;

  if (!isVisible) return null;

  return (
    <div className='inline-flex items-center justify-between p-2 border rounded'>
      {children}
      <RiCloseLine className='w-6 h-6 transition-all duration-300 cursor-pointer fill-amber-600 hover:fill-amber-900' />
    </div>
  );
};

export default Alert;
