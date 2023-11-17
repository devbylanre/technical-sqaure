import {
  RiHeading,
  RiImageAddFill,
  RiLayout2Fill,
  RiLink,
  RiListIndefinite,
  RiParagraph,
  RiVideoAddFill,
} from 'react-icons/ri';
import Heading from '../../../components/ui/typo/Heading';

const widgets = [
  {
    name: 'Block',
    icon: <RiLayout2Fill />,
  },
  {
    name: 'Heading',
    icon: <RiHeading />,
  },
  {
    name: 'Paragraph',
    icon: <RiParagraph />,
  },
  {
    name: 'Link',
    icon: <RiLink />,
  },
  {
    name: 'List',
    icon: <RiListIndefinite />,
  },
  {
    name: 'Image',
    icon: <RiImageAddFill />,
  },
  {
    name: 'Video',
    icon: <RiVideoAddFill />,
  },
];

const Sidebar = () => {
  return (
    <div className='min-h-screen p-5 bg-gray-100 col-span-full md:col-span-4 xl:col-span-3'>
      <div className='grid grid-cols-3 gap-1'>
        {widgets.map((widget) => (
          <div className='flex flex-col items-center justify-center p-3 transition-all duration-200 bg-white border rounded-lg shadow-sm gap-y-2 border-zinc-200 hover:bg-zinc-50 hover:cursor-grab'>
            {widget.icon}
            <Heading className='text-sm font-bold text-center'>
              {widget.name}
            </Heading>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
