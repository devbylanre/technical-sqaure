import Heading from '../../components/ui/typo/Heading';
import Paragraph from '../../components/ui/typo/Paragraph';
import { BadgesWithDismiss, BadgesWithIcon, BasicBadges } from './BadgeTheme';
import DropdownTheme from './DropdownTheme';
import {
  BasicFormTheme,
  HelperFormTheme,
  PrefixFormTheme,
  SuffixFormTheme,
} from './FormTheme';
import LightWrapper from './LightWrapper';

const Theme = () => {
  return (
    <div className='flex flex-col items-center min-h-screen bg-zinc-50'>
      <div className='grid items-start w-full gap-5 p-3 md:p-8 lg:w-4/5 xl:w-3/5 md:grid-cols-2'>
        {/* renders the badges component block */}
        <LightWrapper className='flex flex-col gap-y-5'>
          <div>
            <Heading className='font-semibold'>Badges</Heading>
            <Paragraph className='text-sm'>
              Showcasing our badge UI components with each state color
              specifically selected to showcase a specific state within the
              application processes.
            </Paragraph>
          </div>
          <div>
            <Heading className='mb-2 text-sm font-semibold'>
              Basic badges
            </Heading>
            <BasicBadges />
          </div>

          <div>
            <Heading className='mb-2 text-sm font-semibold'>
              Icon badges
            </Heading>
            <BadgesWithIcon />
          </div>

          <div>
            <Heading className='mb-2 text-sm font-semibold'>
              Icon badges with dismiss icons
            </Heading>
            <BadgesWithDismiss />
          </div>
        </LightWrapper>

        {/* renders the dropdown component */}
        <LightWrapper>
          <DropdownTheme />
        </LightWrapper>

        {/* renders the form component block */}
        <LightWrapper className='grid grid-cols-2 gap-8 gap-y-5 col-span-full'>
          <div>
            <Heading className='font-semibold'>Form fields</Heading>
            <Paragraph className='text-sm'>Hello world</Paragraph>
          </div>

          <div>
            <Heading className='mb-2 text-sm font-semibold'>Basic form</Heading>
            <BasicFormTheme />
          </div>

          <div>
            <Heading className='mb-2 text-sm font-semibold'>
              Form with suffix
            </Heading>
            <SuffixFormTheme />
          </div>

          <div>
            <Heading className='mb-2 text-sm font-semibold'>
              Form with prefix
            </Heading>
            <PrefixFormTheme />
          </div>

          <div>
            <Heading className='mb-2 text-sm font-semibold'>
              Form with helper message
            </Heading>
            <HelperFormTheme />
          </div>
        </LightWrapper>
      </div>
    </div>
  );
};

export default Theme;
