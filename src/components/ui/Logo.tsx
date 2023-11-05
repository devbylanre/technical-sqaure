interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <svg
      id='Layer_2'
      data-name='Layer 2'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 86 86'
      className={className}
    >
      <defs></defs>
      <g
        id='Layer_3'
        data-name='Layer 3'
      >
        <polygon points='86 0 86 86 68 86 68 20 51 37.17 51 86 35 86 35 53.74 2.74 86 0 86 0 83.26 32.26 51 0 51 0 35 48.34 35 65.34 18 0 18 0 0 86 0' />
      </g>
    </svg>
  );
};

export default Logo;
