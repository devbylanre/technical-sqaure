type LabelProps = {
  label?: string;
  name: string;
};

const Label = (props: LabelProps) => {
  const { label, name } = props;

  if (!label) return null;

  return (
    <label
      htmlFor={name}
      className='font-medium leading-tight sm:text-sm text-zinc-700'
    >
      {label}
    </label>
  );
};

export default Label;
