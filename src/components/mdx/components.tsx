import type { MDXComponents } from "mdx/types";
import CodeBlock from "./highlighter";
import { ReactNode } from "react";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

type CodeProps = {
  node: any;
  inline: any;
  className: any;
  children: ReactNode;
  props: any;
};
const headingClasses = [
  "text-4xl font-bold", // h1
  "text-3xl font-bold", // h2
  "text-2xl font-bold", // h3
  "text-xl font-bold", // h4
  "text-lg font-bold", // h5
  "text-base font-bold", // h6
];

const heading = ({
  level,
  children,
}: {
  level: number;
  children: React.ReactNode;
}) => {
  const Tag: any = `h${level}`;
  const className = headingClasses[level - 1];
  return <Tag className={className}>{children}</Tag>;
};
// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    h1: ({ children }) => heading({ level: 1, children }),
    h2: ({ children }) => heading({ level: 2, children }),
    h3: ({ children }) => heading({ level: 3, children }),
    h4: ({ children }) => heading({ level: 4, children }),
    h5: ({ children }) => heading({ level: 5, children }),
    h6: ({ children }) => heading({ level: 6, children }),
    // Allows customizing built-in components, e.g. to add styling.
    p: ({ children }) => (
      <p className="text-base my-4 text-gray-700 dark:text-gray-300">
        {children}
      </p>
    ),
    ul: ({ children }) => <ul className="list-inside list-disc">{children}</ul>,
    ol: ({ children }) => (
      <ol className="list-inside list-decimal">{children}</ol>
    ),
    li: ({ children }) => <li className="list-item list-inside">{children}</li>,
    img: ({ src, alt, height, width }) => (
      <img src={src} alt={alt} className="my-4 mx-auto max-w-full rounded" />
    ),
    // Typescript ignore next line
    // @ts-ignore
    code({ node, inline, className, children, ...props }: CodeProps) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <CodeBlock language={match[1]}>
          {String(children).replace(/\n$/, "")}
        </CodeBlock>
      ) : (
        <span
          className={`rounded-md bg-gray-100 dark:bg-gray-700 px-2 py-1 text-sm   `}
          {...props}
          style={{
            color: "hsl(355, 65%, 65%)",
            textShadow: "var(--code-text-shadow)",
            fontFamily: `"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace;"`,
            // @ts-ignore
            fontSize: "0.9em",
          }}
        >
          {children}
        </span>
      );
    },
    // @ts-ignore
    a({ href, children }: { href: string; children: React.ReactNode }) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {children}
        </a>
      );
    },
    // @ts-ignore - Typescript ignore next line
    hr({ children }: { children: React.ReactNode }) {
      return (
        <div className="border-t border-gray-200 dark:border-gray-600">
          {children}
        </div>
      );
    },

    // @ts-ignore - Typescript ignore next line
    blockquote({ children }: { children: React.ReactNode }) {
      return (
        <blockquote className="border-l-2 border-gray-300 pl-4 dark:border-gray-700">
          {children}
        </blockquote>
      );
    },
    ...components,
  };
}
