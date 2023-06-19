"use client";
import { useState } from "react";
import FormInput from "../../input";
import FormTextarea from "../../input/textarea";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      setLoading(false);
      return;
    }
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/v1/contact/send", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const { error, message } = await response.json();
        throw new Error(message || error);
      }

      setSuccess(true);
    } catch (error: any) {
      setError(error.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {error && (
        <div
          className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-900 dark:text-red-400"
          role="alert"
        >
          <span className="font-medium">{error}</span>
        </div>
      )}
      {success && (
        <div
          className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-900 dark:text-green-400"
          role="alert"
        >
          <span className="font-medium">
            Thank you for reaching out! We will get back to you soon.
          </span>
        </div>
      )}

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
            name="first_name"
            placeholder="John"
            required
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
            name="last_name"
            placeholder="Doe"
            required
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
          required={true}
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
          placeholder="+123-56565849"
          type="tel"
          //   pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          title="Please enter a valid phone number"
          required
          minLength={10}
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
          required
        />
      </div>

      <div>
        <button
          type="submit"
          className="w-full bg-gray-950 text-white py-2 px-4 rounded-md hover:bg-gray-900 transition-colors duration-300"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
