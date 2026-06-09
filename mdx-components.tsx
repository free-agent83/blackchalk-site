import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { ComponentPreview } from "@/app/components/component-preview";
import * as Blackchalk from "@/app/mdx/blackchalk-client";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    // Live blackchalk components, usable directly in any .mdx file.
    ...Blackchalk,
    ComponentPreview,
    ...components,
  };
}
