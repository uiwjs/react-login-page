import { PropsWithChildren, useEffect, createElement, AllHTMLAttributes, memo } from 'react';
import { useStore, BlockTagType, Blocks } from './store';

export interface BlockProps<T extends BlockTagType> extends AllHTMLAttributes<T> {
  keyname?: string;
  /**
   * @deprecated use `keyname`
   */
  name?: string;
  /** Can be shown or hidden with controls */
  visible?: boolean;
  /** "index" refers to the use of indexes to control the order of controls, which can provide more flexible API encapsulation. */
  index?: number;
  /** custom created element */
  tagName?: T;
}

export const Block = memo(<Tag extends BlockTagType = 'div'>(props: PropsWithChildren<Partial<BlockProps<Tag>>>) => {
  const { blocks = {}, dispatch } = useStore();
  const { name, keyname, visible = true, tagName = 'div', ...elmProps } = props;
  useEffect(() => {
    if (name || keyname) {
      const key = (keyname || name) as string;
      const div = visible ? createElement(tagName, { ...elmProps }, elmProps.children) : null;
      delete blocks[key];
      dispatch({
        blocks: { ...blocks, [key]: div as unknown as Blocks<'div'> },
      });
    }
  }, [props]);

  return null;
});

Block.displayName = 'Login.Block';
