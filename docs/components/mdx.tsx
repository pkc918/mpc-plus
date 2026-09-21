import defaultMdxComponents from "fumadocs-ui/mdx";
import { Step, Steps } from "fumadocs-ui/components/steps";
import type { ReactNode } from "react";
import type { MDXComponents } from "mdx/types";

const CANVAS_DRAW_ELEMENT_FLAG = "chrome://flags/#canvas-draw-element";

function ChromeFlagLink({ children }: { children?: ReactNode }) {
  return (
    <a
      href={CANVAS_DRAW_ELEMENT_FLAG}
      className="inline-block break-all font-mono underline underline-offset-4"
    >
      {children ?? CANVAS_DRAW_ELEMENT_FLAG}
    </a>
  );
}

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    Step,
    Steps,
    ChromeFlagLink,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
