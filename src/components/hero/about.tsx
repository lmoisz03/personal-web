import { strings } from "@/src/data/strings";
import SocialLinksHero from "./socialLinks";
import Image from "next/image";

const AboutMeHero = () => {
  return (
    <section
      id="about-hero"
      className="bg-gray-100 dark:bg-slate-700 items-center dark:text-gray-200 w-full grid gap-2 md:grid-cols-2 px-4 lg:px-12 py-4"
    >
      <div className="max-w-4xl w-full order-2 md:order-1">
        <div className="flex flex-col gap-4">
          <span className="bg-blue-100 w-fit text-purple-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
            About Me
          </span>
          <h1 className="text-5xl font-bold font-sans text-gray-800 dark:text-gray-100">
            Hello, I&apos;m{" "}
            <span className="text-blue-600 font-bold">Lmoisz</span> a web
            developer and designer.
          </h1>
          <p className="text-gray-700 dark:text-gray-200 text-base">
            {strings.description}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 md:order-1">
        <div className="md:max-w-6xl w-full md:max-h-6xl h-full">
          <Image
            src="/images/web-dev-laptop.jpg"
            alt="blogging-image"
            // layout="responsive"
            width={5848}
            height={3899}
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMeHero;
