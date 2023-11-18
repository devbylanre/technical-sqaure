import Paragraph from '../../../components/ui/typo/Paragraph';
import Heading from '../../../components/ui/typo/Heading';
import { Avatar, AvatarFallback } from '../../../components/ui/Avatar';

export const DropdownDetails = () => {
  return (
    <div className='inline-flex items-center p-3 border-b gap-x-3 border-b-zinc-200'>
      <Avatar
        src='/assets/images/user.png'
        alt='User'
        fallback={<AvatarFallback>MS</AvatarFallback>}
      />
      <div>
        <Heading className='text-sm font-semibold capitalize'>
          maria singh
        </Heading>
        <Paragraph className='text-sm'>hellomariasingh@gmail.com</Paragraph>
      </div>
    </div>
  );
};
