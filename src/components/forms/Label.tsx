type LabelProps = {
  children?: React.ReactNode;
  name: string;
};

const Label = (props: LabelProps) => {
  const { children, name } = props;

  if (!children) return null;

  return (
    <label
      htmlFor={name}
      className='text-sm font-semibold leading-tight text-zinc-600'
    >
      {children}
    </label>
  );
};

export default Label;
