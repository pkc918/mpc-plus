import { defineConfig } from "fumadocs-mdx/config";

export default defineConfig({
  mdxOptions: {
    remarkNpmOptions: {
      persist: {
        id: "package-manager",
      },
    },
  },
});
