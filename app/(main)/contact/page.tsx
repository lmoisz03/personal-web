import FormInput from "@/src/components/input";
import FormTextarea from "@/src/components/input/textarea";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Us Page",
  keywords: "contact, us",
};
const ContactUsPage = () => {
  return (
    <section className="flex md:flex-row flex-col bg-gray-100 dark:bg-slate-800  items-center justify-center w-full h-full">
      <div className="p-4  flex-col h-full w-full md:w-1/2 hidden md:flex">
        <img
          className="w-full max-h-[38rem] object-cover rounded"
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Contact Image"
        />
      </div>
      <div className=" flex flex-col h-full w-full md:w-1/2 p-8 gap-2">
        <div className="flex flex-col gap- mb-2">
          <span className="bg-blue-100 w-fit text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
            Contact Us
          </span>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Get in touch with us!
          </h1>
          <p className="text-gray-600 text-base dark:text-gray-200 font-sans">
            Welcome! Let&apos;s Connect! Do you have a project in mind or need
            my help? I&apos;m here to provide tailored solutions for your web
            development needs. Fill out the form below, and I&apos;ll get back
            to you as soon as possible.
          </p>
        </div>
        <form className="space-y-4">
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
      </div>
    </section>
  );
};

export default ContactUsPage;
