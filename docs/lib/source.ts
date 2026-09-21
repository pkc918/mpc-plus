import { loader, type LoaderPlugin } from "fumadocs-core/source";
import { lucideIconsPlugin } from "fumadocs-core/source/lucide-icons";
import { createElement, type ComponentType } from "react";
import { docsContentRoute, docsRoute } from "./shared";
import { defineDocs } from "fumadocs-mdx/macro";
import { metaSchema, pageSchema } from "fumadocs-core/source/schema";
import { AlipayIcon, DouyinIcon, WeChatIcon, XiaohongshuIcon } from "@/components/platform-icons";

const platformIcons: Record<string, ComponentType<{ className?: string }>> = {
  WeChat: WeChatIcon,
  Douyin: DouyinIcon,
  Alipay: AlipayIcon,
  Xiaohongshu: XiaohongshuIcon,
};

function platformIconsPlugin(): LoaderPlugin {
  function replaceIcon<T extends { icon?: unknown }>(node: T): T {
    if (typeof node.icon === "string" && node.icon in platformIcons) {
      node.icon = createElement(platformIcons[node.icon]);
    }
    return node;
  }

  return {
    name: "platform-icons",
    transformPageTree: {
      file: replaceIcon,
      folder: replaceIcon,
      separator: replaceIcon,
    },
  };
}

const docs = defineDocs({
  dir: "content/docs",
  docs: {
    schema: pageSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
  baseUrl: docsRoute,
  source: docs.toFumadocsSource(),
  plugins: [platformIconsPlugin(), lucideIconsPlugin()],
});

export function getPageMarkdownUrl(page: (typeof source)["$inferPage"]) {
  const segments = [...page.slugs, "content.md"];

  return {
    segments,
    url: "/" + [page.locale, ...docsContentRoute.split("/"), ...segments].filter(Boolean).join("/"),
  };
}

export async function getLLMText(page: (typeof source)["$inferPage"]) {
  const processed = await page.data.getText("processed");

  return `# ${page.data.title} (${page.url})

${processed}`;
}
