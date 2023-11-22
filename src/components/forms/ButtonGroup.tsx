import { useField } from 'formik';
import { twMerge } from 'tailwind-merge';
import { HTMLAttributes } from 'react';

type ButtonGroupProps = {
  children: React.ReactNode;
  className?: string;
} & HTMLAttributes<HTMLUListElement>;

export const ButtonGroup = (props: ButtonGroupProps) => {
  const { children, className, ...rest } = props;

  return (
    <ul
      className={twMerge('flex flex-wrap items-start gap-1', className)}
      {...rest}
    >
      {children}
    </ul>
  );
};

type ButtonItemProps = {
  children: React.ReactNode;
  className?: string;
} & HTMLAttributes<HTMLLIElement>;

export const ButtonItem = (props: ButtonItemProps) => {
  const { children, className, ...rest } = props;

  return (
    <li
      className={className}
      {...rest}
    >
      {children}
    </li>
  );
};

// hook for handling button items
export const useButtonGroup = (name: string, multiple?: boolean) => {
  const [field, , helper] = useField(name);

  const setValue = (value: string | number) => {
    helper.setTouched(true);

    if (multiple) {
      const values = field.value;
      if (Array.isArray(values) && values.includes(value)) {
        const filter = values.filter((v) => v !== value);
        return helper.setValue(filter);
      } else {
        const newValues: string | number[] = [...values, value];
        return helper.setValue(newValues);
      }
    }

    helper.setValue(value);
  };

  const valueExists = (value: string | number) => {
    if (multiple) {
      const existsInArray = field.value.includes(value);
      return existsInArray;
    }

    return field.value === value;
  };

  return { setValue, valueExists };
};
