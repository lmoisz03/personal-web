import FormInput from "@/src/components/input";
import FormTextarea from "@/src/components/input/textarea";
import ContactForm from "@/src/components/partials/forms/contact";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Us Page",
  keywords: "contact, us",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}contact`,
  },
};

const ContactUsPage = () => {
  return (
    <section className="flex md:flex-row flex-col bg-gray-100 dark:bg-slate-800  items-center justify-center w-full h-full">
      <div className="p-8  flex-col h-full w-full md:w-1/2 hidden md:flex">
        <img
          className="w-full max-h-[38rem] object-cover rounded"
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Contact Image"
        />
      </div>
      <div className=" flex flex-col h-full w-full md:w-1/2 p-8 gap-2">
        <div className="flex flex-col gap-2 mb-2">
          <span className="bg-blue-100 w-fit text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
            Contact Us
          </span>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Get in touch with us!
          </h1>
          <p className="text-gray-600 text-base dark:text-gray-200 font-sans">
            Welcome! Let&apos;s Connect! Do you have a project in mind or need
            my help? I&apos;m here to provide tailored solutions for your web
            development needs. Fill out the form below, and I&apos;ll get back
            to you as soon as possible.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactUsPage;
