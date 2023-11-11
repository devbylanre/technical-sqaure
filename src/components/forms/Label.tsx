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
      className='text-sm font-semibold leading-tight text-zinc-600'
    >
      {label}
    </label>
  );
};

export default Label;
