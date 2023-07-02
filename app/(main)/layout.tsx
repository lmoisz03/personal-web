import Navbar from "@/src/components/navbar";
import GoUpButton from "../blog/partials/go-up-button";
import Footer from "@/src/components/footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-800">
        <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap gap-2 ">
          <main className="w-full flex-col">{children}</main>
          {/* <main className="flex flex-col lg:max-w-[70%] w-full">{children}</main> */}
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
