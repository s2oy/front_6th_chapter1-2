type ReactNode = ReactElement | string | number | boolean | null | undefined;
type ReactNodePropsType = Record<string, any> | null;
type ComponentChildren = (ReactElement | ReactNode)[];
type ReactElement = {
  type: keyof HTMLElement;
  props: ReactNodePropsType;
  children: ComponentChildren;
};

export type { ReactNode, ReactNodePropsType, ComponentChildren, ReactElement };
