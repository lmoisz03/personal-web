import { useMDXComponents } from "@/src/components/mdx/components";
import { MDXRemote } from "next-mdx-remote/rsc";

const MdxContent = async ({ content }: { content: string }) => {
  const components = useMDXComponents({});

  return (
    <MDXRemote
      options={{
        mdxOptions: {
          //   remarkPlugains: [remarkCodeHike],
          rehypePlugins: [],
        },
      }}
      source={content.toString()}
      components={{ ...components }}
    />
  );
};

export default MdxContent;
