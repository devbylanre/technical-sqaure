import { ChildrenType } from './Sidebar';
import Heading from '../../components/ui/typo/Heading';
import Paragraph from '../../components/ui/typo/Paragraph';

//menu item props
type MenuItemsProps = {
  items: ChildrenType[];
  group: string;
};

const MenuItems = (props: MenuItemsProps) => {
  const { items, group } = props;

  return (
    <div className='flex flex-col gap-y-1'>
      <Heading className='text-xs capitalize text-zinc-600'>{group}</Heading>
      {items.map((item) => (
        <div
          key={item.name}
          className='inline-flex items-center p-2 transition-all duration-300 ease-in-out rounded-lg cursor-pointer gap-x-3 hover:bg-zinc-200'
        >
          {item.icon}
          <Paragraph className='text-sm font-medium text-zinc-600'>
            {item.name}
          </Paragraph>
        </div>
      ))}
    </div>
  );
};

export default MenuItems;
