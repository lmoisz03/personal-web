"use client";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";

const AnimatedLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      className="text-blue-500 check-blog-link py-4 flex flex-row items-center hover:underline hover:text-blue-600 underline-offset-2 transition-transform duration-75 ease-in-out transform hover:scale-105"
    >
      <IconArrowLeft className="mr-2" />
      <span>{children}</span>
    </Link>
  );
};

export default AnimatedLink;
