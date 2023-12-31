import { strings } from "@/src/data/strings";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTwitter,
} from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

const AboutMeCard = () => {
  const name = "Lmoisz";
  const description =
    "I am a passionate web developer with expertise in front-end technologies. I enjoy creating responsive and user-friendly web applications. I'm constantly expanding my skills.";

  const skills = [
    { name: "HTML", link: "https://example.com/html" },
    { name: "CSS", link: "https://example.com/css" },
    { name: "JavaScript", link: "https://example.com/javascript" },
    { name: "React", link: "https://example.com/react" },
    { name: "Node.js", link: "https://example.com/nodejs" },
    { name: "MongoDB", link: "https://example.com/mongodb" },
  ];

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
    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800">
      <div className="flex items-center mb-4">
        <Image
          src={
            "/images/profile/c1kjEcPeNmJB55ob46DVSI6tIL6D2cSag3MmKVv7p9wVe2oqaigWGTDSP0DNsVU4JS.jpg"
          }
          alt="profile"
          width={50}
          height={50}
          className="rounded-full mr-2"
          quality={100}
        />
        <h2 className="text-lg font-medium text-gray-900 dark:text-gray-300">
          {name}
        </h2>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap mb-4">
        {skills.map((skill) => (
          <a
            key={skill.name}
            href={skill.link}
            className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-300 px-2 py-1 rounded-full text-sm mr-2 mb-2 hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            {skill.name}
          </a>
        ))}
      </div>
      <div className="flex flex-wrap">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.link}
            className="bg-gray-200 flex items-center dark:bg-gray-800 text-gray-800 dark:text-gray-300 px-2 py-2 rounded-full text-sm mr-2 mb-2 hover:bg-gray-300 dark:hover:bg-gray-600"
            target="_blank"
            rel="noreferrer"
          >
            <social.icon className="w-5 h-5 " />
            <span className="sr-only">{social.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AboutMeCard;
