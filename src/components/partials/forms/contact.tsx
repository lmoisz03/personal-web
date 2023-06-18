"use client";
import FormInput from "../../input";
import FormTextarea from "../../input/textarea";

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
  };
  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row gap-2">
        <div className="w-full">
          <label
            htmlFor="firstName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            First Name:
          </label>
          <FormInput
            type="text"
            id="firstName"
            name="firstName"
            placeholder="John"
          />
        </div>

        <div className="w-full">
          <label
            htmlFor="lastName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Last Name:
          </label>
          <FormInput
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Doe"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Email:
        </label>
        <FormInput
          id="email"
          name="email"
          placeholder="johndoe@example.com"
          type="email"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Phone:
        </label>
        <FormInput
          id="phone"
          name="phone"
          placeholder="(123) 456-7890"
          type="tel"
          // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          // title="Please enter a valid phone number"
          // required
          // minLength={10}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Message:
        </label>

        <FormTextarea
          id="message"
          name="message"
          placeholder="Enter your message here..."
          className="resize-none"
          rows={5}
          cols={50}
          // required
        />
      </div>

      <div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
