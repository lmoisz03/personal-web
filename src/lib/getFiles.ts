const fs = require("fs");
const path = require("path");

const getFileBySlug = async (directory: string, slugs: string[]) => {
  try {
    const fileContents = [];

    for (const slug of slugs) {
      const filePath = path.join(
        process.cwd(),
        "/src/data/",
        directory,
        slug + ".mdx"
      );

      if (fs.existsSync(filePath)) {
        const fileData = fs.readFileSync(filePath, "utf-8");
        fileContents.push(fileData);
      } else {
        throw new Error(
          `File ${slug}.mdx not found in ${directory} directory.`
        );
      }
    }

    return fileContents;
  } catch (error) {
    return error;
  }
};

export default getFileBySlug;
