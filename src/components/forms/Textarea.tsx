import { HTMLAttributes, useEffect } from 'react';
import { Field, useField } from 'formik';
import { twMerge } from 'tailwind-merge';
import Badge from '../ui/Badge';

// component type props
type TextareaProps = {
  name: string;
  className?: string;
  limit?: number;
} & HTMLAttributes<HTMLTextAreaElement>;

export const Textarea = (props: TextareaProps) => {
  const { name, limit, className, ...rest } = props;
  const [field, meta, helper] = useField(name);

  const onFocus = () => helper.setTouched(true);
  const onBlur = () => helper.setTouched(false);

  const textarea = document.querySelector(`#${name}`) as HTMLTextAreaElement;

  // React use effect hook
  useEffect(() => {
    // check if we textarea variable contains a valid value
    if (textarea) {
      textarea.style.height = 'fit-content'; //style textarea height to fit content

      // check if textarea value length is greater than 0
      if (textarea.value.length > 0) {
        textarea.style.height = textarea.scrollHeight + 'px';
      }

      // check if limit is specified and if limit is less than or equal to textarea value length
      if (limit && limit <= textarea.value.length) {
        textarea.value = textarea.value.slice(0, limit);
      }
    }
  });

  return (
    <div className='p-2 flex flex-col gap-y-2'>
      <Field
        as='textarea'
        name={name}
        id={name}
        rows={1}
        className={twMerge(
          'w-full text-sm font-medium bg-transparent outline-none resize-none placeholder:font-normal placeholder:text-zinc-500 h-fit',
          className
        )}
        onFocus={onFocus}
        onBlur={onBlur}
        {...rest}
      />
      {/* displays the character limit for the textarea field */}
      <TextareaLimit
        value={field.value}
        limit={limit}
        touched={meta.touched}
      />
    </div>
  );
};

type TextareaLimitProps = {
  value: any;
  limit?: number;
  touched: boolean;
};

const TextareaLimit = ({ value, touched, limit }: TextareaLimitProps) => {
  if (!value || !touched) return null;

  return (
    <Badge
      isVisible
      variant={limit && limit <= value.length ? 'danger' : 'outline'}
      className='text-xs font-medium self-end'
    >
      {limit && value
        ? limit > value.length
          ? value.length + '/' + limit
          : value.length >= limit && 'Limit reached'
        : null}
    </Badge>
  );
};
