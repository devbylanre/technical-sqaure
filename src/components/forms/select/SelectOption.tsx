type SelectOptionProps = {
  option: any;
  handleSelectValue: (e: any) => void;
};

export const SelectOption = (props: SelectOptionProps) => {
  const { option, handleSelectValue } = props;
  return (
    <li
      key={option.title}
      onClick={handleSelectValue}
      className='px-2 py-1.5 rounded-md text-sm font-medium cursor-pointer first-letter:uppercase hover:bg-zinc-100 text-zinc-600'
    >
      {option.title}
    </li>
  );
};
