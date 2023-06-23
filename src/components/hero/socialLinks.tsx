import { strings } from "@/src/data/strings";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTwitter,
} from "@tabler/icons-react";

const SocialLinksHero = () => {
  const socials = [
    {
      name: "Instagram",
      link: strings.instagram,
      icon: IconBrandInstagram,
    },
    {
      name: "Twitter",
      link: strings.twitter,
      icon: IconBrandTwitter,
    },
    {
      name: "Github",
      link: strings.github,
      icon: IconBrandGithub,
    },
  ];
  return (
    <div className="flex flex-row  gap-1 items-center">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.link}
          className="bg-gray-200 flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-100 dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800 dark:bg-gray-800 text-gray-800 dark:text-gray-300 px-2 py-2 rounded-full text-sm  hover:bg-gray-300 dark:hover:bg-gray-900"
          target="_blank"
          rel="noreferrer"
        >
          <social.icon className="w-5 h-5 " />
          <span className="sr-only">{social.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinksHero;
