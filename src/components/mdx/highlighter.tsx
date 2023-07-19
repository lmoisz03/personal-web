"use client";
import React, { useEffect, useRef, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import bwrHighlight from "./bwrHighlight";

const CodeBlock = ({
  language,
  children,
}: {
  language: string;
  children: React.ReactNode;
}) => {
  return (
    <SyntaxHighlighter
      style={bwrHighlight as {}}
      language={language}
      PreTag="div"
      className="overflow-y-auto scrollbar-light dark:scrollbar-dark scrollbar-codeblock"
      data-copy-state={"copy"}
    >
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
