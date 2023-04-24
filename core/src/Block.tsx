import { PropsWithChildren, useRef, useEffect, createElement, AllHTMLAttributes } from 'react';
import { useStore, BlockTagType, Blocks } from './store';

export interface BlockProps<T extends BlockTagType> extends AllHTMLAttributes<T> {
  name?: string;
  /** Can be shown or hidden with controls */
  visible?: boolean;
  /** "index" refers to the use of indexes to control the order of controls, which can provide more flexible API encapsulation. */
  index?: number;
  /** custom created element */
  tagName?: T;
}

export const Block = <Tag extends BlockTagType = 'div'>(props: PropsWithChildren<Partial<BlockProps<Tag>>>) => {
  const ref = useRef<Partial<BlockProps<Tag>>>();
  const { blocks = {}, dispatch } = useStore();
  useEffect(() => {
    const { name, visible = true, tagName = 'div', ...elmProps } = props;
    if (ref.current !== elmProps && name) {
      ref.current = { ...elmProps };
      const div = visible && elmProps.children ? createElement(tagName, { ...elmProps }, elmProps.children) : null;
      dispatch({
        blocks: { ...blocks, [name]: div as unknown as Blocks<'div'> },
      });
    }
  }, [props, ref]);

  return null;
};

Block.displayName = 'Login.Block';
