import { FC, Fragment, Children, cloneElement, isValidElement } from 'react';
import { useStore, RenderStateProps, InitialState } from './store';

export type RenderChildren =
  | { children?: (props: Required<RenderStateProps>, data: InitialState['data']) => React.ReactNode }
  | { children?: React.ReactNode };

export const Render: FC<RenderChildren> = ({ children }) => {
  const { fields = {}, buttons = {}, extra = {}, $$index = {}, blocks = {}, data } = useStore();
  const childs = typeof children === 'function' ? [] : Children.toArray(children);
  return (
    <Fragment>
      {typeof children === 'function' &&
        !isValidElement(children) &&
        children({ fields, buttons, blocks, extra, $$index }, { ...data })}
      {typeof children !== 'function' &&
        childs.map((child, key) => {
          if (!isValidElement(child)) return null;
          return cloneElement(child, {
            ...child.props,
            key,
          });
        })}
    </Fragment>
  );
};

Render.displayName = 'Login.Render';
