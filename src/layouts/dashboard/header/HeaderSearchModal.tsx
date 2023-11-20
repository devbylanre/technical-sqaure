import Heading from '../../../components/ui/typo/Heading';
import { Modal } from '../../../components/ui/Modal';
import { Form, Formik } from 'formik';
import { RiCloseLine, RiUser4Line } from 'react-icons/ri';
import Paragraph from '../../../components/ui/typo/Paragraph';

type HeaderSearchModalProps = {
  isVisible: boolean;
};

export const HeaderSearchModal = ({ isVisible }: HeaderSearchModalProps) => {
  return (
    <Modal isVisible={isVisible}>
      <div className='bg-white w-[640px] rounded-lg p-3 flex flex-col gap-y-4'>
        <div className='inline-flex items-center gap-x-2'>
          <HeaderSearchModalField />
          <RiCloseLine className='w-6 h-6 cursor-pointer' />
        </div>
        <HeaderSearchModalCards />
      </div>
    </Modal>
  );
};

const HeaderSearchModalField = () => {
  return (
    <Formik
      initialValues={{ search: '' }}
      onSubmit={() => {}}
    >
      <Form className='flex-1'></Form>
    </Formik>
  );
};

const HeaderSearchModalCards = () => {
  return (
    <div className='flex flex-wrap py-4 border-t border-t-zinc-200'>
      <div className='inline-flex gap-x-3'>
        <RiUser4Line className='w-8 h-8 p-1 rounded-lg border border-zinc-200 shadow-sm' />
        <div className='flex-1'>
          <Heading className='font-bold text-base'>Authors</Heading>
          <Paragraph className='text-sm'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            nostrum architecto cupiditate temporibus inventore voluptas aliquam
            obcaecati dolore voluptatem.
          </Paragraph>
        </div>
      </div>
    </div>
  );
};
