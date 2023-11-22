import Heading from '../../../components/ui/Heading';
import { FieldGroup } from '../../../components/forms/FieldGroup';
import { Field } from '../../../components/forms/Field';
import Label from '../../../components/forms/Label';
import { Message } from '../../../components/forms/Message';
import {
  Select,
  SelectGroup,
  SelectItem,
  useSelect,
} from '../../../components/forms/Select';
import { twMerge } from 'tailwind-merge';
import { Textarea } from '../../../components/forms/Textarea';
import Paragraph from '../../../components/ui/Paragraph';
import Button from '../../../components/ui/Button';
import Input from '../../../components/forms/Input';
import { RiSearchLine } from 'react-icons/ri';
import { useCombobox } from '../../../components/forms/Combobox';

const professions: string[] = [
  'Software Developer',
  'Data Scientist',
  'Network Engineer',
  'Systems Administrator',
  'DevOps Engineer',
  'Cybersecurity Analyst',
  'Database Administrator',
  'UI/UX Designer',
  'Cloud Architect',
  'Machine Learning Engineer',
  'Full Stack Developer',
  'Mobile App Developer',
  'QA Engineer',
  'IT Consultant',
  'IT Support Specialist',
  'Network Architect',
  'Blockchain Developer',
  'Game Developer',
  'Web Developer',
  'AI Engineer',
];

type AboutProps = {
  switchTo: (e: string) => void;
  touched: (e?: any) => void;
  errors: {
    profession?: string;
    about?: string;
  };
};

export const About = (props: AboutProps) => {
  const { switchTo, touched, errors } = props;
  const { selectValue, valueExists } = useSelect('profession');
  const { combo } = useCombobox(professions, 'addProfession');

  const handleNext = () => {
    if (errors.about || errors.profession) return touched();

    switchTo('community');
  };

  return (
    <>
      <div>
        <Heading className='sm:text-2xl font-bold'>
          Tell us more about yourself
        </Heading>
        <Paragraph className='mt-1'>
          Tell your community what you do and introduce yourself with the about
          me field
        </Paragraph>
      </div>
      <div className='flex flex-col gap-y-4'>
        {/* profession field */}
        <FieldGroup>
          <Label name='profession'>What is your profession</Label>
          <Field name='profession'>
            <Select
              name='profession'
              placeholder='Select your profession'
            >
              <SelectGroup className='p-0.5 gap-y-0.5'>
                <Field
                  name='addProfession'
                  className='flex border-none shadow-none flex-row items-center pl-2'
                >
                  <RiSearchLine className='w-4 h-4 fill-zinc-500' />
                  <Input
                    name='addProfession'
                    placeholder='Search or add new profession'
                  />
                </Field>
                {combo.map((profession: string, i: number) => (
                  <SelectItem
                    key={i}
                    className={twMerge(
                      'px-2 py-1.5 text-zinc-900 hover:bg-zinc-100 first-letter:uppercase text-sm font-normal rounded-md',
                      valueExists(profession) && 'bg-zinc-100 font-bold'
                    )}
                    onSelect={() => selectValue(profession)}
                  >
                    {profession}
                  </SelectItem>
                ))}
              </SelectGroup>
            </Select>
          </Field>
          <Message name='profession' />
        </FieldGroup>

        {/* about me field */}
        <FieldGroup>
          <Label name='about'>Tell us about yourself</Label>
          <Field name='about'>
            <Textarea
              name='about'
              limit={250}
            />
          </Field>
          <Message name='about' />
        </FieldGroup>
      </div>

      <Button
        type='button'
        onClick={handleNext}
      >
        Setup my community
      </Button>
    </>
  );
};
