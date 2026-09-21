import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { appName, gitConfig } from "./shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <span
            aria-hidden="true"
            className="size-5 rounded-full bg-linear-to-br from-amber-200 via-amber-400 to-orange-500 shadow-sm"
          />
          <span className="font-medium tracking-tight">{appName}</span>
        </>
      ),
    },
    links: [
      { text: "文档", url: "/docs" },
      { text: "安装", url: "/docs/installation" },
      { text: "配置", url: "/docs/configuration" },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
