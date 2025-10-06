import { ComponentChildren, ReactElement, ReactNode, ReactNodePropsType } from "../types/react.type";

export function createVNode(
  type: keyof HTMLElement,
  props: ReactNodePropsType,
  ...children: ReactNode[]
): ReactElement {
  return { type, props, children: flattenChildren(children) };
}

function flattenChildren(children: ComponentChildren): ComponentChildren {
  return (
    children
      .flatMap((child) => (Array.isArray(child) ? flattenChildren(child) : child))
      // Conditional Rendering
      .filter((child) => !!child)
  );
}
