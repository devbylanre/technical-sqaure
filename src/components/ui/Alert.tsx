import { useEffect } from 'react';
import { RiCloseLine } from 'react-icons/ri';
import { twMerge } from 'tailwind-merge';

// define the Alert component props data type
type AlertProps = {
  isVisible: boolean;
  children: React.ReactNode;
  state?: 'success' | 'danger' | 'warning' | 'secondary';
  onDismiss?: (e?: any) => void;
  dismissible?: boolean;
  timeout?: number;
};

const Alert = (props: AlertProps) => {
  const { children, state, timeout, onDismiss, dismissible, isVisible } = props;

  /*
   use effect hook for invoking onDismiss if timeout has a value and isVisible is true
  */
  useEffect(() => {
    // check if timeout has a value and isVisible is true
    if (timeout && isVisible) {
      // stores the setTimeout function
      const timer = setTimeout(() => {
        if (onDismiss) {
          onDismiss(); // invoke the onDismiss callback
        }
      }, timeout);

      //  clears the timeout
      return () => clearTimeout(timer);
    }
  }, [timeout, isVisible, onDismiss]);

  // if isVisible is true then return null
  if (!isVisible) return null;

  return (
    <div
      className={twMerge(
        'inline-flex justify-between p-2 border rounded',
        state === 'success' && 'bg-green-50 border-green-500',
        state === 'danger' && 'bg-red-50 border-red-300',
        state === 'warning' && 'bg-amber-50 border-amber-300',
        state === 'secondary' && 'border-zinc-200 shadow-sm'
      )}
    >
      {/* render the component children */}
      {children}

      {/* renders a close icon if dismissible prop value is true */}
      {dismissible && (
        <RiCloseLine
          className={twMerge(
            'w-5 h-5 rounded-full cursor-pointer transition-all duration-300',
            state === 'success' && 'fill-green-900 hover:bg-green-200',
            state === 'danger' && 'fill-red-900 hover:bg-red-200',
            state === 'warning' && 'fill-amber-900 hover:bg-amber-200',
            state === 'secondary' && 'fill-zinc-900 hover:bg-zinc-200'
          )}
          onClick={onDismiss}
        />
      )}
    </div>
  );
};

export default Alert;
