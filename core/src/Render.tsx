import { FC, Fragment, Children, cloneElement, isValidElement } from 'react';
import { useStore, RenderStateProps } from './store';

export type RenderChildren =
  | { children?: (props: Required<RenderStateProps>) => React.ReactNode }
  | { children?: React.ReactNode };

export const Render: FC<RenderChildren> = ({ children }) => {
  const { fields = {}, buttons = {}, blocks = {} } = useStore();
  const childs = typeof children === 'function' ? [children] : Children.toArray(children);
  return (
    <Fragment>
      {typeof children === 'function' && !isValidElement(children) && children({ fields, buttons, blocks })}
      {childs.map((child, key) => {
        if (!isValidElement(child)) return null;
        if (child.type && typeof child.type === 'string') {
          return cloneElement(child, { key });
        }
        return cloneElement(child, {
          ...child.props,
          key,
        });
      })}
    </Fragment>
  );
};

Render.displayName = 'Login.Render';
