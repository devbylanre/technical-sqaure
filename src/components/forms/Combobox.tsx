import { useField } from 'formik';

export const Combobox = () => {
  return <div></div>;
};

export const useCombobox = (array: any[], name: string) => {
  const [field] = useField(name);

  const combo = array.filter((x: any) =>
    x.toLowerCase().includes(field.value.toLowerCase())
  );
  const addToArray = () => array.push(field.value);

  return { combo, addToArray };
};
