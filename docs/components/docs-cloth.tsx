"use client";

import type { ComponentProps } from "react";
import { useDocsPage } from "fumadocs-ui/layouts/docs/page";
import { Cloth } from "@/components/canvasui/Cloth";
import { cn } from "@/lib/cn";

export function DocsClothArticle({
  className,
  children,
  ...props
}: ComponentProps<"article">) {
  const { full } = useDocsPage();

  return (
    <main className="grid h-full min-h-0 [grid-area:main] justify-items-center self-stretch">
      <Cloth
        className={cn(
          "h-full min-h-0 w-full min-w-0 max-w-[900px]",
          full && "max-w-[1168px]",
        )}
        pin="top"
        wind={3}
        speed={0.5}
        amplitude={30}
        drape={40}
        brush={2.05}
        brushSize={150}
        damping={1}
        light={0.5}
        sheen={0.1}
        shadow={0}
        cornerRadius={0}
        backing="auto"
        perspective={1200}
      >
        <article
          id="nd-page"
          data-layout-content=""
          data-full={full}
          {...props}
          className={cn(
            "flex h-full min-h-0 flex-col gap-4 overflow-auto px-4 py-6 md:px-6 md:pt-8 xl:px-8 xl:pt-14",
            className,
          )}
        >
          {children}
        </article>
      </Cloth>
    </main>
  );
}
