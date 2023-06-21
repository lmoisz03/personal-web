import FormInput from "@/src/components/input";
import FormTextarea from "@/src/components/input/textarea";
import ContactForm from "@/src/components/partials/forms/contact";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About me | Lmoisz",
  description: "About me",
};

const ContactUsPage = () => {
  return (
    <section className="flex md:flex-row flex-col bg-gray-100 dark:bg-slate-800  items-center justify-center w-full h-full">
      Hello world
    </section>
  );
};

export default ContactUsPage;
