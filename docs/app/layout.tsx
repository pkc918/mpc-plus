import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "MPC Plus",
    template: "%s | MPC Plus",
  },
  description: "统一配置并上传多环境小程序构建产物。",
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="flex h-dvh min-h-0 flex-col overflow-hidden">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
