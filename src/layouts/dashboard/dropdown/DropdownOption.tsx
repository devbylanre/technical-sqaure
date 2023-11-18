import Paragraph from '../../../components/ui/typo/Paragraph';
// import { OptionProps } from './UserDropdown';

export const DropdownOption = ({ option }: any) => {
  return (
    <div className='inline-flex items-center p-2 capitalize hover:bg-zinc-100 rounded-md cursor-pointer gap-x-1.5'>
      {option.icon}
      <Paragraph className='text-sm font-medium'>{option.title}</Paragraph>
    </div>
  );
};
