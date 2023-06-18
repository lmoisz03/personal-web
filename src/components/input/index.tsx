import { twMerge } from "tailwind-merge";

const FormInput = ({
  id,
  name,
  type,
  className,
  placeholder,
  value,
  ...props
}: {
  id?: string;
  name?: string;
  type?: string;
  className?: string;
  placeholder?: string;
  value?: string;
}) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      className={twMerge(
        "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 outline-none dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light",
        className
      )}
      placeholder={placeholder}
      value={value}
      autoComplete="nono"
      {...props}
    />
  );
};

export default FormInput;
