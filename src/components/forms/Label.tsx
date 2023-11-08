interface LabelProps {
  label?: string;
  name: string;
}

const Label = (props: LabelProps) => {
  const { label, name } = props;

  if (!label) return null;

  return (
    <label
      htmlFor={name}
      className='font-medium leading-tight text-zinc-900'
    >
      {label}
    </label>
  );
};

export default Label;
