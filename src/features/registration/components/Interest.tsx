import { twMerge } from 'tailwind-merge';
import {
  ButtonGroup,
  ButtonItem,
  useButtonGroup,
} from '../../../components/forms/ButtonGroup';
import { FieldGroup } from '../../../components/forms/FieldGroup';
import Label from '../../../components/forms/Label';
import { Message } from '../../../components/forms/Message';
import Button from '../../../components/ui/Button';
import Heading from '../../../components/ui/typo/Heading';
import Navigator from './Navigator';

type OptionType = {
  title: string;
  value: string;
};

const options: OptionType[] = [
  { title: 'football', value: 'football' },
  { title: 'sport', value: 'sport' },
  { title: 'entertainment', value: 'entertainment' },
  { title: 'fashion', value: 'fashion' },
  { title: 'technology', value: 'technology' },
  { title: 'node JS', value: 'node JS' },
  { title: 'javaScript', value: 'javaScript' },
  { title: 'react JS', value: 'react JS' },
  { title: 'vue JS', value: 'vue JS' },
  { title: 'cycling', value: 'cycling' },
  { title: 'food', value: 'food' },
  { title: 'dev ops', value: 'dev ops' },
  { title: 'mobile app', value: 'mobile app' },
  { title: 'flutter', value: 'flutter' },
  { title: 'react native', value: 'react native' },
  { title: 'go', value: 'go' },
  { title: 'meta', value: 'meta' },
  { title: 'google', value: 'google' },
  { title: 'apple', value: 'apple' },
  { title: 'ios', value: 'ios' },
  { title: 'android', value: 'android' },
  { title: 'UI/UX design', value: 'UI/UX design' },
  { title: 'interaction design', value: 'interaction design' },
  { title: 'angular', value: 'angular' },
  { title: 'mongo DB', value: 'mongo DB' },
  { title: 'google cloud', value: 'google cloud' },
  { title: 'firebase', value: 'firebase' },
  { title: 'aws', value: 'aws' },
  { title: 'azure', value: 'azure' },
];

type InterestPropsType = {
  error?: string[] | string;
  switchToComponent: (e: any) => void;
  touched: () => void;
};

const Interest = ({ error, touched, switchToComponent }: InterestPropsType) => {
  const { valueExists, setValue } = useButtonGroup('interest', true);

  const handleNext = () => {
    if (error) {
      touched();
      return;
    }
    switchToComponent('auth');
  };

  return (
    <>
      <Heading className='text-2xl font-bold'>
        Select the post feed you would like to <br />
        follow
      </Heading>

      <FieldGroup>
        <Label name='interest'>Select your interests</Label>
        <ButtonGroup>
          {options.map((option: OptionType, i: number) => (
            <ButtonItem key={i}>
              <Button
                type='button'
                variant='outline'
                size='sm'
                className={twMerge(
                  'capitalize text-zinc-600 font-normal',
                  valueExists(option.value) &&
                    'font-bold text-zinc-900 border-zinc-900'
                )}
                onClick={() => setValue(option.value)}
              >
                {option.title}
              </Button>
            </ButtonItem>
          ))}
        </ButtonGroup>
        <Message name='interest'>Select at least five interest</Message>
      </FieldGroup>

      <Navigator
        prev='Interests'
        next='Authentication'
        onNext={handleNext}
        onPrev={() => switchToComponent('interest')}
      />
    </>
  );
};

export default Interest;
