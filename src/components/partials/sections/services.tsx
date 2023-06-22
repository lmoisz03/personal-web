import { IconBrush, IconResize, IconWebhook } from "@tabler/icons-react";
import React from "react";

const services = [
  {
    icon: (
      <IconWebhook className="w-5 h-5 text-gray-600 lg:w-6 lg:h-6 dark:text-gray-300" />
    ),
    title: "Web Development",
    description:
      "From simple websites to complex web applications, I create responsive and dynamic web solutions that meet your specific requirements.",
  },
  {
    icon: (
      <IconResize className="w-5 h-5 text-gray-600 lg:w-6 lg:h-6 dark:text-gray-300" />
    ),
    title: "Responsive Design",
    description:
      "I believe in creating seamless user experiences across all devices, ensuring your website looks great and functions flawlessly.",
  },
  {
    icon: (
      <IconBrush className="w-5 h-5 text-gray-600 lg:w-6 lg:h-6 dark:text-gray-300" />
    ),
    title: "UI/UX Design",
    description:
      "With a focus on visually appealing and intuitive interfaces, I enhance user satisfaction and drive engagement.",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services-section"
      className="grid md:grid-cols-2 bg-gray-50 dark:bg-slate-800  gap-6 items-center justify-center w-full px-4 py-14 mx-auto md:py-16 md:px-8 lg:px-12"
    >
      <div className="flex flex-col w-full gap-2 order-2 md:order-1">
        <span className="bg-blue-100 w-fit text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
          My services
        </span>
        <h2 className="mb-4 text-4xl font-sans font-bold tracking-tight text-gray-900 dark:text-gray-200">
          Do you want me to bring your ideas to life?
        </h2>
        <p className="mb-8 text-base font-normal text-gray-500 dark:text-gray-300">
          I specialize in crafting immersive web applications that captivate
          audiences and drive engagement. With expertise in front-end
          development and a passion for innovation, I transform ideas into
          exceptional web experiences. Let&apos;s collaborate and revolutionize
          your online presence together, creating something extraordinary.
        </p>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center  w-full">
        <div className="space-y-8 flex flex-col items-center justify-center  w-full">
          {services.map((service, index) => (
            <div key={index}>
              <div className="flex flex-row gap-2 items-center">
                <div className="flex  justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                  {service.icon}
                </div>
                <h3 className="mb-2 text-base font-semibold dark:text-gray-200">
                  {service.title}
                </h3>
              </div>
              <p className="text-sm font-normal text-gray-500 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
