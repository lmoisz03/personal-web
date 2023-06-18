const { remarkCodeHike } = require("@code-hike/mdx");
const theme = require("shiki-themes/data/monokai.json");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    mdxRs: true,
    appDir: true,
  },
};

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,

  options: {
    remarkPlugins: [[remarkCodeHike, { theme }]],
    rehypePlugins: [],
  },
});

module.exports = withMDX(nextConfig);
