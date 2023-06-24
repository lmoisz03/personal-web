import { IconArrowLeft } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <section className="flex flex-col lg:flex-row bg-gray-50 dark:bg-gray-800 min-h-screen">
        <div className="py-8 px-4 gap-4 self-center mx-auto max-w-screen-xl lg:py-16 lg:px-6 flex flex-col ">
          <span className="bg-red-100 w-fit text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
            404 error
          </span>

          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-50">
            Page Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
            Oops! It seems like the page you are trying to access does not exist
            or may have been moved. Please double-check the URL or navigate back
            to the homepage.
          </p>

          <div className="mt-4 flex gap-4">
            <Link
              href="/"
              className="inline-flex gap-2 items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              aria-label="Go back home"
            >
              <IconArrowLeft className="w-5 h-5" />
              <span>Go back home</span>
            </Link>
          </div>
        </div>
        <div className="relative flex-shrink-0 p-4 w-full lg:w-1/2">
          <Image
            src="/images/pexels-stacey-koenitz-r-2425011.jpg"
            alt="Abstract Image"
            width={1200}
            height={800}
            className="object-cover object-center w-full h-full rounded"
            quality={100}
          />
        </div>
      </section>
    </>
  );
}
