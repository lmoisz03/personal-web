"use client";
import React from "react";
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
    >
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
