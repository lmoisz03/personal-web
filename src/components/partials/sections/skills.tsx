import {
  IconBrandJavascript,
  IconBrandReact,
  IconBrandPython,
  IconBrandTypescript,
  IconBrandCss3,
  IconBrandTailwind,
  IconBrandNextjs,
  IconBrandPhp,
} from "@tabler/icons-react";
import Image from "next/image";

const technologies = [
  //   {
  //     name: "JavaScript",
  //     color: "#f1e05a",
  //     icon: IconBrandJavascript,
  //     experienceLevel: "Expert",
  //     description:
  //       "Proficient in JavaScript and its modern frameworks and libraries such as React and Vue.js. Experienced in building interactive and dynamic web applications.",
  //   },
  {
    name: "TypeScript",
    color: "text-blue-800 dark:text-blue-400",
    icon: IconBrandTypescript,
    experienceLevel: "Advanced",
    description:
      "Skilled in TypeScript and its usage with frameworks like React and Node.js. Familiar with static typing and building scalable applications.",
  },
  {
    name: "Python",
    color: "text-yellow-400 dark:text-yellow-300",
    icon: IconBrandPython,
    experienceLevel: "Intermediate",
    description:
      "Proficient in Python and its frameworks such as Django and Flask. Experienced in building web applications and automation scripts using Python.",
  },
  {
    name: "React",
    color: "text-blue-700 dark:text-blue-300",
    icon: IconBrandReact,
    experienceLevel: "Advanced",
    description:
      "Skilled in developing web applications using React and its ecosystem. Proficient in state management with Redux and UI styling with CSS-in-JS libraries.",
  },
  {
    name: "PHP",
    color: "text-indigo-700 dark:text-indigo-400",
    icon: IconBrandPhp,
    experienceLevel: "Intermediate",
    description:
      "I have experience with PHP and its frameworks such as Laravel.",
  },

  {
    name: "Tailwind CSS",
    color: "text-teal-400 dark:text-teal-300",
    icon: IconBrandTailwind,
    experienceLevel: "Advanced",
    description:
      "Skilled in using Tailwind CSS for building responsive and modern user interfaces. Familiar with utility-first CSS and rapid development workflows.",
  },
  {
    name: "Next.js",
    color: "text-gray-800 dark:text-gray-300",
    icon: IconBrandNextjs,
    experienceLevel: "Advanced",
    description:
      "Experienced in developing web applications with Next.js, a popular React framework. Proficient in server-side rendering and building optimized production-ready apps.",
  },
  //   {
  //     name: "CSS",
  //     color: "#2965f1",
  //     icon: IconBrandCss3,
  //     experienceLevel: "Expert",
  //     description:
  //       "Proficient in CSS and its various features for styling web applications. Experienced in creating responsive layouts, animations, and custom UI components.",
  //   },
  // Add more technologies here...
];

const experienceLevelStyles = [
  {
    level: "Expert",
    backgroundColor: "bg-blue-100 dark:bg-blue-900",
    textColor: "text-emerald-800 dark:text-blue-300",
  },
  {
    level: "Advanced",
    backgroundColor: "bg-emerald-100  dark:bg-emerald-900 ",
    textColor: "dark:text-emerald-300 text-emerald-800",
  },
  {
    level: "Intermediate",
    backgroundColor: "bg-yellow-100 dark:bg-yellow-900",
    textColor: " text-yellow-800  dark:text-yellow-300",
  },
  {
    level: "Beginner",
    backgroundColor: "bg-gray-100 dark:bg-gray-300",
    textColor: "text-white",
  },
];

const SkillsSection = () => {
  const getExperienceLevelStyles = (experienceLevel: string) => {
    const style = experienceLevelStyles.find(
      (style) => style.level === experienceLevel
    );

    if (style) {
      return `${style.backgroundColor} ${style.textColor}`;
    }

    return "";
  };
  return (
    <section
      id="skills-section"
      className="grid md:grid-cols-2 bg-gray-50 dark:bg-slate-700  gap-6 items-center justify-center w-full px-4 py-14 mx-auto md:py-16 md:px-8 lg:px-12"
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Skills
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          As a developer that has been for 7 years in this industry, I have a
          broad range of skills and acquired extensive experience and expertise
          in a diverse range of cutting-edge technologies. I specialize in the
          following technologies and frameworks.
        </p>
        <div className="md:max-w-4xl w-full md:max-h-4xl h-full my-2">
          <Image
            src="/images/eat-sleep-repeat.jpg"
            alt="blogging-image"
            // layout="responsive"
            width={5848}
            height={3899}
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded"
            // priority
            loading="lazy"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full">
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className="flex flex-col w-full gap-2  justify-center"
          >
            <div className="flex-col flex gap-2">
              <span
                className={`${getExperienceLevelStyles(
                  technology.experienceLevel
                )} text-xs font-medium w-fit mr-2 px-2.5 py-0.5 rounded `}
              >
                {technology.experienceLevel}
              </span>
              <div className="flex w-full items-center flex-row gap-2">
                <technology.icon className={`w-12 h-12 ${technology.color}`} />
                <p className="text-gray-600 dark:text-gray-300">
                  {technology.name}
                </p>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {technology.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
