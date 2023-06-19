import { TextareaHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const FormTextarea: React.FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = ({
  className,

  ...props
}: {
  className?: string;
  placeholder?: string;
}) => {
  return (
    <textarea
      className={twMerge(
        "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 outline-none dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light",
        className
      )}
      autoComplete="nono"
      {...props}
    />
  );
};

export default FormTextarea;
