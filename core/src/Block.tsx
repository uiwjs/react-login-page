import { PropsWithChildren, useRef, useEffect, createElement } from 'react';
import { useStore, BlockTagType } from './store';

// export type BlockTagType = React.ComponentType | keyof JSX.IntrinsicElements;

export interface BlockProps<Tag extends BlockTagType = 'div'> extends React.ReactElement<Tag> {
  name?: string;
  /** Can be shown or hidden with controls */
  visible?: boolean;
  /** "index" refers to the use of indexes to control the order of controls, which can provide more flexible API encapsulation. */
  index?: number;
  /** custom created element */
  tagName?: Tag;
}

export const Block = <Tag extends BlockTagType = 'div'>(props: PropsWithChildren<Partial<BlockProps<Tag>>>) => {
  const ref = useRef<Partial<BlockProps<Tag>>>();
  const { blocks = {}, dispatch } = useStore();
  useEffect(() => {
    const { name, visible = true, tagName = 'div', ...elmProps } = props;
    if (ref.current !== elmProps && name) {
      ref.current = { ...elmProps };

      const div = (visible ? createElement(tagName, { ...elmProps }, elmProps.children) : null);
      dispatch({
        // blocks: { ...blocks, [name]: div as unknown as React.ReactElement<Tag> },
        // @ts-ignore
        blocks: { ...blocks, [name]: div },
      });
    }
  }, [props, ref]);

  return null;
}

Block.displayName = 'Login.Block';
