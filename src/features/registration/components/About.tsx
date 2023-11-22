import Heading from '../../../components/ui/Heading';
import { FieldGroup } from '../../../components/forms/FieldGroup';
import Input from '../../../components/forms/Input';
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

export const About = () => {
  const { selectValue, valueExists } = useSelect('profession');

  return (
    <>
      <Heading className='sm:text-2xl font-bold'>
        Tell us more about yourself
      </Heading>
      <div className='flex flex-col gap-y-4'>
        <FieldGroup>
          <Label name='profession'>What is your profession</Label>
          <Field name='profession'>
            <Select
              name='profession'
              placeholder='Select your profession'
            >
              <SelectGroup className='p-0.5 gap-y-0.5'>
                {professions.map((profession: string, i: number) => (
                  <SelectItem
                    key={i}
                    className={twMerge(
                      'p-2 hover:bg-zinc-100 first-letter:uppercase text-sm font-normal rounded-lg',
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
        </FieldGroup>
      </div>
    </>
  );
};
