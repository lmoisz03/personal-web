import Navbar from "@/src/components/navbar";
import AboutMeCard from "@/src/components/partials/about-me-card";
import NewsletterCard from "@/src/components/partials/newslatter-card";

import "@code-hike/mdx/dist/index.css";
import GoUpButton from "./partials/go-up-button";
import Footer from "@/src/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Lmoisz Blog",
    default: "Blog",
  },
};
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-800">
        <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap gap-2 p-4 md:p-8 lg:p-12">
          <main className="w-full md:w-[70%]  flex-col">{children}</main>
          {/* <main className="flex flex-col lg:max-w-[70%] w-full">{children}</main> */}
          <aside className="md:w-[30%] w-full  flex-col gap-2 sticky top-0 h-full md:pt-16  flex">
            <AboutMeCard />
            <NewsletterCard />
            {/* Ads */}
          </aside>
        </div>
        {/* Go up button  */}
        <div className="fixed bottom-0 right-0 p-4">
          <GoUpButton />
        </div>
      </div>
      <Footer />
    </>
  );
}
