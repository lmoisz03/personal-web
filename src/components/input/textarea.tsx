import { twMerge } from "tailwind-merge";

const FormTextarea = ({
  id,
  name,
  className,
  placeholder,
  value,
  rows,
  cols,
  ...props
}: {
  id?: string;
  name?: string;
  className?: string;
  placeholder?: string;
  value?: string;
  rows?: number;
  cols?: number;
}) => {
  return (
    <textarea
      id={id}
      name={name}
      className={twMerge(
        "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 outline-none dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light",
        className
      )}
      placeholder={placeholder}
      value={value}
      rows={rows}
      cols={cols}
      autoComplete="nono"
      {...props}
    />
  );
};

export default FormTextarea;
