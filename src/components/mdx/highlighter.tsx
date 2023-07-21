"use client";
import React, { useEffect, useRef, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import bwrHighlight from "./bwrHighlight";
import { IconCheck, IconCopy, IconDownload } from "@tabler/icons-react";

const CodeBlock = ({
  language,
  children,
}: {
  language: string;
  children: React.ReactNode;
}) => {
  const [copied, setCopied] = useState(false);

  return (
    <div className="flex flex-col">
      <div
        id="code-block-header"
        className="flex flex-row items-center justify-between w-full bg-gray-200 rounded-t-md dark:bg-gray-700 py-1 px-2 "
      >
        {/* Language badge */}
        <div className="text-gray-600 dark:text-gray-200 py-1 text-sm px-2">
          <span className="uppercase font-mono font-medium text-xs">
            {language}
          </span>
        </div>
        <div className="flex flex-row gap-2">
          {/* Copy button */}
          <button
            type="button"
            title="copy to clipboard"
            onClick={(e) => {
              navigator.clipboard.writeText(
                String(children).replace(/\n$/, "")
              );
              setCopied(true);
              setTimeout(() => {
                setCopied(false);
              }, 1000);
            }}
            className={`text-gray-600 transition-all duration-75 ease-in-out dark:text-gray-400 rounded hover:bg-gray-100 hover:dark:bg-gray-800 p-1 text-sm relative`}
          >
            {copied ? (
              <IconCheck className="h-5 w-5" />
            ) : (
              <IconCopy className="h-5 w-5" />
            )}
            <span className="sr-only">Copy to clipboard</span>
          </button>
          {/* Download */}
          <button
            type="button"
            title="download"
            className="text-gray-600 transition-all duration-75 ease-in-out dark:text-gray-400 rounded hover:bg-gray-100 hover:dark:bg-gray-800 p-1 text-sm relative"
            onClick={(e) => {
              const a = document.createElement("a");
              a.href =
                "data:text/plain;charset=utf-8," +
                encodeURIComponent(String(children));
              // Generate random file name
              const fileName = Math.random().toString(36).substring(2, 15);
              a.download = fileName + `.${language}`;

              a.click();
            }}
          >
            <IconDownload className="h-5 w-5" />
            <span className="sr-only">Download</span>
          </button>
        </div>
      </div>
      <SyntaxHighlighter
        style={bwrHighlight as {}}
        language={language}
        PreTag="div"
        className="overflow-y-auto scrollbar-light !mt-0 dark:scrollbar-dark scrollbar-codeblock"
        data-copy-state={"copy"}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
