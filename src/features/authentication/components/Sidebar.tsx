import { Avatar, AvatarFallback } from '../../../components/ui/Avatar';
import Paragraph from '../../../components/ui/Paragraph';
import Heading from '../../../components/ui/Heading';
import Logo from '../../../components/ui/Logo';
import Button from '../../../components/ui/Button';
import { RiShareBoxLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const users: { name: string; image: string; profession: string }[] = [
  {
    name: 'Maria Singh',
    image: '6',
    profession: 'Website Designer',
  },
  {
    name: 'Jordan Krul',
    image: '7',
    profession: 'Full Stack Developer',
  },
  {
    name: 'David Trump',
    image: '8',
    profession: 'DevOps Developer',
  },
  {
    name: 'Johnathan Richard',
    image: '9',
    profession: 'Blockchain Developer',
  },
  {
    name: 'King Thong',
    image: '4',
    profession: 'Mobile App Developer',
  },
];

export const Sidebar = () => {
  const user = 'abcdef';
  return (
    <div className='hidden sm:block flex-1'>
      <div className='grid h-full grid-cols-4 grid-rows-4 gap-2'>
        {/* header, user, and paragraph grid */}
        <div className='bg-zinc-100 p-5 col-span-2 row-span-2 hidden lg:flex text-center flex-col gap-y-4 items-center justify-center'>
          <Heading className='font-bold text-4xl xl:text-7xl'>
            Build communities
          </Heading>

          <div className='inline-flex'>
            {Array.from(user).map((_, i) => (
              <Avatar
                className='w-12 h-12 -mx-1'
                src={i <= 4 ? `/assets/images/user${i}.png` : '/assets/'}
                alt={`user${i}`}
              >
                <AvatarFallback className='text-xs'>+256</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <Paragraph className='mt-1 '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            laborum repudiandae hic, enim explicabo ducimus temporibus!
          </Paragraph>
        </div>

        {/* fee or pricing grid */}
        <div className='col-span-2 row-span-1 bg-zinc-100 hidden lg:block'>
          <div className='flex flex-col items-center gap-y-3 text-center justify-center h-full'>
            <Paragraph>Pricing as low as:</Paragraph>
            <Heading className='font-bold text-4xl xl:text-7xl bg-clip-text text-transparent bg-gradient-to-t from-zinc-100 to-zinc-900'>
              Zero $0
            </Heading>
          </div>
        </div>

        {/* logo, brand name and about grid */}
        <div className='p-5 bg-zinc-100 col-span-full lg:col-span-2 row-span-full lg:row-span-3 flex flex-col items-center'>
          <div className='flex flex-col gap-y-8 h-full items-center justify-center text-center md:w-3/5'>
            <div className='bg-white rounded-full p-4'>
              <Logo className='w-8' />
            </div>

            <div>
              <Heading className='font-bold text-6xl'>Square</Heading>
              <Paragraph className='mt-4 font-medium text-sm'>
                By Technical
              </Paragraph>
              <Paragraph className='mt-6 w-full'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                delectus quasi...
              </Paragraph>
            </div>

            <Link to='/signup'>
              <Button
                type='button'
                className='rounded-full px-4'
              >
                <RiShareBoxLine className='w-4 h-4' />
                <span>Get Started</span>
              </Button>
            </Link>
          </div>
        </div>

        <div className='col-span-2 row-span-2 bg-zinc-100 p-5 hidden lg:block'>
          <div className='flex flex-col gap-y-5 h-full justify-between'>
            <div className='flex flex-col gap-y-2 bg-white p-3 shadow-sm rounded-lg shadow-zinc-900/10'>
              {users.map((user, i) => (
                <div
                  key={i}
                  className='inline-flex items-center gap-x-2'
                >
                  <Avatar
                    src={`/assets/images/user${user.image}.png`}
                    alt={`user{i}`}
                  >
                    <AvatarFallback>{user.name[0]}</AvatarFallback>
                  </Avatar>
                  <Heading className='text-sm font-bold capitalize'>
                    {user.name}
                  </Heading>
                  <Paragraph className='text-sm'>{user.profession}</Paragraph>
                </div>
              ))}
            </div>

            <div>
              <Heading className='text-2xl font-bold'>
                Connect with Digital experts
              </Heading>
              <Paragraph>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
