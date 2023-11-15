import { RiCloseLine } from 'react-icons/ri';
import { twMerge } from 'tailwind-merge';

// define the props type
type BadgeProps = {
  children: React.ReactNode;
  state?: 'danger' | 'success' | 'warning' | 'secondary';
  onDismiss?: (e: any) => void;
  isVisible: boolean;
  dismissible?: boolean;
};

const Badge = ({
  children,
  state,
  isVisible,
  dismissible,
  onDismiss,
}: BadgeProps) => {
  if (!isVisible) return null; // hide the component if the isVisible property is false

  return (
    <div
      className={twMerge(
        'inline-flex items-center px-2.5 py-1.5 rounded-full w-fit gap-x-1 font-semibold text-xs',
        state === 'success' && 'bg-green-100 text-green-900',
        state === 'danger' && 'bg-red-100 text-red-900',
        state === 'warning' && 'bg-amber-100  text-amber-900',
        state === 'secondary' &&
          'border border-zinc-200  text-zinc-900 shadow-sm'
      )}
    >
      {/* render the children props */}
      {children}

      {/* render the sections if the dismissible prop is true while changing some css class name rules based on the state props */}
      {dismissible && (
        <RiCloseLine
          className={twMerge(
            'rounded-full cursor-pointer transition-all duration-300 w-4 h-4',
            state === 'success' && 'hover:bg-green-200 fill-green-900',
            state === 'warning' && 'hover:bg-amber-200 fill-amber-900',
            state === 'danger' && 'hover:bg-red-200 fill-red-900',
            state === 'secondary' && 'hover:bg-zinc-200 fill-zinc-900'
          )}
          onClick={onDismiss}
        />
      )}
    </div>
  );
};

export default Badge;
