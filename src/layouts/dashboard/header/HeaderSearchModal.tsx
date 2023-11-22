import Heading from '../../../components/ui/Heading';
import { Modal } from '../../../components/ui/Modal';
import { Form, Formik } from 'formik';
import {
  RiArchiveDrawerLine,
  RiCloseLine,
  RiParentLine,
  RiSearch2Line,
  RiUserHeartLine,
} from 'react-icons/ri';
import Paragraph from '../../../components/ui/Paragraph';
import { FieldGroup } from '../../../components/forms/FieldGroup';
import Input from '../../../components/forms/Input';
import { Field } from '../../../components/forms/Field';
import Badge from '../../../components/ui/Badge';
import { Avatar, AvatarFallback } from '../../../components/ui/Avatar';
import Button from '../../../components/ui/Button';
import { motion } from 'framer-motion';

type HeaderSearchModalProps = {
  isVisible: boolean;
  onClose: (e: any) => void;
};

export const HeaderSearchModal = ({
  isVisible,
  onClose,
}: HeaderSearchModalProps) => {
  return (
    <Modal isVisible={isVisible}>
      {isVisible && (
        <motion.div
          className='bg-white w-[640px] rounded-lg h-fit flex flex-col'
          animate={{ opacity: [0, 1], y: [-12, 0] }}
          transition={{ duration: 0.4 }}
        >
          <div className='inline-flex items-center gap-x-2 py-2 px-3 border-b border-b-zinc-200'>
            <HeaderSearchModalField />
            <RiCloseLine
              className='w-5 h-5 cursor-pointer'
              onClick={onClose}
            />
          </div>
          <HeaderSearchModalFilter />
          <HeaderSearchModalResult />
        </motion.div>
      )}
    </Modal>
  );
};

const HeaderSearchModalField = () => {
  return (
    <Formik
      initialValues={{ search: '' }}
      onSubmit={() => {}}
    >
      <Form className='flex-1'>
        <FieldGroup>
          <Field
            name='search'
            className='inline-flex items-center pl-2 border-0'
          >
            <RiSearch2Line className='w-4 h-4' />
            <Input
              name='search'
              placeholder='Search for authors, courses, and communities'
            />
          </Field>
        </FieldGroup>
      </Form>
    </Formik>
  );
};

const HeaderSearchModalFilter = () => {
  type FilterProps = {
    title: string;
    icon: React.ReactNode;
  };

  const iconClassName: string = 'w-4 h-4';

  const filters: FilterProps[] = [
    {
      title: 'Authors',
      icon: <RiUserHeartLine className={iconClassName} />,
    },
    {
      title: 'Community',
      icon: <RiParentLine className={iconClassName} />,
    },
    {
      title: 'Courses',
      icon: <RiArchiveDrawerLine className={iconClassName} />,
    },
  ];

  return (
    <div className='flex flex-col p-4 gap-y-2 border-b border-b-zinc-200'>
      <Paragraph className='text-sm'>I'm looking for:</Paragraph>
      <div className='inline-flex gap-x-3'>
        {filters.map((filter: FilterProps, i: number) => (
          <Badge
            key={i}
            variant='outline'
            isVisible
            className='h-7'
          >
            {filter.icon}
            {filter.title}
          </Badge>
        ))}
      </div>
    </div>
  );
};

const HeaderSearchModalResult = () => {
  const array = 'abcdef';

  return (
    <div className='py-4 flex flex-col gap-y-3'>
      <div className='inline-flex justify-between px-4'>
        <Heading className='text-sm inline-flex items-center gap-x-2'>
          <span>Authors</span>
          <Badge
            isVisible
            className='rounded bg-zinc-50'
          >
            8
          </Badge>
        </Heading>

        <Button
          size='xs'
          variant='outline'
        >
          See all
        </Button>
      </div>

      <div className='flex flex-col gap-y-1'>
        {Array.from(array).map((_, i) => (
          <div
            key={i}
            className='inline-flex gap-x-2 items-center hover:bg-zinc-100 cursor-pointer px-4 py-1.5 transition-colors duration-300 ease-in-out'
          >
            <Avatar
              src='/assets/images/user.png'
              alt='author'
              className='w-6 h-6'
            >
              <AvatarFallback>MN</AvatarFallback>
            </Avatar>
            <div className='flex-1 inline-flex gap-x-2 items-center'>
              <Heading className='text-sm font-bold'>Maria Singh</Heading>
              <Paragraph className='text-sm'>Web designer</Paragraph>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
