import SocialLinksHero from "./socialLinks";

const HeroBannerHome = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-700 dark:text-gray-200  w-full overflow-hidden flex md:flex-row gap-2 flex-col items-center justify-center px-4 lg:px-12 py-4">
      <div className="max-w-4xl w-full order-2 md:order-1">
        <div className="flex flex-col gap-4">
          <span className="bg-blue-100 w-fit text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
            Transforming Ideas into Web Reality
          </span>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
            Empowering Your Business with Cutting-Edge Web Solutions
          </h1>
          <p className="text-gray-700 dark:text-gray-200 text-base">
            Embark on a transformative journey of exceptional web experiences
            with a passionate front-end web developer. With expertise in a wide
            range of technologies, I craft immersive and user-friendly web
            applications. Constantly pushing the boundaries, I stay at the
            forefront of industry trends to deliver innovative solutions.
            Let&apos;s collaborate to revolutionize your online presence,
            captivating your audience and driving engagement. Together,
            we&apos;ll create something extraordinary that sets your brand apart
            in the digital realm.
          </p>
          <div className="flex flex-row gap-2 items-center">
            <button className="bg-gray-900 hover:bg-gray-950 text-white font-normal py-2 px-4 rounded-lg">
              Contact me
            </button>
            <SocialLinksHero />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 sm:order-1 ">
        {/*eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="w-full h-full object-cover"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/agency-landing-page-dark.jpg"
          alt="agency-landing-page-dark"
        />
      </div>
    </div>
  );
};

export default HeroBannerHome;
