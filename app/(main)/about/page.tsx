import AboutMeHero from "@/src/components/hero/about";
import ServicesSection from "@/src/components/partials/sections/services";
import SkillsSection from "@/src/components/partials/sections/skills";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About me | Lmoisz",
  description: "About me",
  keywords: [
    "about me",
    "Lmoisz",
    "personal information",
    "contact",
    "resume",
    "cv",
    "experience",
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}about`,
  },
};

const AboutMePage = () => {
  return (
    <div className="flex flex-col bg-gray-100 dark:bg-slate-800  items-center justify-center">
      <AboutMeHero />
      {/* Services section */}
      <ServicesSection />
      <SkillsSection />
    </div>
  );
};

export default AboutMePage;
