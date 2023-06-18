"use client";
import {
  IconBrandTwitter,
  IconBrandFacebook,
  IconCopy,
} from "@tabler/icons-react";

const ShareButtons = ({
  description,
  url,
}: {
  description: string;
  url: string;
}) => {
  const buttons = [
    {
      name: "Twitter",
      icon: IconBrandTwitter,
      url:
        "https://twitter.com/intent/tweet?text=" + description + "&url=" + url,
      color: "bg-blue-500",
    },
    {
      name: "Facebook",
      icon: IconBrandFacebook,
      url: "https://facebook.com/sharer/sharer.php?u=" + url,
      color: "bg-blue-800",
    },
    {
      name: "Copy Link",
      icon: IconCopy,
      onClick: () => {
        // Handle copy link functionality here
        navigator.clipboard.writeText(url);
      },
      color: "bg-gray-400",
    },
  ];
  const styles = `bg-gray-100 text-gray-700 dark:text-gray-300 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-700`;
  return (
    <div className="flex space-x-4">
      {buttons.map((button) =>
        button.url ? (
          <a
            key={button.name}
            href={button.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center px-4 py-1 rounded-lg  ${styles}`}
          >
            <button.icon className="w-5 h-5 mr-2" />
            <span className="text-xs font-normal">{button.name}</span>
          </a>
        ) : (
          <button
            key={button.name}
            onClick={button.onClick}
            className={`flex items-center justify-center px-4 py-2 rounded-lg  ${styles}`}
          >
            <button.icon className="w-5 h-5 mr-2" />{" "}
            <span className="text-xs font-normal">{button.name}</span>
          </button>
        )
      )}
    </div>
  );
};

export default ShareButtons;
