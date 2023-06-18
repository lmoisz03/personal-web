import type { MDXComponents } from "mdx/types";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    h1: ({ children }) => (
      <h1 className="text-2xl font-semibold ">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-lg font-semibold ">{children}</h2>
      // <h2 className="text-lg font-semibold ">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-base font-semibold ">{children}</h3>
      // <h3 className="text-lg font-semibold ">{children}
      // </h3>
    ),
    ...components,
  };
}
